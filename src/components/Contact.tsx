import { motion, type Variants } from 'framer-motion'
import { useState } from 'react'

const contacts = [
	{
		id: 'email',
		label: 'Email',
		value: 'artem.skichko0@gmail.com',
		href: 'mailto:artem.skichko0@gmail.com',
		external: false,
		icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<rect x="2" y="4" width="20" height="16" rx="2"/>
				<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
			</svg>
		),
	},
	{
		id: 'telegram',
		label: 'Telegram',
		value: '@artem_skichko',
		href: 'https://t.me/artem_skichko',
		external: true,
		icon: (
			<svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
				<path d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z"/>
			</svg>
		),
	},
	{
		id: 'github',
		label: 'GitHub',
		value: 'github.com/Artemida1609',
		href: 'https://github.com/Artemida1609',
		external: true,
		icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M12 2C6.48 2 2 6.48 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.8 1 .8-.2 1.7-.3 2.5-.3.9 0 1.7.1 2.5.3 2-1.3 2.8-1 2.8-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5C19.1 20.2 22 16.4 22 12c0-5.52-4.48-10-10-10z"/>
			</svg>
		),
	},
	{
		id: 'linkedin',
		label: 'LinkedIn',
		value: 'linkedin.com/in/artem-skichko',
		href: 'https://www.linkedin.com/in/artem-skichko-1629b7312/',
		external: true,
		icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
				<circle cx="4" cy="4" r="2"/>
			</svg>
		),
	},
]


const sectionVariants: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.1 } },
}

const headingVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 32, scale: 0.96 },
	visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
  navigator.clipboard.writeText('artem.skichko0@gmail.com')
  setCopied(true)
  setTimeout(() => setCopied(false), 2000)
}

	return (
		<>
			<style>{`
				.contact-card-hover:hover {
					border-color: rgba(192,57,43,0.45) !important;
					box-shadow: 0 0 0 1px rgba(192,57,43,0.2), 0 12px 40px rgba(192,57,43,0.15), 0 4px 16px rgba(0,0,0,0.5);
					transform: translateY(-4px);
				}
				.contact-icon-ring::after {
					content: '';
					position: absolute;
					inset: -3px;
					border-radius: 12px;
					background: conic-gradient(from 0deg, rgba(192,57,43,0.6), transparent 40%, rgba(192,57,43,0.4) 60%, transparent);
					z-index: -1;
					opacity: 0;
					transition: opacity 0.3s ease;
					animation: iconRingSpin 4s linear infinite;
				}
				.contact-card-hover:hover .contact-icon-ring::after { opacity: 1; }
				@keyframes iconRingSpin { to { transform: rotate(360deg); } }

				.contact-arrow {
					transition: transform 0.25s ease, opacity 0.25s ease;
					opacity: 0;
					transform: translate(-4px, 4px);
				}
				.contact-card-hover:hover .contact-arrow {
					opacity: 1;
					transform: translate(0, 0);
				}
			`}</style>

			<section
				id="contact"
				className="scroll-mt-24 py-16 px-8"
				aria-labelledby="contact-heading"
			>
				<motion.div
					className="mx-auto max-w-6xl"
					variants={sectionVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-60px' }}
				>
					{/* ── Section header ── */}
					<motion.div variants={headingVariants} className="mb-14">
						<div className="flex items-center gap-5">
							<div>
								<p
									className="text-xs uppercase tracking-[3px] text-red-600 mb-2"
									style={{ fontFamily: "'Rajdhani', sans-serif" }}
								>
									Get in touch
								</p>
								<h2
									id="contact-heading"
									className="text-4xl font-bold text-white"
									style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: '1px' }}
								>
									Contact
								</h2>
							</div>
							<div
								className="flex-1 h-px ml-4"
								style={{ background: 'linear-gradient(90deg, rgba(192,57,43,0.6), transparent)' }}
								aria-hidden="true"
							/>
						</div>
						<p className="mt-4 text-white/40 max-w-xl text-sm leading-relaxed">
							Open to new opportunities and collaborations. Feel free to reach out through any of the channels below — I'll get back to you as soon as possible.
						</p>
					</motion.div>

					{/* ── Contact grid ── */}
					<ul
						className="grid gap-4 sm:grid-cols-2"
						role="list"
					>
						{contacts.map((contact) => (
  <motion.li
    key={contact.id}
    variants={cardVariants}
    role="listitem"
    className="contact-card-hover group relative rounded-2xl border transition-all duration-300 overflow-hidden"
    style={{
      background: 'rgba(10,2,2,0.7)',
      borderColor: 'rgba(255,255,255,0.06)',
    }}
  >
    <div
      className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ background: 'linear-gradient(90deg, transparent, rgba(192,57,43,0.7), transparent)' }}
      aria-hidden="true"
    />

    {contact.id === 'email' ? (
      // Email — копіювання замість mailto
      <button
        onClick={handleCopyEmail}
        className="flex items-center gap-4 p-5 w-full text-left"
        aria-label={`Copy email: ${contact.value}`}
      >
        <div
          className="contact-icon-ring relative flex-shrink-0 w-12 h-12 rounded-xl grid place-items-center text-white/60 group-hover:text-red-400 transition-colors duration-300"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          {contact.icon}
        </div>

        <div className="flex-1 min-w-0">
          <p
            className="text-[11px] uppercase tracking-[2px] text-white/30 group-hover:text-red-600 transition-colors duration-300 mb-0.5"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            {contact.label}
          </p>
          <p
            className="font-semibold text-white/70 group-hover:text-white transition-colors duration-300 truncate"
            style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '15px', letterSpacing: '0.3px' }}
          >
            {copied ? '✓ Copied!' : contact.value}
          </p>
        </div>

        {/* Copy icon замість arrow */}
        <svg
          className="contact-arrow flex-shrink-0 text-red-500"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="9" y="9" width="13" height="13" rx="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
      </button>
    ) : (
      // Інші контакти — звичайне посилання
      <a
        href={contact.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-5 no-underline"
        aria-label={`${contact.label}: ${contact.value}`}
      >
        <div
          className="contact-icon-ring relative flex-shrink-0 w-12 h-12 rounded-xl grid place-items-center text-white/60 group-hover:text-red-400 transition-colors duration-300"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          {contact.icon}
        </div>

        <div className="flex-1 min-w-0">
          <p
            className="text-[11px] uppercase tracking-[2px] text-white/30 group-hover:text-red-600 transition-colors duration-300 mb-0.5"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            {contact.label}
          </p>
          <p
            className="font-semibold text-white/70 group-hover:text-white transition-colors duration-300 truncate"
            style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '15px', letterSpacing: '0.3px' }}
          >
            {contact.value}
          </p>
        </div>

        <svg
          className="contact-arrow flex-shrink-0 text-red-500"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </a>
    )}
  </motion.li>
))}
					</ul>

					{/* ── Bottom CTA ── */}
					<motion.div
  variants={headingVariants}
  className="mt-12 text-center"
>
  <p
    className="text-white/25 text-sm"
    style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: '1px' }}
  >
    — OR COPY EMAIL DIRECTLY —
  </p>

  <button
    onClick={handleCopyEmail}
    className="inline-flex items-center gap-3 mt-5 px-8 py-3.5 rounded-xl font-bold uppercase text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 focus:ring-offset-black"
    style={{
      fontFamily: "'Rajdhani', sans-serif",
      letterSpacing: '2px',
      fontSize: '14px',
      background: 'linear-gradient(135deg, #c0392b, #96281b)',
      boxShadow: '0 0 20px rgba(192,57,43,0.4), 0 4px 12px rgba(0,0,0,0.4)',
    }}
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
    {copied ? 'Copied!' : 'Copy Email'}
  </button>
</motion.div>
				</motion.div>
			</section>
		</>
	)
}