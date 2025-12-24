"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Palette, Truck, Calendar, Building, ArrowRight } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  palette: Palette,
  truck: Truck,
  calendar: Calendar,
  building: Building,
};

const linkMap: { [key: string]: string } = {
  "Custom Bouquet": "/custom",
  "Same-Day Delivery": "/order",
  "Subscription": "/langganan",
  "Corporate": "/kontak",
};

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Layanan <span className="gradient-text">Terbaik</span> untuk Anda
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan untuk memenuhi kebutuhan bunga Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const link = linkMap[service.name] || "/";
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={link}
                  className="group block p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    {service.name}
                  </h3>
                  <p className="text-foreground/60 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    <span>Pelajari Lebih</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
