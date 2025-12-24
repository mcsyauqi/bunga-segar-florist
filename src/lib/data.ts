export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isBestSeller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  priceRange: string;
  image: string;
}

export interface Occasion {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Bouquet",
    slug: "bouquet",
    description: "Rangkaian bunga tangan yang elegan",
    priceRange: "Rp 250.000 - Rp 2.000.000",
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    name: "Flower Box",
    slug: "flower-box",
    description: "Bunga cantik dalam kotak premium",
    priceRange: "Rp 350.000 - Rp 1.500.000",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "Standing Flower",
    slug: "standing-flower",
    description: "Rangkaian bunga standing megah",
    priceRange: "Rp 500.000 - Rp 3.000.000",
    image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "Table Arrangement",
    slug: "table-arrangement",
    description: "Dekorasi meja yang mempesona",
    priceRange: "Rp 200.000 - Rp 800.000",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=400&fit=crop",
  },
  {
    id: "5",
    name: "Wedding Flowers",
    slug: "wedding-flowers",
    description: "Bunga spesial untuk hari bahagia",
    priceRange: "Custom pricing",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop",
  },
  {
    id: "6",
    name: "Sympathy Flowers",
    slug: "sympathy-flowers",
    description: "Ungkapkan belasungkawa dengan tulus",
    priceRange: "Rp 400.000 - Rp 2.500.000",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop",
  },
];

export const bestSellers: Product[] = [
  {
    id: "bs1",
    name: "Red Rose Classic",
    description: "20 mawar merah premium pilihan",
    price: 450000,
    category: "bouquet",
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&h=400&fit=crop",
    isBestSeller: true,
  },
  {
    id: "bs2",
    name: "Pastel Dream Bouquet",
    description: "Mixed pastel flowers yang lembut",
    price: 550000,
    category: "bouquet",
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=400&fit=crop",
    isBestSeller: true,
  },
  {
    id: "bs3",
    name: "Sunflower Happiness",
    description: "10 sunflower cerah dan segar",
    price: 400000,
    category: "bouquet",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&h=400&fit=crop",
    isBestSeller: true,
  },
  {
    id: "bs4",
    name: "Elegant White Box",
    description: "White roses dalam luxury box",
    price: 650000,
    category: "flower-box",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=400&fit=crop",
    isBestSeller: true,
  },
];

export const products: Product[] = [
  ...bestSellers,
  {
    id: "p1",
    name: "Pink Romance",
    description: "15 mawar pink dengan baby breath",
    price: 380000,
    category: "bouquet",
    image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=400&fit=crop",
  },
  {
    id: "p2",
    name: "Tropical Paradise",
    description: "Mix bunga tropis eksotis",
    price: 520000,
    category: "bouquet",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400&h=400&fit=crop",
  },
  {
    id: "p3",
    name: "Premium Rose Box",
    description: "24 mawar dalam box premium",
    price: 850000,
    category: "flower-box",
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&h=400&fit=crop",
  },
  {
    id: "p4",
    name: "Congratulations Standing",
    description: "Standing flower ucapan selamat",
    price: 750000,
    category: "standing-flower",
    image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=400&h=400&fit=crop",
  },
  {
    id: "p5",
    name: "Grand Opening Flower",
    description: "Standing flower pembukaan toko",
    price: 1200000,
    category: "standing-flower",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop",
  },
  {
    id: "p6",
    name: "Elegant Table Center",
    description: "Centerpiece meja elegan",
    price: 350000,
    category: "table-arrangement",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=400&fit=crop",
  },
  {
    id: "p7",
    name: "Rustic Wedding Bouquet",
    description: "Bouquet pengantin rustic",
    price: 900000,
    category: "wedding-flowers",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop",
  },
  {
    id: "p8",
    name: "Peaceful Rest",
    description: "Standing flower duka cita",
    price: 650000,
    category: "sympathy-flowers",
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=400&fit=crop",
  },
];

export const occasions: Occasion[] = [
  {
    id: "o1",
    name: "Ulang Tahun",
    description: "Surprise dengan bunga cantik",
    icon: "cake",
  },
  {
    id: "o2",
    name: "Anniversary",
    description: "Romantis dan memorable",
    icon: "heart",
  },
  {
    id: "o3",
    name: "Wisuda",
    description: "Rayakan pencapaian",
    icon: "graduationCap",
  },
  {
    id: "o4",
    name: "Belasungkawa",
    description: "Sampaikan simpati",
    icon: "flower",
  },
  {
    id: "o5",
    name: "Valentine",
    description: "Ungkapkan cinta",
    icon: "heartHandshake",
  },
  {
    id: "o6",
    name: "Pernikahan",
    description: "Dekorasi impian",
    icon: "sparkles",
  },
];

export const services: Service[] = [
  {
    id: "s1",
    name: "Custom Bouquet",
    description: "Desain sesuai keinginan",
    icon: "palette",
  },
  {
    id: "s2",
    name: "Same-Day Delivery",
    description: "Order sebelum jam 2 siang",
    icon: "truck",
  },
  {
    id: "s3",
    name: "Subscription",
    description: "Bunga segar mingguan/bulanan",
    icon: "calendar",
  },
  {
    id: "s4",
    name: "Corporate",
    description: "Untuk kantor dan event",
    icon: "building",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Amelia",
    text: "Bunganya selalu segar dan tahan lama. Packaging-nya juga cantik!",
    rating: 5,
  },
  {
    id: "t2",
    name: "Budi Santoso",
    text: "Same-day delivery tepat waktu. Pacar saya senang banget surprise-nya.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Linda Wijaya",
    text: "Standing flower untuk opening store bagus banget. Worth it!",
    rating: 5,
  },
];

export const subscriptionPlans = [
  {
    id: "weekly",
    name: "Mingguan",
    description: "Bunga segar setiap minggu",
    price: 350000,
    interval: "minggu",
    features: ["1x pengiriman per minggu", "Pilihan bunga musiman", "Gratis ongkir", "Bisa pause kapan saja"],
  },
  {
    id: "biweekly",
    name: "Dua Mingguan",
    description: "Bunga segar setiap 2 minggu",
    price: 300000,
    interval: "2 minggu",
    features: ["1x pengiriman per 2 minggu", "Pilihan bunga premium", "Gratis ongkir", "Diskon 10%"],
  },
  {
    id: "monthly",
    name: "Bulanan",
    description: "Bunga segar setiap bulan",
    price: 500000,
    interval: "bulan",
    features: ["1x pengiriman per bulan", "Rangkaian eksklusif", "Gratis ongkir", "Diskon 15%", "Priority support"],
  },
];
