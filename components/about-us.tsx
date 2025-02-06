import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="bg-black text-white">
      {/* About Section */}
      <section className="w-full bg-black text-white px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">About Us</h2>
            <p className="text-zinc-400">
              We are a premier club offering the best nightlife experience.
            </p>
          </motion.div>
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-pink-500 font-medium mb-2">WHO WE ARE</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-4">ABOUT</h3>
              </div>
              <p className="text-gray-300">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat excepteur sint
                occaecat cupidatat non.
              </p>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                MORE ABOUT US
              </Button>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/aboutUs.jpg"
                  alt="Nightclub celebration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-gray-300">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea dolor commodo consequat excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est sitele laborum quis nostrud
                incididunt.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="relative aspect-square w-full overflow-hidden rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/aboutUs.jpg"
                    alt="Neon silhouette"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  className="relative aspect-square w-full overflow-hidden rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/aboutUs.jpg"
                    alt="Cocktail pour"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full bg-black text-white px-4 py-12">
        <div className="container mx-auto space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-pink-500 font-medium mb-2">WATCH OUR VIDEO</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">A NIGHT AT</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Ut enim ad minim veniam quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat excepteur sint occaecat
              cupidatat non.
            </p>
          </motion.div>
          <motion.div
            className="relative aspect-video w-full max-w-7xl mx-auto mb-8 overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/homevideo.jpg"
              alt="Night performance"
              fill
              className="object-cover"
            />
            <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-500 group-hover:bg-pink-600 transition-colors">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </motion.div>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white">
            BUY TICKETS
          </Button>
        </div>
      </section>
    </div>
  );
}
