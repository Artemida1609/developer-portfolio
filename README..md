<div align="center">

# 🚀 Artem Skichko — Developer Portfolio

### A modern, responsive portfolio showcasing my projects, skills, and contact info

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](#)
[![GitHub](https://img.shields.io/badge/github-repo-blue.svg)](#)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About The Project

I’m Artem Skichko, a Front-End Developer from Slovakia. This portfolio presents my background, skills, and selected projects, and makes it easy to contact me.

- 🎓 Studying Informatics at the Technical University of Košice; completed Front-End course at MATE Academy
- 💼 Volunteer Front-End Developer at School of Heroes (client-leader tools and coordination systems)
- 🧠 70+ challenges solved on LeetCode
- 🧩 Tech focus: HTML, CSS (Sass/SCSS), JavaScript, TypeScript, React, Redux Toolkit; growing interest in REST APIs and PostgreSQL

---

## 🛠️ Built With

### Core
- React 18
- TypeScript 5
- Tailwind CSS 3
- Vite 5

### Tooling
- npm
- Git & GitHub
- Inline SVG icons

---

## ✨ Features

- ✅ Responsive, accessible UI with clean typography
- ✅ About Me with structured bio and highlights
- ✅ Skills as interactive cards with icons
- ✅ Projects grid with tech tags and action links
- ✅ Contact section with Email, Telegram, and GitHub

Section components:
- `AboutMe.tsx` — Bio and highlights
- `Skills.tsx` — Interactive skill cards (HTML5, CSS3, JS, TS, React, Redux Toolkit, Git, PostgreSQL)
- `Projects.tsx` + `ProjectCard.tsx` — Responsive project cards
- `Contact.tsx` — Email, Telegram, GitHub links

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9
- Git

### Installation

```bash
git clone <your-repo-url>
cd <repo>
cd developer-portfolio
npm ci
npm run dev
```

Open: http://localhost:5173

### Production

```bash
npm run build
npm run preview
```

---

## 💻 Usage

### Customize content

- Header name/title: `src/components/Header.tsx`
- About content: `src/components/AboutMe.tsx`
- Skills: `src/components/Skills.tsx`
- Contact links: `src/components/Contact.tsx`

### Projects
Edit `src/data/projects.ts`:

```ts
export const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description...',
    technologies: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/<yourusername>/<repo>',
    liveUrl: 'https://<your-demo>.vercel.app',
  },
]
```

### Project structure

```
developer-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── AboutMe.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── ProjectCard.tsx
│   ├── data/
│   │   └── projects.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🤝 Contributing

Contributions are welcome. Please:
- Follow existing code style
- Write meaningful commits
- Update docs if needed
- Ensure accessibility and responsiveness

---

## 📄 License

Distributed under the MIT License. See `LICENSE`.

---

## 📬 Contact

**Artem Skichko** — Front-End Developer (Slovakia)

- Email: [artem.skichko0@gmail.com](mailto:artem.skichko0@gmail.com)
- Telegram: [@artem_skichko](https://t.me/artem_skichko)
- GitHub: https://github.com/yourusername  ← replace with your profile

Project directory: `developer-portfolio/`

---

<div align="center">

### ⭐ Star this repo if you like it!

Made with ❤️ and ☕ by Artem Skichko

**[↑ Back to Top](#-artem-skichko--developer-portfolio)**

</div>


