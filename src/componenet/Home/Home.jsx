
import {
    FaGithub, FaEnvelope,
    FaCode,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaBootstrap,
    FaServer,
    FaNodeJs,
    FaDatabase,
    FaLeaf,
    FaPalette,
    FaMobileAlt,
    FaTools,
    FaGitAlt,
    FaBookOpen,
    FaLayerGroup,
    FaGlobe,
    FaNpm,
  FaBolt,
  FaRocket,
  FaRegCommentDots,
  FaRegCheckCircle,
} from "react-icons/fa";
 
import {
    SiTailwindcss,
    SiExpress,
    SiFirebase,
    SiMongoose,
    SiVite,
    SiTypescript,
    SiRedux,
} from "react-icons/si";
import { TbApi, TbLayoutColumns, TbLayoutGrid, TbBolt } from "react-icons/tb";
import { Contact } from "../Contact/Contact";
import { Project } from "../project/Project";

export const Home = () => {
    const skillPillClass =
    "skill inline-flex items-center gap-2 text-sm font-medium bg-blue-50/60 [[data-theme=dark]_&]:bg-slate-800/80 text-slate-700 [[data-theme=dark]_&]:text-slate-200 border border-blue-100/80 [[data-theme=dark]_&]:border-slate-700/80 px-3 py-1.5 rounded-lg hover:border-blue-400 [[data-theme=dark]_&]:hover:border-blue-500 transition";

  const skillCardClass =
    "bg-white/75 [[data-theme=dark]_&]:bg-slate-900/75 backdrop-blur-lg p-7 sm:p-8 rounded-2xl border border-slate-200/80 [[data-theme=dark]_&]:border-slate-800/90 shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300";
    const cardClass =
    "group bg-white/75 [[data-theme=dark]_&]:bg-slate-900/75 backdrop-blur-lg p-7 sm:p-8 rounded-2xl border border-slate-200/80 [[data-theme=dark]_&]:border-slate-800/90 shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300";

  const iconBoxClass =
    "w-14 h-14 bg-blue-50/90 [[data-theme=dark]_&]:bg-blue-950/60 border border-blue-200/70 [[data-theme=dark]_&]:border-blue-800/70 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300";

  const iconClass =
    "text-2xl text-blue-600 [[data-theme=dark]_&]:text-blue-400 group-hover:text-white transition-colors duration-300";
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
        
        {/* Project section */}
           <Project/>
                
            {/* Skills Section inside Home */}
            <section
                id="skills"
                className="relative overflow-hidden py-16 md:py-24 px-4 sm:px-6 bg-white text-slate-900 [[data-theme=dark]_&]:bg-slate-950 [[data-theme=dark]_&]:text-slate-100 border-b border-slate-200 [[data-theme=dark]_&]:border-slate-800 transition-colors duration-300"
            >
                {/* Soft Blue & Slate Background Blur Shapes */}
                <div className="pointer-events-none absolute top-16 -left-20 w-72 h-72 bg-blue-200/35 [[data-theme=dark]_&]:bg-blue-600/20 rounded-full blur-3xl"></div>
                <div className="pointer-events-none absolute bottom-16 -right-20 w-80 h-80 bg-slate-200/50 [[data-theme=dark]_&]:bg-indigo-600/15 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Heading */}
                    <div className="mb-12 md:mb-16 text-center md:text-left">
                        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 [[data-theme=dark]_&]:text-blue-400 bg-blue-50/80 [[data-theme=dark]_&]:bg-blue-950/60 backdrop-blur-sm border border-blue-200/70 [[data-theme=dark]_&]:border-blue-800/70 px-3 py-1 rounded-full mb-3">
                            Technical Stack
                        </span>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-3 tracking-tight">
                            Skills &amp;{" "}
                            <span className="text-blue-600 [[data-theme=dark]_&]:text-blue-400">
                                Technology
                            </span>
                        </h2>

                        <p className="text-slate-600 [[data-theme=dark]_&]:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                            A comprehensive overview of my technical expertise across the full stack,
                            from frontend interfaces to backend systems.
                        </p>
                    </div>

                    {/* Skills Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
                        {/* Frontend */}
                        <div className={skillCardClass}>
                            <div className="flex items-center gap-4 mb-7">
                                <div className="w-11 h-11 rounded-xl bg-blue-50/90 [[data-theme=dark]_&]:bg-blue-950/60 border border-blue-100 [[data-theme=dark]_&]:border-blue-800/70 flex items-center justify-center">
                                    <FaCode className="text-xl text-blue-600 [[data-theme=dark]_&]:text-blue-400" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white">
                                    Frontend
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                <span className={skillPillClass}>
                                    <FaHtml5 className="text-orange-600" /> HTML5
                                </span>
                                <span className={skillPillClass}>
                                    <FaCss3Alt className="text-blue-600 [[data-theme=dark]_&]:text-blue-400" /> CSS3
                                </span>
                                <span className={skillPillClass}>
                                    <FaJs className="text-amber-500" /> JavaScript
                                </span>
                                <span className={skillPillClass}>
                                    <FaReact className="text-cyan-500" /> React.js
                                </span>
                                <span className={skillPillClass}>
                                    <SiTailwindcss className="text-sky-500" /> Tailwind CSS
                                </span>
                                <span className={skillPillClass}>
                                    <FaBootstrap className="text-purple-600 [[data-theme=dark]_&]:text-purple-400" /> Bootstrap
                                </span>
                            </div>
                        </div>

                        {/* Backend */}
                        <div className={skillCardClass}>
                            <div className="flex items-center gap-4 mb-7">
                                <div className="w-11 h-11 rounded-xl bg-emerald-50/90 [[data-theme=dark]_&]:bg-emerald-950/60 border border-emerald-100 [[data-theme=dark]_&]:border-emerald-800/70 flex items-center justify-center">
                                    <FaServer className="text-xl text-emerald-600 [[data-theme=dark]_&]:text-emerald-400" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white">
                                    Backend
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                <span className={skillPillClass}>
                                    <FaNodeJs className="text-emerald-600 [[data-theme=dark]_&]:text-emerald-400" /> Node.js
                                </span>
                                <span className={skillPillClass}>
                                    <SiExpress className="text-slate-700 [[data-theme=dark]_&]:text-slate-300" /> Express.js
                                </span>
                                <span className={skillPillClass}>
                                    <TbApi className="text-blue-600 [[data-theme=dark]_&]:text-blue-400" /> REST API
                                </span>
                                <span className={skillPillClass}>
                                    <SiFirebase className="text-amber-500" /> Firebase Auth
                                </span>
                            </div>
                        </div>

                        {/* Database */}
                        <div className={skillCardClass}>
                            <div className="flex items-center gap-4 mb-7">
                                <div className="w-11 h-11 rounded-xl bg-amber-50/90 [[data-theme=dark]_&]:bg-amber-950/60 border border-amber-100 [[data-theme=dark]_&]:border-amber-800/70 flex items-center justify-center">
                                    <FaDatabase className="text-xl text-amber-600 [[data-theme=dark]_&]:text-amber-400" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white">
                                    Database
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                <span className={skillPillClass}>
                                    <FaLeaf className="text-emerald-600 [[data-theme=dark]_&]:text-emerald-400" /> MongoDB
                                </span>
                                <span className={skillPillClass}>
                                    <SiFirebase className="text-orange-500" /> Firebase
                                </span>
                                <span className={skillPillClass}>
                                    <SiMongoose className="text-red-600 [[data-theme=dark]_&]:text-red-400" /> Mongoose
                                </span>
                            </div>
                        </div>

                        {/* Styling & Design */}
                        <div className={skillCardClass}>
                            <div className="flex items-center gap-4 mb-7">
                                <div className="w-11 h-11 rounded-xl bg-blue-50/90 [[data-theme=dark]_&]:bg-blue-950/60 border border-blue-100 [[data-theme=dark]_&]:border-blue-800/70 flex items-center justify-center">
                                    <FaPalette className="text-xl text-blue-600 [[data-theme=dark]_&]:text-blue-400" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white">
                                    Styling &amp; Design
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                <span className={skillPillClass}>
                                    <SiTailwindcss className="text-sky-500" /> Tailwind CSS
                                </span>
                                <span className={skillPillClass}>
                                    <FaBootstrap className="text-purple-600 [[data-theme=dark]_&]:text-purple-400" /> Bootstrap
                                </span>
                                <span className={skillPillClass}>
                                    <FaMobileAlt className="text-blue-600 [[data-theme=dark]_&]:text-blue-400" /> Responsive Design
                                </span>
                                <span className={skillPillClass}>
                                    <TbLayoutColumns className="text-blue-600 [[data-theme=dark]_&]:text-blue-400" /> Flexbox
                                </span>
                                <span className={skillPillClass}>
                                    <TbLayoutGrid className="text-blue-600 [[data-theme=dark]_&]:text-blue-400" /> CSS Grid
                                </span>
                            </div>
                        </div>

                        {/* Tools & Workflow */}
                        <div className={skillCardClass}>
                            <div className="flex items-center gap-4 mb-7">
                                <div className="w-11 h-11 rounded-xl bg-purple-50/90 [[data-theme=dark]_&]:bg-purple-950/60 border border-purple-100 [[data-theme=dark]_&]:border-purple-800/70 flex items-center justify-center">
                                    <FaTools className="text-xl text-purple-600 [[data-theme=dark]_&]:text-purple-400" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white">
                                    Tools &amp; Workflow
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                <span className={skillPillClass}>
                                    <FaGitAlt className="text-orange-600" /> Git
                                </span>
                                <span className={skillPillClass}>
                                    <FaGithub className="text-slate-800 [[data-theme=dark]_&]:text-slate-200" /> GitHub
                                </span>
                                <span className={skillPillClass}>
                                    <FaCode className="text-blue-600 [[data-theme=dark]_&]:text-blue-400" /> VS Code
                                </span>
                                <span className={skillPillClass}>
                                    <FaNpm className="text-red-600 [[data-theme=dark]_&]:text-red-400" /> npm
                                </span>
                                <span className={skillPillClass}>
                                    <SiVite className="text-amber-500" /> Vite
                                </span>
                                <span className={skillPillClass}>
                                    <FaGlobe className="text-emerald-600 [[data-theme=dark]_&]:text-emerald-400" /> Netlify
                                </span>
                            </div>
                        </div>

                        {/* Currently Learning */}
                        <div className={skillCardClass}>
                            <div className="flex items-center gap-4 mb-7">
                                <div className="w-11 h-11 rounded-xl bg-rose-50/90 [[data-theme=dark]_&]:bg-rose-950/60 border border-rose-100 [[data-theme=dark]_&]:border-rose-800/70 flex items-center justify-center">
                                    <FaBookOpen className="text-xl text-rose-600 [[data-theme=dark]_&]:text-rose-400" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white">
                                    Currently Learning
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                <span className={skillPillClass}>
                                    <SiTypescript className="text-blue-600 [[data-theme=dark]_&]:text-blue-400" /> TypeScript
                                </span>
                                <span className={skillPillClass}>
                                    <FaLayerGroup className="text-slate-900 [[data-theme=dark]_&]:text-white" /> Next.js
                                </span>
                                <span className={skillPillClass}>
                                    <SiRedux className="text-purple-600 [[data-theme=dark]_&]:text-purple-400" /> Redux
                                </span>
                                <span className={skillPillClass}>
                                    <TbBolt className="text-cyan-500" /> Advanced React
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
      id="why-me"
      className="relative overflow-hidden py-16 md:py-24 px-4 sm:px-6 bg-white text-slate-900 [[data-theme=dark]_&]:bg-slate-950 [[data-theme=dark]_&]:text-slate-100 border-b border-slate-200 [[data-theme=dark]_&]:border-slate-800 transition-colors duration-300"
    >
      {/* Soft Blue & Slate Background Blur Shapes */}
      <div className="pointer-events-none absolute top-12 -right-24 w-72 h-72 bg-blue-200/35 [[data-theme=dark]_&]:bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-12 -left-24 w-80 h-80 bg-slate-200/50 [[data-theme=dark]_&]:bg-indigo-600/15 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 [[data-theme=dark]_&]:text-blue-400 bg-blue-50/80 [[data-theme=dark]_&]:bg-blue-950/60 backdrop-blur-sm border border-blue-200/70 [[data-theme=dark]_&]:border-blue-800/70 px-3 py-1 rounded-full mb-3">
            Value Proposition
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-3 tracking-tight">
            Why{" "}
            <span className="text-blue-600 [[data-theme=dark]_&]:text-blue-400">
              Work With Me
            </span>
          </h2>

          <p className="text-slate-600 [[data-theme=dark]_&]:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
            I build scalable, high-performance applications with a strong focus on
            clean architecture and exceptional user experience.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {/* Card 1 */}
          <div className={cardClass}>
            <div className={iconBoxClass}>
              <FaLayerGroup className={iconClass} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-3">
              End-to-End Development
            </h3>

            <p className="text-slate-600 [[data-theme=dark]_&]:text-slate-300 text-sm sm:text-base leading-relaxed">
              From database architecture to pixel-perfect frontend interfaces, I
              handle the entire stack seamlessly.
            </p>
          </div>

          {/* Card 2 */}
          <div className={cardClass}>
            <div className={iconBoxClass}>
              <FaCode className={iconClass} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-3">
              Clean, Maintainable Code
            </h3>

            <p className="text-slate-600 [[data-theme=dark]_&]:text-slate-300 text-sm sm:text-base leading-relaxed">
              I write clean, organized and reusable code that is easy to read,
              maintain and scale.
            </p>
          </div>

          {/* Card 3 */}
          <div className={cardClass}>
            <div className={iconBoxClass}>
              <FaBolt className={iconClass} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-3">
              Performance Optimized
            </h3>

            <p className="text-slate-600 [[data-theme=dark]_&]:text-slate-300 text-sm sm:text-base leading-relaxed">
              I build fast, responsive applications that provide smooth and
              excellent user experiences.
            </p>
          </div>

          {/* Card 4 */}
          <div className={cardClass}>
            <div className={iconBoxClass}>
              <FaRocket className={iconClass} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-3">
              Modern Tech Stack
            </h3>

            <p className="text-slate-600 [[data-theme=dark]_&]:text-slate-300 text-sm sm:text-base leading-relaxed">
              I work with modern technologies like React.js, Node.js, Express.js
              and MongoDB.
            </p>
          </div>

          {/* Card 5 */}
          <div className={cardClass}>
            <div className={iconBoxClass}>
              <FaRegCommentDots className={iconClass} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-3">
              Clear Communication
            </h3>

            <p className="text-slate-600 [[data-theme=dark]_&]:text-slate-300 text-sm sm:text-base leading-relaxed">
              I believe in clear communication, teamwork and understanding
              project requirements.
            </p>
          </div>

          {/* Card 6 */}
          <div className={cardClass}>
            <div className={iconBoxClass}>
              <FaRegCheckCircle className={iconClass} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-3">
              Reliable Delivery
            </h3>

            <p className="text-slate-600 [[data-theme=dark]_&]:text-slate-300 text-sm sm:text-base leading-relaxed">
              I focus on delivering quality work, following project requirements
              and meeting agreed deadlines.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Contact/>
        </div>
    );
};