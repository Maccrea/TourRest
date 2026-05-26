"use client";
import React, { useState } from "react";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({ currentPage, setCurrentPage }: NavbarProps) => (
  <nav className="flex justify-between items-center p-6 lg:px-20 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
    <div
      className="text-2xl font-black tracking-tighter text-emerald-600 cursor-pointer flex items-center gap-2"
      onClick={() => setCurrentPage("home")}
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
        onClick={() => setCurrentPage("destinasi")}
        className={`hover:text-emerald-500 transition-colors ${currentPage === "destinasi" ? "text-emerald-600 font-bold" : ""}`}
      >
        Hotel
      </button>
      <button
        onClick={() => setCurrentPage("event")}
        className={`hover:text-emerald-500 transition-colors ${currentPage === "event" ? "text-emerald-600 font-bold" : ""}`}
      >
        Event
      </button>
      <button
        onClick={() => setCurrentPage("tambah-event")}
        className={`hover:text-emerald-500 transition-colors ${currentPage === "tambah-event" ? "text-emerald-600 font-bold" : ""}`}
      >
        Buat Event
      </button>
      <button
        onClick={() => setCurrentPage("tentang")}
        className={`hover:text-emerald-500 transition-colors ${currentPage === "tentang" ? "text-emerald-600 font-bold" : ""}`}
      >
        Tentang
      </button>
      <button
        onClick={() => setCurrentPage("login")}
        className="ml-2 px-6 py-2.5 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all transform hover:scale-105 shadow-md"
      >
        Masuk
      </button>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-16 px-6 lg:px-20 text-sm">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
      <div>
        <h3 className="text-3xl font-black tracking-tighter text-white mb-4 flex items-center gap-2">
          <svg
            className="w-8 h-8 text-emerald-500"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.333 14.667a4.66 4.66 0 0 0-1.815-3.642l-4.524-3.619a1.334 1.334 0 0 0-1.66 0l-4.525 3.62A4.66 4.66 0 0 0 5 14.666v2.667A2.667 2.667 0 0 0 7.667 20h8.666A2.667 2.667 0 0 0 19.333 17.333v-2.666ZM12 4c.484 0 .968.163 1.365.488l6.398 5.118A2.666 2.666 0 0 1 20.803 11.69h1.864a1.333 1.333 0 0 0 .83-2.373L12.83 1.854a1.332 1.332 0 0 0-1.66 0L.503 9.317a1.333 1.333 0 0 0 .83 2.373h1.864a2.664 2.664 0 0 1 1.04-2.083l6.398-5.118A2.164 2.164 0 0 1 12 4Z" />
          </svg>
          TourRest.
        </h3>
        <p className="leading-relaxed">
          Platform all-in-one untuk liburanmu. Temukan event seru dan pesan
          penginapan nyaman dalam satu sentuhan.
        </p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 text-lg">Layanan</h4>
        <ul className="space-y-3">
          <li>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Booking Hotel & Vila
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Cari Tiket Event
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Daftarkan Event Anda
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Promo Spesial
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 text-lg">Perusahaan</h4>
        <ul className="space-y-3">
          <li>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Tentang TourRest
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Karir
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Syarat & Ketentuan
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Pusat Bantuan
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 text-lg">Buletin Rahasia</h4>
        <p className="mb-4 text-sm">
          Dapatkan info event terbaru & diskon hotel hingga 50%.
        </p>
        <div className="flex bg-slate-800 rounded-full overflow-hidden p-1 border border-slate-700 focus-within:border-emerald-500 transition-colors">
          <input
            type="email"
            placeholder="Email Anda"
            className="bg-transparent px-4 py-2 w-full focus:outline-none text-white"
          />
          <button className="bg-emerald-500 text-slate-900 px-6 py-2 rounded-full font-bold hover:bg-emerald-400 transition-colors">
            Kirim
          </button>
        </div>
      </div>
    </div>
    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p>&copy; 2026 TourRest. Hak cipta dilindungi undang-undang.</p>
      <div className="flex gap-6">
        <span className="cursor-pointer hover:text-emerald-400 transition-colors font-medium">
          Instagram
        </span>
        <span className="cursor-pointer hover:text-emerald-400 transition-colors font-medium">
          Twitter
        </span>
        <span className="cursor-pointer hover:text-emerald-400 transition-colors font-medium">
          TikTok
        </span>
      </div>
    </div>
  </footer>
);

const Home = () => {
  const [layanan, setLayanan] = useState("Hotel");
  const [lokasi, setLokasi] = useState("Bali");

  return (
    <div className="animate-in fade-in duration-500 slide-in-from-bottom-4">
      <section className="relative pt-24 pb-32 px-4 flex flex-col items-center justify-center text-center bg-slate-900 text-white overflow-hidden min-h-[80vh]">
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

      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-2">
              Trending Minggu Ini
            </h2>
            <p className="text-slate-500 text-lg">
              Hotel dan Event yang paling banyak dicari saat ini.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 md:gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=800"
              alt="Resort"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
              <div className="flex justify-between items-end">
                <div>
                  <span className="px-3 py-1 bg-emerald-500 text-slate-900 text-xs font-bold uppercase rounded-full tracking-wider mb-3 inline-block shadow-lg">
                    Hotel • Best Seller
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">
                    Ubud Tranquility Resort
                  </h3>
                  <p className="text-slate-300 font-medium">Bali, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
            <img
              src="/Asset/nio.jpeg"
              alt="Event"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <span className="px-2 py-1 bg-purple-500 text-white text-xs font-bold uppercase rounded-md mb-2 inline-block">
                Festival Musik
              </span>
              <h3 className="text-2xl font-bold mb-1">
                Jakarta Sound Fest 2026
              </h3>
              <p className="text-sm text-slate-300">
                GBK Senayan • 12 Agustus 2026
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg bg-slate-900 flex flex-col justify-center items-center text-white p-8 border border-slate-800 hover:border-emerald-500 transition-colors">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-black mb-2 text-emerald-400 text-center">
              Bundle Tour & Rest
            </h3>
            <p className="text-center font-medium text-slate-400 text-sm">
              Diskon 30% untuk pemesanan Hotel + Tiket Event.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600"
              alt="Exhibition"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full">
              <span className="px-2 py-1 bg-blue-500 text-white text-xs font-bold uppercase rounded-md mb-2 inline-block">
                Pameran Seni
              </span>
              <h3 className="text-xl font-bold tracking-wide">ArtJog 2026</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Destinasi = () => {
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
    <div className="animate-in fade-in duration-500 min-h-screen py-16 px-6 lg:px-20 max-w-7xl mx-auto">
      <div className="text-center md:text-left mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
          Katalog <span className="text-emerald-500">Hotel</span>
        </h1>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl">
          Temukan penginapan terbaik untuk istirahat setelah seharian menghadiri
          event.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col"
          >
            <div className="h-64 overflow-hidden relative">
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-slate-900 text-sm font-bold px-3 py-1.5 rounded-full shadow-sm">
                {dest.price}{" "}
                <span className="font-normal text-xs text-slate-500">/mlm</span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-900 leading-tight">
                  {dest.name}
                </h3>
                <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md text-sm font-bold">
                  ★ {dest.rating}
                </div>
              </div>
              <p className="text-slate-500 text-sm flex items-center gap-1 mb-6">
                📍 {dest.loc}
              </p>
              <button className="mt-auto w-full py-3 bg-slate-50 hover:bg-emerald-500 hover:text-white text-slate-700 font-bold rounded-xl transition-colors border border-slate-200">
                Pesan Kamar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const EventList = () => {
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
    <div className="animate-in fade-in duration-500 min-h-screen py-16 px-6 lg:px-20 max-w-7xl mx-auto">
      <div className="text-center md:text-left mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
          Eksplorasi <span className="text-purple-500">Event</span>
        </h1>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl">
          Cari acara hiburan, konser, pameran seni, hingga festival kuliner
          terdekat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((ev) => (
          <div
            key={ev.id}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col relative"
          >
            <div className="absolute top-4 left-4 z-10 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              {ev.type}
            </div>
            <div className="h-64 overflow-hidden relative">
              <img
                src={ev.img}
                alt={ev.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-3">
                {ev.name}
              </h3>
              <div className="space-y-2 mb-6">
                <p className="text-slate-500 text-sm flex items-center gap-2">
                  📅 {ev.date}
                </p>
                <p className="text-slate-500 text-sm flex items-center gap-2">
                  📍 {ev.loc}
                </p>
                <p className="text-slate-800 font-bold text-md mt-2">
                  {ev.price}
                </p>
              </div>
              <button className="mt-auto w-full py-3 bg-purple-50 hover:bg-purple-600 hover:text-white text-purple-700 font-bold rounded-xl transition-colors border border-purple-200">
                Beli Tiket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TambahEvent = () => (
  <div className="animate-in slide-in-from-bottom-8 duration-500 min-h-screen py-16 px-6 lg:px-20 max-w-4xl mx-auto">
    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-black text-slate-900 mb-4">
          Buat <span className="text-emerald-500">Event</span> Baru
        </h2>
        <p className="text-slate-500">
          Punya acara keren? Daftarkan event-mu di TourRest dan raih ribuan
          audiens.
        </p>
      </div>

      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Event berhasil ditambahkan!");
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Nama Event
            </label>
            <input
              type="text"
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all font-medium"
              placeholder="Contoh: Indie Music Fest"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Kategori Event
            </label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all font-medium text-slate-700">
              <option>Konser & Musik</option>
              <option>Pameran & Seni</option>
              <option>Festival Kuliner</option>
              <option>Olahraga</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Tanggal Pelaksanaan
            </label>
            <input
              type="date"
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all font-medium text-slate-700"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Lokasi / Venue
            </label>
            <input
              type="text"
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all font-medium"
              placeholder="Nama Gedung / Kota"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            Deskripsi Event
          </label>
          <textarea
            rows={4}
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all font-medium"
            placeholder="Ceritakan detail menarik tentang event ini..."
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            Poster Event (URL)
          </label>
          <input
            type="url"
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all font-medium"
            placeholder="https://..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 text-slate-900 font-bold text-lg py-4 rounded-2xl hover:bg-emerald-400 transition-all transform hover:-translate-y-1 shadow-lg mt-8"
        >
          Submit Event
        </button>
      </form>
    </div>
  </div>
);

const Tentang = () => (
  <div className="animate-in fade-in duration-700 min-h-screen">
    <div className="h-[60vh] bg-slate-900 relative flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200"
        alt="About Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight mb-4">
          Lebih dari sekadar <br />
          <span className="font-bold text-emerald-400">Pemesanan.</span>
        </h1>
        <p className="text-slate-300 text-xl font-light">
          Membangun ekosistem pariwisata dan hiburan terpadu.
        </p>
      </div>
    </div>

    <div className="max-w-4xl mx-auto pb-20 px-6 -mt-20 relative z-20">
      <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-xl border border-slate-100 text-center">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z" />
          </svg>
        </div>
        <p className="text-2xl text-slate-600 leading-relaxed font-light mb-12">
          Sejak 2026, <strong>TourRest</strong> hadir dengan sebuah misi:{" "}
          <strong className="text-slate-900 font-bold">
            menyatukan pengalaman menginap (Rest) dan hiburan (Tour).
          </strong>{" "}
          Kami memahami bahwa perjalanan terbaik tidak hanya soal tempat tidur
          yang nyaman, tetapi juga momen tak terlupakan di berbagai event
          spektakuler.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200 pt-12">
          <div className="p-4">
            <h4 className="text-5xl font-black text-emerald-500 mb-2">500+</h4>
            <p className="text-slate-500 font-medium">Hotel & Event</p>
          </div>
          <div className="p-4">
            <h4 className="text-5xl font-black text-emerald-500 mb-2">50k</h4>
            <p className="text-slate-500 font-medium">Pengguna Aktif</p>
          </div>
          <div className="p-4">
            <h4 className="text-5xl font-black text-emerald-500 mb-2">4.9/5</h4>
            <p className="text-slate-500 font-medium">Rating Kepuasan</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface LoginProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const Login = ({ setCurrentPage }: LoginProps) => (
  <div className="animate-in slide-in-from-right-8 duration-500 min-h-screen flex bg-white">
    <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-20 relative">
      <button
        onClick={() => setCurrentPage("home")}
        className="absolute top-8 left-8 text-slate-400 hover:text-slate-900 font-medium flex items-center gap-2 px-4 py-2 rounded-full hover:bg-slate-50 transition-colors"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Kembali
      </button>

      <div className="w-full max-w-md">
        <div className="mb-10 text-center lg:text-left">
          <div className="text-emerald-500 mb-6 flex justify-center lg:justify-start">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.333 14.667a4.66 4.66 0 0 0-1.815-3.642l-4.524-3.619a1.334 1.334 0 0 0-1.66 0l-4.525 3.62A4.66 4.66 0 0 0 5 14.666v2.667A2.667 2.667 0 0 0 7.667 20h8.666A2.667 2.667 0 0 0 19.333 17.333v-2.666ZM12 4c.484 0 .968.163 1.365.488l6.398 5.118A2.666 2.666 0 0 1 20.803 11.69h1.864a1.333 1.333 0 0 0 .83-2.373L12.83 1.854a1.332 1.332 0 0 0-1.66 0L.503 9.317a1.333 1.333 0 0 0 .83 2.373h1.864a2.664 2.664 0 0 1 1.04-2.083l6.398-5.118A2.164 2.164 0 0 1 12 4Z" />
            </svg>
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">
            Selamat Datang.
          </h2>
          <p className="text-slate-500 text-lg">
            Masuk untuk mengelola tiket event dan booking hotelmu.
          </p>
        </div>

        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            setCurrentPage("home");
          }}
        >
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all font-medium"
              placeholder="halo@email.com"
              required
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-bold text-slate-700">
                Password
              </label>
              <a
                href="#"
                className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Lupa password?
              </a>
            </div>
            <input
              type="password"
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all font-medium"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-slate-900 text-white font-bold text-lg py-4 rounded-2xl hover:bg-slate-800 transition-all transform hover:scale-[1.02] shadow-lg mt-4"
          >
            Masuk ke Akun
          </button>
        </form>

        <div className="mt-8 flex items-center gap-4">
          <div className="h-px bg-slate-200 flex-1"></div>
          <span className="text-sm font-medium text-slate-400">
            Atau masuk dengan
          </span>
          <div className="h-px bg-slate-200 flex-1"></div>
        </div>

        <button className="w-full mt-8 bg-white border border-slate-200 text-slate-700 font-bold text-base py-4 rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-6 h-6"
          />
          Google
        </button>
      </div>
    </div>

    <div className="hidden lg:block w-1/2 bg-slate-900 relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=1200"
        alt="Login Background"
        className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

      <div className="absolute bottom-20 left-20 right-20 text-white bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
        <h3 className="text-2xl font-light leading-snug mb-6">
          "TourRest memudahkan saya menonton konser di luar kota tanpa pusing
          mikirin hotel karena semuanya bisa dipesan di satu tempat."
        </h3>
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
            className="w-12 h-12 rounded-full border-2 border-emerald-500"
            alt="User"
          />
          <div>
            <p className="font-bold">Sarah Wijaya</p>
            <p className="text-sm text-slate-300">Event Goer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50 selection:bg-emerald-500 selection:text-white">
      {currentPage !== "login" && (
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}

      <main>
        {currentPage === "home" && <Home />}
        {currentPage === "destinasi" && <Destinasi />}
        {currentPage === "event" && <EventList />}
        {currentPage === "tambah-event" && <TambahEvent />}
        {currentPage === "tentang" && <Tentang />}
        {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
      </main>

      {currentPage !== "login" && <Footer />}
    </div>
  );
}