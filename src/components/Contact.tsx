import React from 'react'

export default function Contact() {
	return (
		<section id="contact" className="mt-16 scroll-mt-24">
			<div className="rounded-2xl border bg-white p-6 shadow-sm">
				<h3 className="text-2xl font-bold tracking-tight text-slate-900">Contact</h3>
				<p className="mt-2 text-slate-600">Feel free to reach out through any of the channels below.</p>

				<ul className="mt-6 grid gap-4 sm:grid-cols-2">
					<li className="group rounded-xl border p-4 transition hover:shadow-md">
						<a href="mailto:artem.skichko0@gmail.com" className="flex items-center gap-3">
							<span className="grid h-10 w-10 place-items-center rounded-lg bg-slate-900 text-white">@
							</span>
							<div>
								<p className="text-sm uppercase tracking-wide text-slate-500">Email</p>
								<p className="font-medium text-slate-900">artem.skichko0@gmail.com</p>
							</div>
						</a>
					</li>

					<li className="group rounded-xl border p-4 transition hover:shadow-md">
						<a href="https://t.me/artem_skichko" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
							<span className="grid h-10 w-10 place-items-center rounded-lg bg-sky-500 text-white">TG
							</span>
							<div>
								<p className="text-sm uppercase tracking-wide text-slate-500">Telegram</p>
								<p className="font-medium text-slate-900">@artem_skichko</p>
							</div>
						</a>
					</li>

					<li className="group rounded-xl border p-4 transition hover:shadow-md sm:col-span-2">
						<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
							<span className="grid h-10 w-10 place-items-center rounded-lg bg-gray-900 text-white">GH</span>
							<div>
								<p className="text-sm uppercase tracking-wide text-slate-500">GitHub</p>
								<p className="font-medium text-slate-900">github.com/yourusername</p>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</section>
	)
}


