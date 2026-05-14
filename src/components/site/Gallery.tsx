/**
 * Gallery layout — perfectly symmetric 6-cell CSS Grid:
 *
 *  desktop (md):
 *  ┌─────────┬────┬────┐
 *  │         │ B  │ C  │  row 1
 *  │   A     ├────┼────┤
 *  │ (2×2)   │ D  │ E  │  row 2
 *  ├────┬────┴────┴────┤
 *  │ F  │     G        │  row 3  (F=1col, G=3col)
 *  └────┴──────────────┘
 *
 *  mobile: single column, each image natural aspect-ratio
 */

const photos = {
  // Atmosphere / interior
  hall:     "/photos/g01.jpg",   // warm yellow interior, blue chairs
  terrace:  "/photos/g04.jpg",   // summer terrace, blue-white
  entrance: "/photos/g05.jpg",   // exterior with flowers
  decor:    "/photos/g06.jpg",   // Greek-decorated hall
  // Food — real dishes from the restaurant
  spread:   "/photos/unnamed.jpg",   // calamari, octopus, zucchini on table
  lango:    "/photos/food.jpg",  // langoustines on saffron rice
  octo:     "/photos/meat.jpg",           // grilled octopus
};

const grid = [
  { src: photos.hall,     alt: "Топлата атмосфера на Gustoza",  cell: "md:col-span-2 md:row-span-2", aspect: "aspect-[4/3] md:aspect-auto" },
  { src: photos.lango,    alt: "Лангустини с шафранов ориз",    cell: "",                            aspect: "aspect-square md:aspect-auto" },
  { src: photos.octo,     alt: "Октопод на жар",                cell: "",                            aspect: "aspect-square md:aspect-auto" },
  { src: photos.decor,    alt: "Гръцки декор в Gustoza",        cell: "",                            aspect: "aspect-square md:aspect-auto" },
  { src: photos.entrance, alt: "Входът на Gustoza",             cell: "",                            aspect: "aspect-square md:aspect-auto" },
  { src: photos.spread,   alt: "Калмари, октопод и тиквички",   cell: "",                            aspect: "aspect-square md:aspect-auto" },
  { src: photos.terrace,  alt: "Лятна тераса Gustoza",          cell: "md:col-span-3",               aspect: "aspect-[16/9] md:aspect-auto" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="uppercase tracking-[0.2em] text-xs text-accent font-semibold mb-4">Галерия</p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary">Една вечер в Gustoza</h2>
        </div>

        {/*
          Grid:
          mobile  → 2 columns, auto rows
          desktop → 4 columns, 3 rows
          A occupies col 1-2, row 1-2.
          B col 3, row 1 | C col 4, row 1
          D col 3, row 2 | E col 4, row 2
          F col 1, row 3 | G col 2-4, row 3
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-[300px_300px_300px] gap-3 md:gap-4">
          {grid.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl group ${img.cell} ${img.aspect}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
