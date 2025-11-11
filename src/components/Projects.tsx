import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import ScrollAnimation from './ScrollAnimation'

export default function Projects() {
	return (
		<section id="projects" className="mt-16 scroll-mt-24" aria-labelledby="projects-heading">
			<ScrollAnimation>
				<div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 py-12 md:py-20 px-6 transition-colors duration-200 ease-in-out shadow-sm dark:shadow-xl">
				<div className="max-w-6xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-12">
						<h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">My Projects</h2>
						<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
							Here are some projects I've built while learning web development. Each one taught me something new about coding,
							problem-solving, and user experience.
						</p>
					</div>

					{/* Projects Grid */}
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch" role="list">
						{projects.map((project, index) => (
							<ProjectCard key={project.id} project={project} index={index} />
						))}
					</div>
				</div>
			</div>
			</ScrollAnimation>
		</section>
	)
}


