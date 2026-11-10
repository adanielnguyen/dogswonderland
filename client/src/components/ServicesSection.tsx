/**
 * ServicesSection — A Typical Day + Services list
 * Design: Dark forest green background, light text, editorial layout
 */

import { Sun, Sunset, Moon, Waves, Trees, Camera, Heart, Shield } from "lucide-react";

const daySchedule = [
  {
    icon: Sun,
    time: "Morning",
    activity: "Energetic play across the paddocks — ball chasing, exploring, socialising",
  },
  {
    icon: Waves,
    time: "Midday",
    activity: "Lake time for water-loving breeds, or shade naps under the gum trees",
  },
  {
    icon: Sunset,
    time: "Afternoon",
    activity: "Relaxed roaming, sniffing adventures through the fenced acreage",
  },
  {
    icon: Moon,
    time: "Evening",
    activity: "Quiet wind-down, cuddles, and a peaceful night's rest",
  },
];

const services = [
  {
    icon: Trees,
    title: "Overnight Boarding",
    description: "Full-day and overnight stays on the farm. Your dog sleeps in a warm, safe environment.",
  },
  {
    icon: Heart,
    title: "Personalised Attention",
    description: "Family-run means your dog gets individual care, not lost in a crowd.",
  },
  {
    icon: Shield,
    title: "Reactive Dog Care",
    description: "Specialised management for dogs needing extra space or a calmer setting.",
  },
  {
    icon: Camera,
    title: "Photo & Video Updates",
    description: "Regular updates sent directly to you so you never have to wonder how they're going.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(0.22 0.09 145)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — A Typical Day */}
          <div className="reveal">
            <div
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.72 0.14 72)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Life at the Farm
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-8"
              style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.99 0.005 90)" }}
            >
              A Typical Day
              <br />
              <span style={{ color: "oklch(0.72 0.14 72)", fontStyle: "italic" }}>
                at Dogs Wonderland
              </span>
            </h2>

            <div className="space-y-6">
              {daySchedule.map((item, index) => (
                <div
                  key={item.time}
                  className={`flex gap-5 reveal reveal-delay-${index + 1}`}
                >
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "oklch(0.32 0.09 145)" }}
                    >
                      <item.icon size={18} style={{ color: "oklch(0.72 0.14 72)" }} />
                    </div>
                    {index < daySchedule.length - 1 && (
                      <div
                        className="w-px flex-1 mt-2"
                        style={{ backgroundColor: "oklch(0.35 0.09 145)", minHeight: "24px" }}
                      />
                    )}
                  </div>

                  <div className="pb-4">
                    <div
                      className="text-sm font-semibold mb-1"
                      style={{ color: "oklch(0.72 0.14 72)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.time}
                    </div>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "oklch(0.82 0.03 90)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.activity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Services */}
          <div className="reveal reveal-delay-2">
            <div
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.72 0.14 72)", fontFamily: "'DM Sans', sans-serif" }}
            >
              What's Included
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-8"
              style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.99 0.005 90)" }}
            >
              Our Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="p-5 rounded-xl"
                  style={{
                    backgroundColor: "oklch(0.28 0.09 145)",
                    border: "1px solid oklch(0.35 0.09 145)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: "oklch(0.32 0.09 145)" }}
                  >
                    <service.icon size={18} style={{ color: "oklch(0.72 0.14 72)" }} />
                  </div>
                  <h3
                    className="font-semibold mb-2"
                    style={{
                      fontFamily: "'Fraunces', serif",
                      color: "oklch(0.99 0.005 90)",
                      fontSize: "1.05rem",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.72 0.04 90)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="mt-8 p-6 rounded-xl"
              style={{
                backgroundColor: "oklch(0.32 0.09 145)",
                border: "1px solid oklch(0.42 0.09 145)",
              }}
            >
              <p
                className="text-base mb-4"
                style={{ color: "oklch(0.88 0.03 90)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Ready to book a stay? Give Dianne a call to chat about your dog's specific needs
                or to schedule a meet-and-greet!
              </p>
              <a href="tel:0422776858" className="btn-amber">
                Book a Meet &amp; Greet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
