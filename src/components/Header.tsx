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
		// Prevent body scroll when mobile menu is open
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
			// Check if scrolled past 100px
			setIsScrolled(window.scrollY > 100)
			
			const sections = navItems.map(item => item.href.substring(1))
			const scrollPosition = window.scrollY + 100
			const windowHeight = window.innerHeight
			const documentHeight = document.documentElement.scrollHeight

			// Check if we're near the bottom of the page (within 200px)
			const isNearBottom = scrollPosition + windowHeight >= documentHeight - 200

			// If near bottom, activate the last section (Contact)
			if (isNearBottom && sections.length > 0) {
				const lastSection = sections[sections.length - 1]
				setActiveSection(`#${lastSection}`)
				return
			}

			// Otherwise, check each section normally
			for (let i = 0; i < sections.length; i++) {
				const section = sections[i]
				const element = document.getElementById(section)
				if (element) {
					const { offsetTop, offsetHeight } = element
					const isLastSection = i === sections.length - 1
					
					if (isLastSection) {
						// For the last section, check if we've reached it
						if (scrollPosition >= offsetTop - 100) {
							setActiveSection(`#${section}`)
							break
						}
					} else {
						// For other sections, use normal logic
						if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
							setActiveSection(`#${section}`)
							break
						}
					}
				}
			}
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll() // Initial check

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
		<header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ease-in-out ${
			isScrolled 
				? 'border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-md dark:shadow-xl' 
				: 'border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur supports-[backdrop-filter]:bg-white/90 dark:supports-[backdrop-filter]:bg-slate-800/90 shadow-sm dark:shadow-lg'
		}`} role="banner">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				<div className="flex items-center gap-3">
					<div className="h-10 w-10 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 grid place-items-center font-semibold transition-colors duration-200 ease-in-out" aria-hidden="true">
						AS
					</div>
					<div className="leading-tight">
						<p className="text-base font-semibold text-slate-900 dark:text-white">Artem Skichko</p>
						<p className="text-sm text-slate-500 dark:text-gray-400">Frontend Developer</p>
					</div>
				</div>

				<div className="flex items-center gap-4">
					<nav className="hidden items-center gap-6 md:flex" role="navigation" aria-label="Main navigation">
						{navItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className={`text-sm font-medium transition-all duration-200 ease-in-out relative group ${
									activeSection === item.href
										? 'text-slate-900 dark:text-white'
										: 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
								}`}
								onClick={(e) => {
									e.preventDefault()
									handleNavClick(item.href)
								}}
								aria-current={activeSection === item.href ? 'page' : undefined}
							>
								{item.label}
								<span className={`absolute -bottom-1 left-0 h-0.5 bg-slate-900 dark:bg-white transition-all duration-200 ease-in-out ${
									activeSection === item.href ? 'right-0' : 'right-full group-hover:right-0'
								}`} aria-hidden="true" />
							</a>
						))}
					</nav>

					{/* Theme Toggle Button */}
					<button
						onClick={toggleTheme}
						className="hidden md:flex items-center justify-center rounded-lg p-2 text-slate-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-slate-700 transform transition-all duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-slate-800"
						aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
					>
						{theme === 'light' ? (
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
							</svg>
						) : (
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
							</svg>
						)}
					</button>

					<button
						className="inline-flex items-center justify-center rounded-md p-2 md:hidden transition-colors hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-slate-800 duration-200 ease-in-out"
						aria-label={isOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={isOpen}
						onClick={() => setIsOpen((v) => !v)}
					>
						<svg
							className="h-6 w-6 text-slate-700 dark:text-gray-300"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							{isOpen ? (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
							) : (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
							)}
						</svg>
					</button>
				</div>
			</div>

			{isOpen && (
				<div className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 md:hidden max-h-[calc(100vh-73px)] overflow-y-auto transition-colors duration-200 ease-in-out shadow-lg" role="navigation" aria-label="Mobile navigation">
					<nav className="mx-auto grid max-w-6xl gap-2 px-6 py-4">
						{navItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className={`rounded-md px-2 py-2 text-base font-medium transition-colors duration-200 ease-in-out ${
									activeSection === item.href
										? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white'
										: 'text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-slate-700'
								}`}
								onClick={(e) => {
									e.preventDefault()
									handleNavClick(item.href)
								}}
								aria-current={activeSection === item.href ? 'page' : undefined}
							>
								{item.label}
							</a>
						))}
						<button
							onClick={() => {
								toggleTheme()
								setIsOpen(false)
							}}
							className="rounded-md px-2 py-2 text-base font-medium text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 ease-in-out flex items-center gap-2"
							aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
						>
							{theme === 'light' ? (
								<>
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
									</svg>
									Dark Mode
								</>
							) : (
								<>
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
									</svg>
									Light Mode
								</>
							)}
						</button>
					</nav>
				</div>
			)}
		</header>
	)
}


