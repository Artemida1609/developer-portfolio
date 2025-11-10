import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
	return (
		<section id="projects" className="py-12 md:py-20 bg-white">
			<div className="max-w-6xl mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Here are some projects I've built while learning web development. Each one taught me something new about coding,
						problem-solving, and user experience.
					</p>
				</div>

				{/* Projects Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	)
}


