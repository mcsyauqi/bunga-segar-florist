"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag, Star } from "lucide-react";
import { bestSellers } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function BestSeller() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;

  const next = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= bestSellers.length ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? bestSellers.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Best Seller
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              Pilihan <span className="gradient-text">Terfavorit</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow border border-primary/10"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bg-primary text-white shadow-md hover:shadow-lg transition-shadow"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                      Best Seller
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Link
                      href="/order"
                      className="px-6 py-3 bg-white text-foreground rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform"
                    >
                      Pesan Sekarang
                    </Link>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-1">
                    {product.name}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-3">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-lg">
                      {formatPrice(product.price)}
                    </span>
                    <Link
                      href="/order"
                      className="p-2 bg-primary/10 rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <ShoppingBag className="h-5 w-5" />
                    </Link>
                  </div>
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
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors font-medium"
          >
            Lihat Semua Koleksi
            <ChevronRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
