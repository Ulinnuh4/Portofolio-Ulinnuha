import { education } from "@/data/education";
import Timeline from "./Timeline";

export default function EducationSection() {
  const items = education.map((edu) => ({
    title: edu.institution,
    subtitle: edu.major,
    period: edu.period,
    meta: edu.gpa ? `IPK: ${edu.gpa}` : undefined,
    description: edu.description,
  }));

  return (
    <section id="pendidikan" className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-12">
          Pendidikan
        </h2>
        <Timeline items={items} />
      </div>
    </section>
  );
}
