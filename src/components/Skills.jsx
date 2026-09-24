import { Code2, Database, Wrench, Layers3 } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: Code2,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "React Router",
    ],
  },
  {
    title: "Backend Services & Data",
    description: "Connecting applications to services and external data.",
    icon: Database,
    skills: [
      "Firebase",
      "Firestore",
      "Firebase Authentication",
      "REST APIs",
      "Sanity CMS",
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Tools I use throughout the development process.",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vite", "VS Code", "Vercel", "Postman"],
  },
  {
    title: "Currently Exploring",
    description: "Technologies I'm actively developing my knowledge of.",
    icon: Layers3,
    skills: ["TypeScript", "Next.js", "React Native"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0b0f18] px-6 py-24 sm:py-32 lg:px-10"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-violet-600/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Technical Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Technologies I work with
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            The tools and technologies I use to build websites and applications,
            alongside the areas I'm currently exploring.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="group rounded-2xl border border-white/8 bg-[#0d111b] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:shadow-xl hover:shadow-blue-950/10 sm:p-8"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:bg-blue-500/20">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {group.title}
                  </h3>
                </div>

                <p className="mb-6 text-sm leading-7 text-gray-500">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/8 bg-white/3 px-3 py-2 text-xs font-medium text-gray-300 transition duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.07] hover:text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
