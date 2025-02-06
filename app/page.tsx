"use client";

import AboutUs from "@/components/about-us";
import HeroSection from "@/components/hero-section";
import UpcomingEvents from "@/components/upcoming-event";
import WhatWeOffer from "@/components/what-we-offer";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VisitSection from "@/components/VisitSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <UpcomingEvents />
      <WhatWeOffer />
      <AboutUs />
      <GallerySection />
      <TestimonialsSection />
      <VisitSection />
      <FooterSection />
    </div>
  );
}
