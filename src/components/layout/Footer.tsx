import Link from "next/link";
import { Flower2, Instagram, Facebook, MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-primary/20">
                <Flower2 className="h-8 w-8 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary font-heading">
                  Bunga Segar
                </span>
                <span className="text-xs text-white/60 -mt-1">Florist</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Ungkapkan Perasaan dengan Keindahan Bunga. Rangkaian bunga segar
              berkualitas untuk setiap momen spesial Anda. Melayani Jakarta dan sekitarnya dengan same-day delivery.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-primary/50 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-primary/50 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-primary/50 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Menu
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Beranda", href: "/" },
                { name: "Koleksi Bunga", href: "/koleksi" },
                { name: "Custom Bouquet", href: "/custom" },
                { name: "Langganan", href: "/langganan" },
                { name: "Tentang Kami", href: "/tentang" },
                { name: "FAQ", href: "/faq" },
                { name: "Kontak", href: "/kontak" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kategori */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Kategori
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Bouquet", href: "/koleksi/bouquet" },
                { name: "Flower Box", href: "/koleksi/flower-box" },
                { name: "Standing Flower", href: "/koleksi/standing-flower" },
                { name: "Table Arrangement", href: "/koleksi/table-arrangement" },
                { name: "Wedding Flowers", href: "/koleksi/wedding-flowers" },
                { name: "Sympathy Flowers", href: "/koleksi/sympathy-flowers" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Jl. Bunga Mawar No. 123, Jakarta Selatan 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+6281234567890"
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  0812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:hello@bungasegar.id"
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  hello@bungasegar.id
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span className="text-white/70 text-sm">
                  Setiap Hari, 08:00 - 20:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; 2025 Bunga Segar Florist. All rights reserved.</p>
            <p>
              Website ini dibuat dengan{" "}
              <span className="text-primary">❤️</span> oleh{" "}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Creativism Digital Marketing Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
