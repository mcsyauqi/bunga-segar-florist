"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-white font-heading mb-2">
                {stat.value}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
