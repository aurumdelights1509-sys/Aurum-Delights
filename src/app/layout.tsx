import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import { Suspense } from 'react';
import { Toaster } from "react-hot-toast";
import "./globals.css";

// Optimized font loading
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Aurum Delights - Luxurious Handcrafted Ladoos",
  description: "Premium nuts-based ladoos, lovingly home-made. Eight exquisite varieties blended with tradition and modern opulence.",
  keywords: "ladoos, sweets, handcrafted, premium, nuts, traditional, sugar-free",
  authors: [{ name: "Aurum Delights" }],
  robots: "index, follow",
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: "Aurum Delights - Luxurious Handcrafted Ladoos",
    description: "Premium nuts-based ladoos, lovingly home-made",
    type: "website",
    locale: "en_US",
    images: [{
      url: '/images/logo.png',
      width: 512,
      height: 512,
      alt: 'Aurum Delights Logo',
    }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Loading component
function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Logo */}
      <div className="relative h-16 w-16 mb-6 rounded-xl overflow-hidden ring-2 ring-[var(--gold-400)]/60 shadow-[0_8px_24px_rgba(245,160,0,0.35)] animate-pulse">
        <Image 
          src="/images/logo.png" 
          alt="Aurum Delights" 
          className="h-full w-full object-contain" 
          fill
        />
      </div>
      
      {/* Brand Name */}
      <h2 className="text-xl font-bold bg-gradient-to-r from-[var(--gold-400)] via-[var(--gold-500)] to-[var(--gold-400)] bg-clip-text text-transparent mb-4">
        Aurum Delights
      </h2>
      
      {/* Loading Animation */}
      <div className="flex items-center space-x-2">
        <div className="h-2 w-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="h-2 w-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="h-2 w-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
      
      <p className="text-amber-200/70 text-sm mt-4">Loading premium experience...</p>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Performance optimizations */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="dns-prefetch" href="//images.clerk.dev" />
          <meta name="theme-color" content="#3b2a20" />
          <meta name="color-scheme" content="dark" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <Toaster 
              position="bottom-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: 'rgba(59, 42, 32, 0.95)',
                  color: '#f7ede3',
                  border: '1px solid rgba(245, 160, 0, 0.28)',
                  backdropFilter: 'blur(8px)',
                },
              }}
            />
          </Suspense>
        </body>
      </html>
    </ClerkProvider>
  );
}