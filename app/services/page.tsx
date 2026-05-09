import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "Residential & End-of-Lease Cleaning",
      desc: "Complete home cleaning solutions, including specialized move-out cleaning to secure your deposit.",
      details: ["Kitchen & Bathroom Sanitization", "Move-Out & End-of-Lease Clean", "Carpet Deep Clean & Stain Removal", "Wall Spot Cleaning", "General House Upkeep"],
      image: "/background.png", // reusing existing background since it's generic
      reverse: false
    },
    {
      title: "Commercial & Pub Cleaning",
      desc: "Professional cleaning for offices, pubs, and commercial spaces to maintain a productive and welcoming environment.",
      details: ["Daily Office & Pub Maintenance", "Post-Construction Cleanup", "High-Traffic Area Care", "Waste Management", "Restroom Maintenance"],
      image: "/background.png",
      reverse: true
    },
    {
      title: "Specialized & Exterior Services",
      desc: "Comprehensive exterior maintenance and deep cleaning treatments for both residential and commercial properties.",
      details: ["Roofing Restoration", "Gutter Cleaning", "Professional Window Cleaning", "Pressure Washing", "Deep Carpet Extraction"],
      image: "/background.png",
      reverse: false
    }
  ];

  return (
    <main>
      <Navbar />
      
      {/* Page Hero */}
      <section className="pt-40 lg:pt-48 pb-20 relative overflow-hidden" style={{ backgroundColor: "var(--color-brand-blue-dark)" }}>
        <div className="absolute inset-0 opacity-20 bg-[url('/background.png')] bg-cover bg-center mix-blend-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="section-label section-label--light mb-4">What We Offer</p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            Our <span className="italic" style={{ color: "var(--color-brand-yellow)" }}>Services</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed">
            From routine household maintenance to comprehensive commercial janitorial services, we deliver a pristine clean every single time.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24" style={{ backgroundColor: "var(--color-brand-light)" }}>
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {services.map((svc, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-16 items-center ${svc.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${svc.reverse ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border shadow-lg" style={{ borderColor: "rgba(27, 42, 71, 0.1)" }}>
                  <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className={`${svc.reverse ? 'lg:order-1' : ''}`}>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--color-brand-blue)" }}>
                  {svc.title}
                </h2>
                <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--color-brand-blue)", opacity: 0.8 }}>
                  {svc.desc}
                </p>
                <ul className="space-y-4 mb-8">
                  {svc.details.map((detail, j) => (
                    <li key={j} className="flex items-center gap-3 font-medium" style={{ color: "var(--color-brand-blue)" }}>
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: "var(--color-brand-yellow)", color: "var(--color-brand-blue-dark)" }}>✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="btn-primary inline-flex">
                  Request Service
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white border-t" style={{ borderColor: "rgba(27, 42, 71, 0.05)" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl font-bold mb-16" style={{ color: "var(--color-brand-blue)" }}>Why Choose Speedy Scrubbers?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Insured & Bonded", icon: "🛡️" },
              { title: "Eco-Friendly Products", icon: "🌱" },
              { title: "Experienced Staff", icon: "👥" },
              { title: "100% Satisfaction", icon: "💯" }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border bg-gray-50/50" style={{ borderColor: "rgba(27, 42, 71, 0.05)" }}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-heading text-xl font-bold" style={{ color: "var(--color-brand-blue)" }}>{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <FAQ />
      <Footer />
    </main>
  );
}
