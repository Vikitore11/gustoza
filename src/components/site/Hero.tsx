import { RESERVE_URL } from "@/lib/reserve";
const hero = "/photos/g01.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center justify-center text-center text-white overflow-hidden">
      <img src={hero} alt="Гръцка кухня в Gustosa" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1280} />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      <div className="relative z-10 px-5 max-w-3xl mx-auto pt-20 pb-16">
        <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-accent mb-5">Est. 1996 · София</p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Автентичен гръцки вкус в София
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl mx-auto">
          Прясна риба, морски деликатеси, традиционни рецепти и уютна атмосфера на истинска гръцка таверна.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={RESERVE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-8 py-4 font-semibold shadow-warm hover:brightness-95 transition">
            Резервирай маса
          </a>
          <a href="#menu" className="inline-flex items-center justify-center rounded-full border-2 border-white/80 text-white px-8 py-4 font-semibold hover:bg-white hover:text-primary transition">
            Виж менюто
          </a>
        </div>
      </div>
    </section>
  );
}
