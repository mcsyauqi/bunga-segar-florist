"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
            <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
              Hubungi <span className="gradient-text">Kami</span>
            </h1>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Ada pertanyaan atau ingin konsultasi? Jangan ragu untuk
              menghubungi kami. Tim kami siap membantu Anda!
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold font-heading mb-6">
                Informasi Kontak
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Alamat</h3>
                    <p className="text-foreground/60">
                      Jl. Bunga Mawar No. 123
                      <br />
                      Jakarta Selatan 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telepon</h3>
                    <a
                      href="tel:+6281234567890"
                      className="text-foreground/60 hover:text-primary transition-colors"
                    >
                      0812-3456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:hello@bungasegar.id"
                      className="text-foreground/60 hover:text-primary transition-colors"
                    >
                      hello@bungasegar.id
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Jam Operasional</h3>
                    <p className="text-foreground/60">
                      Setiap Hari: 08:00 - 20:00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white">
              <MessageCircle className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-bold font-heading mb-2">
                Butuh Respon Cepat?
              </h3>
              <p className="text-white/80 mb-4">
                Chat langsung dengan tim kami via WhatsApp
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-full font-medium hover:bg-white/90 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Chat via WhatsApp
              </a>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold mb-4">Ikuti Kami</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <Instagram className="h-6 w-6 text-foreground/60 group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="#"
                  className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <Facebook className="h-6 w-6 text-foreground/60 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-foreground/60">
                    Jl. Bunga Mawar No. 123, Jakarta Selatan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {isSubmitted ? (
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="inline-flex items-center justify-center p-4 bg-accent/10 rounded-full mb-6">
                  <CheckCircle className="h-12 w-12 text-accent" />
                </div>
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Pesan Terkirim!
                </h2>
                <p className="text-foreground/60 mb-6">
                  Terima kasih telah menghubungi kami. Tim kami akan segera
                  membalas pesan Anda dalam 1x24 jam.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold font-heading mb-6">
                  Kirim Pesan
                </h2>
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
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
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nomor Telepon *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subjek *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">Pilih subjek</option>
                      <option value="pertanyaan">Pertanyaan Umum</option>
                      <option value="pemesanan">Info Pemesanan</option>
                      <option value="custom">Custom Order</option>
                      <option value="corporate">Kerjasama Corporate</option>
                      <option value="komplain">Komplain</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Pesan *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                  >
                    <Send className="h-5 w-5" />
                    Kirim Pesan
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
