import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Event {
  date: string;
  title: string;
  description?: string;
  imageUrl: string;
}

export default function UpcomingEvents() {
  const events: Event[] = [
    {
      date: "AUG 24, 2023",
      title: "NEON NIGHTS",
      imageUrl: "/images/event1.jpg",
    },
    {
      date: "JUL 22, 2023",
      title: "DJ PAUL FREEDMAN",
      imageUrl: "/images/event1.jpg",
    },
    {
      date: "JUL 22, 2023",
      title: "DJ PAUL FREEDMAN",
      imageUrl: "/images/event1.jpg",
    },
    {
      date: "JUL 22, 2023",
      title: "DJ PAUL FREEDMAN",
      imageUrl: "/images/event1.jpg",
    },
  ];

  return (
    <section className="w-full bg-black text-white px-4 py-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">Upcoming Events</h2>
          <p className="text-zinc-400">
            Join us for our upcoming events and enjoy the best music and atmosphere.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="#" className="block">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={event.imageUrl || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-6 space-y-2">
                  <p className="text-sm font-medium">{event.date}</p>
                  <h3 className="text-2xl font-bold">{event.title}</h3>
                  <Button variant="secondary" size="sm" className="mt-4">
                    GET TICKETS
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Browse All Events Button */}
        <div className="text-center pt-4">
          <Button size="lg" className="border-gray-800 hover:bg-gray-800">
            BROWSE ALL EVENTS
          </Button>
        </div>
      </div>
    </section>
  );
}
