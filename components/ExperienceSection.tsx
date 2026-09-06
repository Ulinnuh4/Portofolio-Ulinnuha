import { experience } from "@/data/experience";
import Timeline from "./Timeline";

export default function ExperienceSection() {
  const items = experience.map((exp) => ({
    title: exp.role,
    subtitle: exp.company,
    period: exp.period,
    description: exp.description,
  }));

  return (
    <section id="pengalaman" className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-12">
          Pengalaman
        </h2>
        <Timeline items={items} />
      </div>
    </section>
  );
}
