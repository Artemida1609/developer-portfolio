import React from 'react'
import { motion, type Variants } from 'framer-motion'

type Skill = {
	key: string
	name: string
	icon: React.ReactNode
}

const skills: Skill[] = [
	{
		key: 'html',
		name: 'HTML5',
		icon: (
			// Official HTML5 shield logo
			<svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="none">
				<path fill="#E34F26" d="M4 0l1.6 18L12 20l6.4-2L20 0H4z"/>
				<path fill="#EF652A" d="M12 18.6l5.2-1.4 1.4-15.2H12v16.6z"/>
				<path fill="#fff" d="M12 10.6H9.6l-.2-2.2H12V6.2H7.2l.6 6.6H12v-2.2zm0 5.6l-.1.1-2.7-.7-.2-2H6.9l.3 3.4 4.8 1.3h.1v-2.1z"/>
				<path fill="#EBEBEB" d="M12 10.6v2.2h2.2l-.2 2.5-2 .5v2.1l4.8-1.3.1-.3.5-5.7H12zm.3-4.4H12v2.2h4.5l-.2-2.2h-4z"/>
			</svg>
		),
	},
	{
		key: 'css',
		name: 'CSS3',
		icon: (
			// Official CSS3 shield logo
			<svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="none">
				<path fill="#1572B6" d="M4 0l1.6 18L12 20l6.4-2L20 0H4z"/>
				<path fill="#33A9DC" d="M12 18.6l5.2-1.4 1.4-15.2H12v16.6z"/>
				<path fill="#fff" d="M12 10.2H7.6l.2 2H12v-2zm-4.6-4H12V4H7l.4 2.2zm4.6 8.4v-2.1l-.1.1-2.7-.7-.2-1.7H6.9l.4 4.1 4.7 1.3z"/>
				<path fill="#EBEBEB" d="M12 10.2v2h2.1l-.2 2.4-2 .5v2.1l4.8-1.3.4-4.7H12zm.3-4.2v2.2H17l.2-2.2h-4.9z"/>
			</svg>
		),
	},
	{
		key: 'sass',
		name: 'Sass / SCSS',
		icon: (
			// Official Sass logo
			<svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
				<path fill="#CC6699" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.8 7.3c-.1.5-.4 1-.9 1.4c-.7.5-1.5.8-2.3 1c-.1 0-.2.1-.3.1c.1.3.2.6.2.9c.1.7-.1 1.4-.6 1.9c-.4.4-.9.7-1.5.7c-.5 0-1-.2-1.3-.5c-.5-.5-.6-1.2-.4-1.9c.1-.3.2-.6.4-.9c-.7-.2-1.3-.5-1.7-1c-.7-.8-.7-2 0-2.8c.4-.5.9-.8 1.5-1c.5-.2 1.1-.2 1.6-.1c.1-.3.2-.5.4-.7c.5-.6 1.3-.9 2.1-.8c.7.1 1.3.4 1.6 1c.2.5.2 1.1.1 1.6l.1-.1c.3.4.4.8.4 1.2h-.4z"/>
			</svg>
		),
	},
	{
		key: 'js',
		name: 'JavaScript',
		icon: (
			// Official JS logo — yellow square with JS text
			<svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
				<rect width="24" height="24" rx="2" fill="#F7DF1E"/>
				<path fill="#000" d="M6.5 17.5c.3.5.7.9 1.5.9c.7 0 1.1-.3 1.1-.9V12H11v5.6c0 1.6-.9 2.4-2.3 2.4c-1.2 0-1.9-.6-2.3-1.3l1.1-.7zm5 .2c.4.6.9 1.1 1.9 1.1c.8 0 1.4-.4 1.4-1c0-.7-.5-1-1.5-1.4l-.5-.2c-1.4-.6-2.4-1.4-2.4-3c0-1.5 1.2-2.7 3-2.7c1.3 0 2.2.5 2.9 1.6l-1.6 1c-.3-.5-.7-.8-1.3-.8s-.9.4-.9.8c0 .6.4.8 1.4 1.2l.5.2c1.7.7 2.7 1.5 2.7 3.1c0 1.8-1.4 2.8-3.3 2.8c-1.9 0-3-.9-3.6-2.1l1.3-.6z"/>
			</svg>
		),
	},
	{
		key: 'ts',
		name: 'TypeScript',
		icon: (
			// Official TypeScript logo — blue square with TS text
			<svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
				<rect width="24" height="24" rx="2" fill="#3178C6"/>
				<path fill="#fff" d="M5 12.5h3V20H9.5v-7.5H12.5V11H5v1.5zm11.3 6.4c.4.2.9.4 1.5.4c1 0 1.6-.5 1.6-1.2c0-.7-.5-1-1.4-1.5l-.4-.2c-1.3-.6-2-1.4-2-2.6c0-1.4 1.1-2.4 2.7-2.4c.8 0 1.4.2 1.8.4l-.4 1.3c-.4-.2-.9-.4-1.4-.4c-.7 0-1.2.4-1.2.9c0 .6.4.9 1.2 1.3l.4.2c1.4.7 2.1 1.5 2.1 2.8c0 1.6-1.2 2.6-3 2.6c-.8 0-1.5-.2-2-.5l.5-1.1z"/>
			</svg>
		),
	},
	{
		key: 'react',
		name: 'React',
		icon: (
			// Official React logo — atom orbits
			<svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
				<circle cx="12" cy="12" r="2.1" fill="#61DAFB"/>
				<g fill="none" stroke="#61DAFB" strokeWidth="1.1">
					<ellipse cx="12" cy="12" rx="10" ry="3.8"/>
					<ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)"/>
					<ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)"/>
				</g>
			</svg>
		),
	},
	{
		key: 'redux',
		name: 'Redux Toolkit',
		icon: (
			// Official Redux logo — purple orbit shape
			<svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="#764ABC">
				<path d="M15.3 9.5c.3-1.6-.1-2.8-.9-3.7-.9-.9-2.1-1.1-3.2-.8-.2.1-.4.1-.6.2C9.9 4.4 9 3.9 8 3.9c-1.2 0-2.3.7-2.8 1.8-.2.4-.3.9-.3 1.4c0 .2 0 .3.1.5C4.2 8.2 3.5 9.1 3.5 10c0 1 .6 1.9 1.4 2.4c-.1.4-.1.8 0 1.2c.2 1.3 1 2.4 2.2 3c.4.2.9.3 1.4.3c.4 0 .7-.1 1-.2c.5.5 1.2.8 1.9.8c1 0 1.9-.5 2.5-1.3c.2-.3.4-.6.5-1c1.5-.4 2.6-1.8 2.6-3.3c0-.4-.1-.8-.2-1.1c.3-.4.5-.9.5-1.3zm-2.2 4.3c-.2.9-.9 1.6-1.8 1.9l-.6.1l-.1.5c-.1.5-.3.9-.6 1.2c-.3.4-.8.6-1.3.6c-.4 0-.8-.1-1.1-.4l-.4-.4l-.5.2c-.2.1-.5.1-.7.1c-.6 0-1.1-.2-1.5-.5c-.8-.5-1.3-1.4-1.3-2.4c0-.3 0-.6.1-.8l.1-.5l-.4-.3c-.6-.4-.9-1-.9-1.6c0-.5.3-1 .7-1.4l.4-.3l-.2-.5c-.1-.2-.1-.4-.1-.7c0-.4.1-.7.3-1c.3-.6.9-1 1.6-1c.7 0 1.3.3 1.6.8l.3.5l.5-.2c.2-.1.4-.1.6-.2c.7-.2 1.5 0 2 .5c.5.5.8 1.3.6 2.1l-.1.5l.4.3c.3.2.5.5.6.8c.1.3.2.6.2.9c0 .9-.6 1.8-1.5 2.1l-.7.1v.2z"/>
				<path d="M12.7 11c-.3-.3-.7-.4-1.1-.4c-.4 0-.7.1-1 .3c-.5.4-.8 1-.8 1.7s.3 1.3.8 1.7c.3.2.6.3 1 .3c.4 0 .8-.1 1.1-.4c.5-.4.8-1 .8-1.6s-.3-1.2-.8-1.6z"/>
			</svg>
		),
	},
	{
		key: 'tailwind',
		name: 'TailwindCSS',
		icon: (
			// Official Tailwind CSS logo — double wave
			<svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
				<path fill="#06B6D4" d="M12 6c-2.7 0-4.4 1.4-5 4.1c.8-1.1 1.8-1.6 2.9-1.3c.6.2 1.1.7 1.6 1.2c.8.8 1.7 1.8 3.7 1.8c2.7 0 4.4-1.4 5-4.1c-.8 1.1-1.8 1.6-2.9 1.3c-.6-.2-1.1-.7-1.6-1.2C14.9 7 14 6 12 6zm-5 6.1c-2.7 0-4.4 1.4-5 4.1c.8-1.1 1.8-1.6 2.9-1.3c.6.2 1.1.7 1.6 1.2c.8.8 1.7 1.8 3.7 1.8c2.7 0 4.4-1.4 5-4.1c-.8 1.1-1.8 1.6-2.9 1.3c-.6-.2-1.1-.7-1.6-1.2C9.9 13.1 9 12.1 7 12.1z"/>
			</svg>
		),
	},
	{
		key: 'git',
		name: 'Git',
		icon: (
			// Official Git logo — orange diamond
			<svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
				<path fill="#F05032" d="M21.6 11.2L12.8 2.4a1.7 1.7 0 0 0-2.4 0L8.2 4.6l2.3 2.3c.5-.2 1.1-.1 1.5.3c.4.4.5 1 .3 1.5l2.2 2.2c.5-.2 1.1-.1 1.5.3c.6.6.6 1.6 0 2.2c-.6.6-1.6.6-2.2 0c-.4-.5-.5-1-.3-1.5l-2-2v5.2c.4.2.8.6 1 1.1c.2.9-.3 1.8-1.2 2a1.7 1.7 0 0 1-2-1.2c-.2-.9.3-1.8 1.2-2V9.5c-.2-.1-.4-.2-.5-.4c-.6-.6-.6-1.6 0-2.2l-2.3-2.3L2.4 9.8a1.7 1.7 0 0 0 0 2.4l8.8 8.8c.7.7 1.7.7 2.4 0l7.9-7.9a1.7 1.7 0 0 0 .1-2.4z"/>
			</svg>
		),
	},
	{
		key: 'github',
		name: 'GitHub',
		icon: (
			// Official GitHub Octocat logo
			<svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="#fff">
				<path d="M12 2C6.48 2 2 6.48 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3c-.5-1.2-1.1-1.5-1.1-1.5c-.9-.6.1-.6.1-.6c1 .1 1.5 1 1.5 1c.9 1.5 2.3 1.1 2.9.8c.1-.6.3-1.1.6-1.3c-2.2-.3-4.6-1.1-4.6-5c0-1.1.4-2 1-2.7c-.1-.3-.4-1.3.1-2.6c0 0 .8-.3 2.8 1c.8-.2 1.7-.3 2.5-.3c.9 0 1.7.1 2.5.3c2-1.3 2.8-1 2.8-1c.5 1.3.2 2.3.1 2.6c.6.7 1 1.6 1 2.7c0 3.9-2.4 4.7-4.6 5c.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5C19.1 20.2 22 16.4 22 12c0-5.52-4.48-10-10-10z"/>
			</svg>
		),
	},
	{
		key: 'vite',
		name: 'Vite',
		icon: (
			// Official Vite logo — lightning bolt
			<svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
				<path fill="#BD34FE" d="M21 3L13 21l-2.5-8.5L3 10l18-7z"/>
				<path fill="#FF9940" d="M13 21L10.5 12.5 3 10l10 11z"/>
			</svg>
		),
	},
]

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.07 },
	},
}

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

export default function Skills() {
	return (
		<>
			<style>{`
				.skill-card-glow:hover {
					box-shadow: 0 0 0 1px rgba(192,57,43,0.35), 0 8px 32px rgba(192,57,43,0.18), 0 2px 8px rgba(0,0,0,0.5);
				}
				.skill-icon-wrap::after {
					content: '';
					position: absolute;
					inset: 0;
					border-radius: 10px;
					background: radial-gradient(circle at 60% 40%, rgba(192,57,43,0.25), transparent 70%);
					opacity: 0;
					transition: opacity 0.3s ease;
				}
				.skill-card-glow:hover .skill-icon-wrap::after { opacity: 1; }
			`}</style>

			<section id="skills" className="scroll-mt-24 py-16 px-8" aria-labelledby="skills-heading">

				{/* Section header */}
				<div className="mx-auto max-w-6xl">
					<div className="mb-12 flex items-center gap-5">
						<div>
							<p className="text-xs uppercase tracking-[3px] text-red-600 mb-2"
								style={{ fontFamily: "'Rajdhani', sans-serif" }}>
								What I know
							</p>
							<h2
								id="skills-heading"
								className="text-4xl font-bold text-white"
								style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: '1px' }}
							>
								Skills &amp; Technologies
							</h2>
						</div>
						<div className="flex-1 h-px ml-4" style={{ background: 'linear-gradient(90deg, rgba(192,57,43,0.6), transparent)' }} aria-hidden="true" />
					</div>

					{/* Grid */}
					<motion.ul
						className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
						role="list"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: '-60px' }}
					>
						{skills.map((skill) => (
							<motion.li
								key={skill.key}
								role="listitem"
								variants={cardVariants}
								whileHover={{ y: -4 }}
								transition={{ duration: 0.2 }}
								className="skill-card-glow group relative rounded-xl border border-white/5 p-4 flex flex-col items-center gap-3 cursor-default transition-all duration-300"
								style={{ background: 'rgba(255,255,255,0.03)' }}
							>
								{/* Top accent line */}
								<div
									className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									style={{ background: 'linear-gradient(90deg, transparent, rgba(192,57,43,0.7), transparent)' }}
									aria-hidden="true"
								/>

								{/* Icon */}
								<div
									className="skill-icon-wrap relative w-12 h-12 rounded-[10px] grid place-items-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
									style={{ background: 'rgba(255,255,255,0.06)' }}
								>
									{skill.icon}
								</div>

								{/* Name */}
								<p
									className="text-xs font-semibold text-white/60 group-hover:text-white/90 text-center leading-tight transition-colors duration-200"
									style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.5px' }}
								>
									{skill.name}
								</p>
							</motion.li>
						))}
					</motion.ul>
				</div>
			</section>
		</>
	)
}