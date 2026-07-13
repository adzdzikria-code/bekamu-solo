export type Article = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "apa-itu-bekam",
    title: "Apa Itu Bekam?",
    summary: "Mengenal terapi bekam, sejarahnya dalam pengobatan Islam, dan bagaimana cara kerjanya bagi tubuh.",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200",
    category: "Edukasi",
    date: "10 Juli 2026",
    readTime: "5 menit",
    content: [
      "Bekam (hijamah) adalah metode pengobatan tradisional dengan cara menyedot permukaan kulit menggunakan cup khusus untuk mengeluarkan darah kotor (bekam basah) atau melancarkan aliran darah (bekam kering).",
      "Terapi ini telah dipraktikkan sejak ribuan tahun lalu di berbagai peradaban — Mesir Kuno, Tiongkok, hingga menjadi sunnah Rasulullah SAW. Dalam sebuah hadits shahih disebutkan bahwa bekam adalah sebaik-baiknya pengobatan.",
      "Secara medis, bekam bekerja dengan cara meningkatkan sirkulasi darah pada area yang dibekam, merangsang titik-titik saraf, dan membantu tubuh mengeluarkan zat sisa metabolisme yang menumpuk.",
      "Di Bekamu Solo, seluruh proses bekam dilakukan oleh terapis bersertifikat menggunakan alat sekali pakai untuk menjamin sterilitas dan keamanan pasien.",
    ],
  },
  {
    slug: "manfaat-bekam",
    title: "Manfaat Bekam",
    summary: "Berbagai manfaat bekam bagi kesehatan fisik dan mental yang telah dibuktikan secara ilmiah.",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200",
    category: "Kesehatan",
    date: "8 Juli 2026",
    readTime: "6 menit",
    content: [
      "Bekam memiliki banyak manfaat yang telah didukung penelitian modern, di antaranya meredakan nyeri otot dan sendi, menurunkan tekanan darah tinggi, hingga membantu mengatasi migrain kronis.",
      "Selain manfaat fisik, bekam juga terbukti membantu mengurangi stres, memperbaiki kualitas tidur, dan meningkatkan energi harian karena efek relaksasi yang ditimbulkan.",
      "Beberapa keluhan yang sering ditangani dengan bekam antara lain pegal linu, asam urat, kolesterol tinggi, sakit kepala, insomnia, dan gangguan pencernaan ringan.",
      "Untuk hasil maksimal, disarankan bekam rutin setiap 1–2 bulan sekali bagi orang dewasa yang sehat, dan disesuaikan dengan kondisi masing-masing pasien.",
    ],
  },
  {
    slug: "waktu-terbaik-bekam",
    title: "Waktu Terbaik Bekam",
    summary: "Kapan waktu yang paling dianjurkan untuk melakukan bekam sesuai tuntunan sunnah Rasulullah.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200",
    category: "Sunnah",
    date: "5 Juli 2026",
    readTime: "4 menit",
    content: [
      "Rasulullah SAW menganjurkan bekam pada tanggal 17, 19, dan 21 bulan Hijriyah. Pada tanggal-tanggal tersebut kondisi darah dalam tubuh dipercaya berada pada kondisi paling optimal untuk dikeluarkan.",
      "Waktu terbaik dalam sehari adalah pagi hingga siang hari, saat tubuh masih segar dan belum banyak beraktivitas berat. Hindari bekam saat sangat lelah, kekenyangan, atau dalam kondisi lapar berlebihan.",
      "Hari yang dianjurkan untuk berbekam adalah Senin, Selasa, dan Kamis. Beberapa ulama menyarankan untuk menghindari bekam pada hari Sabtu, Ahad, Rabu, dan Jumat.",
      "Meski demikian, waktu terbaik bekam sebenarnya adalah ketika tubuh membutuhkan. Jika ada keluhan, jangan tunda — konsultasikan dengan terapis kami kapan saja.",
    ],
  },
  {
    slug: "persiapan-sebelum-bekam",
    title: "Persiapan Sebelum Bekam",
    summary: "Hal-hal yang perlu Anda persiapkan sebelum menjalani terapi bekam agar hasilnya maksimal.",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=1200",
    category: "Panduan",
    date: "3 Juli 2026",
    readTime: "4 menit",
    content: [
      "Persiapan yang baik akan membuat sesi bekam Anda lebih nyaman dan hasilnya lebih maksimal. Berikut hal-hal penting yang perlu diperhatikan sebelum bekam.",
      "Pertama, pastikan Anda cukup makan 2–3 jam sebelum bekam. Jangan bekam dalam kondisi perut kosong maupun sangat kenyang untuk menghindari pusing dan mual.",
      "Kedua, cukup istirahat malam sebelumnya, minimal 6–7 jam. Tubuh yang bugar akan lebih optimal merespons terapi bekam.",
      "Ketiga, gunakan pakaian yang nyaman dan mudah dibuka pada area yang akan dibekam. Bawa juga baju ganti jika perlu.",
      "Terakhir, sampaikan riwayat kesehatan dan keluhan Anda dengan detail kepada terapis agar penanganan lebih tepat sasaran.",
    ],
  },
  {
    slug: "perawatan-setelah-bekam",
    title: "Perawatan Setelah Bekam",
    summary: "Panduan perawatan tubuh setelah bekam untuk mempercepat pemulihan dan menjaga kondisi.",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=1200",
    category: "Panduan",
    date: "1 Juli 2026",
    readTime: "5 menit",
    content: [
      "Perawatan pasca bekam sama pentingnya dengan proses bekam itu sendiri. Perawatan yang benar akan mempercepat pemulihan dan memaksimalkan manfaat terapi.",
      "Jaga area bekas bekam tetap kering minimal 3–4 jam setelah terapi. Hindari mandi air dingin, berenang, atau mandi terlalu lama pada hari yang sama.",
      "Perbanyak minum air putih hangat untuk membantu proses detoksifikasi tubuh dan mengganti cairan yang hilang.",
      "Konsumsi makanan bergizi tinggi protein, buah, dan sayur untuk regenerasi sel. Hindari makanan berminyak, pedas berlebihan, dan minuman dingin selama 24 jam.",
      "Istirahat cukup dan hindari aktivitas berat 1x24 jam. Bekas bulatan merah pada kulit akan memudar sendiri dalam 3–7 hari.",
    ],
  },
  {
    slug: "apakah-bekam-aman",
    title: "Apakah Bekam Aman?",
    summary: "Penjelasan keamanan terapi bekam, siapa yang boleh, dan kondisi yang perlu dihindari.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200",
    category: "Kesehatan",
    date: "28 Juni 2026",
    readTime: "6 menit",
    content: [
      "Bekam merupakan terapi yang sangat aman apabila dilakukan oleh terapis bersertifikat menggunakan alat steril sekali pakai. Di Bekamu Solo, keamanan adalah prioritas utama kami.",
      "Namun demikian, ada beberapa kondisi yang perlu dihindari atau dikonsultasikan terlebih dahulu, seperti: ibu hamil trimester awal, penderita hemofilia atau gangguan pembekuan darah, pasien dengan anemia berat, dan pasien pasca operasi besar.",
      "Efek samping ringan seperti memar sementara, sedikit pusing, atau rasa lelah setelah bekam adalah hal wajar dan akan hilang dalam 1–3 hari.",
      "Untuk memastikan keamanan, kami selalu melakukan konsultasi awal untuk mengetahui riwayat kesehatan pasien sebelum memulai terapi.",
      "Jika Anda memiliki kondisi khusus, jangan ragu untuk berkonsultasi dengan tim kami melalui WhatsApp sebelum melakukan booking.",
    ],
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);