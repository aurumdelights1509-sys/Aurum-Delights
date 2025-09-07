'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useCartStore } from '@/store/cart';
import { useFavoritesStore } from '@/store/favorites';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  stock?: number;
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();
  const [isFav, setIsFav] = useState(false);
  const currency = process.env.NEXT_PUBLIC_CURRENCY ?? "₹";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('/api/products');
        const products: Product[] = await response.json();
        // Handle both string and string[] types for id
        const productId = Array.isArray(id) ? id[0] : id;
        const foundProduct = products.find(p => p._id === productId);
        setProduct(foundProduct || null);
        setLoading(false);
        
        if (foundProduct) {
          setIsFav(isFavorite(foundProduct._id));
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id, isFavorite]);

  const handleAddToCart = () => {
    if (product) {
      addItem({
        productId: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity
      });
    }
  };

  const toggleFavorite = () => {
    if (product) {
      if (isFav) {
        removeFavorite(product._id);
      } else {
        addFavorite(product._id);
      }
      setIsFav(!isFav);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-300 h-96 w-full animate-pulse mb-8"></div>
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 mb-8 animate-pulse"></div>
          <div className="h-12 bg-gray-300 rounded w-1/3 animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Product not found</h1>
          <p className="text-gray-600 mt-2">The product you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        </div>
      </div>
    );
  }

  // Get additional images based on product ID
  const getAdditionalImages = (productId: string) => {
    const imageMap: Record<string, string[]> = {
      '1': ['/images/1.png', '/images/1(1).png', '/images/1(2).png'],
      '2': ['/images/2.png', '/images/2(1).png', '/images/2(2).png'],
      '3': ['/images/7.png', '/images/7(1).png', '/images/10.png'],
      '4': ['/images/2.png', '/images/10.png', '/images/9.png'],
      '5': ['/images/3.png', '/images/3(1).png', '/images/3(2).png'],
      '6': ['/images/4.png', '/images/4(1).png', '/images/4(2).png'],
      '7': ['/images/6.png', '/images/6(1).png', '/images/2.png'],
      '8': ['/images/8.png', '/images/3.png', '/images/4.png']
    };
    
    return imageMap[productId] || [product.image, '/images/10.png', '/images/9.png'];
  };

  const additionalImages = getAdditionalImages(product._id);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="md:flex gap-12">
          {/* Product Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Featured
                </span>
              </div>
              <div className="absolute bottom-4 left-4">
                <h2 className="text-2xl font-bold text-white">{product.name}</h2>
                <p className="text-amber-300 font-semibold">{currency}{product.price.toFixed(2)}</p>
              </div>
            </div>
            
            {/* Additional Images Gallery */}
            <div className="flex gap-4 mt-6">
              {additionalImages.map((img, index) => (
                <motion.div
                  key={index}
                  className="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-transparent hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Product Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2"
          >
            <motion.h1 
              className="text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {product.name}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
                <span className="ml-2 text-amber-100">4.8 (128 reviews)</span>
              </div>
              {product.stock && product.stock <= 10 && (
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Only {product.stock} left
                </span>
              )}
            </motion.div>
            
            <motion.p 
              className="text-3xl font-bold text-amber-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {currency}{product.price.toFixed(2)}
            </motion.p>
            
            <motion.p 
              className="text-amber-100 mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {product.description}
            </motion.p>
            
            {/* Product Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Product Highlights</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-amber-100">Premium quality ingredients</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-amber-100">Handcrafted with traditional methods</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-amber-100">Freshly prepared and packed</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-amber-100">Perfect for gifting and celebrations</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-amber-100">100% Natural & Organic Ingredients</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Quantity Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mb-8"
            >
              <label className="block text-amber-800 text-lg font-medium mb-3">Quantity</label>
              <div className="flex items-center">
                <motion.button 
                  className="bg-amber-700 text-amber-100 px-4 py-2 rounded-l-lg border border-amber-600 hover:bg-amber-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </motion.button>
                <span className="bg-amber-800 px-6 py-2 border-y border-amber-600 text-lg font-medium text-amber-100">{quantity}</span>
                <motion.button 
                  className="bg-amber-700 text-amber-100 px-4 py-2 rounded-r-lg border border-amber-600 hover:bg-amber-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </motion.button>
              </div>
            </motion.div>
            
            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg hover:bg-amber-dark transition flex-1 min-w-[200px] font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Add to Cart
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleFavorite}
                className={`px-6 py-4 rounded-lg transition flex-1 min-w-[200px] font-bold text-lg border-2 ${
                  isFav 
                    ? 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {isFav ? '❤️ Favorited' : '♡ Add to Favorites'}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Product Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Our {product.name}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Made with the finest ingredients and traditional recipes passed down through generations.</p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Freshly Made</h3>
              <p className="text-gray-600">Prepared fresh to order and delivered to ensure maximum taste and nutrition.</p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Perfect Gift</h3>
              <p className="text-gray-600">Elegantly packaged and ideal for gifting on special occasions and celebrations.</p>
            </div>
          </div>
        </motion.div>
        
        {/* Product Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Description</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Our {product.name} is meticulously crafted using time-honored recipes passed down through generations. 
              Each batch is prepared with the finest ingredients, ensuring a perfect balance of flavors and textures 
              that will delight your taste buds.
            </p>
            <p className="text-gray-600 mb-4">
              Made in small batches to maintain quality and freshness, these delicacies are perfect for celebrations, 
              gifting, or simply treating yourself to something special. Our master chefs use only premium nuts, 
              natural sweeteners, and carefully selected ingredients to create a truly exceptional experience.
            </p>
            <p className="text-gray-600">
              Store in a cool, dry place. Consume within 15 days of opening for best quality. 
              For extended freshness, refrigeration is recommended. Each piece is individually wrapped to maintain 
              its freshness and prevent crumbling during transit.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}