const services = [
  {
    icon: "🔑",
    title: "End-of-Lease Cleaning",
    desc: "Specialized move-out cleaning to meet inspection standards and help secure your deposit.",
  },
  {
    icon: "🏠",
    title: "Residential Cleaning",
    desc: "Complete home cleaning solutions tailored to your lifestyle, including kitchen and bathroom sanitization.",
  },
  {
    icon: "🏢",
    title: "Commercial & Pub Cleaning",
    desc: "Professional cleaning for offices, pubs, and commercial spaces to maintain a productive environment.",
  },
  {
    icon: "🧹",
    title: "Carpet & Stain Removal",
    desc: "Deep carpet cleaning and expert stain removal to keep your floors looking spotless.",
  },
  {
    icon: "🪟",
    title: "Window Cleaning",
    desc: "Streak-free window cleaning for both residential and commercial properties.",
  },
  {
    icon: "🏗️",
    title: "Post-Construction",
    desc: "Thorough cleanup after renovations or new builds, removing dust and debris.",
  },
  {
    icon: "✨",
    title: "Specialized Sanitization",
    desc: "Focused kitchen cleaning, bathroom sanitization, and wall spot cleaning for pristine spaces.",
  },
  {
    icon: "🏡",
    title: "Roofing & Gutter Cleaning",
    desc: "Comprehensive exterior maintenance including roofing restoration and gutter cleaning.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ backgroundColor: "var(--color-brand-light)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="section-label mb-3">What We Offer</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight" style={{ color: "var(--color-brand-blue)" }}>
            We Offer A{" "}
            <span style={{ color: "var(--color-brand-blue)" }}>Wide Range</span>{" "}
            Of Specialist Cleaning Services.
          </h2>
        </div>
        <p className="text-center max-w-xl mx-auto mb-14 leading-relaxed" style={{ color: "var(--color-brand-blue)", opacity: 0.8 }}>
          From routine household cleaning to specialized commercial services, we have the expertise and equipment to handle any cleaning challenge.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="service-card group flex flex-col h-full">
              <div className="text-4xl mb-4">{s.icon}</div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading text-lg font-bold transition-colors" style={{ color: "var(--color-brand-blue)" }}>
                  {s.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-brand-blue)", opacity: 0.7 }}>{s.desc}</p>
              <a href="/services" className="mt-auto pt-5 flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all" style={{ color: "var(--color-brand-blue)" }}>
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
