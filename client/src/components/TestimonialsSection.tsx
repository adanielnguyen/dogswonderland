/**
 * TestimonialsSection — Social proof / reviews
 * Design: Soft green tinted background, card-based testimonials
 */

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Melbourne",
    rating: 5,
    text: "Dianne is absolutely incredible. Our anxious rescue dog Max has never been so relaxed at a boarding stay. The farm space gave him room to decompress, and the lake photos she sent had us in tears — he looked so happy!",
    dog: "Max, Border Collie mix",
  },
  {
    name: "James & Priya T.",
    location: "Kyneton",
    rating: 5,
    text: "We've tried several boarding options over the years and nothing comes close to Dogs Wonderland. Bella came home tired in the best possible way — she'd clearly been running and swimming all day. Dianne is a true dog whisperer.",
    dog: "Bella, Golden Retriever",
  },
  {
    name: "Claire R.",
    location: "Castlemaine",
    rating: 5,
    text: "Our reactive staffy Bruno has always been a challenge at kennels. Dianne understood him immediately and the space meant he could have his own territory. He's been back three times now and we wouldn't go anywhere else.",
    dog: "Bruno, Staffordshire Bull Terrier",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(0.96 0.015 145)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 reveal">
          <div
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(0.48 0.08 200)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Happy Families
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.22 0.04 55)" }}
          >
            What Dog Owners
            <br />
            <span style={{ color: "oklch(0.32 0.09 145)", fontStyle: "italic" }}>
              Are Saying
            </span>
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`reveal reveal-delay-${index + 1}`}
            >
              <div
                className="p-7 rounded-xl h-full flex flex-col"
                style={{
                  backgroundColor: "oklch(0.99 0.005 90)",
                  border: "1px solid oklch(0.88 0.02 90)",
                  boxShadow: "0 4px 16px oklch(0.22 0.04 55 / 0.06)",
                }}
              >
                {/* Quote icon */}
                <Quote
                  size={28}
                  className="mb-4 flex-shrink-0"
                  style={{ color: "oklch(0.72 0.14 72)" }}
                />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="oklch(0.72 0.14 72)"
                      style={{ color: "oklch(0.72 0.14 72)" }}
                    />
                  ))}
                </div>

                {/* Text */}
                <p
                  className="text-base leading-relaxed flex-1 mb-6"
                  style={{ color: "oklch(0.38 0.04 55)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t pt-4" style={{ borderColor: "oklch(0.92 0.02 90)" }}>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: "oklch(0.22 0.04 55)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: "oklch(0.52 0.04 55)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {testimonial.location} · {testimonial.dog}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
