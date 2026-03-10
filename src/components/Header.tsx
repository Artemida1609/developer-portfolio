import { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const navItems = [
	{ label: 'About', href: '#about' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Contact', href: '#contact' },
]

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)
	const [activeSection, setActiveSection] = useState('')
	const [isScrolled, setIsScrolled] = useState(false)
	const { theme, toggleTheme } = useTheme()

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 60)

			const sections = navItems.map(item => item.href.substring(1))
			const scrollPosition = window.scrollY + 100
			const windowHeight = window.innerHeight
			const documentHeight = document.documentElement.scrollHeight
			const isNearBottom = scrollPosition + windowHeight >= documentHeight - 200

			if (isNearBottom && sections.length > 0) {
				setActiveSection(`#${sections[sections.length - 1]}`)
				return
			}

			for (let i = 0; i < sections.length; i++) {
				const section = sections[i]
				const element = document.getElementById(section)
				if (element) {
					const { offsetTop, offsetHeight } = element
					const isLastSection = i === sections.length - 1
					if (isLastSection) {
						if (scrollPosition >= offsetTop - 100) {
							setActiveSection(`#${section}`)
							break
						}
					} else {
						if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
							setActiveSection(`#${section}`)
							break
						}
					}
				}
			}
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll()
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const handleNavClick = (href: string) => {
		setIsOpen(false)
		const element = document.querySelector(href)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}

	return (
		<>
			<style>{`
				@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&display=swap');

				.nav-link-animated { position: relative; }
				.nav-link-animated::before {
					content: '';
					position: absolute;
					bottom: -2px;
					left: 0;
					right: 100%;
					height: 1.5px;
					background: linear-gradient(90deg, #c0392b, #ff6b6b);
					box-shadow: 0 0 8px rgba(192,57,43,0.8);
					transition: right 0.3s cubic-bezier(0.4,0,0.2,1);
				}
				.nav-link-animated:hover::before,
				.nav-link-animated.is-active::before { right: 0; }

				.avatar-glow-ring { position: relative; }
				.avatar-glow-ring::after {
					content: '';
					position: absolute;
					inset: -2px;
					border-radius: 50%;
					background: conic-gradient(from 0deg, #c0392b, #ff6b6b, #7b0d0d, #c0392b);
					z-index: -1;
					opacity: 0.7;
					animation: avatarSpin 6s linear infinite;
				}
				@keyframes avatarSpin { to { transform: rotate(360deg); } }

				@keyframes slideDown {
					from { opacity: 0; transform: translateY(-8px); }
					to   { opacity: 1; transform: translateY(0); }
				}
				.animate-slide-down { animation: slideDown 0.25s ease forwards; }
			`}</style>

			{/* ── HEADER ── */}
			<header
				role="banner"
				className={`sticky top-0 z-50 transition-all duration-300 ease-in-out border-b
					${isScrolled
						? 'border-red-900/20 backdrop-blur-xl'
						: 'border-transparent bg-transparent'
					}`}
				style={isScrolled ? { background: 'rgba(5,0,0,0.85)' } : undefined}
			>
				<div className="mx-auto flex max-w-6xl items-center justify-between px-8 h-[72px]">

					{/* ── Logo ── */}
					<a
						href="#about"
						className="flex items-center gap-3.5 no-underline group"
						onClick={e => { e.preventDefault(); handleNavClick('#about') }}
					>
						<div
							className="avatar-glow-ring relative w-11 h-11 rounded-full grid place-items-center flex-shrink-0 text-white text-sm font-bold tracking-widest transition-all duration-300"
							style={{
								fontFamily: "'Rajdhani', sans-serif",
								background: 'radial-gradient(circle at 40% 40%, #c0392b, #7b0d0d)',
								boxShadow: '0 0 14px rgba(200,30,30,0.55), 0 0 36px rgba(180,20,20,0.2)',
							}}
							aria-hidden="true"
						>
							AS
						</div>

						<div className="leading-tight">
							<p
								className="font-bold text-white tracking-wide"
								style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '17px' }}
							>
								Artem Skichko
							</p>
							<p className="text-[11px] font-light uppercase text-red-600" style={{ letterSpacing: '2px', marginTop: '1px' }}>
								Frontend Developer
							</p>
						</div>
					</a>

					{/* ── Desktop nav + controls ── */}
					<div className="flex items-center gap-8">

						{/* Nav links */}
						<nav className="hidden md:flex items-center gap-9" role="navigation" aria-label="Main navigation">
							{navItems.map(item => (
								<a
									key={item.href}
									href={item.href}
									className={`nav-link-animated font-semibold text-[15px] uppercase py-1 no-underline transition-colors duration-200
										${activeSection === item.href ? 'text-red-500 is-active' : 'text-white/50 hover:text-white'}`}
									style={{
										fontFamily: "'Rajdhani', sans-serif",
										letterSpacing: '1.5px',
										...(activeSection === item.href ? { textShadow: '0 0 12px rgba(231,76,60,0.6)' } : {}),
									}}
									onClick={e => { e.preventDefault(); handleNavClick(item.href) }}
									aria-current={activeSection === item.href ? 'page' : undefined}
								>
									{item.label}
								</a>
							))}
						</nav>

						{/* Hamburger — mobile */}
						<button
							className="md:hidden flex items-center justify-center rounded-lg p-[7px] text-white/70 border border-red-700/35 bg-transparent transition-all duration-200 hover:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 focus:ring-offset-black"
							onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 14px rgba(192,57,43,0.25)')}
							onMouseLeave={e => (e.currentTarget.style.boxShadow = '')}
							aria-label={isOpen ? 'Close menu' : 'Open menu'}
							aria-expanded={isOpen}
							onClick={() => setIsOpen(v => !v)}
						>
							<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
								{isOpen
									? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18L18 6M6 6l12 12" />
									: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6h16M4 12h16M4 18h16" />
								}
							</svg>
						</button>
					</div>
				</div>
			</header>

			{/* ── Mobile menu ── */}
			{isOpen && (
				<div
					className="animate-slide-down md:hidden overflow-hidden border-t border-red-900/20"
					style={{ background: 'rgba(5,0,0,0.97)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
					role="navigation"
					aria-label="Mobile navigation"
				>
					<nav className="mx-auto max-w-6xl flex flex-col gap-1 px-8 py-5">
						{navItems.map(item => (
							<a
								key={item.href}
								href={item.href}
								className={`font-semibold text-base uppercase no-underline rounded-md border-l-2 transition-all duration-200 px-3.5 py-2.5
									${activeSection === item.href
										? 'text-red-500 border-red-600 bg-red-900/10 pl-[18px]'
										: 'text-white/50 border-transparent hover:text-white hover:border-red-600 hover:pl-[18px]'
									}`}
								style={{
									fontFamily: "'Rajdhani', sans-serif",
									letterSpacing: '2px',
									...(activeSection === item.href ? { textShadow: '0 0 10px rgba(231,76,60,0.4)' } : {}),
								}}
								onClick={e => { e.preventDefault(); handleNavClick(item.href) }}
								aria-current={activeSection === item.href ? 'page' : undefined}
							>
								{item.label}
							</a>
						))}
					</nav>
				</div>
			)}
		</>
	)
}