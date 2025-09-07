'use client';

import { motion } from 'framer-motion';
import { BlogCard3D, ProductCard3D, ReviewCard3D } from '@/components/Card3DAnimations';
import ProductCard from '@/components/ProductCard';
import Features from '@/components/Features';
import Image from 'next/image';
import Link from 'next/link';
import { NAVIGATION_LINKS } from '@/constants/navigation';

// Define types for our data
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  displayRating?: number;
  displayOriginalPrice?: number;
}

interface Review {
  name: string;
  rating: number;
  text: string;
  image: string;
}

interface Blog {
  title: string;
  summary: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  url: string;
}

interface HomeClientProps {
  featured: Product[];
  reviews: Review[];
  blogs: Blog[];
  allProducts: Product[];
}

// Helper function to get 3 items with wrap
const getTrio = <T,>(arr: T[], start: number): T[] => {
  return [0, 1, 2].map(i => arr[(start + i) % arr.length]);
};

export default function HomeClient({ featured, reviews, blogs }: HomeClientProps) {
  return (
    <>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
        <motion.h2 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Golden Bite Philosophy
        </motion.h2>
        <motion.p 
          className="text-lg sm:text-xl text-amber-100 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where Tradition Meets Nutrition, in Every Golden Bite
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-amber-900/30 border border-amber-700/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto mb-12"
        >
          <p className="text-amber-100 mb-4">
            Ladoos are one of the oldest Indian superfoods — energy-packed, wholesome, and crafted with love. 
            By enriching them with premium nuts and nutrient-dense ingredients, we transform a festive treat 
            into a daily wellness bite suitable for every age group.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <motion.span 
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-500/20 text-amber-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <svg className="mr-1.5 h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Children: Growth & Energy
            </motion.span>
            <motion.span 
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-500/20 text-amber-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <svg className="mr-1.5 h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Young Adults: Brain & Performance
            </motion.span>
            <motion.span 
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-500/20 text-amber-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <svg className="mr-1.5 h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Families: Immunity & Balance
            </motion.span>
            <motion.span 
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-500/20 text-amber-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <svg className="mr-1.5 h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Elderly: Strength & Longevity
            </motion.span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href={NAVIGATION_LINKS.SHOP} className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-amber-900 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore Our Collection
          </Link>
          <Link href={NAVIGATION_LINKS.ABOUT} className="px-6 py-3 border border-amber-500 text-amber-200 hover:bg-amber-500 hover:text-amber-900 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
            Our Story
          </Link>
        </motion.div>
      </div>

      {/* Nutritional Science Section */}
      <div className="max-w-7xl mx-auto mt-12 sm:mt-16 lg:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent mb-4">
            The Nutritional Science Behind Ladoos
          </h2>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto">
            Each ingredient is carefully selected for its health benefits and nutritional value
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-amber-900/30 border border-amber-700/50 backdrop-blur-sm rounded-2xl p-5 sm:p-6"
          >
            <div className="flex items-center mb-4">
              <div className="bg-amber-800/50 rounded-lg p-2 mr-3">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h6M3 9h18M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-amber-100">Premium Nuts</h3>
            </div>
            <ul className="text-amber-200/80 space-y-2 text-sm">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-amber-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Rich in protein for muscle repair and growth</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-amber-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Healthy fats support brain health and heart function</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-amber-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Vitamin E and antioxidants for skin glow</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-amber-900/30 border border-amber-700/50 backdrop-blur-sm rounded-2xl p-5 sm:p-6"
          >
            <div className="flex items-center mb-4">
              <div className="bg-amber-800/50 rounded-lg p-2 mr-3">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-amber-100">Natural Binders</h3>
            </div>
            <ul className="text-amber-200/80 space-y-2 text-sm">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-amber-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Natural sugars release energy slowly</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-amber-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Iron and magnesium for blood health</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-amber-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Trace minerals for stamina</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-amber-900/30 border border-amber-700/50 backdrop-blur-sm rounded-2xl p-5 sm:p-6"
          >
            <div className="flex items-center mb-4">
              <div className="bg-amber-800/50 rounded-lg p-2 mr-3">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-amber-100">Nutrient Seeds</h3>
            </div>
            <ul className="text-amber-200/80 space-y-2 text-sm">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-amber-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Fiber for healthy digestion</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-amber-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Omega-3s for heart and brain</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-amber-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Boost immunity and metabolism</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-amber-900/30 border border-amber-700/50 backdrop-blur-sm rounded-2xl p-5 sm:p-6"
          >
            <div className="flex items-center mb-4">
              <div className="bg-amber-800/50 rounded-lg p-2 mr-3">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-amber-100">Coconut & Ghee</h3>
            </div>
            <ul className="text-amber-200/80 space-y-2 text-sm">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-amber-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Antibacterial properties for digestion</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-amber-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Ayurvedic superfood for immunity</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-amber-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Strengthens bones and joints</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto mt-12 sm:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent mb-4 sm:mb-0">
            Featured Ladoos
          </h2>
          <Link href={NAVIGATION_LINKS.SHOP} className="text-amber-300 hover:text-amber-100 transition-colors flex items-center">
            View All Products
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((p: Product, index: number) => (
            <motion.div
              key={p._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group h-full"
            >
              <ProductCard3D isHovered={false}>
                <ProductCard 
                  {...p} 
                  rating={p.displayRating || 4.5} 
                  originalPrice={p.displayOriginalPrice || (p.price + 100)}
                />
              </ProductCard3D>
            </motion.div>
          ))}
        </div>
      </div>

      <Features />

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto mt-12 sm:mt-16 lg:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent mb-4">
            Why Choose Aurum Delights?
          </h2>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto">
            We blend tradition with innovation to create sweets that are not just delicious but also healthy and sustainable.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-amber-900/30 border border-amber-700/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-start">
              <div className="bg-amber-800/50 rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-100 mb-2">Premium Quality Assurance</h3>
                <p className="text-amber-200/80">
                  Each sweet is meticulously crafted and quality-checked to ensure you receive only the best. We source our ingredients directly from trusted suppliers.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-amber-900/30 border border-amber-700/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-start">
              <div className="bg-amber-800/50 rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-100 mb-2">Tradition Meets Innovation</h3>
                <p className="text-amber-200/80">
                  We honor time-tested recipes while incorporating modern techniques to enhance flavor and presentation without compromising authenticity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-7xl mx-auto mt-12 sm:mt-16 lg:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent mb-4 sm:mb-0">
            What Our Patrons Say
          </h2>
          <div className="text-amber-300 hover:text-amber-100 transition-colors flex items-center cursor-pointer">
            View All Testimonials
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>
        <div className="relative">
          {/* Static reviews display - no client-side animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {getTrio(reviews, 0).map((r: Review, i: number) => (
              <motion.div
                key={`${r.name}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <ReviewCard3D isHovered={false}>
                  <div className="bg-amber-900/30 border border-amber-700/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 h-full hover:shadow-2xl transition-all duration-300 hover:bg-amber-900/40 hover:border-amber-500/70 group">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                      {r.image && (
                        <div className="relative">
                          <Image src={r.image} alt={r.name} width={48} height={48} className="rounded-full ring-2 ring-amber-400/50 object-cover mx-auto sm:mx-0 transition-transform duration-300 group-hover:scale-110" />
                          <div className="absolute inset-0 rounded-full bg-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      )}
                      <div className="text-center sm:text-left">
                        <div className="text-sm font-medium text-amber-300">{r.name}</div>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, index: number) => (
                            <svg key={index} className={`w-4 h-4 ${index < r.rating ? 'text-amber-400 fill-current' : 'text-amber-400/30 fill-current'}`} viewBox="0 0 24 24">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <div className="text-xs text-amber-400/80 mt-1">Verified Customer</div>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-amber-100 text-center sm:text-left leading-relaxed">&quot;{r.text}&quot;</p>
                    <div className="mt-4 flex justify-end">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/20 text-amber-300 group-hover:bg-amber-500/30 transition-colors duration-300">
                        <svg className="mr-1 h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Featured Review
                      </span>
                    </div>
                  </div>
                </ReviewCard3D>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="max-w-7xl mx-auto mt-12 sm:mt-16 lg:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent mb-4 sm:mb-0">
            From Our Blog
          </h2>
          <div className="text-amber-300 hover:text-amber-100 transition-colors flex items-center cursor-pointer">
            Explore All Articles
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>
        <div className="relative">
          {/* Static blogs display - no client-side animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {getTrio(blogs, 0).map((b: Blog, i: number) => (
              <motion.a 
                key={`${b.title}-${i}`} 
                href={b.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative block group/blog"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <BlogCard3D isHovered={false}>
                  <div className="bg-amber-900/30 border border-amber-700/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 h-full hover:shadow-2xl transition-all duration-300 group-hover/blog:bg-amber-900/40 group-hover/blog:border-amber-500/70">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/20 text-amber-300 group-hover/blog:bg-amber-500/30 transition-colors duration-300">
                        {b.category || "Blog"}
                      </span>
                      {b.readTime && (
                        <span className="text-xs text-amber-400 group-hover/blog:text-amber-300 transition-colors duration-300">
                          {b.readTime}
                        </span>
                      )}
                    </div>
                    <div className="text-base sm:text-lg font-semibold text-amber-100 mb-3 group-hover/blog:text-amber-50 transition-colors line-clamp-2">{b.title}</div>
                    <div className="text-sm sm:text-base text-amber-200/80 mb-4 line-clamp-3 group-hover/blog:text-amber-200 transition-colors">{b.summary}</div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-amber-300 gap-2">
                      <span className="font-medium">{b.author}</span>
                      <span className="text-amber-400">{b.date}</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-amber-700/30 flex items-center text-amber-400 text-sm font-medium group-hover/blog:text-amber-300 transition-colors duration-300">
                      Read More
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </BlogCard3D>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}