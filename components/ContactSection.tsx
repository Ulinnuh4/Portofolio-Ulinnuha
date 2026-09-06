import { Instagram, Linkedin, MessageCircle } from "lucide-react";

// GANTI nomor WhatsApp dan username di bawah ini dengan milik kamu.
// Format nomor WhatsApp: kode negara tanpa "+" atau "0" di depan.
// Contoh: nomor 0812-3456-7890 menjadi "6281234567890"
const contactLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/6282243139931?text= Halo%20Ulinnuha",
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ulinnuha814/",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/ulnnxa",
    icon: Instagram,
  },
];

export default function ContactSection() {
  return (
    <section id="kontak" className="py-20 md:py-28 border-t border-line">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">
            Mari berbincang
          </h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-8">
            Saat ini saya sangat terbuka untuk peluang perkembangan karir, kolaborasi, atau sekadar diskusi tentang teknologi dan pengembangan web. Mari berdiskusi dengan menghubungi saya melalui salah satu kanal di bawah ini.
          </p>

          <div className="flex flex-wrap gap-4">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 font-sans text-sm text-ink transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
