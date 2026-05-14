import { useEffect, useState } from "react";
import { RESERVE_URL } from "@/lib/reserve";

const links = [
  { href: "#about", label: "За нас" },
  { href: "#menu", label: "Меню" },
  { href: "#gallery", label: "Галерия" },
  { href: "#reviews", label: "Отзиви" },
  { href: "#location", label: "Контакти" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur shadow-sm border-b border-border" : "bg-transparent"}`}>
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <a href="#top" className={`font-display text-2xl font-bold tracking-wide ${scrolled ? "text-primary" : "text-white"}`}>
          Gustoza
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className={`text-sm font-medium transition-colors ${scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}>
              {l.label}
            </a>
          ))}
          <a href={RESERVE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-accent text-accent-foreground px-5 py-2 text-sm font-semibold hover:brightness-95 transition">
            Резервирай
          </a>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold shadow-sm"
          >
            Резервирай
          </a>

          <button
            aria-label="Меню"
            onClick={() => setOpen(o => !o)}
            className={`p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-5 py-4 gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-foreground font-medium">{l.label}</a>
            ))}
            <a href={RESERVE_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mt-2 text-center rounded-full bg-accent text-accent-foreground py-3 font-semibold">Резервирай маса</a>
          </nav>
        </div>
      )}
    </header>
  );
}
