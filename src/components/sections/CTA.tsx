"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
            Siap Memesan Bunga Impian Anda?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Hubungi kami sekarang untuk konsultasi gratis atau langsung pesan
            melalui website. Pengiriman same-day available!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/order"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-medium shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              Pesan Sekarang
            </Link>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white rounded-full font-medium border-2 border-white/40 hover:bg-white/30 transition-all"
            >
              <Phone className="h-5 w-5" />
              Hubungi via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
