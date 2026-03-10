import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false)
	const [scrollProgress, setScrollProgress] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY
			const docHeight = document.documentElement.scrollHeight - window.innerHeight
			const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

			setIsVisible(scrollTop > 300)
			setScrollProgress(progress)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	// SVG circle progress params
	const size = 48
	const strokeWidth = 2
	const radius = (size - strokeWidth * 2) / 2
	const circumference = radius * 2 * Math.PI
	const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					initial={{ opacity: 0, scale: 0.5, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.5, y: 20 }}
					transition={{ duration: 0.3, ease: 'easeOut' }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={scrollToTop}
					className="fixed bottom-8 right-8 z-50 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 focus:ring-offset-black rounded-full cursor-pointer"
					style={{
						width: size,
						height: size,
						background: 'rgba(5,0,0,0.85)',
						backdropFilter: 'blur(12px)',
						WebkitBackdropFilter: 'blur(12px)',
						border: '1px solid rgba(192,57,43,0.3)',
						boxShadow: '0 0 20px rgba(192,57,43,0.25), 0 4px 16px rgba(0,0,0,0.5)',
					}}
					onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 32px rgba(192,57,43,0.55), 0 4px 20px rgba(0,0,0,0.6)')}
					onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 20px rgba(192,57,43,0.25), 0 4px 16px rgba(0,0,0,0.5)')}
					aria-label="Scroll to top"
				>
					{/* Circular progress ring */}
					<svg
						width={size}
						height={size}
						className="absolute inset-0 -rotate-90"
						aria-hidden="true"
					>
						{/* Track */}
						<circle
							cx={size / 2}
							cy={size / 2}
							r={radius}
							fill="none"
							stroke="rgba(192,57,43,0.15)"
							strokeWidth={strokeWidth}
						/>
						{/* Progress */}
						<circle
							cx={size / 2}
							cy={size / 2}
							r={radius}
							fill="none"
							stroke="rgba(192,57,43,0.85)"
							strokeWidth={strokeWidth}
							strokeLinecap="round"
							strokeDasharray={circumference}
							strokeDashoffset={strokeDashoffset}
							style={{ transition: 'stroke-dashoffset 0.1s ease', filter: 'drop-shadow(0 0 4px rgba(192,57,43,0.8))' }}
						/>
					</svg>

					{/* Arrow icon */}
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="rgba(255,255,255,0.85)"
						strokeWidth="2.2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="relative z-10"
						aria-hidden="true"
					>
						<path d="M12 19V5M5 12l7-7 7 7" />
					</svg>
				</motion.button>
			)}
		</AnimatePresence>
	)
}