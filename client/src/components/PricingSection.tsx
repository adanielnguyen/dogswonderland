/**
 * PricingSection — Simple, transparent pricing for Dogs Wonderland
 * Design: Warm cream background, three cards (nightly, weekly, monthly)
 */

import { Check, Phone } from "lucide-react";

const plans = [
  {
    label: "Nightly",
    price: 60,
    per: "per night",
    discount: null,
    saving: null,
    highlight: false,
    features: [
      "Full farm access & lake",
      "Personalised daily care",
      "Photo & video updates",
      "Safe, supervised play",
    ],
    cta: "Book a Night",
  },
  {
    label: "Weekly Stay",
    price: 54,
    per: "per night",
    discount: "10% off",
    saving: "Save $42 vs nightly",
    highlight: true,
    features: [
      "Everything in Nightly",
      "7-night minimum stay",
      "Priority scheduling",
      "Daily farm adventure report",
    ],
    cta: "Book a Week",
  },
  {
    label: "Monthly Stay",
    price: 48,
    per: "per night",
    discount: "20% off",
    saving: "Save $360 vs nightly",
    highlight: false,
    features: [
      "Everything in Weekly",
      "30-night minimum stay",
      "Best value for long trips",
      "Dedicated care routine",
    ],
    cta: "Book a Month",
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(0.97 0.01 90)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(0.42 0.12 145)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Transparent Pricing
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
            style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.09 145)" }}
          >
            Simple, Honest{" "}
            <span style={{ color: "oklch(0.52 0.16 145)", fontStyle: "italic" }}>Rates</span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "oklch(0.45 0.04 90)", fontFamily: "'DM Sans', sans-serif" }}
          >
            No hidden fees. Just great care for your dog at a fair price — with rewards for longer stays.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.label}
              className="reveal rounded-2xl p-8 flex flex-col relative"
              style={{
                backgroundColor: plan.highlight ? "oklch(0.28 0.09 145)" : "oklch(1 0 0)",
                border: plan.highlight
                  ? "2px solid oklch(0.72 0.14 72)"
                  : "1px solid oklch(0.88 0.02 90)",
                boxShadow: plan.highlight
                  ? "0 20px 60px oklch(0.22 0.09 145 / 0.25)"
                  : "0 4px 20px oklch(0.22 0.09 145 / 0.06)",
              }}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full"
                  style={{
                    backgroundColor: "oklch(0.72 0.14 72)",
                    color: "oklch(0.18 0.06 72)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Plan label */}
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{
                  color: plan.highlight ? "oklch(0.72 0.14 72)" : "oklch(0.42 0.12 145)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {plan.label}
              </div>

              {/* Price */}
              <div className="mb-2 flex items-end gap-1">
                <span
                  className="text-5xl font-bold leading-none"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    color: plan.highlight ? "oklch(0.99 0.005 90)" : "oklch(0.22 0.09 145)",
                  }}
                >
                  ${plan.price}
                </span>
                <span
                  className="text-sm mb-1.5"
                  style={{
                    color: plan.highlight ? "oklch(0.72 0.06 90)" : "oklch(0.55 0.04 90)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {plan.per}
                </span>
              </div>

              {/* Discount badge */}
              {plan.discount ? (
                <div className="mb-1">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: plan.highlight
                        ? "oklch(0.72 0.14 72 / 0.2)"
                        : "oklch(0.52 0.16 145 / 0.1)",
                      color: plan.highlight ? "oklch(0.88 0.12 72)" : "oklch(0.42 0.12 145)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {plan.discount}
                  </span>
                </div>
              ) : (
                <div className="mb-1 h-5" />
              )}

              {/* Saving */}
              <div
                className="text-xs mb-6"
                style={{
                  color: plan.highlight ? "oklch(0.65 0.06 90)" : "oklch(0.62 0.04 90)",
                  fontFamily: "'DM Sans', sans-serif",
                  minHeight: "1.25rem",
                }}
              >
                {plan.saving ?? ""}
              </div>

              {/* Divider */}
              <div
                className="mb-6"
                style={{
                  borderTop: `1px solid ${plan.highlight ? "oklch(0.38 0.09 145)" : "oklch(0.90 0.02 90)"}`,
                }}
              />

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: plan.highlight ? "oklch(0.72 0.14 72)" : "oklch(0.52 0.16 145)" }}
                    />
                    <span
                      className="text-sm"
                      style={{
                        color: plan.highlight ? "oklch(0.82 0.03 90)" : "oklch(0.42 0.04 90)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="tel:0422776858"
                className="flex items-center justify-center gap-2 rounded-xl font-semibold text-sm py-3 px-5 transition-all duration-200"
                style={{
                  backgroundColor: plan.highlight ? "oklch(0.72 0.14 72)" : "oklch(0.28 0.09 145)",
                  color: plan.highlight ? "oklch(0.18 0.06 72)" : "oklch(0.99 0.005 90)",
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                <Phone size={14} />
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p
          className="text-center text-sm mt-10 reveal"
          style={{ color: "oklch(0.58 0.04 90)", fontFamily: "'DM Sans', sans-serif" }}
        >
          All rates are per dog per night. Call Dianne on{" "}
          <a
            href="tel:0422776858"
            style={{ color: "oklch(0.42 0.12 145)", textDecoration: "none", fontWeight: 600 }}
          >
            0422 776 858
          </a>{" "}
          to discuss your dog's specific needs.
        </p>
      </div>
    </section>
  );
}
