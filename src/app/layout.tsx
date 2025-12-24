import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Bunga Segar | Toko Bunga Online Jakarta | Same Day Delivery Florist",
  description: "Bunga Segar Florist - Rangkaian bunga segar berkualitas untuk hadiah, dekorasi, dan berbagai acara. Same-day delivery available di Jakarta dan sekitarnya.",
  keywords: "toko bunga, florist jakarta, bunga segar, bouquet, standing flower, bunga wisuda, bunga pernikahan, same day delivery",
  openGraph: {
    title: "Bunga Segar Florist - Ungkapkan Perasaan dengan Keindahan Bunga",
    description: "Rangkaian bunga segar berkualitas untuk hadiah, dekorasi, dan berbagai acara. Pengiriman same-day available.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
