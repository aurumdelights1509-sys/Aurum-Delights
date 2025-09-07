import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable react production optimizations
  reactStrictMode: true,
  
  // Image optimization configuration
  images: {
    domains: ['localhost', '127.0.0.1'],
    // Add image optimization for production
    formats: ['image/webp'],
  },
  
  // Environment variables configuration
  env: {
    NEXT_PUBLIC_CURRENCY: process.env.NEXT_PUBLIC_CURRENCY,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    NEXT_PUBLIC_RAZORPAY_KEY_ID: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET,
    MONGODB_URI: process.env.MONGODB_URI,
  },
  
  // Production optimizations
  poweredByHeader: false,
  compress: true,
  
  // Enable webpack optimizations for production
  webpack: (config, { dev }) => {
    // Reduce bundle size for production
    if (!dev) {
      config.optimization.minimize = true;
    }
    
    return config;
  },
};

export default nextConfig;