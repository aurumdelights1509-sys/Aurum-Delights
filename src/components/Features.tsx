'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Features() {
  return (
    <div className="max-w-7xl mx-auto mt-12 sm:mt-16 lg:mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6 sm:mb-8"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent mb-4 sm:mb-0">
          Our Specialties
        </h2>
        <div className="text-amber-300 hover:text-amber-100 transition-colors flex items-center cursor-pointer">
          Discover More
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </motion.div>
      <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group flex flex-col items-center text-center p-6 card-lux rounded-2xl transition-all duration-300 hover:shadow-xl"
        >
          <div className="mb-4 p-3 bg-amber-500/10 rounded-full">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image src="/images/feature-img-1.png" alt="Pure Ingredients" className="mx-auto h-16 w-auto transition-transform duration-300 group-hover:scale-110" width={64} height={64} />
            </motion.div>
          </div>
          <h3 className="text-xl font-bold text-amber-100 mb-2">Pure Ingredients</h3>
          <p className="text-amber-200/80">Handpicked nuts, natural sweeteners, and premium ingredients for unmatched taste and nutrition.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group flex flex-col items-center text-center p-6 card-lux rounded-2xl transition-all duration-300 hover:shadow-xl"
        >
          <div className="mb-4 p-3 bg-amber-500/10 rounded-full">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image src="/images/feature-img-2.png" alt="Nationwide Delivery" className="mx-auto h-16 w-auto transition-transform duration-300 group-hover:scale-110" width={64} height={64} />
            </motion.div>
          </div>
          <h3 className="text-xl font-bold text-amber-100 mb-2">Nationwide Delivery</h3>
          <p className="text-amber-200/80">Fresh ladoos delivered to your doorstep across India, maintaining quality and freshness.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group flex flex-col items-center text-center p-6 card-lux rounded-2xl transition-all duration-300 hover:shadow-xl"
        >
          <div className="mb-4 p-3 bg-amber-500/10 rounded-full">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image src="/images/feature-img-3.png" alt="Secure Online Payment" className="mx-auto h-16 w-auto transition-transform duration-300 group-hover:scale-110" width={64} height={64} />
            </motion.div>
          </div>
          <h3 className="text-xl font-bold text-amber-100 mb-2">Secure Online Payment</h3>
          <p className="text-amber-200/80">Safe and encrypted payment gateway for a worry-free shopping experience.</p>
        </motion.div>
      </div>
    </div>
  );
}