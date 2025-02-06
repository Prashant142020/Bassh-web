import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function GallerySection() {
  const images = [
    "/images/homevideo.jpg",
    // Add more image paths as needed
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-pink-500 font-medium">OUR GALLERY</p>
          <h2 className="text-5xl font-bold">FEEL THE</h2>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white">
            BUY TICKETS
          </Button>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={400}
                height={300}
                className="rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
