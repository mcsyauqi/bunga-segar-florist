export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  discount?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  priceRange: string;
  image: string;
  productCount: number;
}

export interface Occasion {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
  product: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Bouquet",
    slug: "bouquet",
    description: "Rangkaian bunga tangan yang elegan",
    longDescription: "Bouquet bunga kami dibuat dengan penuh cinta dan perhatian terhadap detail. Setiap rangkaian menggunakan bunga-bunga segar pilihan yang dipetik langsung dari kebun terbaik. Cocok untuk berbagai kesempatan mulai dari ulang tahun, anniversary, hingga wisuda.",
    priceRange: "Rp 250.000 - Rp 2.000.000",
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&h=600&fit=crop",
    productCount: 24,
  },
  {
    id: "2",
    name: "Flower Box",
    slug: "flower-box",
    description: "Bunga cantik dalam kotak premium",
    longDescription: "Flower box kami hadir dengan kemasan premium yang elegan. Bunga-bunga segar tertata rapi dalam kotak berkualitas tinggi, menjadikannya hadiah yang sempurna dan tahan lama. Tersedia dalam berbagai ukuran dan pilihan warna.",
    priceRange: "Rp 350.000 - Rp 1.500.000",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&h=600&fit=crop",
    productCount: 18,
  },
  {
    id: "3",
    name: "Standing Flower",
    slug: "standing-flower",
    description: "Rangkaian bunga standing megah",
    longDescription: "Standing flower kami cocok untuk berbagai acara besar seperti grand opening, pernikahan, ulang tahun perusahaan, hingga ucapan duka cita. Dengan tinggi yang impresif dan rangkaian yang megah, standing flower kami pasti menjadi pusat perhatian.",
    priceRange: "Rp 500.000 - Rp 3.000.000",
    image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=800&h=600&fit=crop",
    productCount: 15,
  },
  {
    id: "4",
    name: "Table Arrangement",
    slug: "table-arrangement",
    description: "Dekorasi meja yang mempesona",
    longDescription: "Table arrangement kami dirancang untuk mempercantik meja Anda, baik untuk acara formal maupun casual. Rangkaian ini cocok untuk dekorasi meja makan, meja kantor, atau centerpiece acara spesial.",
    priceRange: "Rp 200.000 - Rp 800.000",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&h=600&fit=crop",
    productCount: 12,
  },
  {
    id: "5",
    name: "Wedding Flowers",
    slug: "wedding-flowers",
    description: "Bunga spesial untuk hari bahagia",
    longDescription: "Hari pernikahan adalah momen paling spesial dalam hidup. Kami menyediakan rangkaian bunga wedding lengkap mulai dari hand bouquet pengantin, corsage, boutonniere, hingga dekorasi pelaminan. Konsultasikan tema pernikahan impian Anda dengan tim kami.",
    priceRange: "Custom pricing",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    productCount: 20,
  },
  {
    id: "6",
    name: "Sympathy Flowers",
    slug: "sympathy-flowers",
    description: "Ungkapkan belasungkawa dengan tulus",
    longDescription: "Di saat-saat sulit, bunga dapat menjadi ungkapan simpati yang tulus. Rangkaian sympathy flowers kami dibuat dengan penuh hormat dan kelembutan, membantu Anda menyampaikan belasungkawa dengan cara yang bermakna.",
    priceRange: "Rp 400.000 - Rp 2.500.000",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop",
    productCount: 10,
  },
];

export const bestSellers: Product[] = [
  {
    id: "bs1",
    name: "Red Rose Classic",
    description: "20 mawar merah premium pilihan dengan baby breath",
    price: 450000,
    category: "bouquet",
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&h=400&fit=crop",
    isBestSeller: true,
  },
  {
    id: "bs2",
    name: "Pastel Dream Bouquet",
    description: "Mixed pastel flowers yang lembut dan romantis",
    price: 550000,
    category: "bouquet",
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=400&fit=crop",
    isBestSeller: true,
  },
  {
    id: "bs3",
    name: "Sunflower Happiness",
    description: "10 sunflower cerah dengan eucalyptus",
    price: 400000,
    category: "bouquet",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&h=400&fit=crop",
    isBestSeller: true,
  },
  {
    id: "bs4",
    name: "Elegant White Box",
    description: "White roses dalam luxury box premium",
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
    isNew: true,
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
  {
    id: "p9",
    name: "Lavender Dreams",
    description: "Rangkaian lavender dan eucalyptus",
    price: 420000,
    category: "bouquet",
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=400&h=400&fit=crop",
    isNew: true,
  },
  {
    id: "p10",
    name: "Rainbow Delight",
    description: "Mix bunga warna-warni ceria",
    price: 480000,
    category: "bouquet",
    image: "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?w=400&h=400&fit=crop",
  },
  {
    id: "p11",
    name: "Royal Purple Box",
    description: "Bunga ungu dalam kotak mewah",
    price: 720000,
    category: "flower-box",
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=400&fit=crop",
    isNew: true,
  },
  {
    id: "p12",
    name: "Mini Flower Box",
    description: "Kotak bunga mini yang manis",
    price: 280000,
    category: "flower-box",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=400&fit=crop",
  },
  {
    id: "p13",
    name: "Corporate Standing",
    description: "Standing flower untuk acara perusahaan",
    price: 950000,
    category: "standing-flower",
    image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=400&h=400&fit=crop",
  },
  {
    id: "p14",
    name: "Minimalist Table",
    description: "Rangkaian meja minimalis modern",
    price: 250000,
    category: "table-arrangement",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=400&fit=crop",
  },
  {
    id: "p15",
    name: "Bridal Hand Bouquet",
    description: "Hand bouquet pengantin premium",
    price: 1500000,
    category: "wedding-flowers",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop",
  },
  {
    id: "p16",
    name: "White Lily Sympathy",
    description: "Rangkaian lily putih untuk duka",
    price: 550000,
    category: "sympathy-flowers",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop",
  },
  {
    id: "p17",
    name: "Peony Paradise",
    description: "Rangkaian peony pink premium",
    price: 680000,
    category: "bouquet",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400&h=400&fit=crop",
    discount: 10,
  },
  {
    id: "p18",
    name: "Graduation Glory",
    description: "Bouquet wisuda dengan pita",
    price: 350000,
    category: "bouquet",
    image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=400&fit=crop",
  },
];

export const occasions: Occasion[] = [
  {
    id: "o1",
    name: "Ulang Tahun",
    slug: "ulang-tahun",
    description: "Surprise dengan bunga cantik",
    longDescription: "Buat momen ulang tahun menjadi lebih spesial dengan rangkaian bunga cantik dari kami. Pilihan warna dan jenis bunga yang beragam untuk menyesuaikan dengan kepribadian orang tersayang.",
    icon: "cake",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
  },
  {
    id: "o2",
    name: "Anniversary",
    slug: "anniversary",
    description: "Romantis dan memorable",
    longDescription: "Rayakan cinta yang bertumbuh dengan rangkaian bunga romantis. Mawar merah klasik atau mix bunga favorit pasangan, kami siap membantu membuat anniversary Anda tak terlupakan.",
    icon: "heart",
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800&h=600&fit=crop",
  },
  {
    id: "o3",
    name: "Wisuda",
    slug: "wisuda",
    description: "Rayakan pencapaian",
    longDescription: "Momen wisuda adalah pencapaian yang membanggakan. Berikan rangkaian bunga yang akan membuat foto wisuda semakin berkesan dan bermakna.",
    icon: "graduationCap",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
  },
  {
    id: "o4",
    name: "Belasungkawa",
    slug: "belasungkawa",
    description: "Sampaikan simpati",
    longDescription: "Di saat-saat sulit, bunga dapat menjadi ungkapan simpati yang tulus. Kami menyediakan rangkaian khusus untuk menyampaikan belasungkawa dengan penuh hormat.",
    icon: "flower",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop",
  },
  {
    id: "o5",
    name: "Valentine",
    slug: "valentine",
    description: "Ungkapkan cinta",
    longDescription: "Hari kasih sayang yang sempurna dengan rangkaian bunga spesial. Mawar merah, pink, atau kombinasi unik untuk mengungkapkan cinta Anda.",
    icon: "heartHandshake",
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800&h=600&fit=crop",
  },
  {
    id: "o6",
    name: "Pernikahan",
    slug: "pernikahan",
    description: "Dekorasi impian",
    longDescription: "Wujudkan pernikahan impian dengan dekorasi bunga yang memukau. Dari hand bouquet pengantin hingga dekorasi pelaminan, kami siap membantu.",
    icon: "sparkles",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
  },
];

export const services: Service[] = [
  {
    id: "s1",
    name: "Custom Bouquet",
    description: "Desain sesuai keinginan",
    longDescription: "Ceritakan visi Anda, dan kami akan mewujudkannya. Tim florist berpengalaman kami siap membuat rangkaian bunga unik yang sesuai dengan keinginan dan budget Anda.",
    icon: "palette",
    features: [
      "Konsultasi gratis dengan florist",
      "Pilihan bunga sesuai preferensi",
      "Desain mockup sebelum pembuatan",
      "Revisi unlimited sampai puas",
      "Packaging premium gratis",
    ],
  },
  {
    id: "s2",
    name: "Same-Day Delivery",
    description: "Order sebelum jam 2 siang",
    longDescription: "Butuh bunga hari ini juga? Tidak masalah! Dengan layanan Same-Day Delivery kami, pesanan yang masuk sebelum jam 14:00 akan dikirim di hari yang sama.",
    icon: "truck",
    features: [
      "Pengiriman di hari yang sama",
      "Order sebelum jam 14:00 WIB",
      "Tracking real-time",
      "Kurir berpengalaman",
      "Jaminan bunga segar sampai tujuan",
    ],
  },
  {
    id: "s3",
    name: "Subscription",
    description: "Bunga segar mingguan/bulanan",
    longDescription: "Nikmati keindahan bunga segar secara rutin dengan layanan subscription kami. Pilih frekuensi pengiriman yang sesuai dan biarkan kami memperindah ruangan Anda.",
    icon: "calendar",
    features: [
      "Pilihan mingguan, dua mingguan, atau bulanan",
      "Rangkaian berbeda setiap pengiriman",
      "Gratis ongkir setiap pengiriman",
      "Bisa pause atau cancel kapan saja",
      "Diskon hingga 15%",
    ],
  },
  {
    id: "s4",
    name: "Corporate",
    description: "Untuk kantor dan event",
    longDescription: "Layanan khusus untuk kebutuhan perusahaan. Dari dekorasi kantor rutin, acara grand opening, hingga hampers untuk klien, kami siap menjadi partner bunga Anda.",
    icon: "building",
    features: [
      "Account manager dedicated",
      "Harga khusus corporate",
      "Invoice bulanan",
      "Konsultasi dekorasi gratis",
      "Priority support 24/7",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Amelia",
    role: "Customer",
    text: "Bunganya selalu segar dan tahan lama sampai seminggu lebih. Packaging-nya juga cantik banget, langsung bisa jadi hadiah tanpa perlu dibungkus lagi!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    product: "Red Rose Classic",
  },
  {
    id: "t2",
    name: "Budi Santoso",
    role: "Customer",
    text: "Same-day delivery tepat waktu banget, padahal ordernya mendadak. Pacar saya senang banget surprise-nya. Pasti repeat order!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    product: "Pastel Dream Bouquet",
  },
  {
    id: "t3",
    name: "Linda Wijaya",
    role: "Business Owner",
    text: "Standing flower untuk opening store kami bagus banget dan megah. Banyak yang tanya beli di mana. Worth every penny!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    product: "Grand Opening Flower",
  },
  {
    id: "t4",
    name: "Dewi Kartika",
    role: "Bride",
    text: "Hand bouquet dan dekorasi wedding kami sempurna! Tim Bunga Segar sangat profesional dan responsive. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    product: "Wedding Package",
  },
  {
    id: "t5",
    name: "Andi Pratama",
    role: "Corporate Client",
    text: "Sudah berlangganan untuk kantor selama 6 bulan. Bunga selalu fresh dan tim sangat fleksibel dengan jadwal pengiriman.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    product: "Corporate Subscription",
  },
  {
    id: "t6",
    name: "Maya Sari",
    role: "Customer",
    text: "Bouquet wisuda untuk adik cantik banget! Adik saya senang sekali, foto wisudanya jadi makin bagus. Terima kasih Bunga Segar!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    product: "Graduation Glory",
  },
];

export const subscriptionPlans = [
  {
    id: "weekly",
    name: "Mingguan",
    description: "Bunga segar setiap minggu untuk ruangan yang selalu indah",
    price: 350000,
    interval: "minggu",
    popular: false,
    features: [
      "1x pengiriman per minggu",
      "Pilihan bunga musiman",
      "Gratis ongkir",
      "Bisa pause kapan saja",
      "Vas bunga gratis (pertama)",
      "Kartu ucapan gratis",
    ],
  },
  {
    id: "biweekly",
    name: "Dua Mingguan",
    description: "Keseimbangan sempurna antara kesegaran dan nilai",
    price: 300000,
    interval: "2 minggu",
    popular: false,
    features: [
      "1x pengiriman per 2 minggu",
      "Pilihan bunga premium",
      "Gratis ongkir",
      "Diskon 10%",
      "Vas bunga gratis (pertama)",
      "Bisa request jenis bunga",
    ],
  },
  {
    id: "monthly",
    name: "Bulanan",
    description: "Rangkaian eksklusif setiap bulan dengan harga terbaik",
    price: 500000,
    interval: "bulan",
    popular: true,
    features: [
      "1x pengiriman per bulan",
      "Rangkaian eksklusif premium",
      "Gratis ongkir",
      "Diskon 15%",
      "Priority support",
      "Vas premium gratis",
      "Early access produk baru",
    ],
  },
];

export const faqs: FAQ[] = [
  {
    id: "f1",
    question: "Berapa lama bunga bisa bertahan segar?",
    answer: "Dengan perawatan yang tepat, bunga kami dapat bertahan 5-10 hari. Kami juga menyertakan tips perawatan di setiap pengiriman agar bunga Anda tetap segar lebih lama.",
    category: "produk",
  },
  {
    id: "f2",
    question: "Apakah bisa request jenis bunga tertentu?",
    answer: "Tentu saja! Anda bisa request jenis bunga tertentu melalui layanan Custom Bouquet kami. Tim florist akan membantu mewujudkan rangkaian impian Anda.",
    category: "produk",
  },
  {
    id: "f3",
    question: "Bagaimana cara melakukan pemesanan?",
    answer: "Anda bisa memesan melalui website kami, WhatsApp, atau datang langsung ke toko. Untuk pemesanan online, pilih produk, isi detail pengiriman, dan lakukan pembayaran.",
    category: "pemesanan",
  },
  {
    id: "f4",
    question: "Apa saja metode pembayaran yang tersedia?",
    answer: "Kami menerima transfer bank (BCA, Mandiri, BNI), QRIS, dan COD (Cash on Delivery) untuk area tertentu.",
    category: "pembayaran",
  },
  {
    id: "f5",
    question: "Berapa ongkos kirim?",
    answer: "Ongkos kirim mulai dari Rp 25.000 tergantung lokasi. Untuk area Jakarta Selatan, ongkir Rp 25.000. Area lain bisa dicek saat checkout atau hubungi kami.",
    category: "pengiriman",
  },
  {
    id: "f6",
    question: "Apakah bisa same-day delivery?",
    answer: "Ya, kami menyediakan same-day delivery untuk pesanan yang masuk sebelum jam 14:00 WIB. Layanan ini tersedia untuk area Jakarta dan sekitarnya.",
    category: "pengiriman",
  },
  {
    id: "f7",
    question: "Bagaimana jika bunga rusak saat pengiriman?",
    answer: "Kami menjamin kualitas bunga saat sampai tujuan. Jika ada kerusakan saat pengiriman, silakan hubungi kami dalam 24 jam dengan foto bukti untuk penggantian.",
    category: "garansi",
  },
  {
    id: "f8",
    question: "Apakah bisa menambahkan kartu ucapan?",
    answer: "Ya, setiap pesanan bisa ditambahkan kartu ucapan gratis. Anda bisa menuliskan pesan saat checkout atau hubungi kami untuk custom kartu.",
    category: "produk",
  },
  {
    id: "f9",
    question: "Bagaimana cara berlangganan bunga?",
    answer: "Kunjungi halaman Langganan kami, pilih paket yang sesuai (mingguan, dua mingguan, atau bulanan), isi data diri dan alamat pengiriman, lalu lakukan pembayaran.",
    category: "langganan",
  },
  {
    id: "f10",
    question: "Apakah subscription bisa di-cancel?",
    answer: "Ya, subscription bisa di-cancel atau di-pause kapan saja tanpa penalti. Hubungi kami minimal 3 hari sebelum jadwal pengiriman berikutnya.",
    category: "langganan",
  },
];

export const galleryItems: GalleryItem[] = [
  { id: "g1", image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=600&fit=crop", title: "Pastel Elegance", category: "bouquet" },
  { id: "g2", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=600&h=600&fit=crop", title: "Red Romance", category: "bouquet" },
  { id: "g3", image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&h=600&fit=crop", title: "Luxury Box", category: "flower-box" },
  { id: "g4", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Wedding Dreams", category: "wedding" },
  { id: "g5", image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=600&h=600&fit=crop", title: "Grand Standing", category: "standing" },
  { id: "g6", image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&h=600&fit=crop", title: "Table Beauty", category: "arrangement" },
  { id: "g7", image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=600&h=600&fit=crop", title: "Sunny Delight", category: "bouquet" },
  { id: "g8", image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&h=600&fit=crop", title: "Pink Perfection", category: "bouquet" },
];

export const teamMembers: TeamMember[] = [
  {
    id: "tm1",
    name: "Anisa Rahma",
    role: "Founder & Head Florist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    description: "Berpengalaman 10+ tahun dalam dunia florist. Lulusan floristry dari Belanda.",
  },
  {
    id: "tm2",
    name: "Rudi Hartono",
    role: "Senior Florist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    description: "Spesialis wedding dan event decoration dengan 8 tahun pengalaman.",
  },
  {
    id: "tm3",
    name: "Siti Nurhaliza",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    description: "Bertanggung jawab atas desain dan inovasi produk baru.",
  },
  {
    id: "tm4",
    name: "Dimas Prasetyo",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    description: "Memastikan setiap pesanan sampai tepat waktu dan dalam kondisi sempurna.",
  },
];

export const stats = [
  { label: "Pelanggan Puas", value: "15,000+" },
  { label: "Bunga Dirangkai", value: "50,000+" },
  { label: "Pengiriman", value: "25,000+" },
  { label: "Tahun Pengalaman", value: "10+" },
];

export const whyChooseUs = [
  {
    title: "Bunga Segar Berkualitas",
    description: "Kami hanya menggunakan bunga-bunga segar pilihan yang dipetik langsung dari kebun terbaik.",
    icon: "flower",
  },
  {
    title: "Florist Berpengalaman",
    description: "Tim florist kami memiliki pengalaman lebih dari 10 tahun dalam merangkai bunga.",
    icon: "award",
  },
  {
    title: "Pengiriman Tepat Waktu",
    description: "Dengan armada pengiriman sendiri, kami menjamin bunga sampai tepat waktu dan segar.",
    icon: "clock",
  },
  {
    title: "Harga Kompetitif",
    description: "Kualitas premium dengan harga yang bersaing. Tidak ada biaya tersembunyi.",
    icon: "tag",
  },
  {
    title: "Garansi Kepuasan",
    description: "Jika tidak puas dengan pesanan Anda, kami siap memberikan penggantian.",
    icon: "shield",
  },
  {
    title: "Customer Service 24/7",
    description: "Tim support kami siap membantu Anda kapan saja melalui WhatsApp.",
    icon: "headphones",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Pilih Produk",
    description: "Browse koleksi kami dan pilih rangkaian yang sesuai dengan kebutuhan Anda.",
  },
  {
    step: 2,
    title: "Isi Detail Pesanan",
    description: "Lengkapi informasi penerima, alamat pengiriman, dan tambahkan pesan jika diperlukan.",
  },
  {
    step: 3,
    title: "Pembayaran",
    description: "Pilih metode pembayaran yang nyaman. Transfer bank, QRIS, atau COD tersedia.",
  },
  {
    step: 4,
    title: "Pengiriman",
    description: "Tim kami akan menyiapkan dan mengirimkan pesanan Anda sesuai jadwal yang dipilih.",
  },
];
