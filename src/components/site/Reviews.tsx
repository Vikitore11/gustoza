const reviews = [
  { name: "Пенчо П.", text: "Нямам думи. Истински ГРЪЦКИ ресторант. Все едно си на Никити. Благодаря на целия екип и шефовете за прекрасната вечеря.", rating: 5 },
  { name: "Катерина Ч.", text: "Отлично обслужване, прекрасна обстановка, а храната.... Пържените калмари бяха по-добри от повечето ресторанти в Гърция, където съм била. Наслада за небцето. Благодаря!", rating: 5 },
  { name: "Костадин К.", text: "Все още няма по-добър гръцки ресторант в България! Супер прясна морска храна и риба и любезен собственик.", rating: 5 },
  { name: "Ирена Д.", text: "Абсолютно всичко беше изключително вкусно! Прясно! Обслужването - на ниво. Доколкото знам, няколко пъти в седмицата правят свежо зареждане от Гърция.", rating: 5 },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-sand">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="uppercase tracking-[0.2em] text-xs text-accent font-semibold mb-4">Отзиви</p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary">Какво казват гостите ни</h2>
          <div className="mt-4 inline-flex items-center gap-2 text-muted-foreground">
            <Stars n={5} />
            <span className="font-semibold text-foreground">4.1</span>
            <span>· над 2000 отзива в Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-center">
          {/* Ляво — 2 ревюта */}
          <div className="flex flex-col gap-5">
            {reviews.slice(0, 2).map(r => (
              <div key={r.name} className="bg-background rounded-2xl p-5 shadow-sm border border-border">
                <Stars n={r.rating} />
                <p className="mt-3 text-foreground text-sm leading-relaxed">"{r.text}"</p>
                <div className="mt-4 font-semibold text-primary text-sm">{r.name}</div>
              </div>
            ))}
          </div>

          {/* Център — влогър */}
          <div className="bg-background rounded-2xl overflow-hidden shadow-sm border border-border flex flex-col">
            <div className="relative h-85 overflow-hidden">
              <img
                src="/photos/vlogger.jpg"
                alt="Alexander Vlog в Gustoza"
                className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-accent">Препоръчано от</span>
              <div className="font-bold text-primary text-lg">Alexander Vlog</div>
              <p className="text-muted-foreground text-sm leading-relaxed italic">
                "Най-хубаво узо в най-старият гръцки ресторант в София. Перфектен обяд в ресторант Густоза, подкрепен с леко и ароматно узо 35."
              </p>
              <a
                href="https://www.facebook.com/reel/744477375209241"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-all w-fit"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                Гледай видеото
              </a>
            </div>
          </div>

          {/* Дясно — 2 ревюта */}
          <div className="flex flex-col gap-5">
            {reviews.slice(2, 4).map(r => (
              <div key={r.name} className="bg-background rounded-2xl p-5 shadow-sm border border-border">
                <Stars n={r.rating} />
                <p className="mt-3 text-foreground text-sm leading-relaxed">"{r.text}"</p>
                <div className="mt-4 font-semibold text-primary text-sm">{r.name}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-accent">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      ))}
    </div>
  );
}