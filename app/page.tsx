/* eslint-disable @next/next/no-img-element, jsx-a11y/anchor-is-valid */
"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Typewriter } from "react-simple-typewriter";


interface NavbarProps {
  activeSection: string;
  onLoginClick: () => void;
}

const AnimatedIllustration = ({ className = "" }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <motion.div
      style={{ y: yParallax }}
      className={className}
    >
      <motion.div
        animate={{ y: ["0%", "-5%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" baseProfile="tiny" className="drop-shadow-2xl" version="1" viewBox="300 150 550 570">
          <g id="wall"><path fill="#bb86fc" d="M674 333c0 2-2 4-4 4H553c-2 0-4-2-4-4V203c0-2 2-4 4-4h117c2 0 4 2 4 4v130z" /><path id="Layer_33" fill="#7348a7" d="M639 240c-4-4-10-4-13 0l-77 77v15l5 5h116c2 0 4-2 4-4v-58l-35-35z" /></g><g id="light"><circle id="bulb" cx="550" cy="230" r="9" fill="#c2c0c5" /><path fill="#52057B" d="M550 201l-27 29h55z" /></g><g id="Woman__x2F__Chair__x2F__Screen"><g id="backleg_1_"><path id="backlegpath" fill="#39065A" d="M651 521l47-90 24-16 12 11-29 44-46 56z" /><path fill="#BCBCBD" d="M639 549l20-23-8-5s-8 6-14 6-26-7-26-7v10l28 19z" /></g><g id="Chair_1_"><g id="legs_1_"><path fill="#34363E" d="M782 461l-65 36v-5l68-38v5z" /><path fill="#34363E" d="M726 459l65 36v-4l-65-37z" /><path fill="#52057B" d="M779 441l19 108 5 1-10-112zM729 440l-10 3-9 107h4l18-108z" /></g><g id="seat_1_"><path fill="#bb86fc" d="M804 360c15 0 18-2 19 20s-13 42-17 48-6 15-24 15h-70l-2-9s73 0 80-8 16-22 18-36 6-21 2-23-6-7-6-7z" /><path fill="#52057B" d="M796 359h8c7-1 13 2 12 17s-9 34-13 42-9 17-32 17h-64s16-8 35-8 22-11 26-21 11-28 13-37 6-10 15-10z" /><path id="womanshdow" fill="#413C69" d="M803 407c0-10-13-23-15-31s4-14 9-17h-4c-8 0-11 2-12 10l-5 17v3c3 8 6 24s-15 17-15 17l-5 5h9c22 0 27-9 31-17l1-11z" /></g></g><g id="back-arm"><path fill="#F68E5A" d="M737 386l48-55s-4-25-17-7-35 54-35 54l4 8z" /><path id="lowervackarm" fill="#F68E5A" d="M669 361c4 1 13 4 15 2s8-4 11-2l42 25v-15s-46-22-51-19l-17 9z" /></g><g id="Woman"><g id="Front_leg"><path id="leg" fill="#413C69" d="M737 435h-20s-2 1-1 2l26 78-11 1-42-74c-1-2-5-13 1-16l29-13 18 22z" /><path fill="#BCBCBD" d="M750 537c-1 1-17 13-23 13s-13 0-14-2c0-5 4-2 7-4s11-8 12-15l-2-15 11-2 7 21 2 4z" /></g><g id="hairback"><path id="shaded" fill="#585268" d="M809 308c11 4 11 23 2 32s-31-14-35-29-3-27 4-20c13 13 21 13 29 17z" /><path id="main" fill="#585268" d="M784 364c6-3 32-21 30-34s-18-16-26-29-21 2-13 11 11 33 7 36c-16 17 2 16 2 16z" /></g><g id="dress"><path fill="#c4c1f7" d="M755 315c-4 5-29 31-18 39s19 13 16 31-33 28-42 31l20 19h28c11 0 29-7 29-24s-7-19-7-27l5-21c1-4 3-32-2-39-8-10-17-19-29-9z" /></g><g id="womanhead"><g id="headbase"><path fill="#F89F71" d="M768 321c-3 2-9 8-11-1s-4-8-6-7-18-22-15-30 31-34 34-7-2 24 3 29 2 5 0 8l-5 8z" /><path fill="#F89F71" d="M733 281c-6 9 9 32 15 32 4 0 6-3 5-4-4-1-15-23-15-28 1-6-5 0-5 0z" /><path fill="#F89F71" d="M767 321c1-1 2-1 1-2l-3-5c-1-6-9-7-12-3l-1 1c2 0 4 1 5 8 2 8 7 4 10 1z" /></g><g id="hairbase"><path id="tophairmain" fill="#585268" d="M764 285c-7-7-13-2-28-2-8 0-23-12-13-15 8-3 5-12 16-17s22-4 32 7 13 33 14 38 5 8 9 13c0 0-4 14-9 12s-7 2-13-4-4-5-5-8 1-16-1-20l-2-4z" /><path id="botshadehar" fill="#585268" d="M767 297c-2 10-7 34 11 26 20-8-9 3-11-26z" /><path fill="#585268" d="M725 266c-7 4-13 5-12 9s9 8 25 8c-8-2-18-9-13-17z" /></g><g id="glasses_1_"><g id="glassshadow" fill="#F89F71"><path d="M760 281l-16 8 2 3 2 4 3-8c0-2 10-6 10-6l-1-1zM737 297c-1-3-3-3-3-3l5-3-2 6z" /></g><g id="galssbody" fill="#FFF"><path d="M762 278l-29 13-3 1v2h4l29-14-1-2" /><path d="M746 298c3-2 1-5 0-6-1-2-2-4-5-3-3 2-1 5 0 6s4 4 5 3zM732 294c2-1 4 1 5 3s2 3 0 5-4-1-5-3-2-3 0-5z" /></g></g></g><g id="Front_arm"><g id="lowerarm"><path fill="#F89F71" d="M751 386h-2c-5 0-36-13-39-14s-10-1-12 1l-6 7h-14l11-13c2-2 7-4 13-3l46 6s7 14 3 16z" /><path id="highlights" fill="#F68E5A" d="M702 365c-6-1-11 1-13 3l-11 12h7l8-8c4-5 14-7 14-7h-5z" /></g><path fill="#F89F71" d="M788 319c16 7 0 20-4 25l-25 33c-2 3-4 7-8 9l-3-16 19-41c4-8 10-15 21-10z" /><path fill="#F68E5A" d="M788 319c-11-5-17 2-21 10l-9 19s12-22 22-26c3-1 5-3 8-3z" /></g></g></g><g id="Laptop"><path fill="#86858B" d="M647 339h7c2 0 3 1 4 3l15 38h38s-1 6-10 6h-31l-23-47z" /></g><g id="Desk"><path fill="#52057B" d="M369 386h178v10H369zM547 386h220v10H547z" /><path fill="#e4d0fc" d="M548 396h9v154h-9z" /></g><g id="Man__x2F__chair__x2F__screen"><path id="chairbackbar" fill="#52057B" d="M368 468h10v76h-10z" /><path id="keyboard" fill="#D2D2D3" d="M507 380c3 0 4 2 1 4l-3 2h-55s4-6 9-6h48z" /><g id="man"><g id="man-body"><g id="legs"><g id="backleg"><path id="foot" fill="#BCBCBD" d="M365 513l18-4 6 12s-1 15 6 22l10 5c-1 2-18 2-20 2l-14-9c-6-6-10-22-6-28z" /><path id="bottombackleg" fill="#413C69" d="M384 509s45-10 45-16c0-4-7-7-6-10 5-9 24-13 30-3 5 8 0 27-9 29l-55 12-5-12z" /><path id="topbbackleg" fill="#413C69" d="M415 474l-26-34c1 0-10-11 12-11s33 4 40 10 14 53 11 60-21-4-28-14l-9-11z" /></g><g id="Front-leg"><path id="frontfoot" fill="#BCBCBD" d="M446 529v21l40-1 2-9s-12 1-20-3-9-8-9-8h-13z" /><g id="bot"><path fill="#39065A" d="M459 529c5-15 21-89 20-95s-8-18-18-8-19 0-18 26l3 77h13z" /><path id="shade_1_" fill="#39065A" d="M444 488c7-15 19-35 11-42-5-4-13-2-13-2l2 44z" /></g><g id="top"><path fill="#39065A" d="M410 408c19 3 62 9 67 18s0 14 0 20-11-2-23-2l-99-2c-7 0-12-4-9-18 7-39 64-16 64-16" /><path id="shade" fill="#39065A" d="M397 417c66 10 80 9 80 9s-6-14-70-18c-13 1-10 9-10 9z" /></g></g></g><g id="head"><g id="face"><path fill="#F89F71" d="M411 281c0-12-8-25-19-16s-21 23-18 31 2 24 2 24c0 9 25 18 23 0s6-10 9-10 2 0 2-5l1-24z" /><path id="faceglow" fill="#eda682" d="M411 264c5 5 6 23 3 32s-6 5-5 1c1-2 3-23-2-29-5-5 4-4 4-4z" /></g><g id="hair"><path fill="#585268" d="M396 287c-2-9-1-14 3-15s15-21-1-22c-17 0-26-14-33 0s4 19 4 19-10 2-9 14 9 12 12 15c5 7 2 8 4 11 0 0 11-2 11-10s-4-15-1-18 8 1 7 19c-1 13 4 20 7 21s15 5 16 1 0-12-3-18c-1-3 2-9 0-11-3-2-4 6-8 5s-7-5-9-11z" /><path fill="#585268" d="M399 272c4-1 10-1 14-8s7-19 2-22-1 9-17 8c-27-1-3 23 1 22z" /></g></g><g id="torso"><path id="shirt" fill="#c4c1f7" d="M357 340l19-19h11c40 0 40 7 30 64-7 35-13 32-32 39-12 5-22 5-35 4s7-88 7-88z" /></g><g id="arm"><g id="Bluearmbot"><path fill="#F68E5A" d="M487 380c-5-4-11-12-16-10-7 3-6 10 3 10h13z" /><path fill="#F68E5A" d="M437 384l34-14-4 6-27 19z" /><path fill="#F89F71" d="M440 395s20-16 26-19c4-2 10 1 11 4h-7c-5 6-14 20-22 23-1 1-8-8-8-8z" /></g><path id="Bluearmtop" fill="#F89F71" d="M404 360l31 40c5 4 9 4 10 4 10-1-4-5-5-11l-10-54c-28-6-26 21-26 21z" /><path id="armhighlight" fill="#F68E5A" d="M439 386l-15-37 7-7z" /><path id="toparm" fill="#c2bff5" d="M406 322c22-5 26 18 24 21-3 8-26 19-26 19l-8-15c-8-18 10-25 10-25z" /><path id="toparmshade" fill="#c2bff5" d="M418 334c-5-7-10-13-13-11-8 2-15 14-8 27 4 9 7 12 7 12s15-7 19-12c3-3-3-13-5-16z" /></g></g></g><g id="Chair"><path id="foot_1_" fill="#52057B" d="M337 550h73l-10-13h-52z" /><g id="seat"><path fill="#52057B" d="M371 442l53 1c3 0 6 0 6 7 0 5-3 6-6 6h-22s-2 6-4 7h-14l-4 12h-15l-5-12-3-8 14-13z" /><path fill="#bb86fc" d="M326 449c0 4 3 7 11 7h47s-5-1-5-6c0-3 0-8 5-8h-48c-7 0-10 2-10 7z" /></g><g id="backrest"><path fill="#52057B" d="M349 340c12 0 19-2 20 8l7 41c2 14 4 29-18 29 7-5 12-7 12-10 0 0-6-56-12-61l-9-7z" /><path fill="#bb86fc" d="M318 340c-8 0-12 5-10 17l8 48c2 8 5 13 14 13h29s14-2 12-19-6-32-8-45-7-14-14-14h-31z" /><path fill="#dbd9fa" d="M332 376c-6 0-12-1-9 11l5 24c1 5 1 6 8 6h19s7 1 5-8l-5-25c-1-5-1-8-9-8h-14z" /><path fill="#36474A" d="M345 395l2 1 9 49c1 6 5 11 7 12s2 6 2 6-8-2-10-3-7-25-7-25l-3-28-2-11 2-1z" /><path fill="#52057B" d="M332 395l9 51c1 8 3 16 13 17h11s-7-3-9-6c-4-4-7-28-7-28l-4-34h-13z" /></g></g><g id="Man_screen"><g className="redskmove"><path fill="#a995ce" d="M574 360c0 2-2 4-4 4h-89c-2 0-4-2-4-4v-69c0-2 2-4 4-4h89c2 0 4 2 4 4v69z" className="redscreen" /></g><g className="greenscrmove"><g className="greenscreen"><path fill="#9562d3" d="M523 337c0 2-2 4-4 4h-68c-2 0-4-2-4-4v-46c0-2 2-4 4-4h68c2 0 4 2 4 4v46z" /><path fill="#F7FCFB" d="M517 307c0 2-2 4-4 4h-51c-2 0-4-2-4-4v-4c0-2 2-4 4-4h51c2 0 4 2 4 4v4z" /><path fill="#3B064D" d="M492 326c0 2-2 4-4 4h-26c-2 0-4-2-4-4v-2c0-2 2-4 4-4h26c2 0 4 2 4 4v2z" /></g></g><g className="screenbutton"><circle cx="523" cy="314" r="18" fill="#52057B" /><path fill="#bb86fc" d="M523 309l-4 8h8z" /></g></g></g>
        </svg>
      </motion.div>
    </motion.div>
  );
};

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
  <footer className=" bg-slate-900 text-slate-400 py-16 px-6 lg:px-20 text-sm min-h-[50vh] flex flex-col justify-center">
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
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 800], [0, -250]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id={id} className="relative min-h-screen overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "grab" },
              },
              modes: {
                grab: { distance: 150, links: { opacity: 0.8 } },
              },
            },
            particles: {
              color: { value: ["#10b981", "#8b5cf6", "#eab308", "#0ea5e9"] },
              links: {
                color: "#64748b",
                distance: 160,
                enable: true,
                opacity: 0.5,
                width: 1.5,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 1.5,
                straight: false,
              },
              number: {
                density: { enable: true, area: 800 },
                value: 60,
              },
              opacity: { value: 0.8 },
              shape: { type: "circle" },
              size: { value: { min: 5, max: 12 } },
            },
            detectRetina: true,
          }}
        />
      </div>

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-6 pointer-events-none"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="uppercase tracking-[10px] text-emerald-500 mb-4 font-bold"
        >
          Explore Indonesia
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="text-7xl md:text-9xl font-black text-slate-900 dark:text-white tracking-tighter drop-shadow-lg"
        >
          TourRest
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-light h-10"
        >
          I am into{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
            <Typewriter
              words={['Hotel Booking.', 'Event Management.', 'Luxury Experiences.', 'Exploring Indonesia.']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </motion.div>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-10 py-4 rounded-full bg-emerald-500 text-white dark:text-slate-900 font-bold hover:bg-emerald-400 transition-colors shadow-lg dark:shadow-[0_0_40px_rgba(16,185,129,0.3)] pointer-events-auto"
        >
          Explore Now
        </motion.button>
      </motion.div>
    </section>
  );
};

const Destinasi = ({ id }: { id: string }) => {
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);

  const destinations = [
    { id: 1, name: "Seminyak Vibes Resort", loc: "Bali, Indonesia", price: "Rp 1.2M", rating: "4.8", img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Rinjani Basecamp Tent", loc: "Lombok, NTB", price: "Rp 800k", rating: "4.9", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "Malioboro Heritage", loc: "Yogyakarta", price: "Rp 650k", rating: "4.7", img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section ref={ref} id={id} className="min-h-screen flex flex-col justify-center py-32 px-6 lg:px-20 max-w-7xl mx-auto w-full">
      <motion.div style={{ y: titleY }} className="text-center md:text-left mb-16">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
          Katalog <span className="text-emerald-500">Hotel</span>
        </h1>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed">
          Temukan penginapan terbaik untuk istirahat setelah seharian menghadiri event impianmu.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest, index) => (
          <motion.div
            key={dest.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.15,
              type: "spring",
              bounce: 0.3
            }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-slate-100 group flex flex-col cursor-pointer"
          >
            <div className="h-72 overflow-hidden relative">
              <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-slate-900 text-sm font-bold px-4 py-2 rounded-full shadow-sm">
                {dest.price} <span className="font-normal text-xs text-slate-500">/mlm</span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col bg-white z-10">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">{dest.name}</h3>
                <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg text-sm font-bold">★ {dest.rating}</div>
              </div>
              <p className="text-slate-500 text-base flex items-center gap-2 mb-8">📍 {dest.loc}</p>
              <button className="mt-auto w-full py-4 bg-slate-50 hover:bg-emerald-500 hover:text-white text-slate-700 font-bold rounded-xl transition-all duration-300 border border-slate-200 hover:border-emerald-500">
                Pesan Kamar
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const EventList = ({ id }: { id: string }) => {
  // ✅ DIPERBAIKI: Menambahkan tipe elemen <HTMLElement> pada useRef
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);

  const events = [
    { id: 1, name: "We The Fest 2026", loc: "GBK, Jakarta", date: "19-21 Juli 2026", price: "Mulai Rp 1.5jt", type: "Festival Musik", img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Ubud Food Festival", loc: "Ubud, Bali", date: "5 Juni 2026", price: "Mulai Rp 250k", type: "Kuliner", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "Jogja Art Weeks", loc: "Yogyakarta", date: "10 Agustus 2026", price: "Gratis", type: "Seni & Budaya", img: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section ref={ref} id={id} className="relative min-h-screen flex flex-col justify-center py-32 px-6 lg:px-20 overflow-hidden w-full bg-slate-50">
      <div className="absolute top-10 right-0 z-0 pointer-events-none">
        <AnimatedIllustration className="w-[600px] opacity-[0.08]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div style={{ y: titleY }} className="text-center md:text-left mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Eksplorasi <span className="text-purple-500">Event</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed">
            Cari acara hiburan, konser, pameran seni, hingga festival kuliner terdekat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((ev, index) => (
            <motion.div 
              key={ev.id} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 group flex flex-col relative cursor-pointer"
            >
              <div className="absolute top-4 left-4 z-10 bg-purple-500/90 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-full shadow-md tracking-wide">
                {ev.type}
              </div>
              <div className="h-72 overflow-hidden relative">
                <img src={ev.img} alt={ev.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>
              <div className="p-8 flex-1 flex flex-col bg-white z-10">
                <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-4">{ev.name}</h3>
                <div className="space-y-3 mb-8">
                  <p className="text-slate-500 text-base flex items-center gap-3">📅 {ev.date}</p>
                  <p className="text-slate-500 text-base flex items-center gap-3">📍 {ev.loc}</p>
                  <p className="text-purple-600 font-black text-xl mt-4">{ev.price}</p>
                </div>
                <button className="mt-auto w-full py-4 bg-purple-50 hover:bg-purple-600 hover:text-white text-purple-700 font-bold rounded-xl transition-all duration-300 border border-purple-100 hover:border-purple-600">
                  Beli Tiket
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TambahEvent = ({ id }: { id: string }) => (
  <section id={id} className="min-h-screen flex items-center justify-center py-32 px-6 lg:px-20 w-full relative overflow-hidden bg-slate-50">
    <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
    <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />

    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
      <div className="bg-white w-full rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 relative">
        <div className="mb-10 text-left">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Buat <span className="text-emerald-500">Event</span> Baru
          </h2>
          <p className="text-slate-500 text-lg">Punya acara keren? Daftarkan event-mu di TourRest dan raih ribuan audiens.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Event berhasil ditambahkan!"); }}>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Nama Event</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all font-medium" placeholder="Contoh: Indie Music Fest" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Kategori Event</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all font-medium text-slate-700">
                <option>Konser & Musik</option>
                <option>Pameran & Seni</option>
                <option>Festival Kuliner</option>
              </select>
            </div>
          </div>
          <button type="submit" className="w-full bg-emerald-500 text-slate-900 font-bold text-lg py-4 rounded-2xl hover:bg-emerald-400 transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(16,185,129,0.3)] mt-8">
            Submit Event
          </button>
        </form>
      </div>

      <div className="hidden lg:flex justify-center items-center">
        <AnimatedIllustration className="w-full max-w-lg opacity-90" />
      </div>
    </div>
  </section>
);

const Tentang = ({ id }: { id: string }) => {
  // ✅ DIPERBAIKI: Menambahkan tipe elemen <HTMLElement> pada useRef
  const ref = React.useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={ref} id={id} className="min-h-screen relative flex flex-col justify-center items-center w-full bg-slate-950 overflow-hidden py-32">
      <motion.div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-40 mix-blend-overlay"
        style={{
          scale: 1.25,
          y: bgY
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center">
        <motion.div style={{ y: titleY }} className="text-center mb-16 w-full">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl">
            Lebih dari sekadar <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Pemesanan.
            </span>
          </h1>
        </motion.div>
        
        <motion.div 
          style={{ y: cardY }} 
          className="bg-white/10 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] shadow-2xl border border-white/20 text-center w-full max-w-4xl"
        >
          <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light mb-12">
            Sejak 2026, <strong>TourRest</strong> hadir dengan sebuah misi:{" "}
            <strong className="text-white font-bold tracking-wide drop-shadow-md">
              menyatukan pengalaman menginap (Rest) dan hiburan (Tour).
            </strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
            <div>
              <h4 className="text-5xl font-black text-emerald-400 mb-2 drop-shadow-lg">500+</h4>
              <p className="text-slate-300 font-medium">Hotel & Event</p>
            </div>
            <div>
              <h4 className="text-5xl font-black text-emerald-400 mb-2 drop-shadow-lg">50k</h4>
              <p className="text-slate-300 font-medium">Pengguna Aktif</p>
            </div>
            <div>
              <h4 className="text-5xl font-black text-emerald-400 mb-2 drop-shadow-lg">4.9/5</h4>
              <p className="text-slate-300 font-medium">Rating Kepuasan</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

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
  
  const { scrollYProgress } = useScroll();

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
      { threshold: 0.5 }
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
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 z-[999]"
            style={{
              scaleX: scrollYProgress,
              transformOrigin: "0%"
            }}
          />
          
          <Navbar activeSection={activeSection} onLoginClick={() => setShowLogin(true)} />
          
          <main className="overflow-x-hidden">
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