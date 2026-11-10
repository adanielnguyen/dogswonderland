/**
 * Navbar — Dogs Wonderland
 * Transparent on hero, solid forest-green on scroll
 * Logo + nav links + CTA phone button
 */

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Why Us", href: "#why" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Pricing", href: "#pricing" },
    { label: "Book", href: "#book" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "oklch(0.22 0.09 145 / 0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px oklch(0.15 0.06 145 / 0.3)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" style={{ textDecoration: "none" }}>
            <img
              src="/manus-storage/dogs_wonderland_logo_a9c9f132.jpg"
              alt="Dogs Wonderland Logo"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 transition-transform duration-200 group-hover:scale-105"
              style={{ borderColor: "oklch(0.72 0.14 72)" }}
            />
            <div className="hidden sm:block">
              <div
                className="font-bold text-lg leading-tight"
                style={{
                  fontFamily: "'Fraunces', serif",
                  color: "oklch(0.99 0.005 90)",
                  textShadow: scrolled ? "none" : "0 1px 4px oklch(0.1 0.05 145 / 0.6)",
                }}
              >
                Dogs Wonderland
              </div>
              <div
                className="text-xs font-medium tracking-wide"
                style={{ color: "oklch(0.85 0.06 72)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Kyneton Farm &amp; Retreat
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color: "oklch(0.92 0.02 90)",
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.85 0.1 72)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.92 0.02 90)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Phone */}
          <a
            href="tel:0422776858"
            className="hidden md:flex items-center gap-2 btn-forest text-sm"
            style={{ padding: "0.5rem 1.25rem" }}
          >
            <Phone size={15} />
            0422 776 858
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md transition-colors"
            style={{ color: "oklch(0.99 0.005 90)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: "oklch(0.22 0.09 145 / 0.98)",
            borderColor: "oklch(0.35 0.09 145)",
          }}
        >
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium py-2"
                style={{
                  color: "oklch(0.92 0.02 90)",
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:0422776858"
              className="btn-forest mt-2 justify-center"
              style={{ padding: "0.75rem 1.5rem" }}
            >
              <Phone size={16} />
              Call 0422 776 858
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
