import { useState, useRef, useEffect, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'

interface AnimatedLinkProps {
	href: string
	children: ReactNode
	className?: string
	ariaLabel?: string
	external?: boolean
}

/**
 * AnimatedLink - компонент з інтерактивною анімацією кола
 * 
 * Поведінка:
 * - При наведенні: коло слідує за курсором миші
 * - При кліку: коло розширюється від точки кліку до повного покриття екрану
 * - Після анімації: перехід на нову сторінку
 */
export default function AnimatedLink({
	href,
	children,
	className = '',
	ariaLabel,
	external = false,
}: AnimatedLinkProps) {
	// Стан для управління анімацією кола
	const [isHovered, setIsHovered] = useState(false)
	const [isExpanding, setIsExpanding] = useState(false)
	const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 })
	const [circleScale, setCircleScale] = useState(0)
	const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 })
	const [isDark, setIsDark] = useState(false)

	// Перевірка теми
	useEffect(() => {
		const checkTheme = () => {
			setIsDark(document.documentElement.classList.contains('dark'))
		}
		
		checkTheme()
		
		// Спостерігач за змінами теми
		const observer = new MutationObserver(checkTheme)
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class']
		})

		return () => observer.disconnect()
	}, [])

	// Refs для отримання позиції кнопки
	const buttonRef = useRef<HTMLAnchorElement>(null)
	const circleRef = useRef<HTMLDivElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)

	// Очищення стану після навігації
	useEffect(() => {
		const handleVisibilityChange = () => {
			if (document.visibilityState === 'visible') {
				setIsHovered(false)
				setIsExpanding(false)
				setCircleScale(0)
			}
		}

		document.addEventListener('visibilitychange', handleVisibilityChange)
		
		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange)
		}
	}, [])

	// Відстеження руху миші для слідування кола за курсором
	useEffect(() => {
		if (!isHovered || isExpanding) return

		const handleMouseMove = (e: MouseEvent) => {
			if (!isExpanding) {
				setCirclePosition({ x: e.clientX, y: e.clientY })
			}
		}

		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [isHovered, isExpanding])

	// Обробник наведення миші - показує коло
	const handleMouseEnter = () => {
		if (!isExpanding) {
			setIsHovered(true)
			setCircleScale(1) // Базовий розмір кола (40px)
		}
	}

	// Обробник відведення миші - прибирає коло
	const handleMouseLeave = () => {
		if (!isExpanding) {
			setIsHovered(false)
			setCircleScale(0)
		}
	}

	// Обробник руху миші всередині кнопки - оновлює позицію кола
	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isExpanding && isHovered) {
			setCirclePosition({ x: e.clientX, y: e.clientY })
		}
	}

	// Обробник кліку - запускає анімацію розширення та навігацію
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()

		if (isExpanding) return

		// Зберігаємо координати кліку
		const clickX = e.clientX
		const clickY = e.clientY
		setClickPosition({ x: clickX, y: clickY })
		setCirclePosition({ x: clickX, y: clickY })

		// Запускаємо анімацію розширення
		setIsExpanding(true)
		setIsHovered(true)

		// Розраховуємо максимальний scale для повного покриття viewport
		// Базовий розмір кола: 40px
		// Використовуємо Math.max для гарантії покриття з будь-якої точки кліку
		const maxDimension = Math.max(window.innerWidth, window.innerHeight)
		const baseSize = 40
		// Множник 2.5 для гарантії повного покриття екрану
		const maxScale = (maxDimension / baseSize) * 2.5

		// Запускаємо анімацію розширення
		requestAnimationFrame(() => {
			setCircleScale(maxScale)
		})

		// Виконуємо навігацію після завершення анімації (1200ms - повільніша анімація)
		setTimeout(() => {
			if (external) {
				window.open(href, '_blank', 'noopener,noreferrer')
				setTimeout(() => {
					setIsHovered(false)
					setIsExpanding(false)
					setCircleScale(0)
				}, 100)
			} else {
				window.location.href = href
			}
		}, 1200)
	}

	// Обробник натискання клавіші Enter для доступності
	const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
		if (e.key === 'Enter' && !isExpanding) {
			e.preventDefault()
			// Симулюємо клік для доступності
			if (buttonRef.current) {
				const rect = buttonRef.current.getBoundingClientRect()
				const centerX = rect.left + rect.width / 2
				const centerY = rect.top + rect.height / 2
				setClickPosition({ x: centerX, y: centerY })
				setCirclePosition({ x: centerX, y: centerY })
				setIsExpanding(true)
				setIsHovered(true)

				const maxDimension = Math.max(window.innerWidth, window.innerHeight)
				const baseSize = 40
				const maxScale = (maxDimension / baseSize) * 2.5

				requestAnimationFrame(() => {
					setCircleScale(maxScale)
				})

				setTimeout(() => {
					if (external) {
						window.open(href, '_blank', 'noopener,noreferrer')
					} else {
						window.location.href = href
					}
				}, 1200)
			}
		}
	}

	return (
		<>
			<div
				ref={containerRef}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onMouseMove={handleMouseMove}
				className="inline-block"
			>
				<motion.a
					ref={buttonRef}
					href={href}
					onClick={handleClick}
					onKeyDown={handleKeyDown}
					className={`relative cursor-pointer ${className}`}
					aria-label={ariaLabel}
					style={{ 
						position: 'relative', 
						zIndex: 1,
						pointerEvents: isExpanding ? 'none' : 'auto'
					}}
					whileHover={{ x: 4 }}
					transition={{ duration: 0.2 }}
					tabIndex={0}
				>
					{children}
				</motion.a>
			</div>

			{/* Коло для анімації через React Portal - рендериться в document.body */}
			{(isHovered || isExpanding) && typeof document !== 'undefined' && createPortal(
				<>
					{/* Основний круг для анімації - тільки світле коло без синього фону */}
					<div
						ref={circleRef}
						style={{
							position: 'fixed',
							left: `${circlePosition.x}px`,
							top: `${circlePosition.y}px`,
							width: '40px',
							height: '40px',
							transform: `translate(-50%, -50%) scale(${circleScale})`,
							transformOrigin: 'center center',
							transition: isExpanding
								? 'transform 2.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 2.8s ease-in-out'
								: 'transform 0.2s ease-out, opacity 0.2s ease-out',
							opacity: isExpanding ? 0.3 : 0.6, // При розширенні коло стає більш прозорим
							// Світліший колір - однаковий для hover та розширення
							background: isDark
								? 'rgba(56, 189, 248, 0.4)' // sky-400 з меншою прозорістю
								: 'rgba(59, 130, 246, 0.4)', // blue-500 з меншою прозорістю
							// backdrop-filter для ефекту розмиття
							backdropFilter: 'blur(4px)',
							WebkitBackdropFilter: 'blur(4px)',
							// box-shadow для глибини
							boxShadow: isDark
								? '0 4px 12px rgba(56, 189, 248, 0.3), 0 2px 4px rgba(56, 189, 248, 0.2)'
								: '0 4px 12px rgba(59, 130, 246, 0.3), 0 2px 4px rgba(59, 130, 246, 0.2)',
							borderRadius: '50%',
							pointerEvents: 'none',
							zIndex: 9999,
						}}
						aria-hidden="true"
					/>
				</>,
				document.body
			)}
		</>
	)
}
