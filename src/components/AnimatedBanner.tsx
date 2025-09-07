'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface AnimatedBannerProps {
  backgroundSrc?: string; // Background image source
  logoSrc?: string; // Logo image source
  headline: string;
  subheadline?: string;
}

export default function AnimatedBanner({ backgroundSrc, logoSrc, headline, subheadline }: AnimatedBannerProps) {
  // Default background to 10.png and logo to logo.png if not provided
  const background = backgroundSrc || "/images/10.png";
  const logo = logoSrc || "/images/logo.png";

  return (
    <div className="relative w-full h-[500px] overflow-hidden" suppressHydrationWarning>
      {/* Background Image with Enhanced Parallax Effect */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.1 }}
        transition={{ 
          duration: 20, 
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute inset-0"
      >
        <Image
          src={background}
          alt={headline || "Banner background"}
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      
      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80 flex flex-col items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl pb-8">
          {/* Animated Logo with Glow Effect */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 12,
              delay: 0.2 
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="mb-6 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <Image 
                src={logo} 
                alt="Aurum Delights Logo" 
                width={200} 
                height={200} 
                className="object-contain drop-shadow-2xl relative z-10"
              />
            </div>
          </motion.div>
          
          {/* Animated Headline with Gold Gradient and Text Effects */}
          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent drop-shadow-2xl leading-tight pb-2 text-amber-200"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 80,
              damping: 15,
              delay: 0.4 
            }}
          >
            {headline}
          </motion.h1>
          
          {/* Animated Subheadline with Enhanced Styling */}
          {subheadline && (
            <motion.p 
              className="text-xl md:text-3xl font-light mb-8 max-w-2xl mx-auto drop-shadow-lg text-amber-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 70,
                damping: 15,
                delay: 0.6 
              }}
            >
              {subheadline}
            </motion.p>
          )}
          
          {/* Enhanced Animated Call-to-Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 60,
              damping: 15,
              delay: 0.8 
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/about">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-amber-900 font-bold rounded-full shadow-2xl hover:shadow-2xl transform transition-all duration-300 text-lg relative overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                <span className="absolute inset-0 rounded-full border-2 border-yellow-300 animate-ping opacity-0 group-hover:opacity-20"></span>
                <span className="relative z-10 flex items-center gap-2">
                  About Us
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements - Removed floating particles to fix hydration error */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-950/90 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-amber-950/90 to-transparent"></div>
    </div>
  );
}