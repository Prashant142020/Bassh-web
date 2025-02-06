import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
    // Upcoming Events Section

    <div>
      <section className="w-full bg-black text-white px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <section className="bg-black text-white py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-fuchsia-500 text-sm font-medium tracking-wider uppercase">
                Our Events
              </h2>
              <h2 className="text-4xl font-bold mb-8 tracking-tight">
                UPCOMING
              </h2>
            </div>
          </section>

          {/* Events Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg"
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
              </div>
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
    </div>
  );
}
