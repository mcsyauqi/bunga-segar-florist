"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/data";

export default function Categories() {
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
            Kategori Produk
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Temukan Rangkaian <span className="gradient-text">Bunga Sempurna</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Berbagai pilihan rangkaian bunga untuk setiap kebutuhan dan momen spesial Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/koleksi/${category.slug}`}
                className="group block relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold font-heading text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-2">
                    {category.description}
                  </p>
                  <p className="text-primary text-sm font-medium">
                    {category.priceRange}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-white/80 group-hover:text-primary transition-colors">
                    <span className="text-sm font-medium">Lihat Koleksi</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
