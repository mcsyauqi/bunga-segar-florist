"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { galleryItems } from "@/lib/data";

export default function Gallery() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Galeri Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Inspirasi <span className="gradient-text">Rangkaian Bunga</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Lihat koleksi karya-karya terbaik kami yang telah membahagiakan ribuan pelanggan
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`relative overflow-hidden rounded-2xl ${
                index === 0 || index === 3 ? "md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 || index === 3 ? "aspect-[3/4]" : "aspect-square"}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-medium">{item.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/koleksi"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium shadow-lg shadow-primary/25"
          >
            Lihat Semua Koleksi
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
