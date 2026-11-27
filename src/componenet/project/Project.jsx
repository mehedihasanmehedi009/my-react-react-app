import React from 'react'
import { FaExternalLinkAlt, FaGithub, FaGlobe } from "react-icons/fa";
export const Project = () => {
  return (
    <div>
        <section
      id="project"
      className="relative overflow-hidden w-full bg-white text-slate-900 [[data-theme=dark]_&]:bg-slate-950 [[data-theme=dark]_&]:text-slate-100 py-16 md:py-24 px-4 sm:px-6 border-b border-slate-200 [[data-theme=dark]_&]:border-slate-800 transition-colors duration-300"
    >
      {/* Soft Blue & Slate Background Blur Shapes */}
      <div className="pointer-events-none absolute top-20 -right-24 w-72 h-72 bg-blue-200/35 [[data-theme=dark]_&]:bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-10 -left-24 w-80 h-80 bg-slate-200/50 [[data-theme=dark]_&]:bg-indigo-600/15 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12 md:mb-14 text-center md:text-left">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 [[data-theme=dark]_&]:text-blue-400 bg-blue-50/80 [[data-theme=dark]_&]:bg-blue-950/60 backdrop-blur-sm border border-blue-200/70 [[data-theme=dark]_&]:border-blue-800/70 px-3 py-1 rounded-full mb-3">
            Portfolio Showcase
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-3 tracking-tight">
            Featured{" "}
            <span className="text-blue-600 [[data-theme=dark]_&]:text-blue-400">
              Projects
            </span>
          </h2>

          <p className="text-slate-600 [[data-theme=dark]_&]:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
            Here are some of my recent projects. Each one was built to solve real
            problems and deliver exceptional user experiences.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {/* Project 1 */}
          <div className="group bg-white/75 [[data-theme=dark]_&]:bg-slate-900/75 backdrop-blur-lg border border-slate-200/80 [[data-theme=dark]_&]:border-slate-800/90 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="relative w-full h-52 overflow-hidden bg-slate-100 [[data-theme=dark]_&]:bg-slate-800">
              <img
                src=""
                alt="Web Application Dashboard"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white group-hover:text-blue-600 [[data-theme=dark]_&]:group-hover:text-blue-400 transition-colors">
                    My First Project
                  </h3>
                  <a
                    href="YOUR_PROJECT_LINK"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open Project"
                    className="w-8 h-8 rounded-full bg-slate-100/80 [[data-theme=dark]_&]:bg-slate-800/90 flex items-center justify-center text-slate-500 [[data-theme=dark]_&]:text-slate-300 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>

                <p className="text-slate-600 [[data-theme=dark]_&]:text-slate-300 text-sm leading-relaxed mb-4">
                  This is my first web development project. Built with React.js,
                  Tailwind CSS and Firebase.
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="text-xs font-medium bg-blue-50/70 [[data-theme=dark]_&]:bg-blue-950/50 text-slate-700 [[data-theme=dark]_&]:text-slate-200 border border-blue-100 [[data-theme=dark]_&]:border-blue-800/60 px-2.5 py-1 rounded-md">
                    React
                  </span>
                  <span className="text-xs font-medium bg-blue-50/70 [[data-theme=dark]_&]:bg-blue-950/50 text-slate-700 [[data-theme=dark]_&]:text-slate-200 border border-blue-100 [[data-theme=dark]_&]:border-blue-800/60 px-2.5 py-1 rounded-md">
                    Tailwind CSS
                  </span>
                  <span className="text-xs font-medium bg-blue-50/70 [[data-theme=dark]_&]:bg-blue-950/50 text-slate-700 [[data-theme=dark]_&]:text-slate-200 border border-blue-100 [[data-theme=dark]_&]:border-blue-800/60 px-2.5 py-1 rounded-md">
                    Firebase
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://github.com/mehedihasanmehedi009/my-assignment-9.git"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 text-center bg-slate-900/85 [[data-theme=dark]_&]:bg-white/10 hover:bg-slate-900 [[data-theme=dark]_&]:hover:bg-white/20 backdrop-blur-md border border-slate-700/50 [[data-theme=dark]_&]:border-white/15 text-white py-2.5 rounded-lg text-sm font-semibold transition-all"
                >
                  <FaGithub className="text-sm" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://merry-zuccutto-199cc0.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 text-center bg-blue-600/90 hover:bg-blue-600 backdrop-blur-md border border-blue-400/40 text-white py-2.5 rounded-lg text-sm font-semibold shadow-[0_4px_12px_rgba(37,99,235,0.22)] transition-all"
                >
                  <FaGlobe className="text-sm" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group bg-white/75 [[data-theme=dark]_&]:bg-slate-900/75 backdrop-blur-lg border border-slate-200/80 [[data-theme=dark]_&]:border-slate-800/90 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="relative w-full h-52 overflow-hidden bg-slate-100 [[data-theme=dark]_&]:bg-slate-800">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
                alt="E-Commerce & Analytics Website"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white group-hover:text-blue-600 [[data-theme=dark]_&]:group-hover:text-blue-400 transition-colors">
                    My Second Project
                  </h3>
                  <a
                    href="YOUR_PROJECT_LINK"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open Project"
                    className="w-8 h-8 rounded-full bg-slate-100/80 [[data-theme=dark]_&]:bg-slate-800/90 flex items-center justify-center text-slate-500 [[data-theme=dark]_&]:text-slate-300 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>

                <p className="text-slate-600 [[data-theme=dark]_&]:text-slate-300 text-sm leading-relaxed mb-4">
                  A modern and responsive website with user-friendly design and
                  interactive features.
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="text-xs font-medium bg-blue-50/70 [[data-theme=dark]_&]:bg-blue-950/50 text-slate-700 [[data-theme=dark]_&]:text-slate-200 border border-blue-100 [[data-theme=dark]_&]:border-blue-800/60 px-2.5 py-1 rounded-md">
                    Next.js
                  </span>
                  <span className="text-xs font-medium bg-blue-50/70 [[data-theme=dark]_&]:bg-blue-950/50 text-slate-700 [[data-theme=dark]_&]:text-slate-200 border border-blue-100 [[data-theme=dark]_&]:border-blue-800/60 px-2.5 py-1 rounded-md">
                    Tailwind CSS
                  </span>
                  <span className="text-xs font-medium bg-blue-50/70 [[data-theme=dark]_&]:bg-blue-950/50 text-slate-700 [[data-theme=dark]_&]:text-slate-200 border border-blue-100 [[data-theme=dark]_&]:border-blue-800/60 px-2.5 py-1 rounded-md">
                    REST API
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="YOUR_GITHUB_LINK"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 text-center bg-slate-900/85 [[data-theme=dark]_&]:bg-white/10 hover:bg-slate-900 [[data-theme=dark]_&]:hover:bg-white/20 backdrop-blur-md border border-slate-700/50 [[data-theme=dark]_&]:border-white/15 text-white py-2.5 rounded-lg text-sm font-semibold transition-all"
                >
                  <FaGithub className="text-sm" />
                  <span>GitHub</span>
                </a>

                <a
                  href="YOUR_LIVE_LINK"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 text-center bg-blue-600/90 hover:bg-blue-600 backdrop-blur-md border border-blue-400/40 text-white py-2.5 rounded-lg text-sm font-semibold shadow-[0_4px_12px_rgba(37,99,235,0.22)] transition-all"
                >
                  <FaGlobe className="text-sm" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group bg-white/75 [[data-theme=dark]_&]:bg-slate-900/75 backdrop-blur-lg border border-slate-200/80 [[data-theme=dark]_&]:border-slate-800/90 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="relative w-full h-52 overflow-hidden bg-slate-100 [[data-theme=dark]_&]:bg-slate-800">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
                alt="Full Stack Web Application"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white group-hover:text-blue-600 [[data-theme=dark]_&]:group-hover:text-blue-400 transition-colors">
                    My Third Project
                  </h3>
                  <a
                    href="YOUR_PROJECT_LINK"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open Project"
                    className="w-8 h-8 rounded-full bg-slate-100/80 [[data-theme=dark]_&]:bg-slate-800/90 flex items-center justify-center text-slate-500 [[data-theme=dark]_&]:text-slate-300 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>

                <p className="text-slate-600 [[data-theme=dark]_&]:text-slate-300 text-sm leading-relaxed mb-4">
                  A full-stack web application built with modern technologies and
                  responsive design.
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="text-xs font-medium bg-blue-50/70 [[data-theme=dark]_&]:bg-blue-950/50 text-slate-700 [[data-theme=dark]_&]:text-slate-200 border border-blue-100 [[data-theme=dark]_&]:border-blue-800/60 px-2.5 py-1 rounded-md">
                    Node.js
                  </span>
                  <span className="text-xs font-medium bg-blue-50/70 [[data-theme=dark]_&]:bg-blue-950/50 text-slate-700 [[data-theme=dark]_&]:text-slate-200 border border-blue-100 [[data-theme=dark]_&]:border-blue-800/60 px-2.5 py-1 rounded-md">
                    Express
                  </span>
                  <span className="text-xs font-medium bg-blue-50/70 [[data-theme=dark]_&]:bg-blue-950/50 text-slate-700 [[data-theme=dark]_&]:text-slate-200 border border-blue-100 [[data-theme=dark]_&]:border-blue-800/60 px-2.5 py-1 rounded-md">
                    MongoDB
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="YOUR_GITHUB_LINK"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 text-center bg-slate-900/85 [[data-theme=dark]_&]:bg-white/10 hover:bg-slate-900 [[data-theme=dark]_&]:hover:bg-white/20 backdrop-blur-md border border-slate-700/50 [[data-theme=dark]_&]:border-white/15 text-white py-2.5 rounded-lg text-sm font-semibold transition-all"
                >
                  <FaGithub className="text-sm" />
                  <span>GitHub</span>
                </a>

                <a
                  href="YOUR_LIVE_LINK"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 text-center bg-blue-600/90 hover:bg-blue-600 backdrop-blur-md border border-blue-400/40 text-white py-2.5 rounded-lg text-sm font-semibold shadow-[0_4px_12px_rgba(37,99,235,0.22)] transition-all"
                >
                  <FaGlobe className="text-sm" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
