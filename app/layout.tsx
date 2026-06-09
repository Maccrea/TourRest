import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; // 1. Import Providers yang baru kita buat

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TourRest | Explore Indonesia",
  description: "Discover premium hotels, unforgettable events, and luxury experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning // 2. WAJIB DITAMBAHKAN agar Next.js tidak rewel soal pergantian tema di browser
    >
      <body className="min-h-full flex flex-col">
        {/* 3. Bungkus children dengan Providers */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}