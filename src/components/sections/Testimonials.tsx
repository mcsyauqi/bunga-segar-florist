"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
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
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Apa Kata <span className="gradient-text">Pelanggan Kami</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami. Lebih dari 15,000 pelanggan puas telah mempercayakan momen spesial mereka kepada kami.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="p-8 bg-gradient-to-br from-background to-white rounded-2xl shadow-lg border border-primary/5 h-full flex flex-col">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <p className="text-foreground/80 mb-6 italic leading-relaxed flex-grow">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-primary mb-4">
                    Produk: {testimonial.product}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
