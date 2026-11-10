/**
 * AboutSection — Meet Dianne + The Lake photo
 * Design: Asymmetric editorial layout, image left / text right
 */

import { CheckCircle2 } from "lucide-react";

const highlights = [
  "10 years of dedicated dog care experience",
  "Specialised in reactive and anxious dogs",
  "Home full-time — always supervised",
  "All breeds, all sizes, all temperaments",
  "Family-run farm environment",
  "Located in the heart of Kyneton, Victoria",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(0.96 0.015 145)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images — stacked with offset */}
          <div className="relative reveal">
            {/* Main lake photo */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 20px 60px oklch(0.22 0.09 145 / 0.2)",
              }}
            >
              <img
              src="/images/dogs_lake_lush.webp"
              alt="White fluffy dog and golden retriever on lush green grass by the lake at Dogs Wonderland"
                className="w-full object-cover"
                style={{ height: "420px" }}
              />
            </div>

            {/* Dianne portrait — overlapping bottom-right */}
            <div
              className="absolute -bottom-8 -right-4 md:-right-8 w-44 md:w-56 rounded-xl overflow-hidden border-4"
              style={{
                borderColor: "oklch(0.99 0.005 90)",
                boxShadow: "0 12px 40px oklch(0.22 0.09 145 / 0.25)",
              }}
            >
              <img
                src="/images/dianne_ai_portrait.webp"
                alt="Dianne with her dogs by the lake at Dogs Wonderland"
                className="w-full object-cover"
                style={{ height: "200px", objectPosition: "top" }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute top-6 -left-4 md:-left-6 rounded-xl px-4 py-3 text-center"
              style={{
                backgroundColor: "oklch(0.32 0.09 145)",
                boxShadow: "0 8px 24px oklch(0.22 0.09 145 / 0.35)",
              }}
            >
              <div
                className="text-2xl font-bold"
                style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.88 0.12 72)" }}
              >
                10+
              </div>
              <div
                className="text-xs font-medium"
                style={{ color: "oklch(0.85 0.04 90)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Years of Care
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="reveal reveal-delay-2 lg:pl-4" style={{ paddingTop: "2rem" }}>
            <div
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.48 0.08 200)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Meet Your Host
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.04 55)" }}
            >
              Hi, I'm{" "}
              <span style={{ color: "oklch(0.32 0.09 145)", fontStyle: "italic" }}>
                Dianne
              </span>
            </h2>
            <p
              className="text-lg leading-relaxed mb-4"
              style={{ color: "oklch(0.38 0.04 55)", fontFamily: "'DM Sans', sans-serif" }}
            >
              I've spent the last 10 years dedicated to caring for dogs of all shapes, sizes,
              and temperaments. My home is a beautiful, sprawling farm in Kyneton — and I'd love
              to welcome your furry friend to our slice of countryside heaven.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "oklch(0.48 0.04 55)", fontFamily: "'DM Sans', sans-serif" }}
            >
              At Dogs Wonderland, your dog isn't just a booking — they become part of the family.
              I'm home full-time, so someone is always keeping an eye on the fun.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "oklch(0.42 0.09 145)" }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: "oklch(0.38 0.04 55)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a href="tel:0422776858" className="btn-forest">
              Chat with Dianne
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
