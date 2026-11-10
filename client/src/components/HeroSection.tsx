/**
 * HeroSection — Full-bleed cinematic hero with overlay text
 * Design: Photography-first, dark overlay for text legibility, white text
 */

import { Phone, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero_dogs_farm.webp')`,
        }}
      />

      {/* Gradient overlay — dark at bottom for text, lighter at top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.15 0.08 145 / 0.35) 0%, oklch(0.12 0.08 145 / 0.55) 50%, oklch(0.1 0.06 145 / 0.82) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 container flex flex-col justify-end"
        style={{ minHeight: "100vh", paddingBottom: "5rem" }}
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
            style={{
              backgroundColor: "oklch(0.72 0.14 72 / 0.2)",
              border: "1px solid oklch(0.72 0.14 72 / 0.5)",
              color: "oklch(0.92 0.1 72)",
              fontFamily: "'DM Sans', sans-serif",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "oklch(0.72 0.14 72)" }}
            />
            Kyneton, Victoria · 2.25 Hectares
          </div>

          {/* Headline */}
          <h1
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "oklch(0.99 0.005 90)",
              textShadow: "0 2px 12px oklch(0.1 0.05 145 / 0.5)",
              fontWeight: 700,
            }}
          >
            Where Every Dog
            <br />
            <span style={{ color: "oklch(0.88 0.12 72)", fontStyle: "italic" }}>
              Gets to Be a Dog.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl mb-8 max-w-xl leading-relaxed"
            style={{
              color: "oklch(0.92 0.02 90)",
              fontFamily: "'DM Sans', sans-serif",
              textShadow: "0 1px 4px oklch(0.1 0.05 145 / 0.4)",
            }}
          >
            A lakeside farm retreat in Kyneton — fully fenced acreage, natural swimming lake,
            and 10 years of dedicated care by Dianne.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="tel:0422776858" className="btn-forest">
              <Phone size={18} />
              Call to Book
            </a>
            <a href="#why" className="btn-amber">
              Discover the Farm
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-12">
            {[
              { value: "2.25ha", label: "Fully Fenced Acreage" },
              { value: "10+", label: "Years Experience" },
              { value: "1", label: "Natural Lake" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-bold"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    color: "oklch(0.88 0.12 72)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm mt-0.5"
                  style={{ color: "oklch(0.78 0.04 90)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce"
        style={{ color: "oklch(0.78 0.04 90)" }}
      >
        <span className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Scroll
        </span>
        <ChevronDown size={18} />
      </div>
    </section>
  );
}
