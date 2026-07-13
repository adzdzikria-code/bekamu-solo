import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import heroImg from "@/assets/hero-bekam.jpg";
import therapistImg from "@/assets/therapist.jpg";
import { ARTICLES } from "@/data/articles";

export const Route = createFileRoute("/")({
  component: Index,
});

const WA_NUMBER = "6285857768994";

const NAV = [
  { id: "home", label: "Home" },
  { id: "tentang", label: "Tentang" },
  { id: "layanan", label: "Layanan" },
  { id: "komunitas", label: "Komunitas" },
  { id: "harga", label: "Harga" },
  { id: "testimoni", label: "Testimoni" },
  { id: "galeri", label: "Galeri" },
  { id: "blog", label: "Seputar Bekam" },
  { id: "kontak", label: "Kontak" },
];

const FEATURES = [
  { icon: "👨‍⚕️", title: "Terapis Profesional", desc: "Ditangani oleh tenaga berpengalaman dan bersertifikat." },
  { icon: "🧪", title: "Alat Steril", desc: "Menggunakan alat sekali pakai untuk keamanan Anda." },
  { icon: "🏠", title: "Home Service", desc: "Melayani panggilan ke rumah di seluruh Solo Raya." },
  { icon: "🕌", title: "Sesuai Sunnah", desc: "Mengutamakan pelayanan islami dan doa syar'i." },
];

const SERVICES = [
  { img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800", title: "Bekam", desc: "Terapi bekam basah & kering untuk detoksifikasi tubuh dan meredakan berbagai keluhan." },
  { img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800", title: "Pijat", desc: "Pijat relaksasi & terapi untuk mengurangi pegal, stres, dan meningkatkan sirkulasi darah." },
  { img: "https://images.unsplash.com/photo-1509130446053-3a5c1f2b8f8b?w=800", title: "Herbal", desc: "Ramuan herbal alami pilihan untuk mendukung proses pemulihan dan menjaga kesehatan." },
  { img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800", title: "Home Service", desc: "Layanan terapi ke rumah, kantor, atau tempat Anda dengan peralatan lengkap." },
];

const PRICING = [
  { title: "Bekam Reguler", price: "Rp50.000", unit: "/ sesi", features: ["Bekam kering / basah", "Alat sekali pakai", "Konsultasi awal", "Titik bekam standar"], featured: false },
  { title: "Bekam Premium", price: "Rp80.000", unit: "/ sesi", features: ["Bekam basah lengkap", "Alat premium steril", "Konsultasi mendalam", "Pijat relaksasi 15 mnt", "Herbal pendukung"], featured: true },
  { title: "Home Service", price: "Hubungi Admin", unit: "area Solo Raya", features: ["Terapis datang ke rumah", "Peralatan lengkap", "Fleksibel waktu", "Konsultasi keluarga"], featured: false },
];

const TESTIMONIALS = [
  { name: "Ahmad Fauzi", photo: "https://i.pravatar.cc/100?img=12", rating: 5, text: "Pelayanannya sangat profesional dan bersih. Badan terasa jauh lebih ringan setelah bekam. Recommended!" },
  { name: "Siti Aminah", photo: "https://i.pravatar.cc/100?img=47", rating: 5, text: "Terapisnya ramah, ruangannya nyaman, dan sesuai sunnah. Alhamdulillah migrain saya berkurang." },
  { name: "Budi Santoso", photo: "https://i.pravatar.cc/100?img=15", rating: 5, text: "Home service-nya cepat dan alat lengkap. Cocok buat yang sibuk seperti saya. Terima kasih Bekamu Solo!" },
  { name: "Rina Wulandari", photo: "https://i.pravatar.cc/100?img=45", rating: 4, text: "Harga bersahabat, hasilnya memuaskan. Sudah rutin bekam di sini setiap bulan." },
  { name: "Yusuf Hidayat", photo: "https://i.pravatar.cc/100?img=33", rating: 5, text: "Bekam sesuai sunnah dengan doa yang jelas. Insya Allah berkah dan sehatnya dobel." },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800",
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800",
  "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800",
  "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800",
  "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800",
];

const BLOG = ARTICLES;

const LAYANAN_OPTIONS = [
  "Bekam Reguler",
  "Bekam Premium",
  "Bekam Basah",
  "Bekam Kering",
  "Pijat Relaksasi",
  "Pijat Terapi",
  "Herbal",
  "Home Service",
  "Paket Keluarga",
];

const FAQ = [
  { q: "Apakah bekam sakit?", a: "Tidak. Sensasi yang muncul hanya seperti sedotan ringan. Sayatan sangat kecil dan tidak menimbulkan rasa sakit yang berarti." },
  { q: "Berapa lama terapi?", a: "Rata-rata sesi terapi berlangsung 45–60 menit tergantung jumlah titik dan jenis terapi yang dipilih." },
  { q: "Apakah harus reservasi?", a: "Sangat disarankan untuk reservasi terlebih dahulu agar Anda mendapatkan slot waktu dan terapis terbaik." },
  { q: "Siapa saja yang tidak boleh bekam?", a: "Ibu hamil trimester awal, penderita gangguan pembekuan darah berat, dan pasien dalam kondisi sangat lemah sebaiknya konsultasi dulu." },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [testiIdx, setTestiIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ nama: "", wa: "", gender: "Laki-laki", layanan: "Bekam Reguler", tanggal: "", jam: "", alamat: "", catatan: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const todayStr = useMemo(() => new Date().toISOString().split("T")[0], []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTestiIdx((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const normalizeWa = (raw: string) => {
    const digits = raw.replace(/\D/g, "");
    if (digits.startsWith("62")) return digits;
    if (digits.startsWith("0")) return "62" + digits.slice(1);
    if (digits.startsWith("8")) return "62" + digits;
    return digits;
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (form.nama.trim().length < 3) e.nama = "Nama minimal 3 karakter.";
    if (form.nama.trim().length > 100) e.nama = "Nama maksimal 100 karakter.";
    const waDigits = form.wa.replace(/\D/g, "");
    if (!/^(?:\+?62|0)8\d{7,12}$/.test(form.wa.replace(/\s|-/g, ""))) {
      e.wa = "Format WhatsApp tidak valid. Contoh: 08123456789";
    } else if (waDigits.length < 10 || waDigits.length > 14) {
      e.wa = "Nomor WhatsApp harus 10–14 digit.";
    }
    if (!form.layanan.trim()) e.layanan = "Pilih atau ketik layanan.";
    if (!form.tanggal) {
      e.tanggal = "Tanggal wajib diisi.";
    } else if (form.tanggal < todayStr) {
      e.tanggal = "Tanggal tidak boleh di masa lalu.";
    }
    if (!form.jam) {
      e.jam = "Jam wajib diisi.";
    } else if (form.jam < "08:00" || form.jam > "21:00") {
      e.jam = "Jam operasional 08:00 – 21:00 WIB.";
    }
    if (form.alamat.trim().length < 5) e.alamat = "Alamat minimal 5 karakter.";
    if (form.catatan.length > 500) e.catatan = "Catatan maksimal 500 karakter.";
    return e;
  };

  const handleBooking = (e: FormEvent) => {
    e.preventDefault();
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length > 0) {
      setSubmitStatus("Mohon perbaiki data yang bertanda merah.");
      return;
    }
    const waFmt = normalizeWa(form.wa);
    const tglFmt = new Date(form.tanggal + "T00:00:00").toLocaleDateString("id-ID", {
      weekday: "long", day: "numeric", month: "long", year: "numeric",
    });
    const lines = [
      "*🩸 BOOKING BEKAMU SOLO*",
      "───────────────────",
      `👤 *Nama*        : ${form.nama.trim()}`,
      `📱 *WhatsApp*   : +${waFmt}`,
      `⚧  *Jenis Kel.*  : ${form.gender}`,
      `💆 *Layanan*    : ${form.layanan.trim()}`,
      `📅 *Tanggal*    : ${tglFmt}`,
      `⏰ *Jam*         : ${form.jam} WIB`,
      `📍 *Alamat*      : ${form.alamat.trim()}`,
    ];
    if (form.catatan.trim()) {
      lines.push(`📝 *Catatan*    : ${form.catatan.trim()}`);
    }
    lines.push("───────────────────");
    lines.push("Mohon konfirmasi ketersediaan slot. Terima kasih 🙏");
    const msg = encodeURIComponent(lines.join("\n"));
    setSubmitStatus("Mengarahkan ke WhatsApp…");
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#111] shadow-lg" : "bg-transparent"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#D62828] font-black">B</span>
            <span className="text-lg font-extrabold tracking-wide">BEKAMU SOLO</span>
          </button>
          <ul className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <li key={n.id}>
                <button onClick={() => scrollTo(n.id)} className="text-sm font-medium text-white/90 hover:text-[#D62828] transition-colors">
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <button onClick={() => scrollTo("booking")} className="hidden md:inline-flex items-center rounded-full bg-[#D62828] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#b31f1f] hover:scale-105 transition-all">
              Booking Sekarang
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white text-2xl" aria-label="Menu">
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-[#111] border-t border-white/10 animate-slide-in">
            <ul className="flex flex-col px-4 py-4">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button onClick={() => scrollTo(n.id)} className="block w-full text-left py-3 text-white/90 hover:text-[#D62828]">
                    {n.label}
                  </button>
                </li>
              ))}
              <li><button onClick={() => scrollTo("booking")} className="mt-2 w-full rounded-full bg-[#D62828] py-3 text-white font-semibold">Booking Sekarang</button></li>
            </ul>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Terapi bekam profesional Bekamu Solo" className="absolute inset-0 h-full w-full object-cover" width={1024} height={1024} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center text-white">
          <p className="animate-fade-up text-[#D62828] font-semibold tracking-widest text-sm uppercase mb-4">Bekamu Solo</p>
          <h1 className="animate-fade-up text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight" style={{ animationDelay: "0.1s" }}>
            Dapat Sehatnya,<br /><span className="text-[#D62828]">Dapat Sunnahnya.</span>
          </h1>
          <p className="animate-fade-up mt-6 max-w-2xl mx-auto text-base md:text-lg text-white/85" style={{ animationDelay: "0.25s" }}>
            Bekamu Solo merupakan layanan terapi bekam profesional yang memberikan pelayanan higienis, aman, nyaman, dan sesuai sunnah.
          </p>
          <div className="animate-fade-up mt-8 flex flex-col sm:flex-row gap-3 justify-center" style={{ animationDelay: "0.4s" }}>
            <button onClick={() => scrollTo("booking")} className="rounded-full bg-[#D62828] px-8 py-3.5 font-semibold text-white shadow-lg hover:bg-[#b31f1f] hover:scale-105 transition-all">
              Booking Sekarang
            </button>
            <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer" className="rounded-full border-2 border-white px-8 py-3.5 font-semibold text-white hover:bg-white hover:text-[#111] transition-all">
              Hubungi WhatsApp
            </a>
          </div>
          <div className="animate-fade-up mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto" style={{ animationDelay: "0.55s" }}>
            {[["400+", "Pasien"], ["3+", "Tahun Pengalaman"], ["100%", "Alat Steril"]].map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur p-4 md:p-6">
                <div className="text-2xl md:text-4xl font-extrabold text-[#D62828]">{n}</div>
                <div className="text-xs md:text-sm text-white/80 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TENTANG */}
      <section id="tentang" className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-right">
            <img src={therapistImg} alt="Terapis Bekamu Solo" className="rounded-3xl shadow-[var(--shadow-soft)] w-full object-cover" loading="lazy" width={1024} height={1024} />
          </div>
          <div className="animate-fade-left">
            <span className="text-[#D62828] font-semibold uppercase tracking-widest text-xs">Tentang Kami</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#111]">Tentang Bekamu Solo</h2>
            <div className="mt-4 h-1 w-16 bg-[#D62828] rounded" />
            <p className="mt-6 text-[#444] leading-relaxed">
              Bekamu Solo merupakan pusat layanan terapi bekam yang berkomitmen memberikan pelayanan terbaik dengan mengutamakan kebersihan, kenyamanan, profesionalisme, dan nilai-nilai Islami. Kami melayani terapi bekam, pijat, herbal, dan home service untuk wilayah Solo Raya.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {["Higienis & Steril", "Tenaga Bersertifikat", "Sesuai Sunnah", "Home Service"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm font-medium text-[#111]">
                  <span className="text-[#D62828]">✓</span> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="py-20 md:py-28 bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto animate-fade-up">
            <span className="text-[#D62828] font-semibold uppercase tracking-widest text-xs">Keunggulan Kami</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#111]">Kenapa Memilih Bekamu Solo?</h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="group animate-fade-up rounded-2xl bg-white p-8 shadow-[var(--shadow-card)] hover:-translate-y-2 hover:shadow-[var(--shadow-soft)] transition-all duration-300" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-[#111]">{f.title}</h3>
                <p className="mt-2 text-sm text-[#555] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section id="layanan" className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto animate-fade-up">
            <span className="text-[#D62828] font-semibold uppercase tracking-widest text-xs">Layanan</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#111]">Layanan Terapi Kami</h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <article key={s.title} className="group animate-zoom-in rounded-2xl overflow-hidden bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="overflow-hidden aspect-[4/3]">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#111]">{s.title}</h3>
                  <p className="mt-2 text-sm text-[#555] leading-relaxed">{s.desc}</p>
                  <button onClick={() => scrollTo("booking")} className="mt-4 text-sm font-semibold text-[#D62828] hover:underline">
                    Selengkapnya →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HARGA */}
      <section id="komunitas" className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#D62828 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="mx-auto max-w-7xl px-4 md:px-8 relative">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <span className="text-[#D62828] font-semibold uppercase tracking-widest text-xs">Komunitas</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#111]">Sahabat Bekamu Solo</h2>
            <p className="mt-5 text-[#555] leading-relaxed">
              Wadah bagi generasi muda untuk belajar, berbagi, dan berkembang dalam dunia kesehatan berbasis Thibbun Nabawi, khususnya terapi bekam. Kami mencetak generasi yang peduli kesehatan, memahami manfaat bekam secara ilmiah maupun syar'i, serta aktif menyebarkan edukasi kepada masyarakat.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <div className="animate-fade-right rounded-3xl bg-gradient-to-br from-[#D62828] to-[#8b1a1a] p-8 md:p-10 text-white shadow-2xl">
              <div className="flex items-center gap-3 text-2xl font-bold">🎯 <span>Visi</span></div>
              <p className="mt-4 text-white/90 leading-relaxed">
                Menjadi komunitas generasi muda yang peduli terhadap kesehatan dan menjadi pelopor edukasi Thibbun Nabawi di Indonesia.
              </p>
            </div>
            <div className="animate-fade-left rounded-3xl bg-[#111] p-8 md:p-10 text-white shadow-2xl">
              <div className="flex items-center gap-3 text-2xl font-bold">🌟 <span>Misi</span></div>
              <ul className="mt-4 space-y-2 text-white/85 text-sm">
                {[
                  "Mengedukasi masyarakat mengenai terapi bekam.",
                  "Mengenalkan Thibbun Nabawi kepada generasi muda.",
                  "Menyelenggarakan pelatihan bekam.",
                  "Mengadakan seminar kesehatan.",
                  "Menyelenggarakan bakti sosial.",
                  "Membentuk relawan kesehatan.",
                ].map((m) => (
                  <li key={m} className="flex gap-2"><span className="text-[#FFD166]">✓</span>{m}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "📚", title: "Edukasi", desc: "Membagikan ilmu kesehatan berbasis Thibbun Nabawi." },
              { icon: "🩸", title: "Pelatihan Bekam", desc: "Kelas dasar bekam bagi anggota komunitas." },
              { icon: "🤝", title: "Bakti Sosial", desc: "Program bekam gratis untuk masyarakat." },
              { icon: "🌱", title: "Pengembangan Generasi", desc: "Membentuk relawan muda yang peduli sehat." },
            ].map((c, i) => (
              <div key={c.title} className="animate-fade-up bg-[#F5F5F5] hover:bg-white rounded-2xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] hover:-translate-y-2 transition-all border border-transparent hover:border-[#D62828]/20" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl">{c.icon}</div>
                <h3 className="mt-3 font-bold text-[#111]">{c.title}</h3>
                <p className="mt-2 text-sm text-[#555]">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="text-center animate-fade-up">
              <span className="text-[#D62828] font-semibold uppercase tracking-widest text-xs">Program Kegiatan</span>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {["Seminar", "Workshop Bekam", "Kajian Thibbun Nabawi", "Pelatihan Dasar Bekam", "Bakti Sosial", "Volunteer Event"].map((p) => (
                <span key={p} className="rounded-full bg-[#F5F5F5] border border-[#e5e5e5] px-4 py-2 text-sm font-medium text-[#111] hover:bg-[#D62828] hover:text-white hover:border-[#D62828] transition-colors cursor-default">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 animate-fade-up">
            <a href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Assalamu'alaikum, saya ingin bergabung dengan komunitas Sahabat Bekamu Solo.")}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D62828] px-8 py-3.5 font-semibold text-white shadow-lg hover:bg-[#b31f1f] hover:-translate-y-0.5 transition-all">
              Gabung Komunitas
            </a>
            <button onClick={() => scrollTo("galeri")} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#111] px-8 py-3.5 font-semibold text-[#111] hover:bg-[#111] hover:text-white transition-all">
              Lihat Kegiatan
            </button>
          </div>
        </div>
      </section>

      {/* HARGA */}
      <section id="harga" className="py-20 md:py-28 bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto animate-fade-up">
            <span className="text-[#D62828] font-semibold uppercase tracking-widest text-xs">Paket Harga</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#111]">Harga Terjangkau, Kualitas Premium</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PRICING.map((p, i) => (
              <div key={p.title} className={`animate-fade-up relative rounded-3xl p-8 transition-all hover:-translate-y-2 ${p.featured ? "bg-[#111] text-white shadow-2xl scale-105 lg:scale-110" : "bg-white text-[#111] shadow-[var(--shadow-card)]"}`} style={{ animationDelay: `${i * 0.1}s` }}>
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#D62828] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">Populer</span>
                )}
                <h3 className={`text-xl font-bold ${p.featured ? "text-white" : "text-[#111]"}`}>{p.title}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className={`text-3xl md:text-4xl font-extrabold ${p.featured ? "text-[#D62828]" : "text-[#111]"}`}>{p.price}</span>
                </div>
                <p className={`text-sm mt-1 ${p.featured ? "text-white/60" : "text-[#666]"}`}>{p.unit}</p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${p.featured ? "text-white/85" : "text-[#444]"}`}>
                      <span className="text-[#D62828] mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => scrollTo("booking")} className={`mt-8 w-full rounded-full py-3 font-semibold transition-all hover:scale-105 ${p.featured ? "bg-[#D62828] text-white hover:bg-[#b31f1f]" : "border-2 border-[#111] text-[#111] hover:bg-[#111] hover:text-white"}`}>
                  Pilih Paket
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section id="testimoni" className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="text-center animate-fade-up">
            <span className="text-[#D62828] font-semibold uppercase tracking-widest text-xs">Testimoni</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#111]">Kata Pasien Kami</h2>
          </div>
          <div className="mt-14 relative">
            <div className="rounded-3xl bg-[#F5F5F5] p-8 md:p-12 text-center min-h-[280px]">
              <div key={testiIdx} className="animate-fade-up">
                <img src={TESTIMONIALS[testiIdx].photo} alt={TESTIMONIALS[testiIdx].name} className="mx-auto h-20 w-20 rounded-full border-4 border-white shadow-md object-cover" loading="lazy" />
                <div className="mt-4 flex justify-center gap-1 text-[#D62828]">
                  {Array.from({ length: TESTIMONIALS[testiIdx].rating }).map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="mt-4 text-[#333] italic max-w-2xl mx-auto">"{TESTIMONIALS[testiIdx].text}"</p>
                <p className="mt-4 font-bold text-[#111]">{TESTIMONIALS[testiIdx].name}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setTestiIdx(i)} className={`h-2 rounded-full transition-all ${i === testiIdx ? "w-8 bg-[#D62828]" : "w-2 bg-[#ccc]"}`} aria-label={`Testimoni ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALERI */}
      <section id="galeri" className="py-20 md:py-28 bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto animate-fade-up">
            <span className="text-[#D62828] font-semibold uppercase tracking-widest text-xs">Galeri</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#111]">Dokumentasi Layanan</h2>
          </div>
          <div className="mt-14 columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {GALLERY.map((src, i) => (
              <button key={i} onClick={() => setLightbox(src)} className="block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] group animate-zoom-in" style={{ animationDelay: `${i * 0.05}s` }}>
                <img src={src} alt={`Galeri ${i + 1}`} loading="lazy" className="w-full object-cover group-hover:scale-110 transition-transform duration-500" style={{ aspectRatio: i % 3 === 0 ? "3/4" : "4/3" }} />
              </button>
            ))}
          </div>
        </div>
        {lightbox && (
          <div onClick={() => setLightbox(null)} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-fade-up cursor-zoom-out">
            <img src={lightbox} alt="Preview" className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain" />
            <button className="absolute top-6 right-6 text-white text-3xl">✕</button>
          </div>
        )}
      </section>

      {/* BLOG */}
      <section id="blog" className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto animate-fade-up">
            <span className="text-[#D62828] font-semibold uppercase tracking-widest text-xs">Seputar Bekam</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#111]">Artikel & Edukasi</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG.map((b, i) => (
              <Link key={b.slug} to="/artikel/$slug" params={{ slug: b.slug }} className="group animate-fade-up block rounded-2xl overflow-hidden bg-white border border-[#eee] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="aspect-[16/10] overflow-hidden bg-[#F5F5F5]">
                  <img src={b.image} alt={b.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#888]">
                    <span className="font-semibold text-[#D62828] uppercase tracking-wider">{b.category}</span>
                    <span>•</span>
                    <span>{b.readTime}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-[#111] group-hover:text-[#D62828] transition-colors">{b.title}</h3>
                  <p className="mt-2 text-sm text-[#555] leading-relaxed">{b.summary}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-[#D62828] group-hover:underline">Baca Selengkapnya →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-[#F5F5F5]">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <div className="text-center animate-fade-up">
            <span className="text-[#D62828] font-semibold uppercase tracking-widest text-xs">FAQ</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#111]">Pertanyaan Umum</h2>
          </div>
          <div className="mt-12 space-y-3">
            {FAQ.map((item, i) => (
              <div key={i} className="animate-fade-up rounded-2xl bg-white shadow-[var(--shadow-card)] overflow-hidden" style={{ animationDelay: `${i * 0.08}s` }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between px-6 py-5 text-left">
                  <span className="font-semibold text-[#111]">{item.q}</span>
                  <span className={`text-[#D62828] text-2xl transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-[#555] leading-relaxed animate-fade-up">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="text-center animate-fade-up">
            <span className="text-[#D62828] font-semibold uppercase tracking-widest text-xs">Booking</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#111]">Reservasi Sesi Terapi</h2>
            <p className="mt-4 text-[#555]">Isi form di bawah, kami akan menghubungi Anda melalui WhatsApp.</p>
          </div>
          <form onSubmit={handleBooking} noValidate className="mt-12 grid md:grid-cols-2 gap-5 rounded-3xl bg-[#F5F5F5] p-6 md:p-10 shadow-[var(--shadow-card)] animate-fade-up">
            <div>
              <label className="block text-sm font-semibold text-[#111] mb-1.5">Nama Lengkap <span className="text-[#D62828]">*</span></label>
              <input type="text" maxLength={100} value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} placeholder="Nama sesuai KTP" className={`w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D62828]/20 transition-all ${errors.nama ? "border-[#D62828]" : "border-[#e0e0e0] focus:border-[#D62828]"}`} />
              {errors.nama && <p className="mt-1 text-xs text-[#D62828]">{errors.nama}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#111] mb-1.5">Nomor WhatsApp <span className="text-[#D62828]">*</span></label>
              <input type="tel" inputMode="tel" maxLength={16} value={form.wa} onChange={(e) => setForm({ ...form, wa: e.target.value.replace(/[^\d+\s-]/g, "") })} placeholder="08123456789" className={`w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D62828]/20 transition-all ${errors.wa ? "border-[#D62828]" : "border-[#e0e0e0] focus:border-[#D62828]"}`} />
              {errors.wa ? (
                <p className="mt-1 text-xs text-[#D62828]">{errors.wa}</p>
              ) : (
                <p className="mt-1 text-xs text-[#888]">Gunakan nomor aktif untuk konfirmasi booking.</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#111] mb-1.5">Jenis Kelamin</label>
              <select value={form.gender} onChange={(e) => setForm({ ...form, gender: e.target.value })} className="w-full rounded-xl border border-[#e0e0e0] bg-white px-4 py-3 text-sm focus:border-[#D62828] focus:outline-none">
                <option>Laki-laki</option><option>Perempuan</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#111] mb-1.5">Layanan <span className="text-[#D62828]">*</span></label>
              <input list="layanan-list" type="text" value={form.layanan} onChange={(e) => setForm({ ...form, layanan: e.target.value })} placeholder="Ketik atau pilih layanan…" className={`w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D62828]/20 transition-all ${errors.layanan ? "border-[#D62828]" : "border-[#e0e0e0] focus:border-[#D62828]"}`} />
              <datalist id="layanan-list">
                {LAYANAN_OPTIONS.map((o) => <option key={o} value={o} />)}
              </datalist>
              {errors.layanan && <p className="mt-1 text-xs text-[#D62828]">{errors.layanan}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#111] mb-1.5">Tanggal <span className="text-[#D62828]">*</span></label>
              <input type="date" min={todayStr} value={form.tanggal} onChange={(e) => setForm({ ...form, tanggal: e.target.value })} className={`w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D62828]/20 transition-all ${errors.tanggal ? "border-[#D62828]" : "border-[#e0e0e0] focus:border-[#D62828]"}`} />
              {errors.tanggal && <p className="mt-1 text-xs text-[#D62828]">{errors.tanggal}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#111] mb-1.5">Jam <span className="text-[#D62828]">*</span></label>
              <input type="time" min="08:00" max="21:00" step={900} value={form.jam} onChange={(e) => setForm({ ...form, jam: e.target.value })} className={`w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D62828]/20 transition-all ${errors.jam ? "border-[#D62828]" : "border-[#e0e0e0] focus:border-[#D62828]"}`} />
              {errors.jam ? (
                <p className="mt-1 text-xs text-[#D62828]">{errors.jam}</p>
              ) : (
                <p className="mt-1 text-xs text-[#888]">Jam operasional 08:00 – 21:00 WIB.</p>
              )}
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-[#111] mb-1.5">Alamat <span className="text-[#D62828]">*</span></label>
              <input type="text" maxLength={200} value={form.alamat} onChange={(e) => setForm({ ...form, alamat: e.target.value })} placeholder="Alamat lengkap / lokasi terapi" className={`w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D62828]/20 transition-all ${errors.alamat ? "border-[#D62828]" : "border-[#e0e0e0] focus:border-[#D62828]"}`} />
              {errors.alamat && <p className="mt-1 text-xs text-[#D62828]">{errors.alamat}</p>}
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-[#111] mb-1.5">Catatan <span className="text-[#888] font-normal">(opsional)</span></label>
              <textarea rows={3} maxLength={500} value={form.catatan} onChange={(e) => setForm({ ...form, catatan: e.target.value })} placeholder="Keluhan / permintaan khusus" className={`w-full rounded-xl border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D62828]/20 transition-all resize-none ${errors.catatan ? "border-[#D62828]" : "border-[#e0e0e0] focus:border-[#D62828]"}`} />
              <div className="mt-1 flex justify-between text-xs">
                <span className="text-[#D62828]">{errors.catatan}</span>
                <span className="text-[#888]">{form.catatan.length}/500</span>
              </div>
            </div>
            {submitStatus && (
              <div className={`md:col-span-2 rounded-xl px-4 py-3 text-sm font-medium ${Object.keys(errors).length ? "bg-[#D62828]/10 text-[#D62828]" : "bg-green-50 text-green-700"}`}>
                {submitStatus}
              </div>
            )}
            <div className="md:col-span-2">
              <button type="submit" className="w-full rounded-full bg-[#D62828] py-4 font-bold text-white shadow-lg hover:bg-[#b31f1f] hover:scale-[1.02] transition-all">
                Booking via WhatsApp
              </button>
              <p className="mt-3 text-center text-xs text-[#888]">Anda akan diarahkan ke WhatsApp dengan pesan yang sudah terisi rapi.</p>
            </div>
          </form>
        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="py-20 md:py-28 bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto animate-fade-up">
            <span className="text-[#D62828] font-semibold uppercase tracking-widest text-xs">Kontak</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#111]">Hubungi Kami</h2>
          </div>
          <div className="mt-14 grid lg:grid-cols-2 gap-8">
            <div className="animate-fade-right rounded-3xl overflow-hidden shadow-[var(--shadow-card)] bg-white min-h-[400px]">
              <iframe title="Lokasi Bekamu Solo" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15819.85!2d110.8243!3d-7.5755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSolo!5e0!3m2!1sen!2sid!4v1000000000000" className="w-full h-full min-h-[400px] border-0" loading="lazy" />
            </div>
            <div className="animate-fade-left space-y-4">
              {[
                { icon: "📍", title: "Alamat", val: "Jl. Slamet Riyadi No. 123, Solo, Jawa Tengah" },
                { icon: "📱", title: "WhatsApp", val: "+62 812-3456-7890" },
                { icon: "📷", title: "Instagram", val: "@bekamu.solo" },
                { icon: "🕒", title: "Jam Operasional", val: "Setiap Hari, 08.00 – 21.00 WIB" },
              ].map((c) => (
                <div key={c.title} className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#D62828]/10 text-2xl">{c.icon}</div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-[#111]">{c.title}</h3>
                    <p className="text-sm text-[#555] mt-0.5">{c.val}</p>
                  </div>
                </div>
              ))}
              <a href="https://maps.google.com/?q=Solo" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full rounded-full bg-[#111] py-4 font-semibold text-white hover:bg-[#D62828] transition-all hover:scale-[1.02]">
                Buka Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111] text-white pt-16 pb-6">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#D62828] font-black">B</span>
              <span className="text-lg font-extrabold">BEKAMU SOLO</span>
            </div>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">Layanan terapi bekam profesional & sesuai sunnah di Solo Raya.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {NAV.slice(0, 5).map((n) => (
                <li key={n.id}><button onClick={() => scrollTo(n.id)} className="hover:text-[#D62828]">{n.label}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Jl. Slamet Riyadi No. 123, Solo</li>
              <li>+62 812-3456-7890</li>
              <li>hello@bekamusolo.id</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Sosial Media</h4>
            <div className="flex gap-3">
              {["IG", "FB", "TT", "YT"].map((s) => (
                <a key={s} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-[#D62828] transition-colors text-xs font-bold">{s}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © 2026 Bekamu Solo. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white text-3xl shadow-2xl hover:scale-110 transition-transform animate-bounce">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
      </a>
    </div>
  );
}
