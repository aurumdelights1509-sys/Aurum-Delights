'use client';

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { CheckCircle, Mail, MapPin, Phone, Send, Users } from "lucide-react";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Aurum Delights',
        message: message,
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );
      
      // Log successful email sending
      console.log('Email sent successfully:', result);

      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      
      toast.success('Message sent successfully!');
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <motion.header 
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gold mb-4">
          Get In Touch
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          We&apos;d love to hear from you. For orders, gifting, or wholesale inquiries, drop us a message.
        </p>
      </motion.header>

      <div className="mt-12 grid md:grid-cols-2 gap-8 items-stretch">
        {/* Enhanced Contact Form */}
        <motion.div 
          className="card-lux rounded-3xl p-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
              <Send className="w-5 h-5 text-gold" />
            </div>
            <h3 className="text-xl font-bold text-gold">Send a Message</h3>
          </div>
          
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            {/* Name Field */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <label className="block text-sm font-medium text-gold mb-2">
                Full Name *
              </label>
              <div className="relative">
                <input
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl px-4 py-3 bg-white/10 backdrop-blur-sm border-2 transition-all duration-300 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:border-gold shadow-lg shadow-gold/20 scale-[1.02]"
                  required
                />
                {name && (
                  <motion.div 
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Email Field */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <label className="block text-sm font-medium text-gold mb-2">
                Email Address *
              </label>
              <div className="relative">
                <input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  type="email"
                  className="w-full rounded-xl px-4 py-3 bg-white/10 backdrop-blur-sm border-2 transition-all duration-300 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:border-gold shadow-lg shadow-gold/20 scale-[1.02]"
                  required
                />
                {email && email.includes('@') && (
                  <motion.div 
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Message Field */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <label className="block text-sm font-medium text-gold mb-2">
                Message *
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your requirements, questions, or feedback..."
                  rows={6}
                  className="w-full rounded-xl px-4 py-3 bg-white/10 backdrop-blur-sm border-2 transition-all duration-300 text-white placeholder-white/60 resize-none focus:outline-none focus:ring-0 focus:border-gold shadow-lg shadow-gold/20 scale-[1.02]"
                  required
                />
                {message && message.length > 10 && (
                  <motion.div 
                    className="absolute right-3 top-3"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </motion.div>
                )}
              </div>
              <div className="mt-1 text-xs text-gray-500">
                {message.length}/500 characters
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading || !name || !email || !message}
              className="w-full relative overflow-hidden rounded-xl px-6 py-4 font-bold text-black bg-gradient-to-r from-gold to-gold-400 hover:from-gold-400 hover:to-gold-300 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <div className="flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </div>
              {!isLoading && (
                <motion.div
                  className="absolute inset-0 bg-black/20 translate-x-[-100%] skew-x-12"
                  whileHover={{ translateX: '200%' }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Enhanced Contact Details */}
        <motion.div 
          className="card-lux rounded-3xl p-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
              <Phone className="w-5 h-5 text-gold" />
            </div>
            <h3 className="text-xl font-bold text-gold">Reach Us</h3>
          </div>
          
          <p className="text-sm text-white/70 mb-6">
            We usually respond within 24 hours. Feel free to reach out through any of these channels.
          </p>

          <div className="space-y-4 mb-8">
            <motion.a
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              href="mailto:Aurum.delights1509@gmail.com"
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-lg">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gold">Email Us</div>
                <div className="text-sm text-white/60 group-hover:text-gold transition-colors">
                  Aurum.delights1509@gmail.com
                </div>
              </div>
            </motion.a>
            
            <motion.a
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              href="tel:+919145477577"
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-lg">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gold">Call Us</div>
                <div className="text-sm text-white/60 group-hover:text-gold transition-colors">
                  +91 9145477577
                </div>
              </div>
            </motion.a>
            
            <motion.a
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/search/?api=1&query=204,+Satyam+Apartment,+Vishwakarma+Nagar,+Nagpur,+Maharashtra,+India,+440027"
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-lg">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gold">Visit Us</div>
                <div className="text-sm text-white/60 group-hover:text-gold transition-colors">
                  204, Satyam Apartment, Vishwakarma Nagar, Nagpur, Maharashtra, India, 440027
                </div>
              </div>
            </motion.a>
          </div>

          <motion.div 
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-lg flex-shrink-0">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-gold mb-2">Crafted with Love</div>
                <p className="text-sm text-white/70 leading-relaxed">
                  Premium baked goods, lovingly crafted by our team of passionate bakers since 2025.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}