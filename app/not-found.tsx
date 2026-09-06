import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <p className="font-display text-6xl text-ink mb-4">404</p>
      <p className="font-sans text-muted mb-8">
        Halaman yang kamu cari tidak ditemukan.
      </p>
      <Link
        href="/"
        className="font-sans text-sm text-accent hover:underline"
      >
        Kembali ke beranda
      </Link>
    </div>
  );
}
