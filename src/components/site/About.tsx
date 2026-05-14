const img = "/photos/g04.jpg";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-accent font-semibold mb-4">За нас</p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary">Най-старият гръцки ресторант в София</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Създаден през 1996 г., Gustosa е най-старият гръцки ресторант в София. Два уютни салона и просторна лятна градина - атмосфера, типична за Гърция, на крачка от дома ви.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Името идва от гръцката дума gusto - „вкусно и приятно". Собственикът Георгиос поднася същите автентични рецепти, с които е израснал в родния си град.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Пресни морски продукти, внимателно подбрани съставки и рецепти, пазени с години - това е Gustosa.
          </p>         
          <ul className="mt-8 grid grid-cols-2 gap-4">
            {[
              ["Прясна риба", "Доставка всеки ден"],
              ["Гръцки рецепти", "Семейна традиция"],
              ["Маслиново масло", "Внос от Гърция"],
              ["Уютна градина", "Лятна тераса"],
            ].map(([t, s]) => (
              <li key={t} className="rounded-xl bg-secondary p-4">
                <div className="font-semibold text-primary">{t}</div>
                <div className="text-sm text-muted-foreground">{s}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img src={img} alt="Лятна градина на Gustosa" className="rounded-2xl shadow-warm w-full h-[480px] object-cover" loading="lazy" />
          <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-2xl px-6 py-4 shadow-warm hidden md:block">
            <div className="font-display text-3xl font-bold">28+</div>
            <div className="text-xs uppercase tracking-wider">години традиция</div>
          </div>
        </div>
      </div>
    </section>
  );
}
