import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

export const Heder = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Handle theme toggle
  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="navbar mb-4 bg-base-300 backdrop-blur-xl shadow-sm rounded-full w-full mx-auto border border-base-200/70 sticky top-3 z-50 px-2.5 sm:px-4 md:px-6">
      {/* Left */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm md:btn-md lg:hidden px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100/90 backdrop-blur-xl rounded-box z-50 mt-3 w-48 p-2 shadow-lg border border-base-200/80"
          >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Project">Project</NavLink></li>
            <li><NavLink to="/about">About Me</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* Responsive Logo: Small on Mobile, Large on PC */}
        <Link
          to="/"
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold ml-1.5 md:ml-4 tracking-tight whitespace-nowrap"
        >
          Mehedi <span className="text-blue-600">Dev</span>
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1 font-medium text-base">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Project">Project</NavLink></li>
          <li><NavLink to="/about">About Me</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>

      {/* Right: Responsive Resume Button + Theme Toggle */}
      <div className="navbar-end flex items-center gap-2 md:gap-3 md:mr-2">
        <a
          href="/Mehedi-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn bg-blue-600/90 hover:bg-blue-600 border-none text-white rounded-full font-semibold shadow-sm transition min-h-0 h-8 px-3 text-xs sm:h-9 sm:px-4 sm:text-sm md:h-10 md:px-5 md:text-sm lg:h-11 lg:px-6 lg:text-base"
        >
          Resume
        </a>

        {/* Theme toggle */}
        <label className="swap swap-rotate cursor-pointer">
          <input
            type="checkbox"
            onChange={(e) => handleTheme(e.target.checked)}
            checked={theme === "dark"}
          />
          {/* sun icon (light mode) */}
          <svg
            className="swap-off h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>

          {/* moon icon (dark mode) */}
          <svg
            className="swap-on h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14A8.05,8.05,0,0,1,9.08,5.49,8.59,8.59,0,0,1,9.33,3.5a1,1,0,0,0-.9-1.14A10.14,10.14,0,1,0,22,14.05a1,1,0,0,0-.36-1.05Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};