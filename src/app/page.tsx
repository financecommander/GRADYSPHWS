import CrestLogo from "@/components/CrestLogo";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

const menuHighlights = [
  {
    name: "Classic Fish & Chips",
    description:
      "Beer-battered Atlantic cod, hand-cut chips, mushy peas, house tartar sauce",
    price: "$19",
  },
  {
    name: "Slow-Roasted Prime Rib",
    description:
      "12oz bone-in cut, Yorkshire pudding, horseradish cream, au jus",
    price: "$38",
  },
  {
    name: "Shepherd's Pie",
    description:
      "Braised lamb, root vegetables, Guinness gravy, whipped potato crust",
    price: "$22",
  },
];

const events = [
  {
    day: "Tuesday",
    name: "Trivia Night",
    time: "7:00 PM",
    description: "Teams of up to 6. Prizes for top 3.",
  },
  {
    day: "Thursday",
    name: "Live Music",
    time: "8:00 PM",
    description: "Local and touring Irish & folk acts.",
  },
  {
    day: "Wednesday",
    name: "Whiskey Tasting",
    time: "6:30 PM",
    description: "Guided flights with our bar team.",
  },
  {
    day: "Sunday",
    name: "Sunday Brunch",
    time: "10:00 AM",
    description: "Full Irish breakfast & Bloody Mary bar.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pub-dark via-pub-dark/95 to-pub-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-pub-green)_0%,_transparent_70%)] opacity-10" />

        <div className="relative z-10 text-center px-4 py-32">
          <div className="animate-fade-in-up">
            <CrestLogo size="lg" className="mx-auto mb-8" />
          </div>

          <h1 className="animate-fade-in-up animation-delay-200 font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold text-pub-cream mb-4">
            Grady&apos;s
            <span className="block text-pub-gold text-3xl md:text-4xl lg:text-5xl mt-2">
              Public House
            </span>
          </h1>

          <p className="animate-fade-in-up animation-delay-400 text-pub-muted text-xl md:text-2xl mb-10 tracking-wide">
            A Proper Public House in Seekonk
          </p>

          <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="px-8 py-4 bg-pub-green text-pub-cream font-semibold rounded hover:bg-pub-green-light transition-all hover:scale-105"
            >
              View Menu
            </Link>
            <a
              href="https://www.opentable.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-pub-red text-pub-cream font-semibold rounded hover:bg-pub-red-light transition-all hover:scale-105"
            >
              Reserve a Table
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-pub-gold/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </div>
      </section>

      {/* ========== WELCOME ========== */}
      <section className="py-24 px-4 bg-pub-dark-lighter">
        <div className="max-w-3xl mx-auto text-center">
          <div className="gold-line mb-8" />
          <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-pub-cream leading-relaxed">
            Located at 213 Taunton Avenue, Grady&apos;s Public House brings the
            tradition of the Irish neighborhood pub to Seekonk.
          </p>
          <p className="mt-6 text-pub-gold text-lg tracking-wide">
            Great food, strong whiskey, and a table for everyone.
          </p>
          <div className="gold-line mt-8" />
        </div>
      </section>

      {/* ========== MENU HIGHLIGHTS ========== */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="From the Kitchen"
            subtitle="Elevated pub fare rooted in Irish tradition with New England flair"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuHighlights.map((item) => (
              <div
                key={item.name}
                className="bg-pub-dark-card border border-pub-dark-border rounded-lg p-8 hover:border-pub-gold/30 transition-all group"
              >
                <div className="w-full h-48 bg-pub-dark-lighter rounded mb-6 flex items-center justify-center">
                  <span className="text-pub-muted text-sm">Photo</span>
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-pub-cream group-hover:text-pub-gold transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-pub-gold font-semibold">
                    {item.price}
                  </span>
                </div>
                <p className="text-pub-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block px-8 py-3 border-2 border-pub-gold text-pub-gold font-semibold rounded hover:bg-pub-gold hover:text-pub-dark transition-all"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ========== WHISKEY & BEER STATS ========== */}
      <section className="py-24 px-4 bg-pub-green relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="font-[family-name:var(--font-playfair)] text-6xl md:text-7xl font-bold text-pub-gold">
                100+
              </p>
              <p className="text-pub-cream text-xl mt-2 tracking-wide">
                Whiskeys
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-playfair)] text-6xl md:text-7xl font-bold text-pub-gold">
                20
              </p>
              <p className="text-pub-cream text-xl mt-2 tracking-wide">
                Craft Drafts
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-playfair)] text-6xl md:text-7xl font-bold text-pub-gold">
                Irish
              </p>
              <p className="text-pub-cream text-xl mt-2 tracking-wide">
                Classics
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/whiskey-beer"
              className="inline-block px-8 py-3 border-2 border-pub-cream text-pub-cream font-semibold rounded hover:bg-pub-cream hover:text-pub-green transition-all"
            >
              Explore Our Bar
            </Link>
          </div>
        </div>
      </section>

      {/* ========== EVENTS ========== */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="What's On"
            subtitle="There's always something happening at Grady's"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event) => (
              <div
                key={event.name}
                className="bg-pub-dark-card border border-pub-dark-border rounded-lg p-6 hover:border-pub-gold/30 transition-all group"
              >
                <span className="text-pub-gold text-sm font-semibold tracking-wider uppercase">
                  {event.day}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-pub-cream mt-2 mb-1 group-hover:text-pub-gold transition-colors">
                  {event.name}
                </h3>
                <p className="text-pub-muted text-sm mb-3">{event.time}</p>
                <p className="text-pub-muted text-sm">{event.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/events"
              className="inline-block px-8 py-3 border-2 border-pub-gold text-pub-gold font-semibold rounded hover:bg-pub-gold hover:text-pub-dark transition-all"
            >
              See All Events
            </Link>
          </div>
        </div>
      </section>

      {/* ========== GALLERY ========== */}
      <section className="py-24 px-4 bg-pub-dark-lighter">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="The Pub" subtitle="A look inside Grady's" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Interior",
              "Food",
              "Bar",
              "Live Music",
              "Dining Room",
              "Whiskey Wall",
              "Patio",
              "Kitchen",
            ].map((label) => (
              <div
                key={label}
                className="aspect-square bg-pub-dark-card rounded-lg flex items-center justify-center border border-pub-dark-border hover:border-pub-gold/30 transition-all group cursor-pointer"
              >
                <span className="text-pub-muted text-sm group-hover:text-pub-gold transition-colors">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-block px-8 py-3 border-2 border-pub-gold text-pub-gold font-semibold rounded hover:bg-pub-gold hover:text-pub-dark transition-all"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ========== LOCATION ========== */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Find Us"
            subtitle="213 Taunton Avenue, Seekonk, MA 02771"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="w-full h-80 lg:h-full bg-pub-dark-card rounded-lg border border-pub-dark-border overflow-hidden min-h-[320px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.5!2d-71.33!3d41.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDUwJzI0LjAiTiA3McKwMTknNDguMCJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grady's Public House Location"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-pub-gold mb-3">
                  Hours
                </h3>
                <ul className="space-y-2 text-pub-cream">
                  <li className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span className="text-pub-muted">11:30am - 11pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday</span>
                    <span className="text-pub-muted">11:30am - 1am</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-pub-muted">10am - 1am</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-pub-muted">10am - 10pm</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-pub-gold mb-3">
                  Parking
                </h3>
                <p className="text-pub-muted">
                  Free parking available in our private lot adjacent to the
                  building. Additional street parking on Taunton Avenue.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-pub-gold mb-3">
                  Contact
                </h3>
                <p className="text-pub-cream">(508) 555-1234</p>
                <p className="text-pub-muted">info@gradyspublichouse.com</p>
              </div>

              <a
                href="https://www.opentable.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-pub-red text-pub-cream font-semibold rounded hover:bg-pub-red-light transition-all"
              >
                Reserve a Table
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
