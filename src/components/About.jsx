import { ArrowUpRight, Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive interfaces and interactive web applications using modern frontend technologies.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Turning ideas and business requirements into practical, user-focused digital experiences.",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    description:
      "Exploring new technologies, improving my workflow, and strengthening my development skills.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b0f18] px-6 py-24 sm:py-32 lg:px-10"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            About Me
          </p>

          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            A little about the developer{" "}
            <span className="bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              behind the code.
            </span>
          </h2>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* About Content */}
          <div>
            <p className="text-lg leading-9 text-gray-300">
              I'm Adewale John, a frontend developer passionate about building
              modern, responsive, and user-friendly websites and web
              applications.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              My development journey started with HTML, CSS, and JavaScript.
              Since then, I've expanded my experience into React, Tailwind CSS,
              Firebase, API integration, and modern frontend development
              workflows.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              I enjoy working on projects that solve practical problems, whether
              that's building a business website, creating a product catalogue,
              or developing an interactive web application.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              I'm committed to continuous learning, writing maintainable code,
              and improving the way I approach design and development.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Let's work together
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Highlights */}
          <div className="space-y-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex gap-5 rounded-2xl border border-white/[0.07] bg-[#0d111b] p-6 transition duration-300 hover:border-blue-400/20 hover:bg-[#101624]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:bg-blue-500/20">
                    <Icon size={22} />
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-medium tracking-widest text-gray-600">
                      0{index + 1}
                    </p>

                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
