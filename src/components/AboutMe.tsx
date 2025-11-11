import React from 'react'
import ScrollAnimation from './ScrollAnimation'
import { motion } from 'framer-motion'

export default function AboutMe() {
	return (
		<section id="about" className="mt-16 scroll-mt-24" aria-labelledby="about-heading">
			<ScrollAnimation>
				<div className="grid gap-8 md:grid-cols-5">
				<div className="md:col-span-2">
					<h2 id="about-heading" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">About Me</h2>
					<p className="mt-2 text-sm uppercase tracking-wide text-slate-500 dark:text-gray-400">Frontend Developer</p>
					<div className="mt-6 h-1 w-16 rounded-full bg-slate-900 dark:bg-white transition-colors duration-200 ease-in-out" aria-hidden="true" />
				</div>
				<div className="md:col-span-3">
					<motion.div 
						className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 leading-7 text-slate-700 dark:text-gray-100 shadow-sm dark:shadow-lg transition-all duration-200 ease-in-out hover:shadow-md dark:hover:shadow-xl hover:scale-[1.01]"
						whileHover={{ scale: 1.01 }}
						transition={{ duration: 0.2 }}
					>
						<p className="mb-4">
							I'm <span className="font-semibold text-slate-900 dark:text-white">Artem Skichko</span>, a motivated Front-End Developer from Slovakia with
							hands-on experience in building responsive and user-friendly web applications. I specialize in HTML, CSS
							(Sass/SCSS), JavaScript, TypeScript, React, and Redux Toolkit, with a growing interest in backend integration
							through REST APIs and PostgreSQL. I'm currently pursuing a Bachelor's degree in Informatics at the Technical
							University of Košice and have completed a Front-End Development course at MATE Academy.
						</p>
						<p className="mb-4">
							I'm passionate about writing clean, efficient code and continuously improving my problem-solving skills—having
							solved over 70 challenges on LeetCode. At present, I volunteer as a front-end developer for the School of Heroes
							charity project, where I help build tools for client-leader meetings and coordination systems. I value teamwork,
							mentorship, and steady growth, and I'm open to new opportunities that allow me to learn from experienced
							developers while contributing real value.
						</p>
						<p>
							Outside of coding, I enjoy playing football, which keeps me active and focused, and I take pride in balancing
							technical curiosity with creativity and discipline.
						</p>
					</motion.div>
					<div className="mt-4 flex flex-wrap gap-3" role="list" aria-label="Technologies">
						{['HTML / CSS (Sass/SCSS)', 'JavaScript / TypeScript', 'React / Redux Toolkit', 'REST APIs / PostgreSQL'].map((tech) => (
							<span
								key={tech}
								className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1 text-xs font-medium text-slate-700 dark:text-gray-300 transition-colors duration-200 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-600"
								role="listitem"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>
			</ScrollAnimation>
		</section>
	)
}


