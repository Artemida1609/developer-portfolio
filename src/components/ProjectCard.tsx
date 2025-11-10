import { Project } from '../types'

interface ProjectCardProps {
	project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
			{/* Project Image Placeholder - Can be replaced with actual images later */}
			<div className="h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
				<div className="text-white text-6xl font-bold opacity-20">{project.title.charAt(0)}</div>
			</div>

			{/* Project Content */}
			<div className="p-6">
				{/* Title */}
				<h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>

				{/* Description */}
				<p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

				{/* Tech Stack Tags */}
				<div className="flex flex-wrap gap-2 mb-5">
					{project.technologies.map((tech) => (
						<span key={tech} className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-200">
							{tech}
						</span>
					))}
				</div>

				{/* Action Links */}
				<div className="flex gap-3 pt-3 border-t border-gray-100">
					{project.githubUrl && (
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path
									fillRule="evenodd"
									d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
									clipRule="evenodd"
								/>
							</svg>
							Code
						</a>
					)}

					{project.liveUrl && (
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
							Live Demo
						</a>
					)}
				</div>
			</div>
		</div>
	)
}


