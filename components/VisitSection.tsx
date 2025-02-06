import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";

export default function VisitSection() {
  return (
    <section className="relative py-16 ">
      <Image
        src="/images/homevideo.jpg"
        alt="Club atmosphere"
        fill
        className="object-cover opacity-50"
      />
      <div className="container mx-auto px-4 relative">
        <div className="space-y-8">
          <p className="text-pink-500 font-medium">VISIT US</p>
          <h2 className="text-5xl font-bold">COME AND VISIT</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <Button className="bg-pink-500 hover:bg-pink-600">
              BUY TICKETS
            </Button>
            <Button>CONTACT US</Button>
          </div>
          <Card className="bg-black p-6 max-w-md backdrop-blur text-white">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-pink-500 h-5 w-5 mt-1" />
                <p>943-951 N. Broadway Los Angeles, CA 90012, United States</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-pink-500 h-5 w-5" />
                <p>contact@club.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-pink-500 h-5 w-5" />
                <p>+1 (414) 857 - 0107</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
