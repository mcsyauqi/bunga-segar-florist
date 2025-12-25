"use client";

import { motion } from "framer-motion";
import { Flower2, Award, Clock, Tag, Shield, Headphones } from "lucide-react";
import { whyChooseUs } from "@/lib/data";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  flower: Flower2,
  award: Award,
  clock: Clock,
  tag: Tag,
  shield: Shield,
  headphones: Headphones,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Mengapa Memilih Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Keunggulan <span className="gradient-text">Bunga Segar</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Lebih dari 10 tahun pengalaman melayani ribuan pelanggan dengan kualitas terbaik
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl mb-4">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/60">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
