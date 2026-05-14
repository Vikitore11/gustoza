import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { MenuPreview } from "@/components/site/MenuPreview";
import { Gallery } from "@/components/site/Gallery";
import { Location } from "@/components/site/Location";
import { Reviews } from "@/components/site/Reviews";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { StickyReserve } from "@/components/site/StickyReserve";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Restaraunt Gustoza" },
      {
        name: "description",
        content:
          "Gustoza - автентичен гръцки ресторант в Sofia, кв. Слатина, от 1996 г. Прясна дива риба, октопод, лангустини и мезета, доставяни директно от Гърция. Резервации: +359 888 23 1246.",
      },
      { name: "keywords", content: "гръцки ресторант София, Gustoza, риба ресторант Слатина, морски дарове София, гръцка кухня, октопод, лангустини, мезета, свежа риба" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Gustoza" },
      { property: "og:title", content: "Gustoza - Гръцки ресторант в София от 1996" },
      {
        property: "og:description",
        content: "Автентична гръцка кухня, прясна дива риба и морски деликатеси в кв. Слатина, София.",
      },
      { property: "og:type", content: "restaurant" },
      { property: "og:locale", content: "bg_BG" },
      { property: "og:image", content: "/photos/food_langoustine_rice.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Gustoza - Гръцки ресторант в София" },
      { name: "twitter:description", content: "Автентична гръцка кухня, прясна риба и морски деликатеси в кв. Слатина, София." },
    ],
    links: [{ rel: "canonical", href: "https://gustoza.bg/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Gustoza",
          description: "Автентичен гръцки ресторант в София от 1996 г. Прясна риба, морски дарове и мезета, доставяни директно от Гърция.",
          servesCuisine: ["Greek", "Mediterranean", "Seafood"],
          priceRange: "€€",
          foundingDate: "1996",
          url: "https://gustoza.bg",
          telephone: "+359 88823 1246",
          email: "hello@gustoza.bg",
          address: {
            "@type": "PostalAddress",
            streetAddress: "ул. Мъдрен 18",
            addressLocality: "София",
            postalCode: "1574",
            addressRegion: "ж.к. Христо Смирненски",
            addressCountry: "BG",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 42.6845,
            longitude: 23.3744,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
              opens: "11:30",
              closes: "23:00",
            },
          ],
          hasMap: "https://maps.google.com/?q=Gustoza+Sofia",
          image: "/photos/food_langoustine_rice.jpg",
          currenciesAccepted: "EUR",
          paymentAccepted: "Cash, Credit Card",
          menu: "https://gustoza.bg/#menu",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <MenuPreview />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <StickyReserve />
    </div>
  );
}
