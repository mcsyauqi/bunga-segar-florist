"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Truck,
  Clock,
  CheckCircle,
  Minus,
  Plus,
  Trash2,
  CreditCard,
} from "lucide-react";
import { products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

interface CartItem {
  productId: string;
  quantity: number;
}

export default function OrderPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    recipientName: "",
    recipientPhone: "",
    address: "",
    date: "",
    time: "",
    message: "",
    paymentMethod: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const addToCart = (productId: string) => {
    const existing = cart.find((item) => item.productId === productId);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { productId, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(
      cart
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.productId !== productId));
  };

  const cartProducts = cart.map((item) => ({
    ...item,
    product: products.find((p) => p.id === item.productId)!,
  }));

  const subtotal = cartProducts.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const delivery = 25000;
  const total = subtotal + delivery;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-8 shadow-lg text-center max-w-md"
        >
          <div className="inline-flex items-center justify-center p-4 bg-accent/10 rounded-full mb-6">
            <CheckCircle className="h-12 w-12 text-accent" />
          </div>
          <h2 className="text-2xl font-bold font-heading mb-4">
            Pesanan Berhasil!
          </h2>
          <p className="text-foreground/60 mb-6">
            Terima kasih atas pesanan Anda. Kami akan segera menghubungi Anda
            melalui WhatsApp untuk konfirmasi pembayaran.
          </p>
          <p className="text-sm text-foreground/60 mb-6">
            Nomor Pesanan: <span className="font-bold text-primary">BS-{Date.now().toString().slice(-8)}</span>
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setCart([]);
              setStep(1);
            }}
            className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Buat Pesanan Lain
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
              <ShoppingBag className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
              Pesan <span className="gradient-text">Sekarang</span>
            </h1>
            {/* Steps */}
            <div className="flex justify-center items-center gap-4 mt-8">
              {[
                { num: 1, text: "Pilih Produk" },
                { num: 2, text: "Detail Pengiriman" },
                { num: 3, text: "Pembayaran" },
              ].map((s, i) => (
                <div key={s.num} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step >= s.num
                        ? "bg-primary text-white"
                        : "bg-white text-foreground/40"
                    }`}
                  >
                    {s.num}
                  </div>
                  <span
                    className={`ml-2 hidden sm:inline ${
                      step >= s.num ? "text-foreground" : "text-foreground/40"
                    }`}
                  >
                    {s.text}
                  </span>
                  {i < 2 && (
                    <div
                      className={`w-12 h-1 mx-4 rounded ${
                        step > s.num ? "bg-primary" : "bg-white"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {step === 1 && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Products */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold font-heading mb-6">
                Pilih Produk
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {products.slice(0, 8).map((product) => {
                  const inCart = cart.find(
                    (item) => item.productId === product.id
                  );
                  return (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl p-4 shadow-lg flex gap-4"
                    >
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-foreground/60">
                          {product.description}
                        </p>
                        <p className="text-primary font-bold mt-1">
                          {formatPrice(product.price)}
                        </p>
                        {inCart ? (
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(product.id, -1)}
                              className="p-1 bg-primary/10 rounded"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="font-medium">
                              {inCart.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(product.id, 1)}
                              className="p-1 bg-primary/10 rounded"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(product.id)}
                            className="mt-2 px-4 py-1.5 bg-primary text-white text-sm rounded-full"
                          >
                            + Tambah
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cart */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold font-heading mb-4">
                  Keranjang
                </h3>
                {cart.length === 0 ? (
                  <p className="text-foreground/60 text-center py-8">
                    Keranjang kosong
                  </p>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cartProducts.map((item) => (
                        <div
                          key={item.productId}
                          className="flex items-center gap-3"
                        >
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                            <Image
                              src={item.product.image}
                              alt={item.product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">
                              {item.product.name}
                            </h4>
                            <p className="text-primary text-sm font-bold">
                              {formatPrice(item.product.price)} x {item.quantity}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.productId)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>{formatPrice(subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Ongkir</span>
                        <span>{formatPrice(delivery)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg pt-2 border-t">
                        <span>Total</span>
                        <span className="text-primary">
                          {formatPrice(total)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setStep(2)}
                      className="w-full mt-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                    >
                      Lanjut ke Pengiriman
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold font-heading mb-6">
                Detail Pengiriman
              </h2>
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nama Pemesan *
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
                      No. WhatsApp Pemesan *
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
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nama Penerima *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.recipientName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          recipientName: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      No. Telepon Penerima
                    </label>
                    <input
                      type="tel"
                      value={formData.recipientPhone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          recipientPhone: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
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

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Tanggal Pengiriman *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Waktu Pengiriman *
                    </label>
                    <select
                      required
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    >
                      <option value="">Pilih waktu</option>
                      <option value="09:00-12:00">09:00 - 12:00</option>
                      <option value="12:00-15:00">12:00 - 15:00</option>
                      <option value="15:00-18:00">15:00 - 18:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Pesan di Kartu Ucapan
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                    placeholder="Tulis pesan untuk penerima..."
                  />
                </div>

                <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl">
                  <Truck className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Same-Day Delivery</p>
                    <p className="text-sm text-foreground/60">
                      Order sebelum jam 14:00 untuk pengiriman hari ini
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-colors"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    Lanjut ke Pembayaran
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold font-heading mb-6">
                  Pembayaran
                </h2>

                {/* Order Summary */}
                <div className="bg-background rounded-xl p-4 mb-6">
                  <h3 className="font-semibold mb-3">Ringkasan Pesanan</h3>
                  <div className="space-y-2 text-sm">
                    {cartProducts.map((item) => (
                      <div
                        key={item.productId}
                        className="flex justify-between"
                      >
                        <span>
                          {item.product.name} x {item.quantity}
                        </span>
                        <span>
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                    <div className="flex justify-between pt-2 border-t">
                      <span>Ongkir</span>
                      <span>{formatPrice(delivery)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t">
                      <span>Total</span>
                      <span className="text-primary">{formatPrice(total)}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-3">
                  <h3 className="font-semibold">Metode Pembayaran</h3>
                  {[
                    { id: "transfer", name: "Transfer Bank (BCA/Mandiri/BNI)" },
                    { id: "qris", name: "QRIS" },
                    { id: "cod", name: "COD (Bayar di Tempat)" },
                  ].map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                        formData.paymentMethod === method.id
                          ? "border-primary bg-primary/5"
                          : "border-primary/20 hover:border-primary/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={formData.paymentMethod === method.id}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            paymentMethod: e.target.value,
                          })
                        }
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          formData.paymentMethod === method.id
                            ? "border-primary"
                            : "border-foreground/20"
                        }`}
                      >
                        {formData.paymentMethod === method.id && (
                          <div className="w-3 h-3 rounded-full bg-primary" />
                        )}
                      </div>
                      <CreditCard className="h-5 w-5 text-primary" />
                      <span>{method.name}</span>
                    </label>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-colors"
                  >
                    Kembali
                  </button>
                  <button
                    type="submit"
                    disabled={!formData.paymentMethod}
                    className="flex-1 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Konfirmasi Pesanan
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
