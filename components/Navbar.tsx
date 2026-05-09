"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-5 left-4 right-4 lg:left-1/2 lg:right-auto lg:-translate-x-1/2 lg:w-full lg:max-w-7xl z-50 rounded-full bg-white/80 backdrop-blur-2xl backdrop-saturate-200 shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/50">
      <div className="px-6 py-2.5 lg:px-8 lg:py-3.5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 lg:gap-3 group">
          <span className="font-heading text-2xl lg:text-3xl font-bold text-brand-blue tracking-tight">Speedy Scrubbers</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map(item => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-heading text-lg font-semibold text-brand-blue hover:text-brand-yellow transition-colors duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="font-heading relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold overflow-hidden group"
            style={{
              background: "var(--color-brand-yellow)",
              color: "var(--color-brand-blue-dark)",
            }}
          >
            {/* shimmer sweep on hover */}
            <span
              className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent)",
              }}
            />
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" fill="currentColor"/>
            </svg>
            Get a Free Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden p-2 text-brand-blue hover:text-brand-yellow transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-8 h-0.5 bg-current mb-2 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
          <div className={`w-8 h-0.5 bg-current mb-2 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-8 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-[calc(100%+0.5rem)] left-0 right-0 bg-white/80 backdrop-blur-2xl backdrop-saturate-200 border border-white/50 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className="font-heading text-brand-blue font-semibold text-lg hover:text-brand-yellow transition-colors pl-2 border-l-2 border-transparent hover:border-brand-yellow"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-2 pt-5 border-t border-gray-200/60">
            <Link
              href="/contact"
              className="font-heading relative w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-full text-base font-semibold overflow-hidden group"
              style={{
                background: "var(--color-brand-yellow)",
                color: "var(--color-brand-blue-dark)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              <span
                className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent)",
                }}
              />
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" fill="currentColor"/>
              </svg>
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}