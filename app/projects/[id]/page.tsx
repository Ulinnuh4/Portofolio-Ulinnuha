import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProjectById, projects } from "@/data/projects";

// generateStaticParams membuat Next.js men-generate halaman statis
// untuk setiap id proyek yang ada di data/projects.ts saat proses build.
// Ini membuat halaman detail sangat cepat diakses di production.
export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

// Metadata dinamis: judul tab browser akan menyesuaikan judul proyek.
export function generateMetadata({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);
  return {
    title: project ? `${project.title} — Portofolio` : "Proyek tidak ditemukan",
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = getProjectById(params.id);

  // Jika id di URL tidak ditemukan di data, tampilkan halaman 404 bawaan Next.js.
  if (!project) {
    notFound();
  }

  return (
    <article className="pt-28 pb-24">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Link
          href="/#karya"
          className="inline-flex items-center gap-2 font-sans text-sm text-muted hover:text-ink transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
          Kembali ke semua karya
        </Link>

        <header className="max-w-2xl mb-10">
          <p className="font-sans text-sm text-accent mb-3">
            {project.category} · {project.year}
          </p>
          <h1 className="font-display text-3xl md:text-5xl leading-tight text-ink">
            {project.title}
          </h1>
        </header>

        {/* Galeri gambar proyek */}
        <div className="mb-12 space-y-4">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-surface">
            <Image
              src={project.images[0]}
              alt={`${project.title} — tampilan utama`}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          {project.images.length > 1 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.images.slice(1).map((image, index) => (
                <div
                  key={image}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl bg-surface"
                >
                  <Image
                    src={image}
                    alt={`${project.title} — gambar tambahan ${index + 2}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Layout Grid 2 Kolom untuk area bawah */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
          
          {/* KOLOM KIRI: Deskripsi & Peran */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-sans text-sm text-muted mb-3">Deskripsi</h2>
              <p className="font-sans text-base text-ink leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h2 className="font-sans text-sm text-muted mb-2">Peran</h2>
              <p className="font-sans text-base text-ink">{project.role}</p>
            </div>
          </div>

          {/* KOLOM KANAN: Tools, Akses Login, & Tombol Link */}
          <aside className="space-y-8">
            
            {/* Bagian Tools */}
            <div>
              <h2 className="font-sans text-sm text-muted mb-2">Tools</h2>
              <ul className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full bg-surface px-3 py-1 font-sans text-xs text-ink"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bagian Akses Web / Credentials */}
            {project.credentials && project.credentials.length > 0 && (
              <div className="pt-2">
                <h2 className="font-sans text-sm text-muted mb-2">Untuk Akses Web Gunakan Akun Dibawah ini :</h2>
                <ul className="flex flex-col gap-3">
                  {project.credentials.map((cred, index) => (
                    <li
                      key={index}
                      className="rounded-xl bg-surface p-4 font-sans text-sm text-ink"
                    >
                      <p className="font-semibold mb-2">{cred.role}</p>
                      <div className="flex flex-col gap-1 text-xs">
                        <span className="text-muted">Username: <br/><span className="text-ink">{cred.username}</span></span>
                        <span className="text-muted mt-1">Password: <br/><span className="text-ink">{cred.password}</span></span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bagian Tombol Link */}
            {project.links.length > 0 && (
              <div className="flex flex-col gap-3 pt-2">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-2 rounded-full bg-ink px-5 py-3 font-sans text-sm text-paper transition-colors hover:bg-accent"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                  </a>
                ))}
              </div>
            )}
            
          </aside>
        </div>
      </div>
    </article>
  );
}