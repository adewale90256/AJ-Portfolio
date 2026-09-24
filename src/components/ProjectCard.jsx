import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({
  number,
  title,
  category,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/8 bg-[#0d111b] transition duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-950/20">
      {/* Project Image */}
      <div className="relative aspect-16/10 overflow-hidden bg-[#111725]">
        {image ? (
          <img
            src={image}
            alt={`${title} website preview`}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4">
            <span className="text-5xl font-bold tracking-tighter text-white/10">
              {number}
            </span>

            <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
              Project Preview
            </p>
          </div>
        )}

        {/* Project Number */}
        <span className="absolute left-5 top-5 rounded-lg border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-medium text-gray-300 backdrop-blur-md">
          {number}
        </span>

        {/* Category */}
        <span className="absolute bottom-5 left-5 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300 backdrop-blur-md">
          {category}
        </span>
      </div>

      {/* Project Content */}
      <div className="p-6 sm:p-7">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold tracking-tight text-white transition duration-300 group-hover:text-blue-400 sm:text-2xl">
            {title}
          </h3>

          <ArrowUpRight
            size={22}
            className="shrink-0 text-gray-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
          />
        </div>

        <p className="min-h-21 text-sm leading-7 text-gray-400">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/[0.07] bg-white/3 px-3 py-1.5 text-xs font-medium text-gray-400"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/8 pt-5">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-blue-400"
            >
              Live Preview
              <ArrowUpRight size={16} />
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/3 px-4 py-2.5 text-sm font-medium text-gray-300 transition duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            >
              <FaGithub size={16} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
