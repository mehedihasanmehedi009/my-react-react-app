 import React from "react";
import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import profileImg from "../../assets/Professional Portrait Cutout.png";

export const About = () => {
  const cardClass =
    "bg-white/75 [[data-theme=dark]_&]:bg-slate-900/75 backdrop-blur-lg rounded-2xl border border-slate-200/80 [[data-theme=dark]_&]:border-slate-800/90 shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] p-6 transition-all duration-300";

  const badgeClass =
    "px-3 py-1 text-xs sm:text-sm font-medium text-slate-700 [[data-theme=dark]_&]:text-slate-200 bg-blue-50/60 [[data-theme=dark]_&]:bg-slate-800/80 border border-blue-100/80 [[data-theme=dark]_&]:border-slate-700/80 rounded-md";

  return (
  <div>
      <section
      id="about"
      className="relative overflow-hidden w-full bg-white text-slate-900 [[data-theme=dark]_&]:bg-slate-950 [[data-theme=dark]_&]:text-slate-100 py-14 md:py-20 px-4 sm:px-6 border-b border-slate-200 [[data-theme=dark]_&]:border-slate-800 transition-colors duration-300"
    >
      {/* Soft Blue & Slate Background Blur Shapes */}
      <div className="pointer-events-none absolute top-16 -left-24 w-72 h-72 bg-blue-200/35 [[data-theme=dark]_&]:bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-16 -right-24 w-80 h-80 bg-slate-200/50 [[data-theme=dark]_&]:bg-indigo-600/15 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-[1120px] mx-auto">
        {/* Top Intro / Hero Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center pb-14 border-b border-slate-200/80 [[data-theme=dark]_&]:border-slate-800">
          {/* Left Info */}
          <div className="md:col-span-7 space-y-5 text-center md:text-left">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 [[data-theme=dark]_&]:text-blue-400 bg-blue-50/80 [[data-theme=dark]_&]:bg-blue-950/60 backdrop-blur-sm border border-blue-200/70 [[data-theme=dark]_&]:border-blue-800/70 px-3 py-1 rounded-full">
              About Me
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white tracking-tight">
              Hi, I am{" "}
              <span className="text-blue-600 [[data-theme=dark]_&]:text-blue-400">
                Mehedi Hasan
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 [[data-theme=dark]_&]:text-slate-300 max-w-xl mx-auto md:mx-0">
              I build modern web applications with clean UI and scalable
              architecture.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
              <a
                href="./Mehedi-Hasan-CV.pdf"
                download
                className="inline-flex items-center gap-2 bg-blue-600/90 hover:bg-blue-600 backdrop-blur-md border border-blue-400/40 text-white px-5 py-2.5 rounded-lg font-semibold text-sm sm:text-base shadow-[0_4px_12px_rgba(37,99,235,0.22)] transition-all"
              >
                <FaDownload className="text-xs sm:text-sm" />
                <span>Download CV</span>
              </a>

              <a
                href="/contact "
                className="inline-flex items-center gap-2 bg-slate-100/90 [[data-theme=dark]_&]:bg-white/10 hover:bg-slate-200 [[data-theme=dark]_&]:hover:bg-white/20 backdrop-blur-md text-slate-800 [[data-theme=dark]_&]:text-white border border-slate-200 [[data-theme=dark]_&]:border-white/15 px-5 py-2.5 rounded-lg font-semibold text-sm sm:text-base transition-all"
              >
                <FaEnvelope className="text-xs sm:text-sm text-blue-600 [[data-theme=dark]_&]:text-blue-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-2 text-slate-700 [[data-theme=dark]_&]:text-slate-300 text-lg">
              <a
                href="https://github.com/programmermehedi85"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-blue-600 [[data-theme=dark]_&]:hover:text-blue-400 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-600 [[data-theme=dark]_&]:hover:text-blue-400 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://wa.me/8801700000000"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="hover:text-blue-600 [[data-theme=dark]_&]:hover:text-blue-400 transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-600 [[data-theme=dark]_&]:hover:text-blue-400 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="hover:text-blue-600 [[data-theme=dark]_&]:hover:text-blue-400 transition"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* Right Circular Profile Image */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-2.5 bg-blue-100/70 [[data-theme=dark]_&]:bg-blue-600/20 backdrop-blur-md border border-blue-200/70 [[data-theme=dark]_&]:border-blue-500/30 shadow-lg">
              <img
               src={profileImg}
                alt="Mehedi Hasan"
                className="w-full h-full object-cover object-top rounded-full bg-white [[data-theme=dark]_&]:bg-slate-900"
              />
            </div>
          </div>
        </div>

        {/* My Skills Section */}
        <div className="pt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-7">
            My{" "}
            <span className="text-blue-600 [[data-theme=dark]_&]:text-blue-400">
              Skills
            </span>
          </h2>

          {/* Top Row: 3 Cards (Frontend, Backend, Tools) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Frontend */}
            <div className={cardClass}>
              <h3 className="text-lg font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-4">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className={badgeClass}>React</span>
                <span className={badgeClass}>Next.js</span>
                <span className={badgeClass}>JavaScript</span>
                <span className={badgeClass}>Tailwind CSS</span>
              </div>
            </div>

            {/* Backend */}
            <div className={cardClass}>
              <h3 className="text-lg font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-4">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className={badgeClass}>Node.js</span>
                <span className={badgeClass}>Express</span>
                <span className={badgeClass}>MongoDB</span>
                <span className={badgeClass}>REST API</span>
              </div>
            </div>

            {/* Tools */}
            <div className={cardClass}>
              <h3 className="text-lg font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-4">
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className={badgeClass}>Git</span>
                <span className={badgeClass}>GitHub</span>
                <span className={badgeClass}>Figma</span>
                <span className={badgeClass}>Vite / Vercel</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: 2 Cards (My Approach & Education) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* My Approach */}
            <div className={cardClass}>
              <h3 className="text-lg font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-3">
                My Approach
              </h3>
              <p className="text-sm sm:text-base text-slate-600 [[data-theme=dark]_&]:text-slate-300 leading-relaxed">
                I focus on clean UI, scalable backend, and performance
                optimization.
              </p>
            </div>

            {/* Education */}
            <div className={`${cardClass} space-y-4`}>
              <h3 className="text-lg font-bold text-slate-900 [[data-theme=dark]_&]:text-white">
                Education
              </h3>

              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 [[data-theme=dark]_&]:text-white">
                  Diploma in Engineering (Computer Science)
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 [[data-theme=dark]_&]:text-slate-400 mt-0.5">
                  Barguna Polytechnic Institute
                </p>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 [[data-theme=dark]_&]:text-white">
                  Complete Web Development Course
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 [[data-theme=dark]_&]:text-slate-400 mt-0.5">
                  Self-Taught Learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </div>
  );
};