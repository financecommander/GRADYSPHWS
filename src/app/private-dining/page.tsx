"use client";

import SectionHeader from "@/components/SectionHeader";

const packages = [
  {
    name: "The Pub Room",
    capacity: "Up to 30 guests",
    description:
      "Semi-private space with its own bar area. Perfect for birthday parties and casual celebrations.",
    features: [
      "Dedicated server",
      "Custom menu options",
      "Audio system for speeches/toasts",
    ],
  },
  {
    name: "The Whiskey Room",
    capacity: "Up to 20 guests",
    description:
      "Intimate private dining room surrounded by our whiskey collection. Ideal for corporate dinners and special occasions.",
    features: [
      "Fully private",
      "Curated whiskey pairings",
      "Custom tasting menus",
      "AV capabilities",
    ],
  },
  {
    name: "Full Venue Buyout",
    capacity: "Up to 150 guests",
    description:
      "Reserve the entire restaurant for weddings, large corporate events, and milestone celebrations.",
    features: [
      "Full bar access",
      "Custom catering menu",
      "Live music coordination",
      "Event planning assistance",
    ],
  },
];

export default function PrivateDiningPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-pub-dark-lighter">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-pub-cream mb-4">
            Private Dining
          </h1>
          <div className="gold-line mb-6" />
          <p className="text-pub-muted text-lg">
            Host your next event at Grady&apos;s. From intimate whiskey dinners
            to full venue celebrations.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="Private Spaces"
            subtitle="Three options for every occasion"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-pub-dark-card border border-pub-dark-border rounded-lg p-8 hover:border-pub-gold/30 transition-all"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-pub-gold mb-1">
                  {pkg.name}
                </h3>
                <p className="text-pub-cream text-sm mb-4">{pkg.capacity}</p>
                <p className="text-pub-muted text-sm mb-6">{pkg.description}</p>
                <ul className="space-y-2">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-pub-muted text-sm flex items-center gap-2"
                    >
                      <span className="text-pub-gold">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 px-4 bg-pub-dark-lighter">
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            title="Inquire About Your Event"
            subtitle="Fill out the form below and we'll be in touch within 24 hours"
          />

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Thank you for your inquiry! We'll be in touch within 24 hours."
              );
            }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-pub-cream text-sm mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-pub-dark border border-pub-dark-border rounded text-pub-cream placeholder:text-pub-muted focus:outline-none focus:border-pub-gold transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-pub-cream text-sm mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-pub-dark border border-pub-dark-border rounded text-pub-cream placeholder:text-pub-muted focus:outline-none focus:border-pub-gold transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-pub-cream text-sm mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-pub-dark border border-pub-dark-border rounded text-pub-cream placeholder:text-pub-muted focus:outline-none focus:border-pub-gold transition-colors"
                  placeholder="(508) 555-1234"
                />
              </div>
              <div>
                <label
                  htmlFor="guests"
                  className="block text-pub-cream text-sm mb-2"
                >
                  Number of Guests *
                </label>
                <input
                  type="number"
                  id="guests"
                  required
                  min="1"
                  className="w-full px-4 py-3 bg-pub-dark border border-pub-dark-border rounded text-pub-cream placeholder:text-pub-muted focus:outline-none focus:border-pub-gold transition-colors"
                  placeholder="25"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="date"
                  className="block text-pub-cream text-sm mb-2"
                >
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                  required
                  className="w-full px-4 py-3 bg-pub-dark border border-pub-dark-border rounded text-pub-cream focus:outline-none focus:border-pub-gold transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="event-type"
                  className="block text-pub-cream text-sm mb-2"
                >
                  Event Type
                </label>
                <select
                  id="event-type"
                  className="w-full px-4 py-3 bg-pub-dark border border-pub-dark-border rounded text-pub-cream focus:outline-none focus:border-pub-gold transition-colors"
                >
                  <option value="">Select type...</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="corporate">Corporate Dinner</option>
                  <option value="rehearsal">Rehearsal Dinner</option>
                  <option value="wedding">Wedding Reception</option>
                  <option value="holiday">Holiday Party</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-pub-cream text-sm mb-2"
              >
                Tell Us About Your Event
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-pub-dark border border-pub-dark-border rounded text-pub-cream placeholder:text-pub-muted focus:outline-none focus:border-pub-gold transition-colors resize-none"
                placeholder="Any special requests, dietary needs, or details about your event..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-pub-red text-pub-cream font-semibold rounded hover:bg-pub-red-light transition-all text-lg"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
