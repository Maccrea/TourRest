"use client";
import React, { useState, useEffect } from "react";

interface NavbarProps {
  activeSection: string;
  onLoginClick: () => void;
}

const Navbar = ({ activeSection, onLoginClick }: NavbarProps) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center p-6 lg:px-20 bg-white/60 backdrop-blur-xl z-50 shadow-sm transition-all duration-300">
      <div
        className="text-2xl font-black tracking-tighter text-emerald-600 cursor-pointer flex items-center gap-2"
        onClick={() => scrollTo("home")}
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.333 14.667a4.66 4.66 0 0 0-1.815-3.642l-4.524-3.619a1.334 1.334 0 0 0-1.66 0l-4.525 3.62A4.66 4.66 0 0 0 5 14.666v2.667A2.667 2.667 0 0 0 7.667 20h8.666A2.667 2.667 0 0 0 19.333 17.333v-2.666ZM12 4c.484 0 .968.163 1.365.488l6.398 5.118A2.666 2.666 0 0 1 20.803 11.69h1.864a1.333 1.333 0 0 0 .83-2.373L12.83 1.854a1.332 1.332 0 0 0-1.66 0L.503 9.317a1.333 1.333 0 0 0 .83 2.373h1.864a2.664 2.664 0 0 1 1.04-2.083l6.398-5.118A2.164 2.164 0 0 1 12 4Z" />
        </svg>
        TourRest.
      </div>

      <div className="md:hidden text-slate-600">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <div className="hidden md:flex gap-6 lg:gap-8 font-medium text-slate-600 items-center">
        <button
          onClick={() => scrollTo("destinasi")}
          className={`hover:text-emerald-500 transition-colors ${
            activeSection === "destinasi" ? "text-emerald-600 font-bold" : ""
          }`}
        >
          Hotel
        </button>
        <button
          onClick={() => scrollTo("event")}
          className={`hover:text-emerald-500 transition-colors ${
            activeSection === "event" ? "text-emerald-600 font-bold" : ""
          }`}
        >
          Event
        </button>
        <button
          onClick={() => scrollTo("tambah-event")}
          className={`hover:text-emerald-500 transition-colors ${
            activeSection === "tambah-event" ? "text-emerald-600 font-bold" : ""
          }`}
        >
          Buat Event
        </button>
        <button
          onClick={() => scrollTo("tentang")}
          className={`hover:text-emerald-500 transition-colors ${
            activeSection === "tentang" ? "text-emerald-600 font-bold" : ""
          }`}
        >
          Tentang
        </button>
        <button
          onClick={onLoginClick}
          className="ml-2 px-6 py-2.5 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all transform hover:scale-105 shadow-md"
        >
          Masuk
        </button>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="snap-start bg-slate-900 text-slate-400 py-16 px-6 lg:px-20 text-sm min-h-[50vh] flex flex-col justify-center">
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
      <div>
        <h3 className="text-3xl font-black tracking-tighter text-white mb-4 flex items-center gap-2">
          <svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.333 14.667a4.66 4.66 0 0 0-1.815-3.642l-4.524-3.619a1.334 1.334 0 0 0-1.66 0l-4.525 3.62A4.66 4.66 0 0 0 5 14.666v2.667A2.667 2.667 0 0 0 7.667 20h8.666A2.667 2.667 0 0 0 19.333 17.333v-2.666ZM12 4c.484 0 .968.163 1.365.488l6.398 5.118A2.666 2.666 0 0 1 20.803 11.69h1.864a1.333 1.333 0 0 0 .83-2.373L12.83 1.854a1.332 1.332 0 0 0-1.66 0L.503 9.317a1.333 1.333 0 0 0 .83 2.373h1.864a2.664 2.664 0 0 1 1.04-2.083l6.398-5.118A2.164 2.164 0 0 1 12 4Z" />
          </svg>
          TourRest.
        </h3>
        <p className="leading-relaxed">
          Platform all-in-one untuk liburanmu. Temukan event seru dan pesan penginapan nyaman dalam satu sentuhan.
        </p>
      </div>
      {/* ... (Footer content remains same) ... */}
      <div>
        <h4 className="text-white font-bold mb-6 text-lg">Layanan</h4>
        <ul className="space-y-3">
          <li><a href="#" className="hover:text-emerald-400 transition-colors">Booking Hotel & Vila</a></li>
          <li><a href="#" className="hover:text-emerald-400 transition-colors">Cari Tiket Event</a></li>
          <li><a href="#" className="hover:text-emerald-400 transition-colors">Daftarkan Event Anda</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 text-lg">Perusahaan</h4>
        <ul className="space-y-3">
          <li><a href="#" className="hover:text-emerald-400 transition-colors">Tentang TourRest</a></li>
          <li><a href="#" className="hover:text-emerald-400 transition-colors">Karir</a></li>
          <li><a href="#" className="hover:text-emerald-400 transition-colors">Pusat Bantuan</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 text-lg">Buletin Rahasia</h4>
        <div className="flex bg-slate-800 rounded-full overflow-hidden p-1 border border-slate-700 focus-within:border-emerald-500 transition-colors">
          <input type="email" placeholder="Email Anda" className="bg-transparent px-4 py-2 w-full focus:outline-none text-white" />
          <button className="bg-emerald-500 text-slate-900 px-6 py-2 rounded-full font-bold hover:bg-emerald-400 transition-colors">Kirim</button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto w-full border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p>&copy; 2026 TourRest. Hak cipta dilindungi undang-undang.</p>
    </div>
  </footer>
);

const Home = ({ id }: { id: string }) => {
  const [layanan, setLayanan] = useState("Hotel");
  const [lokasi, setLokasi] = useState("Bali");

  return (
    <section
      id={id}
      className="snap-start w-full min-h-screen relative flex flex-col items-center justify-center text-center bg-slate-900 text-white overflow-hidden pt-20"
    >
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-pulse"></div>
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-teal-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"></div>

      <h1 className="text-5xl md:text-7xl font-light mb-12 z-10 tracking-tight">
        Satu aplikasi untuk <span className="font-bold">Tour & Rest.</span>
      </h1>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-12 rounded-[2rem] shadow-2xl max-w-4xl z-10 w-full mx-4 transition-all hover:bg-white/10">
        <h2 className="text-2xl md:text-4xl font-light leading-relaxed md:leading-loose">
          Aku sedang mencari{" "}
          <select
            className="bg-transparent border-b-2 border-emerald-400 text-emerald-400 font-bold focus:outline-none cursor-pointer pb-1 appearance-none text-center"
            value={layanan}
            onChange={(e) => setLayanan(e.target.value)}
          >
            <option className="bg-slate-900 text-white">Hotel</option>
            <option className="bg-slate-900 text-white">Event Seru</option>
          </select>{" "}
          terbaik yang ada di{" "}
          <select
            className="bg-transparent border-b-2 border-emerald-400 text-emerald-400 font-bold focus:outline-none cursor-pointer pb-1 appearance-none text-center"
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
          >
            <option className="bg-slate-900 text-white">Bali</option>
            <option className="bg-slate-900 text-white">Lombok</option>
            <option className="bg-slate-900 text-white">Yogyakarta</option>
            <option className="bg-slate-900 text-white">Jakarta</option>
          </select>
          .
        </h2>
        <button className="mt-12 px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 text-lg font-bold rounded-full transition-all transform hover:scale-105 hover:-translate-y-1 shadow-[0_10px_20px_rgba(16,185,129,0.3)] w-full md:w-auto">
          Cari Sekarang
        </button>
      </div>
    </section>
  );
};

const Destinasi = ({ id }: { id: string }) => {
  const destinations = [
    {
      id: 1,
      name: "Seminyak Vibes Resort",
      loc: "Bali, Indonesia",
      price: "Rp 1.2M",
      rating: "4.8",
      img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      name: "Rinjani Basecamp Tent",
      loc: "Lombok, NTB",
      price: "Rp 800k",
      rating: "4.9",
      img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      name: "Malioboro Heritage",
      loc: "Yogyakarta",
      price: "Rp 650k",
      rating: "4.7",
      img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section id={id} className="snap-start min-h-screen flex flex-col justify-center py-24 px-6 lg:px-20 max-w-7xl mx-auto w-full">
      <div className="text-center md:text-left mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
          Katalog <span className="text-emerald-500">Hotel</span>
        </h1>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl">
          Temukan penginapan terbaik untuk istirahat setelah seharian menghadiri event.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest) => (
          <div key={dest.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-slate-900 text-sm font-bold px-3 py-1.5 rounded-full shadow-sm">
                {dest.price} <span className="font-normal text-xs text-slate-500">/mlm</span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-900 leading-tight">{dest.name}</h3>
                <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md text-sm font-bold">★ {dest.rating}</div>
              </div>
              <p className="text-slate-500 text-sm flex items-center gap-1 mb-6">📍 {dest.loc}</p>
              <button className="mt-auto w-full py-3 bg-slate-50 hover:bg-emerald-500 hover:text-white text-slate-700 font-bold rounded-xl transition-colors border border-slate-200">
                Pesan Kamar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const EventList = ({ id }: { id: string }) => {
  const events = [
    {
      id: 1,
      name: "We The Fest 2026",
      loc: "GBK, Jakarta",
      date: "19-21 Juli 2026",
      price: "Mulai Rp 1.5jt",
      type: "Festival Musik",
      img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      name: "Ubud Food Festival",
      loc: "Ubud, Bali",
      date: "5 Juni 2026",
      price: "Mulai Rp 250k",
      type: "Kuliner",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      name: "Jogja Art Weeks",
      loc: "Yogyakarta",
      date: "10 Agustus 2026",
      price: "Gratis",
      type: "Seni & Budaya",
      img: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section id={id} className="snap-start min-h-screen flex flex-col justify-center py-24 px-6 lg:px-20 max-w-7xl mx-auto w-full">
      <div className="text-center md:text-left mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
          Eksplorasi <span className="text-purple-500">Event</span>
        </h1>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl">
          Cari acara hiburan, konser, pameran seni, hingga festival kuliner terdekat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((ev) => (
          <div key={ev.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col relative">
            <div className="absolute top-4 left-4 z-10 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">{ev.type}</div>
            <div className="h-64 overflow-hidden relative">
              <img src={ev.img} alt={ev.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-3">{ev.name}</h3>
              <div className="space-y-2 mb-6">
                <p className="text-slate-500 text-sm flex items-center gap-2">📅 {ev.date}</p>
                <p className="text-slate-500 text-sm flex items-center gap-2">📍 {ev.loc}</p>
                <p className="text-slate-800 font-bold text-md mt-2">{ev.price}</p>
              </div>
              <button className="mt-auto w-full py-3 bg-purple-50 hover:bg-purple-600 hover:text-white text-purple-700 font-bold rounded-xl transition-colors border border-purple-200">
                Beli Tiket
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const TambahEvent = ({ id }: { id: string }) => (
  <section id={id} className="snap-start min-h-screen flex items-center justify-center py-24 px-6 lg:px-20 w-full">
    <div className="bg-white w-full max-w-4xl rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-black text-slate-900 mb-4">
          Buat <span className="text-emerald-500">Event</span> Baru
        </h2>
        <p className="text-slate-500">Punya acara keren? Daftarkan event-mu di TourRest dan raih ribuan audiens.</p>
      </div>

      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Event berhasil ditambahkan!"); }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Nama Event</label>
            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all font-medium" placeholder="Contoh: Indie Music Fest" required />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Kategori Event</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all font-medium text-slate-700">
              <option>Konser & Musik</option>
              <option>Pameran & Seni</option>
              <option>Festival Kuliner</option>
            </select>
          </div>
        </div>
        <button type="submit" className="w-full bg-emerald-500 text-slate-900 font-bold text-lg py-4 rounded-2xl hover:bg-emerald-400 transition-all transform hover:-translate-y-1 shadow-lg mt-8">
          Submit Event
        </button>
      </form>
    </div>
  </section>
);

const Tentang = ({ id }: { id: string }) => (
  <section id={id} className="snap-start min-h-screen relative flex flex-col justify-center w-full bg-slate-900 overflow-hidden">
    {/* PARALLAX EFFECT: bg-fixed and bg-cover keep the image stationary while scrolling */}
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center bg-fixed opacity-30 mix-blend-overlay"></div>
    
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center w-full">
      <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight mb-8">
        Lebih dari sekadar <br />
        <span className="font-bold text-emerald-400">Pemesanan.</span>
      </h1>
      
      <div className="bg-white/10 backdrop-blur-md p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-white/20 text-center">
        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-12">
          Sejak 2026, <strong>TourRest</strong> hadir dengan sebuah misi:{" "}
          <strong className="text-white font-bold">menyatukan pengalaman menginap (Rest) dan hiburan (Tour).</strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/20 pt-12">
          <div><h4 className="text-5xl font-black text-emerald-400 mb-2">500+</h4><p className="text-slate-300 font-medium">Hotel & Event</p></div>
          <div><h4 className="text-5xl font-black text-emerald-400 mb-2">50k</h4><p className="text-slate-300 font-medium">Pengguna Aktif</p></div>
          <div><h4 className="text-5xl font-black text-emerald-400 mb-2">4.9/5</h4><p className="text-slate-300 font-medium">Rating Kepuasan</p></div>
        </div>
      </div>
    </div>
  </section>
);

const Login = ({ onBack }: { onBack: () => void }) => (
  <div className="fixed inset-0 z-[100] animate-in slide-in-from-right-8 duration-500 flex bg-white h-screen w-full">
    <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-20 relative h-full overflow-y-auto">
      <button onClick={onBack} className="absolute top-8 left-8 text-slate-400 hover:text-slate-900 font-medium flex items-center gap-2 px-4 py-2 rounded-full hover:bg-slate-50 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg> Kembali
      </button>

      <div className="w-full max-w-md">
        <div className="mb-10 text-center lg:text-left">
          <div className="text-emerald-500 mb-6 flex justify-center lg:justify-start">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M19.333 14.667a4.66 4.66 0 0 0-1.815-3.642l-4.524-3.619a1.334 1.334 0 0 0-1.66 0l-4.525 3.62A4.66 4.66 0 0 0 5 14.666v2.667A2.667 2.667 0 0 0 7.667 20h8.666A2.667 2.667 0 0 0 19.333 17.333v-2.666ZM12 4c.484 0 .968.163 1.365.488l6.398 5.118A2.666 2.666 0 0 1 20.803 11.69h1.864a1.333 1.333 0 0 0 .83-2.373L12.83 1.854a1.332 1.332 0 0 0-1.66 0L.503 9.317a1.333 1.333 0 0 0 .83 2.373h1.864a2.664 2.664 0 0 1 1.04-2.083l6.398-5.118A2.164 2.164 0 0 1 12 4Z" /></svg>
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">Selamat Datang.</h2>
          <p className="text-slate-500 text-lg">Masuk untuk mengelola tiket event dan booking hotelmu.</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onBack(); }}>
          <div><label className="block text-sm font-bold text-slate-700 mb-2">Email</label><input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500" placeholder="halo@email.com" required /></div>
          <div><label className="block text-sm font-bold text-slate-700 mb-2">Password</label><input type="password" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500" placeholder="••••••••" required /></div>
          <button type="submit" className="w-full bg-slate-900 text-white font-bold text-lg py-4 rounded-2xl hover:bg-slate-800 transition-all mt-4">Masuk ke Akun</button>
        </form>
      </div>
    </div>

    <div className="hidden lg:block w-1/2 bg-slate-900 relative overflow-hidden h-full">
      <img src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=1200" alt="Login Background" className="w-full h-full object-cover opacity-60" />
    </div>
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showLogin, setShowLogin] = useState(false);

  // Intersection Observer untuk deteksi section mana yang sedang dilihat
  useEffect(() => {
    if (showLogin) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger saat section terlihat 50%
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [showLogin]);

  return (
    <div className="font-sans text-slate-800 bg-slate-50 selection:bg-emerald-500 selection:text-white">
      {showLogin ? (
        <Login onBack={() => setShowLogin(false)} />
      ) : (
        <>
          <Navbar activeSection={activeSection} onLoginClick={() => setShowLogin(true)} />
          
          {/* Scroll Snap Container Utama */}
          <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            <Home id="home" />
            <Destinasi id="destinasi" />
            <EventList id="event" />
            <TambahEvent id="tambah-event" />
            <Tentang id="tentang" />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
}