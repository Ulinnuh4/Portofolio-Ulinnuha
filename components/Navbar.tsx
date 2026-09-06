import Link from "next/link";

const navItems = [
  { label: "Tentang Saya", href: "/#tentang" },
  { label: "Projek", href: "/#karya" },
  { label: "Pengalaman", href: "/#pengalaman" },
  { label: "Pencapaian", href: "/#pencapaian" },
  { label: "Pendidikan", href: "/#pendidikan" },
  { label: "Kontak", href: "/#kontak" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper/80 backdrop-blur-sm border-b border-line">
      <nav className="mx-auto max-w-content px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-lg text-ink">
          Portofolio Ulinnuha
        </Link>
        <ul className="hidden sm:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-sans text-sm text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
