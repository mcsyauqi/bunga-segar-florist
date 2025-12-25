"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/lib/data";

interface FAQProps {
  limit?: number;
  showLink?: boolean;
}

export default function FAQ({ limit = 5, showLink = true }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const displayedFaqs = faqs.slice(0, limit);

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
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Pertanyaan <span className="gradient-text">yang Sering Diajukan</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum seputar produk dan layanan kami
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {displayedFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
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
          ))}
        </div>

        {showLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-10"
          >
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors font-medium"
            >
              Lihat Semua FAQ
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
