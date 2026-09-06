import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block"
      aria-label={`Lihat detail proyek ${project.title}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-surface">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-sans text-base font-medium text-ink group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 font-sans text-sm text-muted">
            {project.category}
          </p>
        </div>
        <span className="shrink-0 font-sans text-sm text-muted">
          {project.year}
        </span>
      </div>
    </Link>
  );
}
