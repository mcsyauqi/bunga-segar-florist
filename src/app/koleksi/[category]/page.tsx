"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Star, ArrowLeft } from "lucide-react";
import { products, categories } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = use(params);

  const currentCategory = categories.find((c) => c.slug === category);
  const filteredProducts = products.filter((p) => p.category === category);

  if (!currentCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Kategori tidak ditemukan</h1>
          <Link href="/koleksi" className="text-primary hover:underline">
            Kembali ke Koleksi
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${currentCategory.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/koleksi"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Koleksi
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4">
              {currentCategory.name}
            </h1>
            <p className="text-white/80 max-w-2xl">
              {currentCategory.description}
            </p>
            <p className="text-primary mt-2 font-medium">
              {currentCategory.priceRange}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
        ) : (
          <div className="text-center py-12">
            <p className="text-foreground/60">
              Belum ada produk di kategori ini.
            </p>
            <Link
              href="/koleksi"
              className="text-primary hover:underline mt-4 inline-block"
            >
              Lihat koleksi lainnya
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
