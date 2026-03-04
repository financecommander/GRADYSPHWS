import SectionHeader from "@/components/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whiskey & Beer | Grady's Public House",
  description:
    "100+ whiskeys, 20 craft drafts, and signature cocktails at Grady's Public House in Seekonk.",
};

const signatureCocktails = [
  {
    name: "The Grady Manhattan",
    ingredients: "Rye whiskey, sweet vermouth, black walnut bitters, Luxardo cherry",
    price: "$15",
  },
  {
    name: "Irish Mule",
    ingredients: "Irish whiskey, ginger beer, fresh lime, angostura bitters",
    price: "$14",
  },
  {
    name: "Celtic Old Fashioned",
    ingredients: "Irish whiskey, demerara, orange bitters, flamed orange peel",
    price: "$15",
  },
  {
    name: "Emerald Sour",
    ingredients: "Irish whiskey, green chartreuse, lemon, egg white, mint",
    price: "$16",
  },
  {
    name: "Dublin Mule",
    ingredients: "Irish whiskey, elderflower, ginger beer, cucumber",
    price: "$14",
  },
  {
    name: "Grady's Irish Coffee",
    ingredients: "Irish whiskey, fresh coffee, demerara, hand-whipped cream",
    price: "$13",
  },
];

const whiskeyCategories = [
  {
    name: "Irish Whiskey",
    description: "The heart of our collection",
    examples: [
      "Jameson",
      "Redbreast 12",
      "Green Spot",
      "Powers",
      "Teeling Single Malt",
      "Tullamore D.E.W.",
      "Connemara Peated",
      "Midleton Very Rare",
    ],
  },
  {
    name: "Bourbon",
    description: "Kentucky & beyond",
    examples: [
      "Buffalo Trace",
      "Maker's Mark",
      "Woodford Reserve",
      "Four Roses Single Barrel",
      "Blanton's",
      "Eagle Rare",
    ],
  },
  {
    name: "Scotch",
    description: "Single malts & blends",
    examples: [
      "Glenfiddich 12",
      "Macallan 12",
      "Lagavulin 16",
      "Oban 14",
      "Highland Park 12",
      "Talisker 10",
    ],
  },
  {
    name: "Rye",
    description: "Bold & spicy",
    examples: [
      "Bulleit Rye",
      "Rittenhouse",
      "WhistlePig 10",
      "Sazerac",
      "Michter's US-1",
      "High West Double Rye",
    ],
  },
];

const draftBeers = [
  { name: "Guinness Draught", style: "Dry Stout", origin: "Ireland" },
  { name: "Harp Lager", style: "Pale Lager", origin: "Ireland" },
  { name: "Smithwick's", style: "Irish Red Ale", origin: "Ireland" },
  { name: "Kilkenny", style: "Irish Cream Ale", origin: "Ireland" },
  { name: "Whalers Rise", style: "APA", origin: "Rhode Island" },
  { name: "Narragansett Lager", style: "American Lager", origin: "Rhode Island" },
  { name: "Grey Sail Captain's Daughter", style: "Double IPA", origin: "Rhode Island" },
  { name: "Proclamation Ale Tendril", style: "IPA", origin: "Rhode Island" },
  { name: "Sam Adams Boston Lager", style: "Vienna Lager", origin: "Massachusetts" },
  { name: "Treehouse Julius", style: "NE IPA", origin: "Massachusetts" },
  { name: "Rotating Local Tap 1", style: "Varies", origin: "New England" },
  { name: "Rotating Local Tap 2", style: "Varies", origin: "New England" },
];

export default function WhiskeyBeerPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-pub-dark-lighter">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-pub-cream mb-4">
            Whiskey & Beer
          </h1>
          <div className="gold-line mb-6" />
          <p className="text-pub-muted text-lg">
            Over 100 whiskeys, 20 craft drafts, and a cocktail list built by
            people who actually drink whiskey.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-pub-green">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-pub-gold">
              100+
            </p>
            <p className="text-pub-cream mt-1">Whiskeys</p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-pub-gold">
              20
            </p>
            <p className="text-pub-cream mt-1">Draft Lines</p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-pub-gold">
              6
            </p>
            <p className="text-pub-cream mt-1">Signature Cocktails</p>
          </div>
        </div>
      </section>

      {/* Signature Cocktails */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Signature Cocktails"
            subtitle="Handcrafted by our bar team"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signatureCocktails.map((cocktail) => (
              <div
                key={cocktail.name}
                className="bg-pub-dark-card border border-pub-dark-border rounded-lg p-6 hover:border-pub-gold/30 transition-all group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-pub-cream group-hover:text-pub-gold transition-colors">
                    {cocktail.name}
                  </h3>
                  <span className="text-pub-gold font-semibold">
                    {cocktail.price}
                  </span>
                </div>
                <p className="text-pub-muted text-sm">{cocktail.ingredients}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grady Flight */}
      <section className="py-16 px-4 bg-pub-dark-lighter">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-pub-gold mb-4">
            The Grady Flight
          </h2>
          <div className="gold-line mb-6" />
          <p className="text-pub-cream text-lg mb-2">
            Three curated pours chosen by our bar team
          </p>
          <p className="text-pub-muted mb-6">
            Ask your bartender for tonight&apos;s selection. Flights change weekly
            to showcase new arrivals and seasonal favorites.
          </p>
          <span className="text-pub-gold text-2xl font-semibold">$22</span>
        </div>
      </section>

      {/* Whiskey Collection */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="The Whiskey Collection"
            subtitle="A curated selection from across the world"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whiskeyCategories.map((category) => (
              <div
                key={category.name}
                className="bg-pub-dark-card border border-pub-dark-border rounded-lg p-8"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-pub-gold mb-1">
                  {category.name}
                </h3>
                <p className="text-pub-muted text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.examples.map((whiskey) => (
                    <span
                      key={whiskey}
                      className="px-3 py-1 bg-pub-dark-lighter rounded text-pub-cream text-sm border border-pub-dark-border"
                    >
                      {whiskey}
                    </span>
                  ))}
                </div>
                <p className="text-pub-muted text-xs mt-4 italic">
                  + many more selections available
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Draft Beer */}
      <section className="py-16 px-4 bg-pub-dark-lighter">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="On Tap"
            subtitle="20 lines featuring Irish classics and New England craft"
          />

          <div className="space-y-4">
            {draftBeers.map((beer) => (
              <div
                key={beer.name}
                className="flex items-center justify-between py-3 border-b border-pub-dark-border group"
              >
                <div>
                  <h3 className="text-pub-cream group-hover:text-pub-gold transition-colors font-medium">
                    {beer.name}
                  </h3>
                  <p className="text-pub-muted text-sm">{beer.style}</p>
                </div>
                <span className="text-pub-muted text-sm">{beer.origin}</span>
              </div>
            ))}
          </div>
          <p className="text-pub-muted text-xs mt-6 italic text-center">
            Draft list rotates regularly. Ask your server for today&apos;s pours.
          </p>
        </div>
      </section>
    </div>
  );
}
