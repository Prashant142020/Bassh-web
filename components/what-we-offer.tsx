import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { servicesData } from "@/constants/servicesData";
import { motion } from "framer-motion";

export default function WhatWeOffer() {
  return (
    <section className="w-full bg-black text-white px-4 py-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="mb-16 flex items-center justify-between">
          <div>
            <h2 className="text-fuchsia-500 text-sm font-medium tracking-wider uppercase">
              OUR SERVICES
            </h2>
            <h3 className="text-4xl font-bold mb-8 tracking-tight">
              WHAT WE OFFER
              <br />
              IN ONE PLACE
            </h3>
          </div>
          <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
            BUY TICKETS
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-zinc-900">
                <CardHeader>
                  <service.icon
                    className="h-12 w-12 text-pink-500"
                    strokeWidth={1.5}
                  />
                  <CardTitle className="text-xl font-bold text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
