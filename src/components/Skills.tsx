import React from 'react'
import { motion } from 'framer-motion'
import ScrollAnimation from './ScrollAnimation'

type Skill = {
	key: string
	name: string
	icon: React.ReactNode
}

const IconBase = ({ children }: { children: React.ReactNode }) => (
	<motion.div 
		className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 text-white dark:text-slate-900 shadow-inner transition-transform duration-300 group-hover:scale-110"
		whileHover={{ 
			scale: 1.15,
			rotate: [0, -10, 10, -10, 0],
			transition: { duration: 0.5 }
		}}
	>
		{children}
	</motion.div>
)

const icons = {
	html: (
		<svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
			<path fill="currentColor" d="M3 2l1.7 19.4L12 22l7.3-2.6L21 2H3zm14.4 6.2l-.2 2.2-4.8 2.1l-.1.1h4.6l-.4 4.3L12 18.1l-4.4-1.3l-.2-2.4h2.2l.1 1.2l2.3.6l2.3-.6l.2-2.3H7.3L7 11l-.1-1.3h8.3l.2-1.5H6.7L6.5 6h11.1l-.2 2.2z" />
		</svg>
	),
	css: (
		<svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
			<path fill="currentColor" d="M3 2l1.7 19.4L12 22l7.3-2.6L21 2H3zm14.2 5.9H9.3l.2 1.6h7.5l-.4 4.6l-4.6 1.6l-4.6-1.6l-.2-2.2H9l.1.9l2.9 1l2.9-1l.2-2.4H7.1L6.6 6h10.9l-.3 1.9z" />
		</svg>
	),
	js: (
		<svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
			<path fill="currentColor" d="M2 2h20v20H2z" />
			<path fill="#F7DF1E" d="M3 3h18v18H3z" />
			<path fill="#000" d="M13.6 16.9c0 1.8-1 2.6-2.6 2.6c-1.2 0-1.9-.3-2.4-1l1.3-.8c.2.3.5.5 1 .5c.5 0 .8-.3.8-.8v-4.4h1.9v3.9zm2.1 2.6c-.9 0-1.8-.2-2.4-.7l.9-1.3c.4.3.9.6 1.6.6c.7 0 1.1-.3 1.1-.8s-.4-.8-1.2-1.1l-.4-.2c-1.2-.5-2.1-1.2-2.1-2.6c0-1.3 1-2.3 2.6-2.3c.9 0 1.6.2 2.2.6l-.9 1.3c-.4-.3-.8-.5-1.3-.5c-.7 0-1 .3-1 .8s.4.8 1.3 1.1l.4.2c1.4.6 2.2 1.3 2.2 2.7c0 1.6-1.2 2.2-2.9 2.2z" />
		</svg>
	),
	ts: (
		<svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
			<rect width="24" height="24" rx="2" fill="#3178C6" />
			<path fill="#fff" d="M10.8 7.5H5.5v2h1.8v7h2.2v-7h1.8v-2zm6.6 9.2c-.5.2-1 .3-1.6.3c-1 0-1.8-.3-2.3-.8c-.5-.6-.8-1.2-.8-2.1h2c0 .5.1.9.4 1.2c.2.3.6.4 1 .4c.5 0 .8-.1 1.1-.4c.3-.2.4-.6.4-.9c0-.4-.1-.7-.4-.9c-.2-.2-.6-.4-1.1-.6l-.5-.2c-.8-.3-1.4-.7-1.8-1.1c-.4-.5-.6-1-.6-1.8c0-.9.3-1.6.9-2.2c.6-.6 1.4-.9 2.4-.9c.9 0 1.6.2 2.1.6l-.6 1.5c-.4-.3-.9-.5-1.5-.5c-.4 0-.8.1-1 .3c-.2.2-.4.5-.4.8s.1.6.4.8c.2.2.6.4 1.2.6l.5.2c.8.3 1.4.7 1.7 1.2c.4.5.6 1.1.6 1.9c0 1.1-.3 1.9-.9 2.5c-.5.5-1.1.9-1.8 1.1z" />
		</svg>
	),
	react: (
		<svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
			<circle cx="12" cy="12" r="2" fill="currentColor" />
			<g fill="none" stroke="currentColor" strokeWidth="1.5">
				<ellipse cx="12" cy="12" rx="10" ry="4.5" />
				<ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
				<ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
			</g>
		</svg>
	),
	redux: (
		<svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
			<path fill="currentColor" d="M16.6 15.1c.3-.2.5-.6.5-1c0-.7-.6-1.3-1.3-1.3c-.5 0-1 .3-1.2.8c-1.1-.2-2.2-.2-3.3 0c-.5-.8-1.2-1.4-2.1-1.8c.2-.5.2-1.1 0-1.6c-.4-1.2-1.7-1.9-2.9-1.6c-1.3.3-2.1 1.6-1.8 2.9c.3 1.3 1.6 2.1 2.9 1.8c.4-.1.8-.3 1.1-.5c.6.2 1.1.6 1.4 1.1c-1.3.5-2.4 1.3-3.2 2.4C3.9 17 3.6 18 3.8 19c.2 1.1 1 2 2.1 2.4c1.3.4 2.7 0 3.6-1c1-.1 2-.4 2.9-.9c.7.4 1.5.6 2.3.6c2.3 0 4.1-1.9 4.1-4.1c0-.3 0-.6-.1-.9c-.6.1-1.2 0-1.8-.3zm-9.6 4.7c-.5.2-1 .2-1.5 0c-.7-.3-1.2-.9-1.3-1.7c-.1-.7.1-1.4.6-1.9c.7-.9 1.8-1.5 2.9-1.9c.4.8.9 1.6 1.6 2.3c-.8.9-1.5 2-2.3 3.2zm6.8-2.1c-.6 0-1.1-.1-1.6-.4c.7-.5 1.4-1.1 1.9-1.8c.3-.5.5-1 .6-1.6c.6 0 1.1.2 1.5.6c.7.5 1.1 1.3 1.1 2.2c0 1.3-1 2.4-2.4 2.4zm-9-8.9c-.7.2-1.4-.3-1.6-1c-.2-.7.3-1.4 1-1.6c.7-.2 1.4.3 1.6 1c.2.7-.3 1.4-1 1.6z" />
		</svg>
	),
	git: (
		<svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
			<path fill="currentColor" d="M21.6 11.2L12.8 2.4a1.7 1.7 0 0 0-2.4 0L8.2 4.6l2.3 2.3c.5-.2 1-.1 1.4.3c.4.4.5.9.3 1.4l2.2 2.2c.5-.2 1-.1 1.4.3c.6.6.6 1.6 0 2.2s-1.6.6-2.2 0c-.4-.4-.5-.9-.3-1.4l-2-2l-.1 5.2c.5.2.9.6 1 1.2c.2.9-.3 1.7-1.2 1.9a1.7 1.7 0 0 1-2-1.2c-.2-.9.3-1.7 1.2-1.9l.1-5.2c-.2-.1-.3-.2-.5-.4c-.6-.6-.6-1.6 0-2.2c.1-.1.3-.2.4-.3L7 5l-4.6 4.6a1.7 1.7 0 0 0 0 2.4l8.8 8.8c.7.7 1.7.7 2.4 0l7.9-7.9c.7-.7.7-1.7.1-2.4z" />
		</svg>
	),
	pg: (
		<svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
			<path fill="currentColor" d="M12 3c-4.4 0-8 2.7-8 6s3.6 6 8 6s8-2.7 8-6s-3.6-6-8-6zm-1.5 9l-2.2-2.2l1.1-1.1l1.1 1.1l3.3-3.3l1.1 1.1L10.5 12z" />
			<path fill="currentColor" d="M4 15.5C4 17.4 7.6 19 12 19s8-1.6 8-3.5V14c-1.6 1.4-4.6 2.3-8 2.3S5.6 15.4 4 14v1.5z" />
		</svg>
	),
}

const skills: Skill[] = [
	{ key: 'html', name: 'HTML5', icon: icons.html },
	{ key: 'css', name: 'CSS3', icon: icons.css },
	{ key: 'js', name: 'JavaScript', icon: icons.js },
	{ key: 'ts', name: 'TypeScript', icon: icons.ts },
	{ key: 'react', name: 'React', icon: icons.react },
	{ key: 'redux', name: 'Redux Toolkit', icon: icons.redux },
	{ key: 'git', name: 'Git', icon: icons.git },
	{ key: 'pg', name: 'PostgreSQL', icon: icons.pg },
]

export default function Skills() {
	return (
		<section id="skills" className="mt-16 scroll-mt-24" aria-labelledby="skills-heading">
			<ScrollAnimation>
				<div className="mb-6 flex items-end justify-between gap-4">
				<div>
					<h2 id="skills-heading" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Skills</h2>
					<p className="mt-1 text-slate-600 dark:text-gray-400">Tools and technologies I work with</p>
				</div>
				<div className="hidden h-1 w-20 rounded-full bg-slate-900 dark:bg-white transition-colors duration-200 ease-in-out md:block" aria-hidden="true" />
			</div>

			<ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" role="list">
				{skills.map((skill) => (
					<motion.li
						key={skill.key}
						className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 shadow-sm dark:shadow-md transition-all duration-200 ease-in-out hover:shadow-lg dark:hover:shadow-xl"
						role="listitem"
						whileHover={{ y: -4, scale: 1.02 }}
						transition={{ duration: 0.2 }}
					>
						<div className="absolute inset-0 bg-gradient-to-br from-slate-900/0 via-slate-900/0 to-slate-900/0 dark:from-white/0 dark:via-white/0 dark:to-white/0 transition group-hover:via-slate-900/[0.02] group-hover:to-slate-900/[0.04] dark:group-hover:via-white/[0.05] dark:group-hover:to-white/[0.1]" />
						<div className="relative flex items-center gap-4">
							<IconBase>{skill.icon}</IconBase>
							<div>
								<p className="text-base font-semibold text-slate-900 dark:text-white">{skill.name}</p>
								<p className="text-sm text-slate-500 dark:text-gray-400">Interactive card</p>
							</div>
						</div>
						<div className="relative mt-4 h-1 w-0 bg-slate-900 dark:bg-white transition-all duration-200 ease-in-out group-hover:w-20" aria-hidden="true" />
					</motion.li>
				))}
			</ul>
			</ScrollAnimation>
		</section>
	)
}


