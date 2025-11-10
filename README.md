<div align="center">

# 🚀 Artem Skichko — Developer Portfolio

### A modern, responsive portfolio showcasing my projects, skills, and contact info

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://github.com/Artemida1609/developer-portfolio)
[![GitHub](https://img.shields.io/badge/github-repo-blue.svg)](https://github.com/Artemida1609/developer-portfolio)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[Live Demo](https://github.com/Artemida1609/developer-portfolio) · [Report Bug](https://github.com/Artemida1609/developer-portfolio/issues/new) · [Request Feature](https://github.com/Artemida1609/developer-portfolio/issues/new?labels=enhancement)

</div>

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Built With](#-built-with)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 About The Project
<a id="about-the-project"></a>

This is a single-page portfolio built with React, TypeScript, and Tailwind CSS to showcase projects and skills with a clean, responsive UI. It includes an About section, interactive Skills cards with icons, a Projects grid driven by typed data, and a simple Contact block with direct links.

- Component-based structure with TypeScript types for `Project`
- Responsive layout with accessible semantics and keyboard-friendly navigation
- Fast local development and optimized build via Vite
- Easy content updates through `src/data/projects.ts` and focused components

---

## 🛠️ Built With
<a id="built-with"></a>

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
<a id="features"></a>

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
<a id="getting-started"></a>

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9
- Git

### Installation

```bash
git clone https://github.com/Artemida1609/developer-portfolio.git
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
<a id="usage"></a>

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
<a id="contributing"></a>

Contributions are welcome. Please:
- Follow existing code style
- Write meaningful commits
- Update docs if needed
- Ensure accessibility and responsiveness

---

## 📄 License
<a id="license"></a>

Distributed under the MIT License. See `LICENSE`.

---

## 📬 Contact
<a id="contact"></a>

**Artem Skichko** — Front-End Developer (Slovakia)

- Email: [artem.skichko0@gmail.com](mailto:artem.skichko0@gmail.com)
- Telegram: [@artem_skichko](https://t.me/artem_skichko)
- Profile: https://github.com/Artemida1609

Project directory: `developer-portfolio/`

---

<div align="center">

### ⭐ Star this repo if you like it!

Made with ❤️ and ☕ by Artem Skichko

**[↑ Back to Top](#-artem-skichko--developer-portfolio)**

</div>


