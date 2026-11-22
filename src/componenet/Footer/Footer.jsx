 import React, { useState } from "react";
import { Link } from "react-router";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowRight,
  FaArrowUp,
  FaCheck,
  FaFileDownload,
} from "react-icons/fa";

export const Footer = () => {
  const [copiedText, setCopiedText] = useState("");
  const currentYear = new Date().getFullYear();

  const email = "mehedihasanmehedi099@gmail.com";
  const phone = "+8801615725637";

  const handleCopy = (value, label) => {
    navigator.clipboard.writeText(value);
    setCopiedText(`${label} copied!`);
    setTimeout(() => {
      setCopiedText("");
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-base-100/80 backdrop-blur-xl text-base-content/80 pt-14 pb-6 border-t border-base-300/70 transition-colors duration-300">
      {/* Soft Blue Blur Glows (Light & Dark aware) */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-blue-500/15 dark:bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 bg-blue-400/10 dark:bg-indigo-500/15 rounded-full blur-3xl"></div>

      {/* Copy Feedback Toast */}
      {copiedText && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-blue-600 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg transition-all">
          <FaCheck className="text-xs" />
          <span>{copiedText}</span>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Footer Main */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-base-300/70">
          {/* Logo & About */}
          <div>
            <Link
              to="/"
              onClick={scrollToTop}
              className="inline-block text-2xl sm:text-3xl font-bold text-base-content mb-3 tracking-tight"
            >
              Mehedi <span className="text-blue-600"> Developer</span>
            </Link>

            <p className="text-base-content/70 text-sm sm:text-base leading-relaxed max-w-sm">
              Full Stack Developer passionate about building modern, responsive and
              user-friendly web applications. Always learning and creating
              something new.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 mt-5">
              <a
                href="https://github.com/mehedihasanmehedi009"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="w-9 h-9 rounded-full bg-base-200/80 backdrop-blur-sm border border-base-300/80 text-base-content/80 hover:bg-blue-600 hover:text-white hover:border-blue-600 flex items-center justify-center transition"
              >
                <FaGithub className="text-base" />
              </a>

              <a
                href="https://www.linkedin.com/in/mehedi-ha/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-9 h-9 rounded-full bg-base-200/80 backdrop-blur-sm border border-base-300/80 text-base-content/80 hover:bg-blue-600 hover:text-white hover:border-blue-600 flex items-center justify-center transition"
              >
                <FaLinkedinIn className="text-sm" />
              </a>

              <a
                href="https://www.facebook.com/share/1Lw1HMYCiC/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="w-9 h-9 rounded-full bg-base-200/80 backdrop-blur-sm border border-base-300/80 text-base-content/80 hover:bg-blue-600 hover:text-white hover:border-blue-600 flex items-center justify-center transition"
              >
                <FaFacebookF className="text-sm" />
              </a>

              <a
                href={`mailto:${email}`}
                aria-label="Email"
                title="Send Email"
                className="w-9 h-9 rounded-full bg-base-200/80 backdrop-blur-sm border border-base-300/80 text-base-content/80 hover:bg-blue-600 hover:text-white hover:border-blue-600 flex items-center justify-center transition"
              >
                <FaEnvelope className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-base-content mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2.5 text-sm sm:text-base text-base-content/75 font-medium">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="hover:text-blue-600 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Project"
                  className="hover:text-blue-600 transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-600 transition"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-600 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Interactive Contact & Resume */}
          <div>
            <h3 className="text-lg font-bold text-base-content mb-4">
              Get In Touch
            </h3>

            <div className="space-y-3 text-sm">
              {/* Copyable Email */}
              <div className="flex items-center justify-between gap-2 bg-base-200/65 backdrop-blur-sm border border-base-300/80 px-3 py-2 rounded-lg">
                <a
                  href={`mailto:${email}`}
                  className="hover:text-blue-600 transition truncate font-medium text-base-content flex items-center gap-2"
                >
                  <FaEnvelope className="text-blue-600 shrink-0" />
                  <span className="truncate">{email}</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(email, "Email")}
                  className="text-xs font-semibold text-blue-600 hover:bg-blue-600 hover:text-white px-2.5 py-1 rounded bg-blue-600/10 cursor-pointer shrink-0 transition"
                  title="Copy Email"
                >
                  Copy
                </button>
              </div>

              {/* Copyable Phone */}
              <div className="flex items-center justify-between gap-2 bg-base-200/65 backdrop-blur-sm border border-base-300/80 px-3 py-2 rounded-lg">
                <a
                  href={`tel:${phone}`}
                  className="hover:text-blue-600 transition font-medium text-base-content flex items-center gap-2"
                >
                  <FaPhoneAlt className="text-blue-600 shrink-0 text-xs" />
                  <span>{phone}</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(phone, "Phone")}
                  className="text-xs font-semibold text-blue-600 hover:bg-blue-600 hover:text-white px-2.5 py-1 rounded bg-blue-600/10 cursor-pointer shrink-0 transition"
                  title="Copy Phone"
                >
                  Copy
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 mt-5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-600/90 hover:bg-blue-600 backdrop-blur-md border border-blue-400/40 text-white px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm shadow-[0_4px_12px_rgba(37,99,235,0.22)] transition-all"
              >
                <span>Let&apos;s Talk</span>
                <FaArrowRight className="text-xs" />
              </Link>

              <a
                href="/Mehedi-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-base-200/90 hover:bg-base-300 text-base-content border border-base-300 px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all"
              >
                <FaFileDownload className="text-xs text-blue-600" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 text-center">
          <p className="text-base-content/60 text-xs sm:text-sm">
            © {currentYear} Mehedi 
            dev. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-base-content/60 text-xs sm:text-sm">
              Built with{" "}
              <span className="text-blue-600 font-semibold">
                React &amp; Tailwind
              </span>
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              title="Back to top"
              className="w-8 h-8 rounded-full bg-blue-600/90 hover:bg-blue-600 text-white flex items-center justify-center shadow-sm transition cursor-pointer"
            >
              <FaArrowUp className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};