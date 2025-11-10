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
				<div className="rounded-lg border bg-white p-6 shadow-sm">
					<h2 className="mb-2 text-lg font-medium">Welcome</h2>
					<p className="text-slate-600">
						This is a clean React + TypeScript + Tailwind starter. Build your portfolio here.
					</p>
					<p>Artem Skichko</p>
				</div>

				<AboutMe />

				<Skills />

				<Projects />

				<Contact />
			</main>
		</div>
	)
}

export default App


