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
		title: 'Alinea Studio',
		description:
			'A modern nail salon website featuring smooth animations, responsive design, and an elegant booking experience built with React, TypeScript, and Framer Motion.',
		technologies: ['React', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Vite'],
		githubUrl: 'https://github.com/Artemida1609/beauty_salon',
		liveUrl: 'https://beauty-salon-umber-nine.vercel.app/',
		imageUrl: `${baseUrl}images/projects/beauty-salon.png`,
	},
	{
		id: 7,
		title: 'Do Pizze',
		description:
			'A vibrant pizzeria website for a Košice-based restaurant featuring an interactive menu, modern UI, and a warm, appetizing design built with React and TypeScript.  ',
		technologies: ['React', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Vite'],
		githubUrl: 'https://github.com/Artemida1609/do_pizze',
		liveUrl: 'https://do-pizze.vercel.app/',
		imageUrl: `${baseUrl}images/projects/do-pizze.png`,
	},
	{
		id: 8,
		title: 'BV Barbershop',
		description:
			'A sleek barbershop website with a bold, masculine aesthetic, showcasing services, team, and booking — built with React and TypeScript.',
		technologies: ['React', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Vite'],
		githubUrl: 'https://github.com/Artemida1609/bv_barbershop',
		liveUrl: 'https://bvbarbershop.vercel.app/',
		imageUrl: `${baseUrl}images/projects/bv-barbershop.png`,
	},
	{
		id: 9,
		title: 'RT Service',
		description:
			'A premium car repair website with a professional, trust-building design that highlights services, expertise, and contact — built with React and TypeScript.',
		technologies: ['React', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Vite'],
		githubUrl: 'https://github.com/Artemida1609/rt_service',
		liveUrl: 'https://rt-service.vercel.app/',
		imageUrl: `${baseUrl}images/projects/rt-service.png`,
	},
	{
		id: 10,
		title: 'Muse Cafe',
		description:
			'A sophisticated specialty café website for a Košice coffee shop, featuring an elegant editorial design with smooth scroll animations and an atmospheric menu showcase, built with React and TypeScript.',
		technologies: ['React', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Vite'],
		githubUrl: 'https://github.com/Artemida1609/muse_cafe',
		liveUrl: 'https://musecafe-livid.vercel.app/',
		imageUrl: `${baseUrl}images/projects/muse-cafe.png`,
	},
	{
		id: 11,
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