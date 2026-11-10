/**
 * WhySection — "Why Choose Dogs Wonderland?" feature cards
 * Design: Cream background, forest green accents, icon cards with staggered reveal
 */

import { Shield, Waves, Trees, Heart, Camera, Star } from "lucide-react";

const features = [
  {
    icon: Trees,
    title: "2.25 Hectares of Freedom",
    description:
      "Fully fenced, secure acreage where dogs can actually run, sniff, and explore to their heart's content — no cramped kennels here.",
    color: "oklch(0.32 0.09 145)",
    bg: "oklch(0.94 0.03 145)",
  },
  {
    icon: Waves,
    title: "The Lakeside Retreat",
    description:
      "A stunning natural lake on the property — perfect for water-loving breeds to splash around in under Dianne's watchful supervision.",
    color: "oklch(0.48 0.08 200)",
    bg: "oklch(0.94 0.03 200)",
  },
  {
    icon: Star,
    title: "10 Years of Experience",
    description:
      "From tiny toy breeds to gentle giants, Dianne understands canine behaviour inside and out. Your dog is in the most capable hands.",
    color: "oklch(0.62 0.12 72)",
    bg: "oklch(0.96 0.04 72)",
  },
  {
    icon: Shield,
    title: "Reactive Dog Specialists",
    description:
      "Our massive space and Dianne's background mean we can safely manage dogs that need extra personal space or a calmer environment.",
    color: "oklch(0.42 0.09 145)",
    bg: "oklch(0.94 0.03 145)",
  },
  {
    icon: Heart,
    title: "Family-Run Care",
    description:
      "This is a family farm, not a commercial kennel. Your dog becomes part of the family while they're here — personalised attention always.",
    color: "oklch(0.55 0.18 15)",
    bg: "oklch(0.96 0.03 15)",
  },
  {
    icon: Camera,
    title: "Regular Photo Updates",
    description:
      "We know how much you miss them! Dianne is happy to send photo and video updates of their farm adventures throughout their stay.",
    color: "oklch(0.48 0.08 200)",
    bg: "oklch(0.94 0.03 200)",
  },
];

export default function WhySection() {
  return (
    <section
      id="why"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(0.99 0.005 90)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-14 reveal">
          <div
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(0.48 0.08 200)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Why Dogs Wonderland
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
            style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.04 55)" }}
          >
            A True Holiday
            <br />
            <span style={{ color: "oklch(0.32 0.09 145)", fontStyle: "italic" }}>
              for Your Dog
            </span>
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "oklch(0.45 0.04 55)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Forget cramped kennels. At Dogs Wonderland, your pup gets the full "Wonderland"
            experience — space, nature, and genuine love.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`reveal reveal-delay-${(index % 4) + 1}`}
            >
              <div
                className="p-7 rounded-xl h-full transition-all duration-300 group"
                style={{
                  backgroundColor: "oklch(0.99 0.005 90)",
                  border: "1px solid oklch(0.88 0.02 90)",
                  boxShadow: "0 2px 8px oklch(0.22 0.04 55 / 0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 32px oklch(0.22 0.04 55 / 0.12)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = feature.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 2px 8px oklch(0.22 0.04 55 / 0.06)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.88 0.02 90)";
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: feature.bg }}
                >
                  <feature.icon size={22} style={{ color: feature.color }} />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    color: "oklch(0.22 0.04 55)",
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.48 0.04 55)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
