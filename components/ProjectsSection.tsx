import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="karya" className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-ink">
            Projek saya
          </h2>
          <p className="max-w-sm font-sans text-sm text-muted">
            Merupakan sebuah projek yang pernah saya kerjakan. Klik salah satu untuk
            melihat detail lengkapnya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
