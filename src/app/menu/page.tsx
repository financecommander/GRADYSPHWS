import SectionHeader from "@/components/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Grady's Public House",
  description:
    "Elevated Irish pub fare — from classic fish & chips to prime rib, with New England seafood specials.",
};

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "Starters",
    items: [
      {
        name: "Irish Nachos",
        description:
          "Crispy potato skins, cheddar, bacon, scallions, sour cream",
        price: "$14",
      },
      {
        name: "Whiskey BBQ Wings",
        description:
          "Crispy jumbo wings tossed in house whiskey BBQ, celery, blue cheese",
        price: "$16",
      },
      {
        name: "Mussels in Guinness Broth",
        description:
          "PEI mussels, Guinness cream sauce, garlic, shallots, grilled sourdough",
        price: "$17",
      },
      {
        name: "New England Clam Chowder",
        description:
          "Creamy chowder with littleneck clams, salt pork, potatoes, oyster crackers",
        price: "$12",
      },
      {
        name: "Scotch Eggs",
        description:
          "Soft-boiled eggs wrapped in sausage, panko-crusted, whole grain mustard",
        price: "$13",
      },
      {
        name: "Loaded Boxty",
        description:
          "Traditional Irish potato pancake, smoked salmon, crème fraîche, chives",
        price: "$15",
      },
    ],
  },
  {
    title: "Mains",
    items: [
      {
        name: "Classic Fish & Chips",
        description:
          "Beer-battered Atlantic cod, hand-cut chips, mushy peas, house tartar",
        price: "$19",
      },
      {
        name: "Steakhouse Burger",
        description:
          "8oz certified Angus, aged cheddar, caramelized onion, brioche, pub fries",
        price: "$18",
      },
      {
        name: "Shepherd's Pie",
        description:
          "Braised lamb, root vegetables, Guinness gravy, whipped potato crust",
        price: "$22",
      },
      {
        name: "Slow-Roasted Prime Rib",
        description:
          "12oz bone-in cut, Yorkshire pudding, horseradish cream, au jus",
        price: "$38",
      },
      {
        name: "Bangers & Mash",
        description:
          "Irish pork sausages, colcannon mash, onion gravy, fried shallots",
        price: "$19",
      },
      {
        name: "Grilled Atlantic Salmon",
        description:
          "Pan-seared salmon, lemon-dill butter, roasted fingerlings, wilted greens",
        price: "$26",
      },
      {
        name: "Chicken Pot Pie",
        description:
          "Free-range chicken, peas, carrots, mushrooms, flaky puff pastry",
        price: "$20",
      },
      {
        name: "Guinness Braised Short Ribs",
        description:
          "Slow-braised beef short ribs, Guinness reduction, creamy polenta, gremolata",
        price: "$32",
      },
    ],
  },
  {
    title: "New England Specials",
    items: [
      {
        name: "Lobster Roll",
        description:
          "Fresh Maine lobster, light mayo, celery, lemon, buttered split-top roll",
        price: "$28",
      },
      {
        name: "Fried Whole Belly Clams",
        description:
          "Local clams, seasoned breading, coleslaw, hand-cut fries, tartar sauce",
        price: "$24",
      },
      {
        name: "Pan-Seared Scallops",
        description:
          "Day-boat scallops, brown butter, cauliflower purée, crispy capers",
        price: "$30",
      },
      {
        name: "Clam Cakes",
        description:
          "Rhode Island-style clam fritters, lemon wedge, cocktail sauce",
        price: "$14",
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Sticky Toffee Pudding",
        description:
          "Warm date cake, butterscotch sauce, vanilla bean ice cream",
        price: "$12",
      },
      {
        name: "Irish Cream Cheesecake",
        description:
          "Baileys-infused cheesecake, chocolate ganache, whipped cream",
        price: "$13",
      },
      {
        name: "Bread & Butter Pudding",
        description:
          "Brioche, custard, golden raisins, whiskey caramel sauce",
        price: "$11",
      },
      {
        name: "Warm Apple Crumble",
        description:
          "Spiced apples, oat crumble topping, salted caramel, ice cream",
        price: "$11",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-pub-dark-lighter">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-pub-cream mb-4">
            The Menu
          </h1>
          <div className="gold-line mb-6" />
          <p className="text-pub-muted text-lg">
            Modern Irish tavern fare with New England roots. Seasonally inspired,
            locally sourced whenever possible.
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {menuData.map((category) => (
            <div key={category.title} className="mb-16">
              <SectionHeader title={category.title} />

              <div className="space-y-6">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-start gap-4 pb-6 border-b border-pub-dark-border group"
                  >
                    <div className="flex-1">
                      <h3 className="font-[family-name:var(--font-playfair)] text-xl text-pub-cream group-hover:text-pub-gold transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-pub-muted text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-pub-gold font-semibold text-lg whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Note */}
          <div className="text-center mt-8 p-8 bg-pub-dark-card rounded-lg border border-pub-dark-border">
            <p className="text-pub-muted text-sm italic">
              Please inform your server of any dietary restrictions or allergies.
              Menu items and prices subject to change based on seasonal availability.
            </p>
            <p className="text-pub-gold text-sm mt-4 font-semibold">
              Friday Night Special: Prime Rib Night
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
