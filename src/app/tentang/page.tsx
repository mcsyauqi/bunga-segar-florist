"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Flower2, Award, Clock, Users, Heart, Target, Eye, ArrowRight } from "lucide-react";
import { teamMembers, stats } from "@/lib/data";

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Tentang Kami
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
              Bunga Segar Florist
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Lebih dari 10 tahun menghadirkan keindahan bunga untuk momen-momen
              spesial Anda. Ungkapkan perasaan dengan keindahan bunga.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Cerita Kami
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-6">
                Perjalanan <span className="gradient-text">Bunga Segar</span>
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p>
                  Bunga Segar Florist didirikan pada tahun 2014 oleh Anisa Rahma, seorang
                  pecinta bunga yang memiliki mimpi untuk menghadirkan rangkaian bunga
                  berkualitas tinggi dengan sentuhan personal untuk setiap pelanggan.
                </p>
                <p>
                  Berawal dari toko kecil di Jakarta Selatan, kini Bunga Segar telah
                  melayani lebih dari 15,000 pelanggan puas dan telah menjadi pilihan
                  utama untuk berbagai acara mulai dari pernikahan, corporate event,
                  hingga hadiah personal.
                </p>
                <p>
                  Kami percaya bahwa setiap rangkaian bunga memiliki cerita dan makna.
                  Oleh karena itu, setiap bunga yang kami pilih adalah bunga-bunga
                  segar berkualitas yang dipetik dengan penuh perhatian.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-bold text-primary font-heading">10+</div>
                <div className="text-foreground/60">Tahun Pengalaman</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4">Visi Kami</h3>
              <p className="text-foreground/70">
                Menjadi florist terpercaya nomor satu di Indonesia yang menghadirkan
                keindahan dan kebahagiaan melalui rangkaian bunga berkualitas tinggi
                untuk setiap momen spesial dalam kehidupan.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="inline-flex items-center justify-center p-4 bg-secondary/10 rounded-2xl mb-6">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4">Misi Kami</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start gap-2">
                  <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  Menyediakan bunga segar berkualitas terbaik
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  Memberikan pelayanan yang ramah dan profesional
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  Menghadirkan kreativitas dalam setiap rangkaian
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  Menjamin pengiriman tepat waktu
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-white font-heading mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
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
              Nilai-Nilai Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
              Yang Membuat Kami <span className="gradient-text">Berbeda</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Flower2,
                title: "Kualitas",
                description: "Hanya bunga segar pilihan terbaik",
              },
              {
                icon: Heart,
                title: "Dedikasi",
                description: "Sepenuh hati dalam setiap rangkaian",
              },
              {
                icon: Clock,
                title: "Ketepatan",
                description: "Pengiriman tepat waktu dijamin",
              },
              {
                icon: Award,
                title: "Profesional",
                description: "Tim florist berpengalaman",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-background to-white rounded-2xl border border-primary/10"
              >
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-foreground/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Tim Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
              Orang-Orang <span className="gradient-text">Hebat</span> di Balik Layar
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Tim profesional yang berdedikasi untuk memberikan yang terbaik bagi Anda
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-foreground/60 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Siap Menjadi Bagian dari Cerita Kami?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Hubungi kami sekarang untuk konsultasi gratis atau langsung pesan
              bunga impian Anda.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/koleksi"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-medium shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
              >
                Lihat Koleksi
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white rounded-full font-medium border-2 border-white/40 hover:bg-white/30 transition-all"
              >
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
