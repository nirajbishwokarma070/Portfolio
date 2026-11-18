import Image from "next/image";
import { ExternalLink, GitBranch } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section-border scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Projects"
          title="Some Things I've Built"
          description="A selection of projects I've worked on while learning and developing my web development skills."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden border border-border bg-secondary-bg/40 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-6 md:p-7">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    Project {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="text-xs text-secondary">{project.category}</p>
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {project.title}
                </h3>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-secondary">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="border border-border px-2.5 py-1 text-xs text-secondary"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
                {(project.githubUrl || project.liveUrl) && (
                  <div className="mt-6 flex items-center gap-5 border-t border-border pt-5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent"
                      >
                        <GitBranch size={16} /> GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
