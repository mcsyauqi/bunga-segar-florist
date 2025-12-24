"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Truck, Flower, Sparkles } from "lucide-react";

const features = [
  { icon: Flower, text: "Bunga Segar Import" },
  { icon: Truck, text: "Same-Day Delivery" },
  { icon: Sparkles, text: "Custom Design" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              🌸 Ungkapkan Perasaan dengan Keindahan Bunga
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6"
          >
            Bunga Segar untuk{" "}
            <span className="gradient-text">Setiap Momen Spesial</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-foreground/70 mb-8 leading-relaxed"
          >
            Rangkaian bunga segar berkualitas untuk hadiah, dekorasi, dan berbagai
            acara. Pengiriman same-day available di Jakarta dan sekitarnya.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link
              href="/order"
              className="px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all font-medium shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              Pesan Sekarang
            </Link>
            <Link
              href="/custom"
              className="px-8 py-4 bg-white text-foreground rounded-full hover:bg-white/90 transition-all font-medium shadow-lg border border-primary/20"
            >
              Custom Bouquet
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-sm"
              >
                <feature.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground/80">
                  {feature.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
