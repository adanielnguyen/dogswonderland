/**
 * Footer — Dogs Wonderland
 * Design: Very dark forest green, logo, links, tagline
 */

import { Phone, MapPin, Heart, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "oklch(0.16 0.08 145)" }}
    >
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/manus-storage/dogs_wonderland_logo_a9c9f132.jpg"
                alt="Dogs Wonderland Logo"
                className="w-14 h-14 rounded-full object-cover border-2"
                style={{ borderColor: "oklch(0.72 0.14 72 / 0.5)" }}
              />
              <div>
                <div
                  className="font-bold text-lg leading-tight"
                  style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.99 0.005 90)" }}
                >
                  Dogs Wonderland
                </div>
                <div
                  className="text-xs"
                  style={{ color: "oklch(0.65 0.06 72)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Kyneton Farm &amp; Retreat
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "oklch(0.62 0.04 90)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Where every dog gets to be a dog. 2.25 hectares of lakeside paradise in the
              heart of Kyneton, Victoria.
            </p>
            <div
              className="text-sm italic"
              style={{ color: "oklch(0.55 0.06 72)", fontFamily: "'Fraunces', serif" }}
            >
              "Escape to Dogs Wonderland"
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.72 0.14 72)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Navigate
            </div>
            <ul className="space-y-2">
              {[
                { label: "Why Dogs Wonderland", href: "#why" },
                { label: "About Dianne", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Photo Gallery", href: "#gallery" },
                { label: "Contact & Booking", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "oklch(0.65 0.04 90)", textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.88 0.12 72)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.65 0.04 90)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.72 0.14 72)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Contact
            </div>
            <div className="space-y-3">
              <a
                href="tel:0422776858"
                className="flex items-center gap-3 group"
                style={{ textDecoration: "none" }}
              >
                <Phone size={15} style={{ color: "oklch(0.72 0.14 72)" }} />
                <span
                  className="text-sm transition-colors duration-200"
                  style={{ color: "oklch(0.65 0.04 90)", fontFamily: "'DM Sans', sans-serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.88 0.12 72)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.65 0.04 90)")}
                >
                  0422 776 858
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(0.72 0.14 72)" }} />
                <span
                  className="text-sm"
                  style={{ color: "oklch(0.65 0.04 90)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Mulfaheys Rd, Kyneton
                  <br />
                  Victoria 3444, Australia
                </span>
              </div>
              <a
                href="mailto:maifrances@gmail.com"
                className="flex items-center gap-3"
                style={{ textDecoration: "none" }}
              >
                <Mail size={15} style={{ color: "oklch(0.72 0.14 72)" }} />
                <span
                  className="text-sm transition-colors duration-200"
                  style={{ color: "oklch(0.65 0.04 90)", fontFamily: "'DM Sans', sans-serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.88 0.12 72)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.65 0.04 90)")}
                >
                  maifrances@gmail.com
                </span>
              </a>
            </div>

            {/* CTA */}
            <a
              href="tel:0422776858"
              className="btn-forest mt-6 text-sm"
              style={{ padding: "0.625rem 1.25rem" }}
            >
              <Phone size={14} />
              Book a Stay
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid oklch(0.28 0.08 145)" }}
        >
          <p
            className="text-xs"
            style={{ color: "oklch(0.45 0.04 90)", fontFamily: "'DM Sans', sans-serif" }}
          >
            © {new Date().getFullYear()} Dogs Wonderland · Kyneton, Victoria · All rights reserved
          </p>
          <p
            className="text-xs flex items-center gap-1"
            style={{ color: "oklch(0.45 0.04 90)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Made with <Heart size={11} style={{ color: "oklch(0.55 0.18 15)" }} /> for dogs everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
