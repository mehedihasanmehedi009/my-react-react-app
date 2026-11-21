 import React, { useState } from "react";
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export const Contact = () => {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent! Thank you for reaching out.");
    setFormData({
      from_name: "",
      from_email: "",
      subject: "",
      message: "",
    });
  };

  const inputClass =
    "w-full px-3.5 py-2 text-sm text-slate-800 [[data-theme=dark]_&]:text-slate-100 placeholder-slate-400 [[data-theme=dark]_&]:placeholder-slate-500 bg-white/80 [[data-theme=dark]_&]:bg-slate-800/80 backdrop-blur-sm border border-slate-200/90 [[data-theme=dark]_&]:border-slate-700/80 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-600 [[data-theme=dark]_&]:focus:border-blue-400 transition";

  return (
    <section
      id="contact"
      className="relative overflow-hidden w-full bg-white text-slate-900 [[data-theme=dark]_&]:bg-slate-950 [[data-theme=dark]_&]:text-slate-100 py-14 md:py-20 px-4 sm:px-6 border-b border-slate-200 [[data-theme=dark]_&]:border-slate-800 transition-colors duration-300"
    >
      {/* Soft Blue & Slate Background Blur Shapes */}
      <div className="pointer-events-none absolute top-14 -left-24 w-72 h-72 bg-blue-200/35 [[data-theme=dark]_&]:bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-14 -right-24 w-80 h-80 bg-slate-200/50 [[data-theme=dark]_&]:bg-indigo-600/15 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-10 text-center md:text-left">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 [[data-theme=dark]_&]:text-blue-400 bg-blue-50/80 [[data-theme=dark]_&]:bg-blue-950/60 backdrop-blur-sm border border-blue-200/70 [[data-theme=dark]_&]:border-blue-800/70 px-3 py-1 rounded-full mb-3">
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-2 tracking-tight">
            Let&apos;s{" "}
            <span className="text-blue-600 [[data-theme=dark]_&]:text-blue-400">
              Connect
            </span>
          </h2>
          <p className="text-slate-600 [[data-theme=dark]_&]:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto md:mx-0">
            Have a project in mind or want to collaborate? Drop me a message and I
            will get back to you as soon as possible.
          </p>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Card: Send a message (Compact Inputs + Glass Blur) */}
          <div className="lg:col-span-7 bg-white/75 [[data-theme=dark]_&]:bg-slate-900/75 backdrop-blur-lg p-5 sm:p-6 rounded-2xl border border-slate-200/80 [[data-theme=dark]_&]:border-slate-800/90 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-4">
              Send a message
            </h3>

            <form id="contact-form" onSubmit={handleSubmit} className="space-y-3">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className={inputClass}
                />
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className={inputClass}
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className={`${inputClass} resize-y`}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600/90 hover:bg-blue-600 backdrop-blur-md border border-blue-400/40 text-white py-2.5 px-5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(37,99,235,0.22)] transition cursor-pointer"
              >
                <FaPaperPlane className="text-xs" />
                <span>Send Message</span>
              </button>

              {status && (
                <p
                  id="form-status"
                  className="text-center text-xs sm:text-sm font-medium text-emerald-600 [[data-theme=dark]_&]:text-emerald-400 pt-1"
                >
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Right Card: Contact Info */}
          <div className="lg:col-span-5 bg-white/75 [[data-theme=dark]_&]:bg-slate-900/75 backdrop-blur-lg p-5 sm:p-6 rounded-2xl border border-slate-200/80 [[data-theme=dark]_&]:border-slate-800/90 shadow-[0_4px_20px_rgba(15,23,42,0.05)] flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-5">
                Contact Info
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-blue-50/90 [[data-theme=dark]_&]:bg-blue-950/60 border border-blue-200/70 [[data-theme=dark]_&]:border-blue-800/70 text-blue-600 [[data-theme=dark]_&]:text-blue-400 flex items-center justify-center shrink-0 text-base">
                    <FaEnvelope />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 [[data-theme=dark]_&]:text-slate-400">
                      Email
                    </p>
                    <a
                      href="mailto:mehedihasanmehedi099@gmail.com"
                      className="text-sm text-slate-800 [[data-theme=dark]_&]:text-slate-200 font-medium hover:text-blue-600 [[data-theme=dark]_&]:hover:text-blue-400 transition break-all"
                    >
                      mehedihasanmehedi099@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-blue-50/90 [[data-theme=dark]_&]:bg-blue-950/60 border border-blue-200/70 [[data-theme=dark]_&]:border-blue-800/70 text-blue-600 [[data-theme=dark]_&]:text-blue-400 flex items-center justify-center shrink-0 text-base">
                    <FaPhoneAlt className="text-sm" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 [[data-theme=dark]_&]:text-slate-400">
                      Phone
                    </p>
                    <a
                      href="tel:+8801700000000"
                      className="text-sm text-slate-800 [[data-theme=dark]_&]:text-slate-200 font-medium hover:text-blue-600 [[data-theme=dark]_&]:hover:text-blue-400 transition"
                    >
                      +8801700000000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Find me on */}
            <div className="pt-6 mt-6 border-t border-slate-200/70 [[data-theme=dark]_&]:border-slate-800">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 [[data-theme=dark]_&]:text-slate-400 mb-3">
                Find me on
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://wa.me/8801700000000"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-full bg-white/80 [[data-theme=dark]_&]:bg-slate-800/80 border border-slate-200/80 [[data-theme=dark]_&]:border-slate-700/80 text-emerald-600 [[data-theme=dark]_&]:text-emerald-400 hover:bg-emerald-50 [[data-theme=dark]_&]:hover:bg-slate-700 flex items-center justify-center transition"
                >
                  <FaWhatsapp className="text-base" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white/80 [[data-theme=dark]_&]:bg-slate-800/80 border border-slate-200/80 [[data-theme=dark]_&]:border-slate-700/80 text-blue-600 [[data-theme=dark]_&]:text-blue-400 hover:bg-blue-50 [[data-theme=dark]_&]:hover:bg-slate-700 flex items-center justify-center transition"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/80 [[data-theme=dark]_&]:bg-slate-800/80 border border-slate-200/80 [[data-theme=dark]_&]:border-slate-700/80 text-blue-700 [[data-theme=dark]_&]:text-blue-400 hover:bg-blue-50 [[data-theme=dark]_&]:hover:bg-slate-700 flex items-center justify-center transition"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a
                  href="https://github.com/programmermehedi85"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-full bg-white/80 [[data-theme=dark]_&]:bg-slate-800/80 border border-slate-200/80 [[data-theme=dark]_&]:border-slate-700/80 text-slate-800 [[data-theme=dark]_&]:text-slate-200 hover:bg-slate-100 [[data-theme=dark]_&]:hover:bg-slate-700 flex items-center justify-center transition"
                >
                  <FaGithub className="text-base" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};