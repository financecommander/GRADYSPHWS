export default function SectionHeader({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-12">
      <h2
        className={`font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-pub-cream" : "text-pub-gold"
        }`}
      >
        {title}
      </h2>
      <div className="gold-line mb-4" />
      {subtitle && (
        <p className="text-pub-muted text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
