import SectionHeader from "@/components/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Grady's Public House",
  description:
    "Trivia nights, live music, whiskey tastings, and more at Grady's Public House in Seekonk.",
};

const weeklyEvents = [
  {
    day: "Monday",
    name: "Industry Night",
    time: "4:00 PM - Close",
    description:
      "50% off select drafts and appetizers for restaurant & bar industry workers. Show your pay stub or work shirt.",
    color: "pub-gold",
  },
  {
    day: "Tuesday",
    name: "Trivia Night",
    time: "7:00 PM - 9:00 PM",
    description:
      "Hosted pub trivia with teams of up to 6. Weekly themes. Prizes for top 3 teams including bar tabs and Grady's merch.",
    color: "pub-green",
  },
  {
    day: "Wednesday",
    name: "Whiskey Night",
    time: "5:00 PM - Close",
    description:
      "Featured whiskey flights at special pricing. Guided tastings at 6:30 PM with our bar team. Learn the stories behind the pours.",
    color: "pub-gold",
  },
  {
    day: "Thursday",
    name: "Live Music",
    time: "8:00 PM - 11:00 PM",
    description:
      "Local and touring musicians. Irish folk, acoustic, and Americana. No cover charge.",
    color: "pub-green",
  },
  {
    day: "Friday",
    name: "Prime Rib Night",
    time: "5:00 PM - Sold Out",
    description:
      "Slow-roasted prime rib with Yorkshire pudding, au jus, and horseradish cream. Live music starting at 9 PM.",
    color: "pub-red",
  },
  {
    day: "Saturday",
    name: "Date Night",
    time: "5:00 PM - Close",
    description:
      "Chef's special tasting menu for two with optional whiskey pairings. Reservations recommended.",
    color: "pub-gold",
  },
  {
    day: "Sunday",
    name: "Brunch & Bloody Marys",
    time: "10:00 AM - 2:00 PM",
    description:
      "Full Irish breakfast, eggs Benedict, brunch cocktails. Build-your-own Bloody Mary bar with 20+ toppings.",
    color: "pub-green",
  },
];

const specialEvents = [
  {
    name: "St. Patrick's Weekend Celebration",
    date: "March 14-17",
    description:
      "Four days of live Irish music, traditional fare, whiskey specials, and the best craic in Seekonk.",
  },
  {
    name: "Annual Whiskey Dinner",
    date: "Quarterly",
    description:
      "Five-course dinner paired with rare whiskeys. Limited to 40 guests. Tickets required.",
  },
  {
    name: "Oyster & Stout Night",
    date: "Monthly - First Thursday",
    description:
      "Fresh local oysters at market price paired with featured stouts and porters.",
  },
  {
    name: "Burns Night Supper",
    date: "January 25",
    description:
      "Traditional Scottish celebration with haggis, poetry readings, and Scotch whisky tastings.",
  },
];

export default function EventsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-pub-dark-lighter">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-pub-cream mb-4">
            What&apos;s On
          </h1>
          <div className="gold-line mb-6" />
          <p className="text-pub-muted text-lg">
            Every night is a good night at Grady&apos;s. Here&apos;s what&apos;s
            happening this week.
          </p>
        </div>
      </section>

      {/* Weekly Programming */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Weekly Programming"
            subtitle="Something for every night of the week"
          />

          <div className="space-y-6">
            {weeklyEvents.map((event) => (
              <div
                key={event.day}
                className="bg-pub-dark-card border border-pub-dark-border rounded-lg p-6 md:p-8 hover:border-pub-gold/30 transition-all group flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
              >
                <div className="md:w-32 shrink-0">
                  <span
                    className={`font-[family-name:var(--font-playfair)] text-xl text-${event.color} font-bold`}
                  >
                    {event.day}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-pub-cream group-hover:text-pub-gold transition-colors mb-1">
                    {event.name}
                  </h3>
                  <p className="text-pub-muted text-sm mb-2">{event.time}</p>
                  <p className="text-pub-muted">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-16 px-4 bg-pub-dark-lighter">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Special Events"
            subtitle="Mark your calendar"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialEvents.map((event) => (
              <div
                key={event.name}
                className="bg-pub-dark-card border border-pub-dark-border rounded-lg p-8 hover:border-pub-gold/30 transition-all group"
              >
                <span className="text-pub-gold text-sm font-semibold tracking-wider uppercase">
                  {event.date}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-pub-cream mt-2 mb-3 group-hover:text-pub-gold transition-colors">
                  {event.name}
                </h3>
                <p className="text-pub-muted text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Events CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-pub-gold mb-4">
            Hosting a Private Event?
          </h2>
          <p className="text-pub-muted mb-8">
            Grady&apos;s offers private dining for birthdays, corporate dinners,
            rehearsal dinners, and celebrations of all kinds.
          </p>
          <a
            href="/private-dining"
            className="inline-block px-8 py-3 bg-pub-red text-pub-cream font-semibold rounded hover:bg-pub-red-light transition-all"
          >
            Inquire About Private Dining
          </a>
        </div>
      </section>
    </div>
  );
}
