import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Grady's Public House",
  description:
    "Take a look inside Grady's Public House — our dining room, bar, food, and live music nights.",
};

const galleryCategories = [
  {
    name: "The Bar",
    items: [
      "Whiskey wall display",
      "Brass rail detail",
      "Draft tap lineup",
      "Signature cocktails",
    ],
  },
  {
    name: "Dining Room",
    items: [
      "Leather booths",
      "Main dining area",
      "Fireplace seating",
      "Private dining room",
    ],
  },
  {
    name: "Food",
    items: [
      "Fish & Chips",
      "Prime Rib",
      "Shepherd's Pie",
      "Lobster Roll",
      "Mussels in Guinness",
      "Sticky Toffee Pudding",
    ],
  },
  {
    name: "Live Music",
    items: [
      "Thursday night stage",
      "Irish folk session",
      "Acoustic set",
      "Crowd at the bar",
    ],
  },
  {
    name: "Details",
    items: [
      "Carved crest behind bar",
      "Vintage pub mirrors",
      "Edison bulb lighting",
      "Brass fixtures",
    ],
  },
];

export default function GalleryPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-pub-dark-lighter">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-pub-cream mb-4">
            Gallery
          </h1>
          <div className="gold-line mb-6" />
          <p className="text-pub-muted text-lg">A look inside Grady&apos;s</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {galleryCategories.map((category) => (
            <div key={category.name} className="mb-16">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-pub-gold mb-6 text-center">
                {category.name}
              </h2>
              <div className="gold-line mb-8" />

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className="aspect-square bg-pub-dark-card rounded-lg flex items-center justify-center border border-pub-dark-border hover:border-pub-gold/30 transition-all group cursor-pointer relative overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-pub-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-pub-muted text-sm group-hover:text-pub-gold transition-colors relative z-10 px-4 text-center">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Instagram CTA */}
          <div className="text-center mt-8 p-12 bg-pub-dark-card rounded-lg border border-pub-dark-border">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-pub-gold mb-4">
              Follow Us on Instagram
            </h3>
            <p className="text-pub-muted mb-6">
              Tag us @gradyspublichouse for a chance to be featured
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3 border-2 border-pub-gold text-pub-gold font-semibold rounded hover:bg-pub-gold hover:text-pub-dark transition-all"
            >
              @gradyspublichouse
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
