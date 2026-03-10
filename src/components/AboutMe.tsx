import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  { icon: <FaLinkedinIn />, href: "#" },
  { icon: <FaGithub />, href: "#" },
  { icon: <FaTelegram />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[#000000] h-screen"
      aria-labelledby="about-heading"
    >
      {/* <ScrollAnimation> */}
      <div className="grid gap-8 md:grid-cols-2 my-16 mx-8 ">
        <div
          className="relative place-self-center rounded-full bg-gradient-to-br from-red-900 via-red-500 to-red-800 animate-pulse w-64 h-64 mx-auto md:mx-0 "
          style={{
            boxShadow:
              "0 0 30px rgba(220,38,38,0.8), 0 0 80px rgba(185,28,28,0.5), 0 0 120px rgba(153,27,27,0.3)",
          }}
        >
          <img
            src="/images/projects/about-img.png"
            alt="About Me"
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        <div className="place-self-start text-center md:text-left">
          <h1 className="font-bold text-5xl text-white leading-tight">
            Hi, It`s <span className="text-[var(--red-color)]">Artem</span>
          </h1>
          <h2 className="font-bold text-4xl text-white leading-tight">
            I`m a{" "}
            <span className="text-[var(--red-color)]">Frontend Developer</span>
          </h2>
          <p className="mb-4 text-lg text-slate-300 leading-relaxed">
            I'm{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              Artem Skichko
            </span>
            , a motivated Front-End Developer from Ukraine with 2 years of
            hands-on experience in building responsive and user-friendly web
            applications. I specialize in HTML, CSS (Sass/SCSS/TailwindCSS),
            JavaScript, TypeScript, React, and Redux Toolkit.
          </p>
          <div className="h-8 w-full flex items-center">
            {socials.length > 0 &&
              socials.map((social, index) => (
                <button
                  className="w-8 h-8 border border-[1.5px] border-[var(--red-color)] 
              text-[var(--light-red-color)] rounded-full hover:bg-[var(--red-hover-color)]
              ease-in-out items-center justify-center inline-flex mx-1 hover:shadow-[0_0_25px_#b24b4e] 
              hover:scale-110 active:scale-95 transform transition-all duration-300 cursor-pointer"
                  key={index}
                  onClick={() => window.open(social.href, "_blank")}
                >
                  <span>{social.icon}</span>
                </button>
              ))}
          </div>
        </div>

        {/* <div className="md:col-span-2">
					<h2 id="about-heading" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">About Me</h2>
					<p className="mt-2 text-sm uppercase tracking-wide text-slate-500 dark:text-gray-400">Frontend Developer</p>
					<div className="mt-6 h-1 w-16 rounded-full bg-slate-900 dark:bg-white transition-colors duration-200 ease-in-out" aria-hidden="true" />
				</div> */}
        <div className="md:col-span-3">
          {/* <motion.div 
						className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 leading-7 text-slate-700 dark:text-gray-100 shadow-sm dark:shadow-lg transition-all duration-200 ease-in-out hover:shadow-md dark:hover:shadow-xl hover:scale-[1.01]"
						whileHover={{ scale: 1.01 }}
						transition={{ duration: 0.2 }}
					>
						<p className="mb-4">
							I'm <span className="font-semibold text-slate-900 dark:text-white">Artem Skichko</span>, a motivated Front-End Developer from Slovakia with
							hands-on experience in building responsive and user-friendly web applications. I specialize in HTML, CSS
							(Sass/SCSS), JavaScript, TypeScript, React, and Redux Toolkit, with a growing interest in backend integration
							through REST APIs and PostgreSQL. I'm currently pursuing a Bachelor's degree in Informatics at the Technical
							University of Košice and have completed a Front-End Development course at MATE Academy.
						</p>
						<p className="mb-4">
							I'm passionate about writing clean, efficient code and continuously improving my problem-solving skills—having
							solved over 70 challenges on LeetCode. At present, I volunteer as a front-end developer for the School of Heroes
							charity project, where I help build tools for client-leader meetings and coordination systems. I value teamwork,
							mentorship, and steady growth, and I'm open to new opportunities that allow me to learn from experienced
							developers while contributing real value.
						</p>
						<p>
							Outside of coding, I enjoy playing football, which keeps me active and focused, and I take pride in balancing
							technical curiosity with creativity and discipline.
						</p>
					</motion.div> */}
          {/* <div className="mt-4 flex flex-wrap gap-3" role="list" aria-label="Technologies">
						{['HTML / CSS (Sass/SCSS)', 'JavaScript / TypeScript', 'React / Redux Toolkit', 'REST APIs / TailwindCSS'].map((tech) => (
							<span
								key={tech}
								className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1 text-xs font-medium text-slate-700 dark:text-gray-300 transition-colors duration-200 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-600"
								role="listitem"
							>
								{tech}
							</span>
						))}
					</div> */}
        </div>
      </div>
      {/* </ScrollAnimation> */}
    </section>
  );
}
