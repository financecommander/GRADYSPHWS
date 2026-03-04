import CrestLogo from "@/components/CrestLogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Grady's Public House",
  description:
    "The story behind Grady's Public House — Irish heritage, New England hospitality, and a neighborhood gathering place in Seekonk.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-pub-dark-lighter">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-pub-cream mb-4">
            About Grady&apos;s
          </h1>
          <div className="gold-line mb-6" />
          <p className="text-pub-muted text-lg">
            Irish roots. New England table.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-12">
            <CrestLogo size="lg" />
          </div>

          <div className="space-y-6 text-pub-cream leading-relaxed text-lg">
            <p>
              Grady&apos;s Public House is built on a simple idea: every
              neighborhood deserves a proper pub. A place where the food is honest,
              the whiskey is strong, and there&apos;s always a table waiting for
              you.
            </p>
            <p>
              Located at 213 Taunton Avenue in Seekonk, Massachusetts, we bring
              the warmth and tradition of the Irish public house to the heart of
              New England. Our family crest — the shield with three fish, the arm
              and dagger, and the roses — tells our story: strength, abundance, and
              hospitality.
            </p>
            <p>
              The menu is rooted in Irish tavern tradition but shaped by where we
              live. You&apos;ll find classic fish and chips alongside New England
              lobster rolls, Shepherd&apos;s Pie next to pan-seared scallops. Our
              bar stocks over 100 whiskeys from Ireland, Scotland, Kentucky, and
              beyond, plus 20 craft drafts that mix Irish classics with the best of
              local New England brewing.
            </p>
            <p>
              But Grady&apos;s is more than food and drink. It&apos;s Tuesday
              trivia with friends. It&apos;s Thursday night live music. It&apos;s
              Sunday brunch with family. It&apos;s the place where Seekonk meets —
              to celebrate, to connect, and to raise a glass to the good things.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-pub-dark-lighter">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-pub-gold text-center mb-12">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Heritage",
                description:
                  "Rooted in the tradition of the Irish public house — a gathering place with history and soul.",
              },
              {
                title: "Community",
                description:
                  "A neighborhood pub for Seekonk, East Providence, and everyone who walks through the door.",
              },
              {
                title: "Craft",
                description:
                  "Quality in everything — from the food we plate to the whiskey we pour to the pint we pull.",
              },
              {
                title: "Warmth",
                description:
                  "Hospitality first. Always. Every guest is a regular in the making.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-pub-gold mb-3">
                  {value.title}
                </h3>
                <p className="text-pub-muted text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location legacy */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-pub-gold mb-6">
            The Building
          </h2>
          <div className="gold-line mb-8" />
          <p className="text-pub-cream text-lg leading-relaxed">
            Our home on Taunton Avenue has long been a landmark on one of
            Seekonk&apos;s most established restaurant corridors. We&apos;re proud
            to carry on its tradition as a destination for great food and genuine
            hospitality — with an Irish twist.
          </p>
        </div>
      </section>
    </div>
  );
}
