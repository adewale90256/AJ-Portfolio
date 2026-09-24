import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipient = "your-email@example.com";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Let's Work <span className="text-blue-400">Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Have a project in mind, a question, or an opportunity to discuss?
            I'd love to hear from you. Send me a message and let's connect.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact information */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Let's talk about your project
            </h3>

            <p className="mb-8 max-w-lg leading-7 text-gray-400">
              I'm interested in building useful, accessible, and engaging
              digital experiences. Whether you're looking for a developer, have
              a project idea, or simply want to connect, feel free to reach out.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:adewalejohn688@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-blue-500/40 hover:bg-white/[0.06]"
              >
                <div className="rounded-lg bg-blue-500/10 p-3 text-blue-400">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email Me</p>
                  <p className="mt-1 text-white transition group-hover:text-blue-400">
                    adewalejohn688@gmail.com
                  </p>
                </div>

                <ArrowUpRight
                  className="ml-auto text-gray-500 transition group-hover:text-blue-400"
                  size={20}
                />
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="rounded-lg bg-violet-500/10 p-3 text-violet-400">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="mt-1 text-white">Nigeria</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8">
              <p className="mb-4 text-sm text-gray-400">
                Find me on social platforms
              </p>

              <div className="flex gap-4">
                <a
                  href="https://github.com/adewale90256"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-gray-400 transition hover:border-blue-500/40 hover:text-blue-400"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-gray-400 transition hover:border-blue-500/40 hover:text-blue-400"
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-[#111318] p-6 sm:p-8"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-lg border border-white/10 bg-[#0b0d12] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/10 bg-[#0b0d12] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                className="w-full rounded-lg border border-white/10 bg-[#0b0d12] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me a little about your project or inquiry..."
                className="w-full resize-none rounded-lg border border-white/10 bg-[#0b0d12] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-600"
            >
              Send Message
              <Send size={18} />
            </button>

            <p className="mt-4 text-center text-xs text-gray-500">
              This form opens your default email application to send the
              message.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
