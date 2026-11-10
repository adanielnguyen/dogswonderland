/**
 * ContactSection — Contact info + map + CTA
 * Design: Dark forest green background, warm text, prominent phone CTA
 */

import { Phone, MapPin, Clock, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(0.22 0.09 145)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Contact info */}
          <div className="reveal">
            <div
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.72 0.14 72)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Get in Touch
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.99 0.005 90)" }}
            >
              Ready to Book
              <br />
              <span style={{ color: "oklch(0.72 0.14 72)", fontStyle: "italic" }}>
                a Stay?
              </span>
            </h2>
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: "oklch(0.78 0.03 90)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Give Dianne a call to chat about your dog's specific needs, ask any questions,
              or schedule a meet-and-greet at the farm. She'd love to hear from you!
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-10">
              <a
                href="tel:0422776858"
                className="flex items-center gap-4 group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                  style={{ backgroundColor: "oklch(0.32 0.09 145)" }}
                >
                  <Phone size={20} style={{ color: "oklch(0.72 0.14 72)" }} />
                </div>
                <div>
                  <div
                    className="text-xs font-medium uppercase tracking-wide mb-0.5"
                    style={{ color: "oklch(0.62 0.06 90)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Phone
                  </div>
                  <div
                    className="text-xl font-semibold transition-colors duration-200"
                    style={{
                      color: "oklch(0.99 0.005 90)",
                      fontFamily: "'Fraunces', serif",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.88 0.12 72)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.99 0.005 90)")}
                  >
                    0422 776 858
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "oklch(0.32 0.09 145)" }}
              >
                <MapPin size={20} style={{ color: "oklch(0.72 0.14 72)" }} />
              </div>
              <div>
                <div
                  className="text-xs font-medium uppercase tracking-wide mb-0.5"
                  style={{ color: "oklch(0.62 0.06 90)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Address
                </div>
                <div
                  className="font-medium"
                  style={{ color: "oklch(0.99 0.005 90)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Mulfaheys Rd, Kyneton
                </div>
                <div
                  className="text-sm"
                  style={{ color: "oklch(0.72 0.04 90)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Victoria 3444, Australia
                </div>
              </div>
              </div>

              <a
                href="mailto:maifrances@gmail.com"
                className="flex items-center gap-4"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.32 0.09 145)" }}
                >
                  <Mail size={20} style={{ color: "oklch(0.72 0.14 72)" }} />
                </div>
                <div>
                  <div
                    className="text-xs font-medium uppercase tracking-wide mb-0.5"
                    style={{ color: "oklch(0.62 0.06 90)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Email
                  </div>
                  <div
                    className="font-medium transition-colors duration-200"
                    style={{ color: "oklch(0.99 0.005 90)", fontFamily: "'DM Sans', sans-serif" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.88 0.12 72)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.99 0.005 90)")}
                  >
                    maifrances@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.32 0.09 145)" }}
                >
                  <Clock size={20} style={{ color: "oklch(0.72 0.14 72)" }} />
                </div>
                <div>
                  <div
                    className="text-xs font-medium uppercase tracking-wide mb-0.5"
                    style={{ color: "oklch(0.62 0.06 90)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Availability
                  </div>
                  <div
                    className="font-medium"
                    style={{ color: "oklch(0.99 0.005 90)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Home full-time
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "oklch(0.72 0.04 90)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Always supervised — 7 days a week
                  </div>
                </div>
              </div>
            </div>

            {/* Big CTA */}
            <a href="tel:0422776858" className="btn-amber text-base">
              <Phone size={20} />
              Call Dianne Now
            </a>
          </div>

          {/* Right — Map embed + info card */}
          <div className="reveal reveal-delay-2">
            {/* Map */}
            <div
              className="rounded-2xl overflow-hidden mb-6"
              style={{
                boxShadow: "0 12px 40px oklch(0.12 0.06 145 / 0.4)",
                height: "320px",
              }}
            >
              <iframe
                title="Dogs Wonderland location — Kyneton, Victoria"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.2!2d144.4520!3d-37.2450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad72c8e4f5c1c1d%3A0x40609b49041d5c0!2sMulfaheys%20Rd%2C%20Kyneton%20VIC%203444!5e0!3m2!1sen!2sau!4v1715000000000!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Info card */}
            <div
              className="rounded-xl p-6"
              style={{
                backgroundColor: "oklch(0.28 0.09 145)",
                border: "1px solid oklch(0.35 0.09 145)",
              }}
            >
              <div
                className="text-sm font-semibold mb-3"
                style={{ color: "oklch(0.72 0.14 72)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Before You Book
              </div>
              <ul className="space-y-2">
                {[
                  "Meet-and-greet available to ensure a good fit",
                  "All dogs must be vaccinated and flea-treated",
                  "We welcome all breeds, sizes, and temperaments",
                  "Reactive and anxious dogs are very welcome",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "oklch(0.78 0.03 90)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <span style={{ color: "oklch(0.72 0.14 72)", flexShrink: 0 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
