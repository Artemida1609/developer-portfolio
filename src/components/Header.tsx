import { useState } from 'react'

const navItems = [
	{ label: 'About', href: '#about' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Contact', href: '#contact' },
]

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				<div className="flex items-center gap-3">
					<div className="h-10 w-10 rounded-full bg-slate-900 text-white grid place-items-center font-semibold">
						AS
					</div>
					<div className="leading-tight">
						<p className="text-base font-semibold text-slate-900">Artem Skichko</p>
						<p className="text-sm text-slate-500">Frontend Developer</p>
					</div>
				</div>

				<nav className="hidden items-center gap-6 md:flex">
					{navItems.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
						>
							{item.label}
						</a>
					))}
				</nav>

				<button
					className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
					aria-label="Toggle menu"
					onClick={() => setIsOpen((v) => !v)}
				>
					<svg
						className="h-6 w-6 text-slate-700"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						{isOpen ? (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
						) : (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
						)}
					</svg>
				</button>
			</div>

			{isOpen && (
				<div className="border-t bg-white md:hidden">
					<nav className="mx-auto grid max-w-6xl gap-2 px-6 py-4">
						{navItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="rounded-md px-2 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
								onClick={() => setIsOpen(false)}
							>
								{item.label}
							</a>
						))}
					</nav>
				</div>
			)}
		</header>
	)
}


