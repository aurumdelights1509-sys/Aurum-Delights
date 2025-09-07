'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Heart, Users, Sparkles, Clock, Leaf, Star, Globe } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold gold-gradient-text mb-8">
              About Aurum Delights
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Where royal Indian heritage meets modern craftsmanship. We create luxury ladoos that tell stories of tradition, 
              love, and celebration - one handcrafted bite at a time.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 relative"
          >
            <div className="relative h-80 w-full max-w-4xl mx-auto rounded-3xl overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="Aurum Delights - Premium Ladoo Collection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-2xl font-semibold">Since 2020</p>
                <p className="text-white/80">Crafting memories, one ladoo at a time</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-20 bg-gradient-to-br from-amber-900/10 to-yellow-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold gold-gradient-text mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  Aurum Delights was born from a simple yet profound realization: the traditional art of ladoo-making 
                  deserved a place in the modern world without losing its soul. Our founder, inspired by generations 
                  of family recipes and royal kitchen traditions, embarked on a journey to create something extraordinary.
                </p>
                <p>
                  What started in a small kitchen has blossomed into a celebration of India&apos;s rich culinary heritage. 
                  We&apos;ve spent years perfecting our recipes, sourcing the finest ingredients, and mastering the delicate 
                  balance between tradition and innovation.
                </p>
                <p>
                  Today, Aurum Delights stands as a testament to the belief that food is not just nourishment—it&apos;s 
                  emotion, memory, and love wrapped in golden perfection.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Traditional ladoo making process"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gold-gradient-text mb-6">Our Core Values</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Every ladoo we craft is guided by principles that have been the foundation of our journey from day one.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Passion",
                description: "Every ladoo is made with genuine love and care, just like grandmother&apos;s recipes.",
                color: "text-red-400"
              },
              {
                icon: Award,
                title: "Quality",
                description: "We use only the finest ingredients, sourced responsibly and crafted to perfection.",
                color: "text-yellow-400"
              },
              {
                icon: Users,
                title: "Family",
                description: "We&apos;re not just a business; we&apos;re a family that extends to every customer we serve.",
                color: "text-blue-400"
              },
              {
                icon: Sparkles,
                title: "Innovation",
                description: "Respecting tradition while embracing modern techniques and presentations.",
                color: "text-purple-400"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="card-lux rounded-2xl p-8 h-full hover:border-amber-400/50 transition-all duration-300">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="px-6 py-20 bg-gradient-to-br from-amber-900/10 to-yellow-900/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gold-gradient-text mb-6">Our Crafting Process</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              From selection to creation, every step is carefully orchestrated to ensure perfection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Ingredient Selection",
                description: "We source the finest nuts, purest ghee, and organic spices from trusted suppliers across India. Each ingredient is personally inspected for quality.",
                icon: Leaf
              },
              {
                step: "02", 
                title: "Traditional Crafting",
                description: "Using time-honored techniques passed down through generations, our master craftsmen shape each ladoo by hand with precision and care.",
                icon: Clock
              },
              {
                step: "03",
                title: "Quality Assurance",
                description: "Every batch undergoes rigorous quality checks. Only ladoos that meet our exacting standards make it to our customers.",
                icon: Star
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="card-lux rounded-2xl p-8 h-full text-center hover:border-amber-400/50 transition-all duration-300 group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <process.icon className="w-8 h-8 text-amber-400" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{process.title}</h3>
                  <p className="text-white/70 leading-relaxed">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card-lux rounded-3xl p-8 lg:p-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-3xl font-bold gold-gradient-text">Our Mission</h3>
              </div>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                To preserve and celebrate India&apos;s rich culinary heritage while making traditional sweets accessible 
                to modern families. We believe that every celebration, big or small, deserves the perfect touch of 
                sweetness that only authentic, handcrafted ladoos can provide.
              </p>
              <p className="text-white/70">
                We&apos;re committed to supporting local farmers, maintaining sustainable practices, and ensuring that 
                every customer experiences the joy and tradition that our ladoos represent.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card-lux rounded-3xl p-8 lg:p-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold gold-gradient-text">Our Vision</h3>
              </div>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                To become the world&apos;s most trusted name in premium Indian sweets, spreading the love and warmth 
                of Indian culture through our authentic ladoos. We envision a future where our treats bring 
                families together, creating memories that last generations.
              </p>
              <p className="text-white/70">
                As we grow, we remain committed to our roots—never compromising on quality, tradition, or the 
                personal touch that makes each Aurum Delights experience special.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="px-6 py-20 bg-gradient-to-br from-amber-900/10 to-yellow-900/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gold-gradient-text mb-6">Our Journey in Numbers</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Every milestone tells a story of growth, dedication, and the trust our customers place in us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Happy Customers", description: "Families we've served" },
              { number: "50,000+", label: "Ladoos Crafted", description: "Made with love" },
              { number: "15+", label: "Varieties", description: "Unique flavors" },
              { number: "4.8/5", label: "Customer Rating", description: "Based on reviews" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="card-lux rounded-2xl p-8 hover:border-amber-400/50 transition-all duration-300 group">
                  <div className="text-4xl lg:text-5xl font-bold gold-gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                  <div className="text-white/60 text-sm">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-lux rounded-3xl p-12 shine"
          >
            <h2 className="text-3xl lg:text-4xl font-bold gold-gradient-text mb-6">
              Thank You for Being Part of Our Story
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              At Aurum Delights, you&apos;re not just a customer—you&apos;re family. Every ladoo we create carries with it 
              our promise of quality, tradition, and love. Thank you for allowing us to be part of your celebrations, 
              your special moments, and your everyday joys.
            </p>
            <p className="text-lg text-white/70">
              Here&apos;s to many more years of sweetness, tradition, and shared memories. 
              <span className="text-amber-400 font-medium">Welcome to the Aurum Delights family!</span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}