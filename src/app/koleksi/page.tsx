"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Star, Filter, X } from "lucide-react";
import { products, categories } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function KoleksiPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
              Koleksi <span className="gradient-text">Bunga</span>
            </h1>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Temukan rangkaian bunga segar pilihan untuk setiap momen spesial Anda
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-heading text-lg font-semibold mb-4">
                Kategori
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === null
                        ? "bg-primary text-white"
                        : "hover:bg-primary/10"
                    }`}
                  >
                    Semua Produk
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat.slug
                          ? "bg-primary text-white"
                          : "hover:bg-primary/10"
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md"
            >
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
          </div>

          {/* Mobile Filter Sidebar */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setIsFilterOpen(false)}
              />
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                className="absolute left-0 top-0 bottom-0 w-80 bg-white p-6"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-heading text-lg font-semibold">
                    Kategori
                  </h3>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => {
                        setSelectedCategory(null);
                        setIsFilterOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === null
                          ? "bg-primary text-white"
                          : "hover:bg-primary/10"
                      }`}
                    >
                      Semua Produk
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => {
                          setSelectedCategory(cat.slug);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === cat.slug
                            ? "bg-primary text-white"
                            : "hover:bg-primary/10"
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
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
                      {product.isBestSeller && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                            Best Seller
                          </span>
                        </div>
                      )}
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
          </div>
        </div>
      </div>
    </div>
  );
}
