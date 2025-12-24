"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Palette, Flower2, Heart, Send, CheckCircle, ArrowRight } from "lucide-react";

const flowerTypes = [
  "Mawar Merah",
  "Mawar Pink",
  "Mawar Putih",
  "Lily",
  "Tulip",
  "Sunflower",
  "Peony",
  "Hydrangea",
  "Baby Breath",
  "Eucalyptus",
];

const occasions = [
  "Ulang Tahun",
  "Anniversary",
  "Wisuda",
  "Pernikahan",
  "Valentine",
  "Belasungkawa",
  "Get Well Soon",
  "Lainnya",
];

const budgetRanges = [
  "Rp 200.000 - Rp 400.000",
  "Rp 400.000 - Rp 600.000",
  "Rp 600.000 - Rp 1.000.000",
  "Rp 1.000.000+",
];

export default function CustomPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    occasion: "",
    flowers: [] as string[],
    budget: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFlower = (flower: string) => {
    setFormData((prev) => ({
      ...prev,
      flowers: prev.flowers.includes(flower)
        ? prev.flowers.filter((f) => f !== flower)
        : [...prev.flowers, flower],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

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
              <Palette className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
              Custom <span className="gradient-text">Bouquet</span>
            </h1>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Desain rangkaian bunga impian Anda. Ceritakan keinginan Anda, dan
              kami akan mewujudkannya.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="inline-flex items-center justify-center p-4 bg-accent/10 rounded-full mb-6">
                  <CheckCircle className="h-12 w-12 text-accent" />
                </div>
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Terima Kasih!
                </h2>
                <p className="text-foreground/60 mb-6">
                  Permintaan custom bouquet Anda telah kami terima. Tim kami
                  akan segera menghubungi Anda untuk konsultasi lebih lanjut.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Buat Permintaan Lain
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-lg space-y-6"
              >
                <h2 className="text-2xl font-bold font-heading mb-6">
                  Form Custom Bouquet
                </h2>

                {/* Nama */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>

                {/* Occasion */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Untuk Acara Apa? *
                  </label>
                  <select
                    required
                    value={formData.occasion}
                    onChange={(e) =>
                      setFormData({ ...formData, occasion: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="">Pilih acara</option>
                    {occasions.map((occ) => (
                      <option key={occ} value={occ}>
                        {occ}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Flowers */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Pilih Jenis Bunga (opsional)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {flowerTypes.map((flower) => (
                      <button
                        key={flower}
                        type="button"
                        onClick={() => toggleFlower(flower)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                          formData.flowers.includes(flower)
                            ? "bg-primary text-white"
                            : "bg-primary/10 text-foreground hover:bg-primary/20"
                        }`}
                      >
                        {flower}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Budget *
                  </label>
                  <select
                    required
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="">Pilih budget</option>
                    {budgetRanges.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Catatan Tambahan
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Deskripsikan keinginan Anda (warna tema, ukuran, tanggal pengiriman, dll)"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                >
                  <Send className="h-5 w-5" />
                  Kirim Permintaan
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80"
                alt="Custom Bouquet"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold font-heading mb-4">
                Bagaimana Prosesnya?
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Kirim Permintaan",
                    desc: "Isi form dengan detail keinginan Anda",
                  },
                  {
                    step: 2,
                    title: "Konsultasi",
                    desc: "Tim kami akan menghubungi untuk diskusi",
                  },
                  {
                    step: 3,
                    title: "Desain & Konfirmasi",
                    desc: "Kami kirimkan mockup desain untuk approval",
                  },
                  {
                    step: 4,
                    title: "Pembuatan & Pengiriman",
                    desc: "Bouquet dibuat dan dikirim sesuai jadwal",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white">
              <Flower2 className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold font-heading mb-2">
                Butuh Bantuan?
              </h3>
              <p className="text-white/80 mb-4">
                Hubungi kami langsung untuk konsultasi gratis
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-full font-medium hover:bg-white/90 transition-colors"
              >
                Chat via WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
