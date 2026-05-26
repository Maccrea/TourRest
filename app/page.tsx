"use client";

import React, { useState } from 'react';

// --- KOMPONEN BERSAMA (SHARED COMPONENTS) ---

const Navbar = ({ currentPage, setCurrentPage }) => (
  <nav className="flex justify-between items-center p-6 lg:px-20 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
    <div 
      className="text-2xl font-black tracking-tighter text-emerald-600 cursor-pointer flex items-center gap-2"
      onClick={() => setCurrentPage('home')}
    >
      {/* Icon baru untuk Tourrest */}
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      Tourrest.
    </div>
    
    <div className="md:hidden text-slate-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
    </div>

    <div className="hidden md:flex gap-8 font-medium text-slate-600 items-center">
      <button onClick={() => setCurrentPage('destinasi')} className={`hover:text-emerald-500 transition-colors ${currentPage === 'destinasi' ? 'text-emerald-600 font-bold' : ''}`}>Destinasi</button>
      <button onClick={() => setCurrentPage('event')} className={`hover:text-emerald-500 transition-colors ${currentPage === 'event' ? 'text-emerald-600 font-bold' : ''}`}>Event</button>
      <button onClick={() => setCurrentPage('tentang')} className={`hover:text-emerald-500 transition-colors ${currentPage === 'tentang' ? 'text-emerald-600 font-bold' : ''}`}>Tentang</button>
      <button 
        onClick={() => setCurrentPage('login')}
        className="px-6 py-2.5 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all transform hover:scale-105 shadow-md"
      >
        Masuk / Daftar
      </button>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-16 px-6 lg:px-20 text-sm">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
      <div>
        <h3 className="text-3xl font-black tracking-tighter text-white mb-4 flex items-center gap-2">
           <svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
           Tourrest.
        </h3>
        <p className="leading-relaxed">Menemukan kembali makna liburan dengan pengalaman menginap dan event yang tak terlupakan.</p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 text-lg">Eksplorasi</h4>
        <ul className="space-y-3">
          <li><a href="#" className="hover:text-emerald-400 transition-colors">Vila & Resort</a></li>
          <li><a href="#" className="hover:text-emerald-400 transition-colors">Tiket Event</a></li>
          <li><a href="#" className="hover:text-emerald-400 transition-colors">Sewa Venue</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 text-lg">Perusahaan</h4>
        <ul className="space-y-3">
          <li><a href="#" className="hover:text-emerald-400 transition-colors">Tentang Kami</a></li>
          <li><a href="#" className="hover:text-emerald-400 transition-colors">Syarat & Ketentuan</a></li>
          <li><a href="#" className="hover:text-emerald-400 transition-colors">Kebijakan Privasi</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 text-lg">Buletin Rahasia</h4>
        <div className="flex bg-slate-800 rounded-full overflow-hidden p-1 border border-slate-700 focus-within:border-emerald-500 transition-colors mt-4">
          <input type="email" placeholder="Email Anda" className="bg-transparent px-4 py-2 w-full focus:outline-none text-white" />
          <button className="bg-emerald-500 text-slate-900 px-6 py-2 rounded-full font-bold hover:bg-emerald-400 transition-colors">Kirim</button>
        </div>
      </div>
    </div>
  </footer>
);

const Home = () => {
  const [lokasi, setLokasi] = useState('Bali');
  const [malam, setMalam] = useState(2);
  const [tamu, setTamu] = useState(2);

  return (
    <div className="animate-in fade-in duration-500 slide-in-from-bottom-4">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-4 flex flex-col items-center justify-center text-center bg-slate-900 text-white overflow-hidden min-h-[80vh]">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-teal-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"></div>

        <span className="px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-semibold text-sm mb-8 z-10">
          Hotel & Event Management by Tourrest ✨
        </span>
        <h1 className="text-5xl md:text-7xl font-light mb-12 z-10 tracking-tight">
          Rencanakan pelarian <span className="font-bold">sempurnamu.</span>
        </h1>
        
        {/* Conversational Search Box */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-12 rounded-[2rem] shadow-2xl max-w-4xl z-10 w-full mx-4 transition-all hover:bg-white/10">
          <h2 className="text-2xl md:text-4xl font-light leading-relaxed md:leading-loose">
            Aku butuh tempat menginap di{' '}
            <select 
              className="bg-transparent border-b-2 border-emerald-400 text-emerald-400 font-bold focus:outline-none cursor-pointer pb-1 appearance-none text-center"
              value={lokasi}
              onChange={(e) => setLokasi(e.target.value)}
            >
              <option className="bg-slate-900 text-white">Bali</option>
              <option className="bg-slate-900 text-white">Lombok</option>
              <option className="bg-slate-900 text-white">Yogyakarta</option>
              <option className="bg-slate-900 text-white">Bandung</option>
            </select>
            {' '}selama{' '}
            <input 
              type="number" 
              className="bg-transparent border-b-2 border-emerald-400 text-emerald-400 font-bold w-16 md:w-20 text-center focus:outline-none pb-1"
              value={malam}
              onChange={(e) => setMalam(Number(e.target.value))}
              min="1"
            />
            {' '}malam, untuk{' '}
            <input 
              type="number" 
              className="bg-transparent border-b-2 border-emerald-400 text-emerald-400 font-bold w-16 md:w-20 text-center focus:outline-none pb-1"
              value={tamu}
              onChange={(e) => setTamu(Number(e.target.value))}
              min="1"
            />
            {' '}orang.
          </h2>
          <button className="mt-12 px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 text-lg font-bold rounded-full transition-all transform hover:scale-105 hover:-translate-y-1 shadow-[0_10px_20px_rgba(16,185,129,0.3)] w-full md:w-auto">
            Cari Ketersediaan
          </button>
        </div>
      </section>

      {/* Bento Grid Layout - Sama seperti sebelumnya */}
      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-2">
              Pilihan Favorit
            </h2>
            <p className="text-slate-500 text-lg">Destinasi yang paling banyak dipesan minggu ini.</p>
          </div>
          <button className="font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-2 group">
            Lihat Semua 
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 md:gap-6 h-auto md:h-[600px]">
          {/* Box 1 (Ganti src gambar di bawah ini dengan fotomu kalau mau: "/Asset/nio.jpeg") */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
            <img src="/Asset/nio.jpeg" alt="Resort" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542314831-c6a4d27df08f?auto=format&fit=crop&q=80&w=1000' }}/>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
              <span className="px-3 py-1 bg-emerald-500 text-slate-900 text-xs font-bold uppercase rounded-full tracking-wider mb-3 inline-block shadow-lg">Best Seller</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Ubud Tranquility Resort</h3>
              <p className="text-slate-300 font-medium">Bali, Indonesia • Mulai Rp 1.5M/mlm</p>
            </div>
          </div>
          
          <div className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
            <img src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=800" alt="Villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-1">Gili Ocean Villa</h3>
              <p className="text-sm text-slate-300">Lombok • Pemandangan Laut Langsung</p>
            </div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg bg-slate-900 flex flex-col justify-center items-center text-white p-8 border border-slate-800 hover:border-emerald-500 transition-colors">
            <h3 className="text-4xl font-black mb-2 text-emerald-400">Flash Sale</h3>
            <p className="text-center font-medium text-slate-400 text-sm">Diskon 30% malam ini.</p>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600" alt="City Hotel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full">
              <h3 className="text-2xl font-bold tracking-wide">City Break</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Destinasi = () => {
  return (
    <div className="animate-in fade-in duration-500 min-h-screen py-16 px-6 lg:px-20 max-w-7xl mx-auto">
      <div className="text-center md:text-left mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">Eksplorasi <span className="text-emerald-500">Destinasi</span></h1>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl">Temukan properti eksklusif yang dikurasi khusus oleh Tourrest.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white rounded-3xl h-80 overflow-hidden shadow-sm border border-slate-100 flex flex-col">
            <div className="flex-1 bg-slate-200 animate-pulse"></div>
            <div className="p-6 h-28 bg-white flex flex-col justify-center">
              <div className="h-4 bg-slate-200 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-slate-100 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- KOMPONEN BARU: EVENT ---
const Event = () => {
  const events = [
    { id: 1, title: 'Ubud Food Festival 2026', date: '12 - 14 Agustus 2026', venue: 'Ubud Tranquility Resort', type: 'Festival', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'Beachfront Wedding Expo', date: '20 September 2026', venue: 'Gili Ocean Villa', type: 'Exhibition', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Tech Nomads Conference', date: '05 Oktober 2026', venue: 'Bandung Convention Center', type: 'Conference', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="animate-in fade-in duration-500 min-h-screen py-16 px-6 lg:px-20 max-w-7xl mx-auto bg-slate-50">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">Acara & <span className="text-emerald-500">Venue</span></h1>
          <p className="text-slate-500 text-lg max-w-2xl">Lihat acara spektakuler yang akan datang, atau wujudkan event impianmu di venue kami.</p>
        </div>
        <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-emerald-500 hover:text-slate-900 transition-all shadow-xl transform hover:scale-105 whitespace-nowrap">
          + Buat Event Kamu
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {events.map((ev) => (
          <div key={ev.id} className="bg-white rounded-[2rem] overflow-hidden shadow-lg group">
            <div className="relative h-60 overflow-hidden">
              <img src={ev.img} alt={ev.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute top-4 left-4 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 shadow-sm uppercase tracking-wider">
                {ev.type}
              </div>
            </div>
            <div className="p-8">
              <p className="text-emerald-600 font-semibold text-sm mb-2">{ev.date}</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{ev.title}</h3>
              <p className="text-slate-500 flex items-center gap-2 text-sm mb-8">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {ev.venue}
              </p>
              <button className="w-full py-3 bg-slate-50 hover:bg-slate-900 hover:text-white text-slate-900 font-bold rounded-xl transition-colors border border-slate-200">
                Lihat Detail Tiket
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Banner Promosi Venue */}
      <div className="mt-20 relative rounded-[2.5rem] overflow-hidden bg-emerald-600 text-white shadow-2xl">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Butuh tempat untuk acara spesial?</h2>
            <p className="text-emerald-100 text-lg">Dari pernikahan tepi pantai hingga rapat perusahaan, Tourrest memiliki daftar venue eksklusif dengan fasilitas lengkap.</p>
          </div>
          <button className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-full hover:bg-slate-900 hover:text-white transition-all whitespace-nowrap shadow-lg">
            Konsultasi Venue
          </button>
        </div>
      </div>
    </div>
  );
};

const Tentang = () => (
  <div className="animate-in fade-in duration-700 min-h-screen flex items-center justify-center">
    <h1 className="text-4xl font-bold text-slate-400">Halaman Tentang Tourrest (WIP)</h1>
  </div>
);

const Login = ({ setCurrentPage }) => (
  <div className="animate-in slide-in-from-right-8 duration-500 min-h-screen flex items-center justify-center bg-slate-900 text-white">
    <div className="text-center">
      <h2 className="text-4xl font-black mb-4">Masuk ke Tourrest.</h2>
      <button onClick={() => setCurrentPage('home')} className="mt-8 px-6 py-2 bg-emerald-500 text-slate-900 font-bold rounded-full">Kembali ke Beranda</button>
    </div>
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50 selection:bg-emerald-500 selection:text-white">
      {currentPage !== 'login' && <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />}
      
      <main>
        {currentPage === 'home' && <Home />}
        {currentPage === 'destinasi' && <Destinasi />}
        {currentPage === 'event' && <Event />}  {/* Render Halaman Event Baru */}
        {currentPage === 'tentang' && <Tentang />}
        {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} />}
      </main>

      {currentPage !== 'login' && <Footer />}
    </div>
  );
}