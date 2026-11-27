
import { useState } from "react";
import emailjs from "@emailjs/browser";
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
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Send message with EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setIsSuccess(false);
    setStatus("Sending your message...");

    try {
      const templateParams = {
        from_name: formData.from_name.trim(),
        from_email: formData.from_email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      };

      const response = await emailjs.send(
        "service_5yofuw4",
        "template_20zfjs9",
        templateParams,
        "6cLnw3OxgIdw_7J9m"
      );

      console.log("Email sent successfully:", response);

      setIsSuccess(true);
      setStatus("Message sent successfully! Thank you for contacting me. 🎉");

      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setIsSuccess(false);
      setStatus(
        error?.text ||
          error?.message ||
          "Failed to send message. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  const inputClass =
    "w-full px-3.5 py-2 text-sm text-slate-800 [[data-theme=dark]_&]:text-slate-100 placeholder-slate-400 [[data-theme=dark]_&]:placeholder-slate-500 bg-white/80 [[data-theme=dark]_&]:bg-slate-800/80 backdrop-blur-sm border border-slate-200/90 [[data-theme=dark]_&]:border-slate-700/80 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-600 [[data-theme=dark]_&]:focus:border-blue-400 transition";

  return (
    <section
      id="contact"
      className="relative overflow-hidden w-full bg-white text-slate-900 [[data-theme=dark]_&]:bg-slate-950 [[data-theme=dark]_&]:text-slate-100 py-14 md:py-20 px-4 sm:px-6 border-b border-slate-200 [[data-theme=dark]_&]:border-slate-800 transition-colors duration-300"
    >
      {/* Background Shapes */}
      <div className="pointer-events-none absolute top-14 -left-24 w-72 h-72 bg-blue-200/35 [[data-theme=dark]_&]:bg-blue-600/20 rounded-full blur-3xl" />

      <div className="pointer-events-none absolute bottom-14 -right-24 w-80 h-80 bg-slate-200/50 [[data-theme=dark]_&]:bg-indigo-600/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-10 text-center md:text-left">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 [[data-theme=dark]_&]:text-blue-400 bg-blue-50/80 [[data-theme=dark]_&]:bg-blue-950/60 backdrop-blur-sm border border-blue-200/70 [[data-theme=dark]_&]:border-blue-800/70 px-3 py-1 rounded-full mb-3">
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-2 tracking-tight">
            Let's{" "}
            <span className="text-blue-600 [[data-theme=dark]_&]:text-blue-400">
              Connect
            </span>
          </h2>

          <p className="text-slate-600 [[data-theme=dark]_&]:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto md:mx-0">
            Have a project in mind or want to collaborate? Drop me a message and I
            will get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white/75 [[data-theme=dark]_&]:bg-slate-900/75 backdrop-blur-lg p-5 sm:p-6 rounded-2xl border border-slate-200/80 [[data-theme=dark]_&]:border-slate-800/90 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-4">
              Send a message
            </h3>

            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-3"
            >
              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={100}
                  className={inputClass}
                />

                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="Email address"
                  autoComplete="email"
                  required
                  maxLength={150}
                  className={inputClass}
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                minLength={2}
                maxLength={150}
                className={inputClass}
              />

              {/* Message */}
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                minLength={10}
                maxLength={5000}
                className={`${inputClass} resize-y`}
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-blue-600/90 hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed backdrop-blur-md border border-blue-400/40 text-white py-2.5 px-5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(37,99,235,0.22)] transition cursor-pointer"
              >
                <FaPaperPlane className="text-xs" />

                <span>
                  {isSending ? "Sending..." : "Send Message"}
                </span>
              </button>

              {/* Status Message */}
              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-center text-xs sm:text-sm font-medium pt-2 ${
                    isSuccess
                      ? "text-emerald-600 [[data-theme=dark]_&]:text-emerald-400"
                      : isSending
                      ? "text-blue-600 [[data-theme=dark]_&]:text-blue-400"
                      : "text-red-600 [[data-theme=dark]_&]:text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-5 bg-white/75 [[data-theme=dark]_&]:bg-slate-900/75 backdrop-blur-lg p-5 sm:p-6 rounded-2xl border border-slate-200/80 [[data-theme=dark]_&]:border-slate-800/90 shadow-[0_4px_20px_rgba(15,23,42,0.05)] flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 [[data-theme=dark]_&]:text-white mb-5">
                Contact Info
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-blue-50/90 [[data-theme=dark]_&]:bg-blue-950/60 border border-blue-200/70 [[data-theme=dark]_&]:border-blue-800/70 text-blue-600 [[data-theme=dark]_&]:text-blue-400 flex items-center justify-center shrink-0">
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
                  <div className="w-10 h-10 rounded-full bg-blue-50/90 [[data-theme=dark]_&]:bg-blue-950/60 border border-blue-200/70 [[data-theme=dark]_&]:border-blue-800/70 text-blue-600 [[data-theme=dark]_&]:text-blue-400 flex items-center justify-center shrink-0">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 [[data-theme=dark]_&]:text-slate-400">
                      Phone
                    </p>

                    <a
                      href="tel:+8801615725637"
                      className="text-sm text-slate-800 [[data-theme=dark]_&]:text-slate-200 font-medium hover:text-blue-600 [[data-theme=dark]_&]:hover:text-blue-400 transition"
                    >
                      +8801615725637
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 mt-6 border-t border-slate-200/70 [[data-theme=dark]_&]:border-slate-800">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 [[data-theme=dark]_&]:text-slate-400 mb-3">
                Find me on
              </p>

              <div className="flex flex-wrap items-center gap-2.5">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/8801615725637"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-full bg-white/80 [[data-theme=dark]_&]:bg-slate-800/80 border border-slate-200/80 [[data-theme=dark]_&]:border-slate-700/80 text-emerald-600 [[data-theme=dark]_&]:text-emerald-400 hover:bg-emerald-50 [[data-theme=dark]_&]:hover:bg-slate-700 flex items-center justify-center transition"
                >
                  <FaWhatsapp />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1Lw1HMYCiC/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white/80 [[data-theme=dark]_&]:bg-slate-800/80 border border-slate-200/80 [[data-theme=dark]_&]:border-slate-700/80 text-blue-600 [[data-theme=dark]_&]:text-blue-400 hover:bg-blue-50 [[data-theme=dark]_&]:hover:bg-slate-700 flex items-center justify-center transition"
                >
                  <FaFacebookF />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/mehedi-ha/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/80 [[data-theme=dark]_&]:bg-slate-800/80 border border-slate-200/80 [[data-theme=dark]_&]:border-slate-700/80 text-blue-700 [[data-theme=dark]_&]:text-blue-400 hover:bg-blue-50 [[data-theme=dark]_&]:hover:bg-slate-700 flex items-center justify-center transition"
                >
                  <FaLinkedinIn />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/mehedihasanmehedi009"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-full bg-white/80 [[data-theme=dark]_&]:bg-slate-800/80 border border-slate-200/80 [[data-theme=dark]_&]:border-slate-700/80 text-slate-800 [[data-theme=dark]_&]:text-slate-200 hover:bg-slate-100 [[data-theme=dark]_&]:hover:bg-slate-700 flex items-center justify-center transition"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
