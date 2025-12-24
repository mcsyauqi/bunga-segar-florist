"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Cake, Heart, GraduationCap, Flower2, HeartHandshake, Sparkles } from "lucide-react";
import { occasions } from "@/lib/data";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  cake: Cake,
  heart: Heart,
  graduationCap: GraduationCap,
  flower: Flower2,
  heartHandshake: HeartHandshake,
  sparkles: Sparkles,
};

export default function Occasions() {
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
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Untuk Setiap Momen
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Bunga untuk <span className="gradient-text">Setiap Kesempatan</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Apapun momennya, kami punya rangkaian bunga yang sempurna untuk mengungkapkan perasaan Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {occasions.map((occasion, index) => {
            const IconComponent = iconMap[occasion.icon];
            return (
              <motion.div
                key={occasion.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href="/koleksi"
                  className="group flex flex-col items-center p-6 bg-gradient-to-br from-background to-white rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1 border border-primary/5"
                >
                  <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <IconComponent className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-center mb-1">
                    {occasion.name}
                  </h3>
                  <p className="text-xs text-foreground/60 text-center">
                    {occasion.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
