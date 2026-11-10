/**
 * Dogs Wonderland — Home Page
 * Design: Modern Nature Retreat / Biophilic
 * Colors: Forest green (#2D5016 → oklch 0.32 0.09 145), Lake teal, Warm white, Golden amber
 * Typography: Fraunces (display serif) + DM Sans (body)
 * Layout: Full-bleed hero, alternating editorial sections, photography-first
 */

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import BookingSection from "@/components/BookingSection";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />
      <main>
        <HeroSection />
        <WhySection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <PricingSection />
        <BookingSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
