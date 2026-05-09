"use client";
export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-brand-blue-dark)", color: "var(--color-brand-light)", opacity: 0.9 }}>
      {/* Newsletter */}
  
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <span className="font-heading text-xl font-bold" style={{ color: "var(--color-brand-light)" }}>Speedy Scrubbers</span>
          </div>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-brand-light)", opacity: 0.7 }}>
            Professional cleaning services for homes and businesses. Delivering spotless results with eco-friendly solutions.
          </p>
          <div className="flex gap-3">
            {["f", "t", "in", "ig"].map(s => (
              <a key={s} href="#" className="w-9 h-9 rounded-full border flex items-center justify-center text-xs font-bold transition-colors" style={{ borderColor: "rgba(255,255,255,0.2)", color: "var(--color-brand-light)" }} onMouseOver={(e) => {e.currentTarget.style.borderColor = "var(--color-brand-yellow)"; e.currentTarget.style.color = "var(--color-brand-yellow)";}} onMouseOut={(e) => {e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "var(--color-brand-light)";}}>
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Working Days */}
        <div>
          <h4 className="font-bold mb-5" style={{ color: "var(--color-brand-light)" }}>Working Days</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between">
              <span style={{ color: "var(--color-brand-light)", opacity: 0.8 }}>Monday – Friday</span>
              <span style={{ color: "var(--color-brand-yellow)" }}>8am – 8pm</span>
            </li>
            <li className="flex justify-between">
              <span style={{ color: "var(--color-brand-light)", opacity: 0.8 }}>Saturday</span>
              <span style={{ color: "var(--color-brand-yellow)" }}>9am – 6pm</span>
            </li>
            <li className="flex justify-between">
              <span style={{ color: "var(--color-brand-light)", opacity: 0.8 }}>Sunday</span>
              <span style={{ color: "var(--color-brand-yellow)" }}>Emergency Only</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-5" style={{ color: "var(--color-brand-light)" }}>Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Contact", href: "/contact" },
            ].map(l => (
              <li key={l.name}>
                <a href={l.href} className="transition-colors flex items-center gap-2" style={{ color: "var(--color-brand-light)", opacity: 0.8 }} onMouseOver={(e) => e.currentTarget.style.color = "var(--color-brand-yellow)"} onMouseOut={(e) => e.currentTarget.style.color = "var(--color-brand-light)"}>
                  <span style={{ color: "var(--color-brand-yellow)" }}>›</span> {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-5" style={{ color: "var(--color-brand-light)" }}>Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-0.5" style={{ color: "var(--color-brand-yellow)" }}>📍</span>
              <span style={{ color: "var(--color-brand-light)", opacity: 0.8 }}>Level 2, 45 George Street, Sydney NSW 2000, Australia</span>
            </li>
            <li className="flex items-center gap-3">
              <span style={{ color: "var(--color-brand-yellow)" }}>📞</span>
              <a href="tel:+61212345678" className="transition-colors" style={{ color: "var(--color-brand-light)", opacity: 0.8 }} onMouseOver={(e) => e.currentTarget.style.color = "var(--color-brand-yellow)"} onMouseOut={(e) => e.currentTarget.style.color = "var(--color-brand-light)"}>+61 2 1234 5678</a>
            </li>
            <li className="flex items-center gap-3">
              <span style={{ color: "var(--color-brand-yellow)" }}>✉️</span>
              <a href="mailto:support@speedyscrubbers.com.au" className="transition-colors" style={{ color: "var(--color-brand-light)", opacity: 0.8 }} onMouseOver={(e) => e.currentTarget.style.color = "var(--color-brand-yellow)"} onMouseOut={(e) => e.currentTarget.style.color = "var(--color-brand-light)"}>support@speedyscrubbers.com.au</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t py-6 px-6" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ color: "var(--color-brand-light)", opacity: 0.6 }}>
          <span>© 2024 Speedy Scrubbers Cleaning Services Australia. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="transition-colors" onMouseOver={(e) => e.currentTarget.style.color = "var(--color-brand-yellow)"} onMouseOut={(e) => e.currentTarget.style.color = "var(--color-brand-light)"}>Privacy Policy</a>
            <a href="#" className="transition-colors" onMouseOver={(e) => e.currentTarget.style.color = "var(--color-brand-yellow)"} onMouseOut={(e) => e.currentTarget.style.color = "var(--color-brand-light)"}>Terms of Service</a>
            <a href="#" className="transition-colors" onMouseOver={(e) => e.currentTarget.style.color = "var(--color-brand-yellow)"} onMouseOut={(e) => e.currentTarget.style.color = "var(--color-brand-light)"}>Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
