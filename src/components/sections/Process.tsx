"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export default function Process() {
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
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Cara Pemesanan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Pesan dalam <span className="gradient-text">4 Langkah Mudah</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Proses pemesanan yang simple dan cepat untuk kenyamanan Anda
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full text-white text-2xl font-bold mb-6 shadow-lg shadow-primary/30">
                  {item.step}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/60">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
