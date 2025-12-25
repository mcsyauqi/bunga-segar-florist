"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle, Search } from "lucide-react";
import { faqs } from "@/lib/data";

const categories = [
  { id: "all", name: "Semua" },
  { id: "produk", name: "Produk" },
  { id: "pemesanan", name: "Pemesanan" },
  { id: "pembayaran", name: "Pembayaran" },
  { id: "pengiriman", name: "Pengiriman" },
  { id: "garansi", name: "Garansi" },
  { id: "langganan", name: "Langganan" },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
              Pertanyaan <span className="gradient-text">yang Sering Diajukan</span>
            </h1>
            <p className="text-foreground/60 max-w-2xl mx-auto mb-8">
              Temukan jawaban untuk pertanyaan umum seputar produk dan layanan kami.
              Tidak menemukan jawaban? Hubungi kami langsung!
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Cari pertanyaan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-white shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-heading text-lg font-semibold mb-4">
                Kategori
              </h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat.id
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
          </motion.div>

          {/* FAQ List */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full px-6 py-5 flex items-center justify-between text-left"
                    >
                      <div className="flex items-center gap-4">
                        <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                        <span className="font-medium">{faq.question}</span>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-primary shrink-0 transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pl-16 text-foreground/70">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
                  <HelpCircle className="h-12 w-12 text-foreground/20 mx-auto mb-4" />
                  <p className="text-foreground/60">
                    Tidak ada pertanyaan yang cocok dengan pencarian Anda.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <MessageCircle className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-4">
            Masih Punya Pertanyaan?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Jika Anda tidak menemukan jawaban yang dicari, jangan ragu untuk
            menghubungi tim kami. Kami siap membantu Anda 24/7!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-medium shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              Chat via WhatsApp
            </a>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white rounded-full font-medium border-2 border-white/40 hover:bg-white/30 transition-all"
            >
              Kirim Email
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
