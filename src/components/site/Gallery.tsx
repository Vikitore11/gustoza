const photos = [
  { src: "/photos/g01.jpg", alt: "Топлата атмосфера на Gustosa" },
  { src: "/photos/g04.jpg", alt: "Лятна тераса Gustosa" },
  { src: "/photos/g05.jpg", alt: "Входът на Gustosa" },
  { src: "/photos/g06.jpg", alt: "Гръцки декор в Gustosa" },
  { src: "/photos/unnamed.jpg", alt: "Скариди, приготвени в тиган с резени лимон" },
  { src: "/photos/meat.jpg", alt: "Ципура на скара" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-14 md:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-4 md:px-5">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <p className="uppercase tracking-[0.2em] text-xs text-accent font-semibold mb-3 md:mb-4">
            Галерия
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary">
            Една вечер в Gustosa
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {photos.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-sm bg-secondary"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full aspect-square object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}