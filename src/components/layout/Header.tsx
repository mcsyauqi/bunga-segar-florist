"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flower2, Phone, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Beranda", href: "/" },
  {
    name: "Koleksi",
    href: "/koleksi",
    submenu: [
      { name: "Semua Koleksi", href: "/koleksi" },
      { name: "Bouquet", href: "/koleksi/bouquet" },
      { name: "Flower Box", href: "/koleksi/flower-box" },
      { name: "Standing Flower", href: "/koleksi/standing-flower" },
      { name: "Table Arrangement", href: "/koleksi/table-arrangement" },
      { name: "Wedding Flowers", href: "/koleksi/wedding-flowers" },
      { name: "Sympathy Flowers", href: "/koleksi/sympathy-flowers" },
    ]
  },
  { name: "Custom Bouquet", href: "/custom" },
  { name: "Langganan", href: "/langganan" },
  { name: "Tentang Kami", href: "/tentang" },
  { name: "FAQ", href: "/faq" },
  { name: "Kontak", href: "/kontak" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-primary/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Flower2 className="h-8 w-8 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary font-heading">
                Bunga Segar
              </span>
              <span className="text-xs text-foreground/60 -mt-1">Florist</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {'submenu' in item && item.submenu ? (
                  <>
                    <button className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors font-medium py-2">
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="bg-white rounded-xl shadow-xl border border-primary/10 py-2 min-w-[200px]">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-2 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+6281234567890"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>0812-3456-7890</span>
            </a>
            <Link
              href="/order"
              className="px-6 py-2.5 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium shadow-lg shadow-primary/25"
            >
              Pesan Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {'submenu' in item && item.submenu ? (
                      <>
                        <button
                          onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                          className="w-full flex items-center justify-between px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                        >
                          {item.name}
                          <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === item.name ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {openSubmenu === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-6 space-y-1">
                                {item.submenu.map((subitem) => (
                                  <Link
                                    key={subitem.name}
                                    href={subitem.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-2 text-foreground/70 hover:text-primary transition-colors text-sm"
                                  >
                                    {subitem.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 px-4 space-y-3">
                  <a
                    href="tel:+6281234567890"
                    className="flex items-center gap-2 text-foreground/80"
                  >
                    <Phone className="h-4 w-4" />
                    <span>0812-3456-7890</span>
                  </a>
                  <Link
                    href="/order"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-6 py-3 bg-primary text-white rounded-full font-medium"
                  >
                    Pesan Sekarang
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
