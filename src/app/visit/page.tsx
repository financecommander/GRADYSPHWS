import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit Us | Grady's Public House",
  description:
    "Find Grady's Public House at 213 Taunton Avenue, Seekonk, MA. Hours, directions, parking, and reservations.",
};

export default function VisitPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-pub-dark-lighter">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-pub-cream mb-4">
            Visit Us
          </h1>
          <div className="gold-line mb-6" />
          <p className="text-pub-muted text-lg">
            213 Taunton Avenue, Seekonk, MA 02771
          </p>
        </div>
      </section>

      {/* Map & Info */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Map - takes 3 cols */}
            <div className="lg:col-span-3 w-full h-96 lg:h-full bg-pub-dark-card rounded-lg border border-pub-dark-border overflow-hidden min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.5!2d-71.33!3d41.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDUwJzI0LjAiTiA3McKwMTknNDguMCJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grady's Public House Location"
              />
            </div>

            {/* Info - takes 2 cols */}
            <div className="lg:col-span-2 space-y-10">
              {/* Address */}
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-pub-gold mb-3">
                  Address
                </h3>
                <address className="not-italic text-pub-cream leading-relaxed">
                  <p>213 Taunton Avenue</p>
                  <p>Seekonk, MA 02771</p>
                </address>
                <a
                  href="https://maps.google.com/?q=213+Taunton+Avenue+Seekonk+MA+02771"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-pub-gold text-sm hover:text-pub-gold-light transition-colors underline"
                >
                  Get Directions &rarr;
                </a>
              </div>

              {/* Hours */}
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-pub-gold mb-3">
                  Hours
                </h3>
                <ul className="space-y-3 text-pub-cream">
                  <li className="flex justify-between pb-2 border-b border-pub-dark-border">
                    <span>Monday - Thursday</span>
                    <span className="text-pub-muted">11:30am - 11pm</span>
                  </li>
                  <li className="flex justify-between pb-2 border-b border-pub-dark-border">
                    <span>Friday</span>
                    <span className="text-pub-muted">11:30am - 1am</span>
                  </li>
                  <li className="flex justify-between pb-2 border-b border-pub-dark-border">
                    <span>Saturday</span>
                    <span className="text-pub-muted">10am - 1am</span>
                  </li>
                  <li className="flex justify-between pb-2 border-b border-pub-dark-border">
                    <span>Sunday</span>
                    <span className="text-pub-muted">10am - 10pm</span>
                  </li>
                </ul>
                <p className="text-pub-muted text-xs mt-3 italic">
                  Kitchen closes 1 hour before close. Bar menu available until
                  close.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-pub-gold mb-3">
                  Contact
                </h3>
                <div className="space-y-2">
                  <p>
                    <a
                      href="tel:+15085551234"
                      className="text-pub-cream hover:text-pub-gold transition-colors"
                    >
                      (508) 555-1234
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:info@gradyspublichouse.com"
                      className="text-pub-cream hover:text-pub-gold transition-colors"
                    >
                      info@gradyspublichouse.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Parking */}
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-pub-gold mb-3">
                  Parking
                </h3>
                <p className="text-pub-muted">
                  Free parking in our private lot directly adjacent to the
                  restaurant. Additional street parking available along Taunton
                  Avenue. Accessible parking spaces available near the main
                  entrance.
                </p>
              </div>

              {/* Reserve */}
              <a
                href="https://www.opentable.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-pub-red text-pub-cream font-semibold rounded hover:bg-pub-red-light transition-all text-lg w-full text-center"
              >
                Reserve a Table
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 px-4 bg-pub-dark-lighter">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-pub-gold mb-6">
            Serving the Neighborhood
          </h2>
          <div className="gold-line mb-8" />
          <p className="text-pub-muted text-lg mb-8">
            Proudly serving Seekonk and the surrounding communities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "Seekonk",
              "East Providence",
              "Rehoboth",
              "Swansea",
              "Attleboro",
              "Providence",
              "Pawtucket",
            ].map((town) => (
              <span
                key={town}
                className="px-5 py-2 bg-pub-dark-card border border-pub-dark-border rounded-full text-pub-cream text-sm"
              >
                {town}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
