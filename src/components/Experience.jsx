import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Code2,
  HeartHandshake,
  ExternalLink,
} from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Venix Partners Limited",
    type: "Full-time",
    period: "February 2026 – Present",
    location: "Nigeria",
    icon: BriefcaseBusiness,

    description:
      "Working as a frontend developer, contributing to web development projects and building user interfaces with modern frontend technologies. My work involves translating design concepts and business requirements into functional, responsive web experiences.",

    responsibilities: [
      "Developing responsive and interactive user interfaces.",
      "Building and maintaining frontend features using React and modern JavaScript.",
      "Working with styling frameworks and frontend development tools.",
      "Contributing to the development and improvement of web applications.",
    ],

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Git",
      "GitHub",
    ],
  },

  {
    role: "Freelance Frontend Developer",
    company: "Independent Projects",
    type: "Freelance",
    period: "Freelance Engagements",
    location: "Nigeria",
    icon: Code2,

    description:
      "Working independently on web development projects, helping clients and businesses establish their online presence through responsive websites and practical digital experiences. My freelance work includes business websites, product catalogues, and customer-focused web interfaces.",

    responsibilities: [
      "Developing responsive websites tailored to project requirements.",
      "Building reusable React components and interactive user interfaces.",
      "Implementing product catalogues and business-focused website features.",
      "Working with modern frontend technologies and content management tools.",
      "Turning project ideas and requirements into functional web experiences.",
    ],

    projects: [
      {
        name: "Rehoboth EN Gilga",
        description:
          "An IT wholesale website focused on product discovery, category browsing, and quotation requests.",
      },
      {
        name: "O'S Stitches",
        description:
          "A fashion portfolio and catalogue designed to showcase garments, display pricing, and support customer interactions.",
      },
    ],

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Firebase",
      "Sanity CMS",
    ],
  },

  {
    role: "Volunteer Frontend Developer",
    company: "Cyperbunk",
    type: "Volunteer",
    period: "Volunteer Engagement",
    location: "Nigeria",
    icon: HeartHandshake,

    description:
      "Contributing frontend development skills in a volunteer capacity, supporting web development activities and gaining practical experience collaborating on development work.",

    responsibilities: [
      "Contributing to frontend development activities.",
      "Applying modern frontend development practices.",
      "Supporting the development of responsive user interfaces.",
      "Collaborating on development tasks in a volunteer capacity.",
    ],

    technologies: [
      "Frontend Development",
      "JavaScript",
      "React",
      "HTML",
      "CSS",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#080b12] px-6 py-24 sm:py-32 lg:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-blue-600/6 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Professional Journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Experience &{" "}
            <span className="bg-lineart-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Contributions
            </span>
          </h2>

          <p className="mt-5 text-sm leading-8 text-gray-400 sm:text-base">
            My journey as a frontend developer includes professional employment,
            freelance projects, and volunteer contributions. Each experience has
            helped me develop my technical skills and approach to building
            digital experiences.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative ml-3 space-y-10 border-l border-white/10 pl-8 sm:ml-5 sm:pl-12">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <article
                key={experience.company}
                className="group relative rounded-2xl border border-white/8 bg-[#0d111b] p-6 transition duration-500 hover:border-blue-400/25 hover:shadow-2xl hover:shadow-blue-950/10 sm:p-8 lg:p-10"
              >
                {/* Timeline Marker */}
                <div className="absolute -left-10.25 top-8 flex h-5 w-5 items-center justify-center rounded-full border-4 border-[#080b12] bg-blue-400 sm:-left-14.25">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>

                {/* Experience Header */}
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
                  <div className="flex gap-4 sm:gap-5">
                    {/* Experience Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:bg-blue-500/20 sm:h-14 sm:w-14">
                      <Icon size={24} />
                    </div>

                    {/* Role and Company */}
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-300">
                          {experience.type}
                        </span>

                        <span className="text-xs font-medium text-gray-600">
                          EXPERIENCE 0{index + 1}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white transition duration-300 group-hover:text-blue-400 sm:text-2xl">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-base font-medium text-blue-400">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  {/* Period */}
                  <div className="flex flex-wrap gap-3 lg:flex-col lg:items-end">
                    <span className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/3 px-4 py-2.5 text-xs font-medium text-gray-400">
                      <CalendarDays size={15} />
                      {experience.period}
                    </span>

                    <span className="flex items-center gap-2 text-xs text-gray-500">
                      <MapPin size={15} />
                      {experience.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-7 max-w-4xl text-sm leading-8 text-gray-400 sm:text-base">
                  {experience.description}
                </p>

                {/* Responsibilities */}
                <div className="mt-8">
                  <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gray-300">
                    Key Contributions
                  </h4>

                  <ul className="space-y-3">
                    {experience.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex items-start gap-3 text-sm leading-7 text-gray-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Selected Projects */}
                {experience.projects && (
                  <div className="mt-8">
                    <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gray-300">
                      Selected Projects
                    </h4>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {experience.projects.map((project) => (
                        <div
                          key={project.name}
                          className="rounded-xl border border-white/[0.07] bg-white/2 p-5 transition duration-300 hover:border-blue-400/20 hover:bg-white/4"
                        >
                          <div className="mb-3 flex items-center justify-between gap-3">
                            <h5 className="font-semibold text-white">
                              {project.name}
                            </h5>

                            <ExternalLink
                              size={16}
                              className="shrink-0 text-gray-600"
                            />
                          </div>

                          <p className="text-sm leading-7 text-gray-500">
                            {project.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="mt-8 border-t border-white/8 pt-6">
                  <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gray-300">
                    Technologies & Tools
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-white/[0.07] bg-white/3 px-3 py-2 text-xs font-medium text-gray-400 transition duration-300 hover:border-blue-400/20 hover:text-blue-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
