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
		id: 4,
		title: 'HairCare',
		description:
			'A premium barber shop and beauty salon website featuring a sophisticated dark theme, smooth scroll animations, and a fully responsive gallery. Includes interactive appointment forms, artist profiles with stagger animations, and a customized mobile navigation experience.',
		technologies: ['React', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Vite'],
		githubUrl: 'https://github.com/Artemida1609/HairCare',
		liveUrl: 'https://artemida1609.github.io/HairCare/',
		imageUrl: `${baseUrl}images/projects/haircare.jpg`,
	},
	{
		id: 5,
		title: 'Auto PDR Master',
		description:
			'Modern single-page website for AUTO PDR MASTER, a service specializing in paintless dent repair (PDR). The project is built with React + TypeScript, powered by Vite and Tailwind CSS, uses motion for animations, and is deployed to Vercel.',
		technologies: ['React', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Vite'],
		githubUrl: 'https://github.com/Artemida1609/carfix_pdr',
		liveUrl: 'https://auto-pdr-master.com/',
		imageUrl: `${baseUrl}images/projects/pdr-master.jpg`,
	},
	{
		id: 6,
		title: 'English School',
		description:
			'An English learning platform with courses, modules, chats, and a payment system.',
		technologies: ['React', 'TypeScript', 'Tailwind CSS v4', 'Redux', 'Framer Motion', 'Vite'],
		githubUrl: 'https://github.com/Artemida1609/english_school',
		liveUrl: 'https://englishschool-one.vercel.app/',
		imageUrl: `${baseUrl}images/projects/english-school.jpg`,
		inProgress: true,
	},
]