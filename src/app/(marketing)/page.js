"use client";

// components
import Hero from "@/components/Home/hero";
import Works from "@/components/Home/works";
import Features from "@/components/Home/features";
import Pricing from "@/components/Home/pricing";
import Reviews from "@/components/Home/reviews";

export default function HeroSection() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center px-4 py-8 md:px-0">
      {/* Hero Section */}
      <Hero />

      {/* How it works */}
      <Works />

      {/* Features Section */}
      <Features />

      {/* Pricing Section */}
      <Pricing />

      {/* Testimonials Section */}
      <Reviews />
    </section>
  );
}
