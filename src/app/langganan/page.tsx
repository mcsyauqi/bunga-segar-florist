"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Check, Flower2, ArrowRight, Sparkles } from "lucide-react";
import { subscriptionPlans } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function LanggananPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
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
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
              Langganan <span className="gradient-text">Bunga Segar</span>
            </h1>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Nikmati keindahan bunga segar di rumah atau kantor Anda secara
              rutin. Pilih paket langganan yang sesuai dengan kebutuhan Anda.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[
            {
              icon: Flower2,
              title: "Bunga Segar",
              desc: "Dipetik langsung dari kebun",
            },
            {
              icon: Calendar,
              title: "Pengiriman Rutin",
              desc: "Sesuai jadwal pilihan Anda",
            },
            {
              icon: Sparkles,
              title: "Desain Berbeda",
              desc: "Rangkaian baru setiap pengiriman",
            },
            {
              icon: Check,
              title: "Fleksibel",
              desc: "Bisa pause atau cancel kapan saja",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="p-3 bg-primary/10 rounded-xl">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{benefit.title}</h3>
                <p className="text-sm text-foreground/60">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Plans */}
        {!showForm ? (
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {subscriptionPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                  index === 2 ? "ring-2 ring-primary" : ""
                }`}
              >
                {index === 2 && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 text-sm font-medium">
                    Paling Populer
                  </div>
                )}
                <div className={`p-8 ${index === 2 ? "pt-14" : ""}`}>
                  <h3 className="text-2xl font-bold font-heading mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-foreground/60 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">
                      {formatPrice(plan.price)}
                    </span>
                    <span className="text-foreground/60">/{plan.interval}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-accent" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      setSelectedPlan(plan.id);
                      setShowForm(true);
                    }}
                    className={`w-full py-3 rounded-full font-medium transition-colors ${
                      index === 2
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    Pilih Paket
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="inline-flex items-center justify-center p-4 bg-accent/10 rounded-full mb-6">
              <Check className="h-12 w-12 text-accent" />
            </div>
            <h2 className="text-2xl font-bold font-heading mb-4">
              Pendaftaran Berhasil!
            </h2>
            <p className="text-foreground/60 mb-6">
              Terima kasih telah berlangganan. Tim kami akan segera menghubungi
              Anda untuk konfirmasi dan jadwal pengiriman pertama.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setShowForm(false);
                setSelectedPlan(null);
              }}
              className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Kembali ke Halaman Langganan
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mx-auto"
          >
            <button
              onClick={() => setShowForm(false)}
              className="flex items-center gap-2 text-foreground/60 hover:text-foreground mb-6"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Kembali pilih paket
            </button>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold font-heading mb-2">
                Daftar Langganan
              </h2>
              <p className="text-foreground/60 mb-6">
                Paket:{" "}
                <span className="font-semibold text-primary">
                  {subscriptionPlans.find((p) => p.id === selectedPlan)?.name}
                </span>
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                </div>
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
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Alamat Pengiriman *
                  </label>
                  <textarea
                    required
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Catatan (opsional)
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                    placeholder="Preferensi warna, jenis bunga favorit, dll"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                >
                  Daftar Sekarang
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
