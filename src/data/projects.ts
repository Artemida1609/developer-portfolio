import { Project } from '../types'

const baseUrl = import.meta.env.BASE_URL

export const projects: Project[] = [
	{
		id: 1,
		title: 'Gadget Store',
		description:
			'A modern e-commerce landing page for gadget products featuring responsive design, interactive UI elements, and smooth animations. Built with a focus on user experience and visual appeal.',
		technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
		githubUrl: 'https://github.com/Artemida1609/Gadget_Store',
		liveUrl: 'https://artemida1609.github.io/Gadget_Store/',
		imageUrl: `${baseUrl}images/projects/gadget-store.jpg`,
	},
	{
		id: 2,
		title: '2048 Game',
		description:
			'Classic 2048 puzzle game with smooth tile animations and score tracking. Features keyboard controls, game state management, and win/lose detection logic. Built with HTML5, SCSS, and JavaScript using OOP principles.',
		technologies: ['JavaScript', 'HTML', 'SCSS', 'OOP'],
		githubUrl: 'https://github.com/Artemida1609/Game_2048',
		liveUrl: 'https://Artemida1609.github.io/Game_2048/',
		imageUrl: `${baseUrl}images/projects/2048-game.png`,
	},
	{
		id: 3,
		title: 'Todo App',
		description:
			'Minimalist task management application with add, filter, and track functionality. Built with React hooks, TypeScript, and REST API integration. Features dynamic filtering, real-time updates, and responsive design.',
		technologies: ['React', 'TypeScript', 'SCSS', 'REST API'],
		githubUrl: 'https://github.com/Artemida1609/Todo_App',
		liveUrl: 'https://Artemida1609.github.io/Todo_App/',
		imageUrl: `${baseUrl}images/projects/todo-app.png`,
	},
	{
    id: 4,
    title: 'HairCare',
    description:
      'A premium barber shop and beauty salon website featuring a sophisticated dark theme, smooth scroll animations, and a fully responsive gallery. Includes interactive appointment forms, artist profiles with stagger animations, and a customized mobile navigation experience.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Vite'],
    githubUrl: 'https://github.com/Artemida1609/HairCare',
    liveUrl: 'https://artemida1609.github.io/HairCare/',
    imageUrl: `${baseUrl}images/projects/haircare.jpg`,
  },
]


