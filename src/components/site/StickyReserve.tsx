import { RESERVE_URL } from "@/lib/reserve";

export function StickyReserve() {
  return (
    <>
      {/* Mobile: full-width reserve bar */}
      <div className="md:hidden fixed bottom-4 inset-x-4 z-30">
        <a
          href={RESERVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground py-4 font-semibold shadow-warm"
        >
          Резервирай маса
        </a>
      </div>

      {/* Desktop: "Call now" floating button bottom-right */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-30">
        <a
          href="tel:+359888231246"
          className="flex items-center gap-3 rounded-full bg-accent text-accent-foreground px-6 py-3.5 font-semibold shadow-warm hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.18 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          Обади се сега
        </a>
      </div>
    </>
  );
}
