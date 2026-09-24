import ProjectCard from "./ProjectCard";

const projects = [
  {
    number: "01",
    title: "Rehoboth EN Gilga",
    category: "IT Wholesale Website",
    description:
      "A business website for an IT wholesale company, designed to showcase technology products and help customers explore product categories and request quotations.",
    image: "/rehoboth.png",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Sanity CMS",
      "Lucide React",
      "GitHub",
    ],
    liveUrl: "https://gadget-stores-eta.vercel.app/",
    githubUrl: "https://github.com/adewale90256",
  },
  {
    number: "02",
    title: "O'S Stitches",
    category: "Fashion Website",
    description:
      "A fashion portfolio and catalogue website designed to showcase clothing, display pricing information, and support customer enquiries and order-related interactions.",
    image: "/o.s-stitches.png",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Firebase",
      "Lucide React",
      "GitHub",
    ],
    liveUrl: "https://o-s-stitches.vercel.app/",
    githubUrl: "https://github.com/adewale90256",
  },
  {
    number: "03",
    title: "Venix Studio",
    category: "Web Development",
    description:
      "A web project built with modern frontend technologies, with a focus on presenting content through a responsive and user-friendly interface.",
    image: "/venix-studio.png",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Sanity CMS",
      "Lucide React",
      "GitHub",
    ],
    liveUrl: "https://clothing-brand-lilac.vercel.app/",
    githubUrl: "https://github.com/adewale90256",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            My Portfolio
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Featured <span className="text-blue-400">Projects</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            Here are some of the projects I've worked on, exploring modern
            frontend development, responsive interfaces, and practical solutions
            for businesses.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.number} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
