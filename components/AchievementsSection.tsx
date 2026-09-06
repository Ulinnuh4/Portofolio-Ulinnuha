import Image from "next/image";
import { Award } from "lucide-react";
import { achievements } from "@/data/achievements";

export default function AchievementsSection() {
  return (
    <section id="pencapaian" className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-12">
          Pencapaian
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
          {achievements.map((item, index) => (
            <div key={index} className="flex gap-4">
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Award className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <div className="flex-1">
                <p className="font-sans text-xs text-muted mb-1">
                  {item.issuer} · {item.year}
                </p>
                <h3 className="font-sans text-base font-medium text-ink">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="mt-1 font-sans text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.images && item.images.length > 0 && (
                  <div className="mt-3 flex gap-2">
                    {item.images.map((image, imgIndex) => (
                      <a
                        key={image}
                        href={image}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Lihat bukti sertifikat ${item.title} ${imgIndex + 1}`}
                        className="group relative h-16 w-24 shrink-0 overflow-hidden rounded-md ring-1 ring-line transition-all hover:ring-accent"
                      >
                        <Image
                          src={image}
                          alt={`Bukti sertifikat — ${item.title}`}
                          fill
                          sizes="96px"
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
