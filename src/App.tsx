import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'

function App() {
	return (
		<div className="min-h-screen bg-[#000000] text-slate-900 dark:text-gray-100 transition-colors duration-200 ease-in-out">
			<Header />
			<main className="mx-auto max-w-6xl">
				<AboutMe />

				<Skills />

				<Projects />

				<Contact />
			</main>
			<ScrollToTop />
		</div>
	)
}

export default App


