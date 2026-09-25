import { ArrowDown, ArrowRight, Code2, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080b12] px-6 pb-20 pt-32 lg:px-10"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-size-60px_60px" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left Content */}
        <div className="max-w-3xl">
          {/* Availability Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
            </span>

            <span className="text-xs font-medium tracking-wide text-gray-300 sm:text-sm">
              Frontend Developer · Open to new projects
            </span>
          </div>

          {/* Introduction */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Hello, I'm Adewale John
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
            I build
            <span className="mt-2 block">
              <span className="bg-linear-to-r from-blue-400 via-blue-300 to-violet-400 bg-clip-text text-transparent">
                digital experiences
              </span>
            </span>
            that make an impact.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I'm a Frontend Developer focused on building modern, responsive, and
            user-friendly websites and web applications using React, JavaScript,
            and modern frontend technologies.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            From business websites to interactive applications, I enjoy
            transforming ideas into functional digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-xl bg-blue-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
            >
              Explore My Projects
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/3 px-6 py-4 text-sm font-semibold text-gray-200 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
            >
              Get In Touch
            </a>

            <a
              href="/Adeniji-Adewale-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-blue-500/30 bg-blue-500/5 px-6 py-4 text-sm font-semibold text-blue-300 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/10"
            >
              View Resume
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex items-center gap-5">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
              Connect
            </span>

            <div className="h-px w-10 bg-white/10" />

            <a
              href="https://github.com/adewale90256"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/adeniji-adewale-6b232837a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative mx-auto w-full max-w-lg">
          {/* Outer Glow */}
          <div className="absolute inset-0 scale-90 rounded-full bg-blue-500/10 blur-[100px]" />

          {/* Developer Card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d111b]/90 shadow-2xl shadow-black/40">
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Code2 size={14} />
                developer.js
              </div>
            </div>

            {/* Code Content */}
            <div className="space-y-5 p-6 font-mono text-xs leading-7 sm:p-8 sm:text-sm">
              <div>
                <p className="text-gray-600">// A little about me</p>

                <p className="mt-3">
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-blue-300">developer</span>{" "}
                  <span className="text-gray-400">= {"{"}</span>
                </p>
              </div>

              <div className="space-y-1 pl-5">
                <p>
                  <span className="text-blue-300">name</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-green-300">"Adewale John"</span>
                  <span className="text-gray-400">,</span>
                </p>

                <p>
                  <span className="text-blue-300">role</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-green-300">"Frontend Developer"</span>
                  <span className="text-gray-400">,</span>
                </p>

                <p>
                  <span className="text-blue-300">focus</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-green-300">"Web Applications"</span>
                  <span className="text-gray-400">,</span>
                </p>

                <p>
                  <span className="text-blue-300">stack</span>
                  <span className="text-gray-400">: [</span>
                </p>

                <div className="space-y-1 pl-5">
                  <p className="text-orange-300">"React",</p>
                  <p className="text-orange-300">"JavaScript",</p>
                  <p className="text-orange-300">"Tailwind CSS",</p>
                  <p className="text-orange-300">"Firebase"</p>
                  <p className="text-orange-300">"Sanity CMS"</p>
                </div>

                <p className="text-gray-400">],</p>

                <p>
                  <span className="text-blue-300">mindset</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-green-300">"Always Learning"</span>
                </p>
              </div>

              <p className="text-gray-400">{"};"}</p>

              <div className="border-t border-white/8 pt-5">
                <p>
                  <span className="text-violet-400">export default</span>{" "}
                  <span className="text-blue-300">developer</span>
                  <span className="text-gray-400">;</span>
                </p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="flex items-center justify-between border-t border-white/8 bg-white/2 px-5 py-4">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Sparkles size={14} className="text-blue-400" />
                Turning ideas into reality
              </div>

              <span className="text-xs text-gray-600">Lagos, Nigeria</span>
            </div>
          </div>

          {/* Floating Technology Badge */}
          <div className="absolute -right-3 top-16 hidden items-center gap-3 rounded-xl border border-white/10 bg-[#111725] px-4 py-3 shadow-xl sm:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
              <Code2 size={20} />
            </div>

            <div>
              <p className="text-xs font-semibold text-white">React</p>
              <p className="text-[10px] text-gray-500">Frontend</p>
            </div>
          </div>

          {/* Bottom Badge */}
          <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-xl border border-white/10 bg-[#111725] px-4 py-3 shadow-xl sm:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
              <Sparkles size={19} />
            </div>

            <div>
              <p className="text-xs font-semibold text-white">
                Creative Solutions
              </p>
              <p className="text-[10px] text-gray-500">
                Thoughtful development
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-600 transition hover:text-blue-400 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Scroll to explore
        </span>

        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}

export default Hero;
