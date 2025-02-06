import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function GallerySection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-pink-500 font-medium">OUR GALLERY</p>
          <h2 className="text-5xl font-bold">FEEL THE</h2>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white">
            BUY TICKETS
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Image
            src="/images/homevideo.jpg"
            alt="Club interior with purple lighting"
            width={400}
            height={300}
            className="rounded-lg"
          />
          {/* Additional gallery images would go here */}
        </div>
      </div>
    </section>
  );
}
