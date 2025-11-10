import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-800">
			<Header />
			<main className="mx-auto max-w-6xl px-6 py-12">
				<AboutMe />

				<Skills />

				<Projects />

				<Contact />
			</main>
		</div>
	)
}

export default App


