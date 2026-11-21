 import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";

export const Home = () => {
  return (
    <div className=" mt-4">
      <section
        id="home"
        className="relative overflow-hidden w-full bg-white text-slate-900 [[data-theme=dark]_&]:bg-slate-950 [[data-theme=dark]_&]:text-slate-100 py-16 md:py-24 px-4 sm:px-6 border-b border-slate-200 [[data-theme=dark]_&]:border-slate-800 transition-colors duration-300"
      >
        {/* Soft Blue & Slate Glass Blur Glows */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-blue-300/30 [[data-theme=dark]_&]:bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 bg-slate-200/60 [[data-theme=dark]_&]:bg-indigo-600/15 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-base sm:text-lg md:text-xl font-medium text-slate-600 [[data-theme=dark]_&]:text-slate-400 mb-2">
              Hello, I am
            </h3>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-3 md:mb-4 tracking-tight">
              Mehedi Hasan
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold mb-5 text-blue-600 [[data-theme=dark]_&]:text-blue-400">
              Full Stack Developer
            </h2>

            {/* Tech Stack Icons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 mb-7">
              <div
                title="React"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-blue-50/90 [[data-theme=dark]_&]:bg-slate-900/80 backdrop-blur-md border border-blue-100 [[data-theme=dark]_&]:border-slate-700/70 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition"
              >
                <img
                  src="https://cdn.simpleicons.org/react/61DAFB"
                  className="w-6 h-6"
                  alt="React"
                />
              </div>

              <div
                title="Next.js"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-slate-100/90 [[data-theme=dark]_&]:bg-slate-900/80 backdrop-blur-md border border-slate-200 [[data-theme=dark]_&]:border-slate-700/70 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition"
              >
                <img
                  src="https://cdn.simpleicons.org/nextdotjs/000000"
                  className="w-6 h-6 [[data-theme=dark]_&]:invert"
                  alt="Next.js"
                />
              </div>

              <div
                title="Express.js"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-slate-100/90 [[data-theme=dark]_&]:bg-slate-900/80 backdrop-blur-md border border-slate-200 [[data-theme=dark]_&]:border-slate-700/70 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition"
              >
                <img
                  src="https://cdn.simpleicons.org/express/000000"
                  className="w-6 h-6 [[data-theme=dark]_&]:invert"
                  alt="Express"
                />
              </div>

              <div
                title="MongoDB"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-emerald-50/90 [[data-theme=dark]_&]:bg-slate-900/80 backdrop-blur-md border border-emerald-100 [[data-theme=dark]_&]:border-slate-700/70 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition"
              >
                <img
                  src="https://cdn.simpleicons.org/mongodb/00A35C"
                  className="w-6 h-6"
                  alt="MongoDB"
                />
              </div>

              <div
                title="Node.js"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-green-50/90 [[data-theme=dark]_&]:bg-slate-900/80 backdrop-blur-md border border-green-100 [[data-theme=dark]_&]:border-slate-700/70 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition"
              >
                <img
                  src="https://cdn.simpleicons.org/nodedotjs/339933"
                  className="w-6 h-6"
                  alt="Node.js"
                />
              </div>

              <div
                title="JavaScript"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-amber-50/90 [[data-theme=dark]_&]:bg-slate-900/80 backdrop-blur-md border border-amber-100 [[data-theme=dark]_&]:border-slate-700/70 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition"
              >
                <img
                  src="https://cdn.simpleicons.org/javascript/F7DF1E"
                  className="w-6 h-6"
                  alt="JavaScript"
                />
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 [[data-theme=dark]_&]:text-slate-300 leading-relaxed mb-7">
              I am a passionate Web Developer. I love creating modern, responsive
              and user-friendly websites. I enjoy learning new technologies and
              building creative web applications.
            </p>

            {/* Glassmorphism Action Buttons */}
            <div className="flex flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              <a
                href="https://github.com/programmermehedi85"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600/90 hover:bg-blue-600 backdrop-blur-md border border-blue-400/40 text-white px-5 py-2.5 md:px-7 md:py-3 rounded-lg font-semibold md:font-bold text-sm md:text-lg shadow-[0_4px_15px_rgba(37,99,235,0.25)] transition-all"
              >
                <FaGithub className="text-base md:text-xl" />
                <span>GitHub</span>
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-slate-900/85 [[data-theme=dark]_&]:bg-white/10 hover:bg-slate-900 [[data-theme=dark]_&]:hover:bg-white/20 backdrop-blur-md border border-slate-700/50 [[data-theme=dark]_&]:border-white/20 text-white px-5 py-2.5 md:px-7 md:py-3 rounded-lg font-semibold md:font-bold text-sm md:text-lg shadow-[0_4px_15px_rgba(15,23,42,0.2)] transition-all"
              >
                <FaEnvelope className="text-base md:text-xl" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-300/25 [[data-theme=dark]_&]:bg-blue-600/20 rounded-full blur-2xl"></div>
            <img
              src="/src/assets/Professional Portrait Cutout.png"
              alt="Mehedi Hasan Profile Picture"
              className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover object-top rounded-full border-8 border-white [[data-theme=dark]_&]:border-slate-800 ring-4 ring-slate-200 [[data-theme=dark]_&]:ring-blue-500/30 shadow-xl float-animation"
            />
          </div>
        </div>
      </section>
    </div>
  );
};