import { useState, useRef } from 'react'
import { motion, useMotionValue, useTransform, AnimatePresence, type Variants } from 'framer-motion'
import { projects } from '../data/projects'
import { Project } from '../types'

// ── Icons ────────────────────────────────────────────────────────────
const GithubIcon = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
		<path d="M12 2C6.48 2 2 6.48 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.8 1 .8-.2 1.7-.3 2.5-.3.9 0 1.7.1 2.5.3 2-1.3 2.8-1 2.8-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5C19.1 20.2 22 16.4 22 12c0-5.52-4.48-10-10-10z"/>
	</svg>
)

const ExternalIcon = () => (
	<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
		<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
		<polyline points="15 3 21 3 21 9"/>
		<line x1="10" y1="14" x2="21" y2="3"/>
	</svg>
)

// ── 3-D tilt card ─────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
	const ref = useRef<HTMLDivElement>(null)
	const x = useMotionValue(0)
	const y = useMotionValue(0)
	const rotateX = useTransform(y, [-0.5, 0.5], [8, -8])
	const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8])
	const glowX = useTransform(x, [-0.5, 0.5], [0, 100])
	const glowY = useTransform(y, [-0.5, 0.5], [0, 100])
	const spotlightBg = useTransform(
		[glowX, glowY],
		([lx, ly]: number[]) =>
			`radial-gradient(280px circle at ${lx}% ${ly}%, rgba(192,57,43,0.13), transparent 70%)`
	)

	const [hovered, setHovered] = useState(false)

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = ref.current?.getBoundingClientRect()
		if (!rect) return
		x.set((e.clientX - rect.left) / rect.width - 0.5)
		y.set((e.clientY - rect.top) / rect.height - 0.5)
	}

	const handleMouseLeave = () => {
		x.set(0)
		y.set(0)
		setHovered(false)
	}

	const cardVariants: Variants = {
		hidden: { opacity: 0, y: 48, scale: 0.95 },
		visible: {
			opacity: 1, y: 0, scale: 1,
			transition: { duration: 0.55, ease: 'easeOut' as const, delay: index * 0.1 },
		},
	}

	return (
		<motion.div
			ref={ref}
			variants={cardVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: '-60px' }}
			style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={handleMouseLeave}
			className="relative group rounded-2xl overflow-hidden cursor-pointer"
			role="listitem"
		>
			{/* Animated border glow */}
			<div
				className="absolute inset-0 rounded-2xl transition-opacity duration-300 z-0 pointer-events-none"
				style={{
					opacity: hovered ? 1 : 0,
					background: 'linear-gradient(135deg, rgba(192,57,43,0.5) 0%, transparent 50%, rgba(192,57,43,0.3) 100%)',
					padding: '1px',
				}}
			/>

			{/* Card body */}
			<div
				className="relative z-10 h-full flex flex-col rounded-2xl overflow-hidden border border-white/8 transition-all duration-300"
				style={{
					background: 'rgba(10,2,2,0.85)',
					borderColor: hovered ? 'rgba(192,57,43,0.45)' : 'rgba(255,255,255,0.06)',
					boxShadow: hovered
						? '0 20px 60px rgba(192,57,43,0.2), 0 4px 20px rgba(0,0,0,0.6)'
						: '0 4px 20px rgba(0,0,0,0.4)',
				}}
			>
				{/* Image */}
				<div className="relative overflow-hidden h-48 flex-shrink-0">
					<motion.img
						src={project.imageUrl}
						alt={project.title}
						className="w-full h-full object-cover"
						style={{ scale: hovered ? 1.08 : 1, transition: 'scale 0.5s ease' }}
					/>

					{/* Image overlay — gradient */}
					<div
						className="absolute inset-0 transition-opacity duration-300"
						style={{
							background: hovered
								? 'linear-gradient(to top, rgba(5,0,0,0.95) 0%, rgba(5,0,0,0.4) 60%, transparent 100%)'
								: 'linear-gradient(to top, rgba(5,0,0,0.9) 0%, rgba(5,0,0,0.2) 80%, transparent 100%)',
						}}
					/>

					{/* In Progress badge */}
					{project.inProgress && (
						<div
							className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase select-none z-10"
							style={{
								fontFamily: "'Rajdhani', sans-serif",
								letterSpacing: '1.5px',
								background: 'rgba(0,0,0,0.65)',
								border: '1px solid rgba(251,191,36,0.5)',
								color: 'rgb(251,191,36)',
								backdropFilter: 'blur(8px)',
								boxShadow: '0 0 12px rgba(251,191,36,0.2)',
							}}
						>
							<span className="relative flex h-2 w-2" aria-hidden="true">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'rgb(251,191,36)' }} />
								<span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'rgb(251,191,36)' }} />
							</span>
							In Progress
						</div>
					)}

					{/* Index number watermark */}
					<div
						className="absolute top-3 right-4 font-bold text-5xl leading-none select-none pointer-events-none transition-opacity duration-300"
						style={{
							fontFamily: "'Rajdhani', sans-serif",
							color: 'rgba(192,57,43,0.2)',
							opacity: hovered ? 0.35 : 0.18,
						}}
						aria-hidden="true"
					>
						{String(index + 1).padStart(2, '0')}
					</div>

					{/* Quick-action buttons that slide in on hover */}
					<AnimatePresence>
						{hovered && (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 10 }}
								transition={{ duration: 0.2 }}
								className="absolute bottom-3 right-3 flex gap-2"
							>
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-white/80 hover:text-white transition-all duration-200 hover:scale-105"
									style={{
										fontFamily: "'Rajdhani', sans-serif",
										letterSpacing: '1px',
										background: 'rgba(0,0,0,0.7)',
										border: '1px solid rgba(255,255,255,0.15)',
										backdropFilter: 'blur(8px)',
									}}
									onClick={e => e.stopPropagation()}
									aria-label={`View ${project.title} source on GitHub`}
								>
									<GithubIcon /> Code
								</a>
								<a
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-white transition-all duration-200 hover:scale-105"
									style={{
										fontFamily: "'Rajdhani', sans-serif",
										letterSpacing: '1px',
										background: 'rgba(192,57,43,0.85)',
										border: '1px solid rgba(231,76,60,0.4)',
										backdropFilter: 'blur(8px)',
										boxShadow: '0 0 12px rgba(192,57,43,0.4)',
									}}
									onClick={e => e.stopPropagation()}
									aria-label={`View ${project.title} live demo`}
								>
									<ExternalIcon /> Live
								</a>
							</motion.div>
						)}
					</AnimatePresence>
				</div>

				{/* Content */}
				<div className="flex flex-col flex-1 p-5 gap-3">
					{/* Title */}
					<h3
						className="font-bold text-xl text-white leading-tight transition-colors duration-200 group-hover:text-red-400"
						style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.5px' }}
					>
						{project.title}
					</h3>

					{/* Description */}
					<p className="text-sm text-white/45 leading-relaxed flex-1 group-hover:text-white/60 transition-colors duration-300 line-clamp-3">
						{project.description}
					</p>

					{/* Divider */}
					<div
						className="h-px w-full transition-all duration-500"
						style={{
							background: hovered
								? 'linear-gradient(90deg, rgba(192,57,43,0.6), transparent)'
								: 'rgba(255,255,255,0.06)',
						}}
						aria-hidden="true"
					/>

					{/* Tech tags */}
					<div className="flex flex-wrap gap-1.5">
						{project.technologies.map(tech => (
							<span
								key={tech}
								className="text-[11px] font-semibold uppercase rounded-md px-2 py-0.5 transition-all duration-200"
								style={{
									fontFamily: "'Rajdhani', sans-serif",
									letterSpacing: '0.8px',
									background: hovered ? 'rgba(192,57,43,0.15)' : 'rgba(255,255,255,0.05)',
									color: hovered ? 'rgba(231,76,60,0.9)' : 'rgba(255,255,255,0.35)',
									border: `1px solid ${hovered ? 'rgba(192,57,43,0.3)' : 'rgba(255,255,255,0.08)'}`,
								}}
							>
								{tech}
							</span>
						))}
					</div>
				</div>

				{/* Bottom red accent bar — expands on hover */}
				<div
					className="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
					style={{
						width: hovered ? '100%' : '0%',
						background: 'linear-gradient(90deg, #c0392b, #ff6b6b)',
						boxShadow: '0 0 8px rgba(192,57,43,0.8)',
					}}
					aria-hidden="true"
				/>
			</div>

			{/* Moving spotlight glow that follows mouse */}
			<motion.div
				className="absolute inset-0 pointer-events-none rounded-2xl z-20"
				style={{ background: spotlightBg, opacity: hovered ? 1 : 0 }}
				aria-hidden="true"
			/>
		</motion.div>
	)
}

// ── Section ───────────────────────────────────────────────────────────
const headingVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Projects() {
	return (
		<section id="projects" className="scroll-mt-24 py-16 px-8" aria-labelledby="projects-heading">
			<div className="mx-auto max-w-6xl">

				{/* Section header */}
				<motion.div
					className="mb-14"
					variants={headingVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<div className="flex items-center gap-5">
						<div>
							<p
								className="text-xs uppercase tracking-[3px] text-red-600 mb-2"
								style={{ fontFamily: "'Rajdhani', sans-serif" }}
							>
								What I've built
							</p>
							<h2
								id="projects-heading"
								className="text-4xl font-bold text-white"
								style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: '1px' }}
							>
								Projects
							</h2>
						</div>
						<div
							className="flex-1 h-px ml-4"
							style={{ background: 'linear-gradient(90deg, rgba(192,57,43,0.6), transparent)' }}
							aria-hidden="true"
						/>
					</div>

					<p className="mt-4 text-white/40 max-w-xl text-sm leading-relaxed">
						A selection of projects I've built — each one a step forward in crafting better interfaces and solving real problems.
					</p>
				</motion.div>

				{/* Grid */}
				<div
					className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
					role="list"
					style={{ perspective: '1200px' }}
				>
					{projects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} />
					))}
				</div>
			</div>
		</section>
	)
}