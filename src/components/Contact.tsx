import React from 'react'
import { motion } from 'framer-motion'
import ScrollAnimation from './ScrollAnimation'

export default function Contact() {
	return (
		<section id="contact" className="mt-16 scroll-mt-24" aria-labelledby="contact-heading">
			<ScrollAnimation>
				<motion.div 
					className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm dark:shadow-xl transition-all duration-200 ease-in-out"
					whileHover={{ scale: 1.01, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
				>
				<h2 id="contact-heading" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Contact</h2>
				<p className="mt-2 text-slate-600 dark:text-gray-400">Feel free to reach out through any of the channels below.</p>

				<ul className="mt-6 grid gap-4 sm:grid-cols-2" role="list">
					<motion.li 
						className="group rounded-xl border border-slate-200 dark:border-slate-700 p-4 transition-all duration-200 ease-in-out"
						role="listitem"
						whileHover={{ y: -4, scale: 1.02 }}
						transition={{ duration: 0.2 }}
					>
						<a href="mailto:artem.skichko0@gmail.com" className="flex items-center gap-3" aria-label="Send email to artem.skichko0@gmail.com">
							<span className="grid h-10 w-10 place-items-center rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">@
							</span>
							<div>
								<p className="text-sm uppercase tracking-wide text-slate-500 dark:text-gray-400">Email</p>
								<p className="font-medium text-slate-900 dark:text-white">artem.skichko0@gmail.com</p>
							</div>
						</a>
					</motion.li>

					<motion.li 
						className="group rounded-xl border border-slate-200 dark:border-slate-700 p-4 transition-all duration-200 ease-in-out"
						role="listitem"
						whileHover={{ y: -4, scale: 1.02 }}
						transition={{ duration: 0.2 }}
					>
						<a href="https://t.me/artem_skichko" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3" aria-label="Contact on Telegram">
							<span className="grid h-10 w-10 place-items-center rounded-lg bg-sky-500 text-white transition-transform duration-300 group-hover:scale-110" aria-hidden="true">TG
							</span>
							<div>
								<p className="text-sm uppercase tracking-wide text-slate-500 dark:text-gray-400">Telegram</p>
								<p className="font-medium text-slate-900 dark:text-white">@artem_skichko</p>
							</div>
						</a>
					</motion.li>

					<motion.li 
						className="group rounded-xl border border-slate-200 dark:border-slate-700 p-4 transition-all duration-200 ease-in-out sm:col-span-2"
						role="listitem"
						whileHover={{ y: -4, scale: 1.02 }}
						transition={{ duration: 0.2 }}
					>
						<a href="https://github.com/Artemida1609" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3" aria-label="View GitHub profile">
							<span className="grid h-10 w-10 place-items-center rounded-lg bg-gray-900 dark:bg-slate-100 text-white dark:text-slate-900 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">GH</span>
							<div>
								<p className="text-sm uppercase tracking-wide text-slate-500 dark:text-gray-400">GitHub</p>
								<p className="font-medium text-slate-900 dark:text-white">github.com/Artemida1609</p>
							</div>
						</a>
					</motion.li>
				</ul>
				</motion.div>
			</ScrollAnimation>
		</section>
	)
}


