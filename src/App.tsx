import Header from './components/Header'

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

				<section id="about" className="mt-16">
					<h3 className="mb-3 text-xl font-semibold">About</h3>
					<p className="text-slate-600">Short bio goes here.</p>
				</section>

				<section id="skills" className="mt-16">
					<h3 className="mb-3 text-xl font-semibold">Skills</h3>
					<p className="text-slate-600">List your core frontend skills.</p>
				</section>

				<section id="projects" className="mt-16">
					<h3 className="mb-3 text-xl font-semibold">Projects</h3>
					<p className="text-slate-600">Highlight selected projects.</p>
				</section>

				<section id="contact" className="mt-16">
					<h3 className="mb-3 text-xl font-semibold">Contact</h3>
					<p className="text-slate-600">How to reach you.</p>
				</section>
			</main>
		</div>
	)
}

export default App


