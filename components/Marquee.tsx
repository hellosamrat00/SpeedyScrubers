export default function Marquee() {
  const items = ["VACUUM", "✦", "CLEANING", "✦", "SWEEPING", "✦", "MOPPING", "✦", "DISINFECTING", "✦"];

  return (
    <div className="border-b py-5 overflow-hidden" style={{ backgroundColor: "var(--color-brand-light-dark)", borderColor: "var(--color-brand-blue)" }}>
      <div className="flex whitespace-nowrap marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-bold tracking-[0.3em] uppercase"
            style={{ 
              color: "var(--color-brand-blue)",
              fontSize: item === "CLEANING" ? "1rem" : undefined 
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
