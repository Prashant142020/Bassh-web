import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FooterSection() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <h3 className="font-bold text-lg">UPCOMING EVENTS</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-bold">DJ Dominique</p>
                <p className="text-gray-400">AUG 25, 2023</p>
                <Button variant="link" className="text-pink-500 px-0">
                  BUY TICKETS
                </Button>
              </li>
              {/* More events... */}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">PAGES</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>About</li>
              <li>Events</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">UTILITY PAGES</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Start here</li>
              <li>Style guide</li>
              <li>404 not found</li>
              <li>Password protected</li>
              <li>Licenses</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">FOLLOW US ON INSTAGRAM</h3>
            <div className="grid grid-cols-2 gap-2">
              <Image
                src="/images/homevideo.jpg"
                alt="Instagram feed"
                width={150}
                height={150}
                className="rounded-lg"
              />
              {/* More Instagram images... */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
