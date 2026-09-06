export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto max-w-content px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-sans text-xs text-muted">
          © {new Date().getFullYear()} Ulinnuha. Dibuat dengan Next.js &amp;
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
