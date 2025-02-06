import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Egestas maecenas pharetra convallis posuere morbi leo.",
    name: "Sophie Moore",
    location: "Los Angeles, CA",
    initials: "SM",
  },
  {
    id: 2,
    text: "Amazing service! The team went above and beyond to deliver exceptional results. Highly recommend!",
    name: "John Doe",
    location: "New York, NY",
    initials: "JD",
  },
  // Add more testimonials as needed
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-update every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Reset transitioning state after animation
  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => setIsTransitioning(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="space-y-8">
        <p className="text-pink-500 font-medium text-center tracking-widest text-sm uppercase">
          TESTIMONIALS
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          DON&apos;T TAKE <span className="text-white">OUR</span>
          <br />
          WORD FOR IT
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <Card
            className={`bg-zinc-900/50 p-8 backdrop-blur border border-zinc-800/50 rounded-xl transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <blockquote className="relative space-y-6">
              <div className="text-gray-300 text-lg leading-relaxed">
                &ldquo;{currentTestimonial.text}&rdquo;
              </div>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <span className="text-pink-500 font-bold text-xl">
                    {currentTestimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{currentTestimonial.name}</p>
                  <p className="text-gray-400 text-sm">
                    {currentTestimonial.location}
                  </p>
                </div>
              </footer>
            </blockquote>
          </Card>
          <div className="flex gap-2 justify-end mt-4">
            <Button
              size="icon"
              className="border-zinc-700 hover:bg-zinc-800/50"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              className="border-zinc-700 hover:bg-zinc-800/50"
              onClick={handleNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
