"use client";

import { ProductCard3D } from '@/components/Card3DAnimations';
import { useCartStore } from '@/store/cart';
import { useFavoritesStore } from '@/store/favorites';
import { AnimatePresence, motion } from 'framer-motion';
import { Grid, Heart, List, Search, ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Tilt from "react-parallax-tilt";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
  category?: string;
  rating?: number;
  reviews?: number;
}

export default function AllProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const favoritesStore = useFavoritesStore();
  const { addFavorite, removeFavorite, isFavorite } = favoritesStore;
  const [loading, setLoading] = useState(true);
  const currency = process.env.NEXT_PUBLIC_CURRENCY ?? "₹";
  const addToCart = useCartStore((s) => s.addItem);
  const searchParams = useSearchParams();

  const filterAndSortProducts = useCallback(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [products, searchTerm, sortBy]);

  useEffect(() => {
    loadProducts();
  }, []);

  // Initialize search term from URL params
  useEffect(() => {
    const urlQuery = searchParams.get('q');
    if (urlQuery) {
      setSearchTerm(urlQuery);
    }
  }, [searchParams]);

  useEffect(() => {
    filterAndSortProducts();
  }, [products, searchTerm, sortBy, filterAndSortProducts]);

  const loadProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      const productsWithRatings = Array.isArray(data) ? data.map(product => ({
        ...product,
        rating: 4.2 + Math.random() * 0.6, // Random rating between 4.2-4.8
        reviews: Math.floor(Math.random() * 50) + 10 // Random reviews 10-60
      })) : [];
      setProducts(productsWithRatings);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (productId: string) => {
    if (isFavorite(productId)) {
      removeFavorite(productId);
    } else {
      addFavorite(productId);
    }
  };

  const addToCartHandler = (product: Product) => {
    addToCart({
      productId: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });
    
    // Show success toast
    toast.success(`${product.name} added to cart!`, {
      style: {
        background: 'rgba(59, 42, 32, 0.95)',
        color: '#f7ede3',
        border: '1px solid #f59e0b'
      },
      duration: 3000,
      icon: '🛒'
    });
  };

  // Create local references to the store functions for use in nested components
  const localToggleFavorite = toggleFavorite;
  const localIsFavorite = isFavorite;

  const ProductGridCard = ({ product }: { product: Product }) => (
    <Link href={`/products/${product._id}`} className="block h-full">
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={800}
        scale={1.02}
        transitionSpeed={400}
        gyroscope={false}
        glareEnable={false}
        className="h-full"
        style={{ willChange: "transform" }}
      >
        <div
          className="relative group h-full"
          onMouseEnter={() => setHoveredProduct(product._id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <div className="card-lux rounded-2xl overflow-hidden h-full flex flex-col bg-gradient-to-br from-amber-900/20 via-yellow-800/15 to-orange-900/20 backdrop-blur-xl border border-amber-500/20">
            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div 
                className="absolute inset-0 border-2 border-amber-400/0 group-hover:border-amber-400/30 rounded-2xl transition-all duration-500"
              />
            </div>
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-amber-400/0 group-hover:border-amber-400/50 rounded-tl-2xl transition-all duration-500" />
            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-amber-400/0 group-hover:border-amber-400/50 rounded-tr-2xl transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-amber-400/0 group-hover:border-amber-400/50 rounded-bl-2xl transition-all duration-500" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-amber-400/0 group-hover:border-amber-400/50 rounded-br-2xl transition-all duration-500" />
            
            {/* Product Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Stock Badge */}
              {product.stock <= 10 && (
                <div className="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full shadow-lg">
                  Only {product.stock} left
                </div>
              )}
              
              {/* Favorite Button - Always visible and active when clicked */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  localToggleFavorite(product._id);
                }}
                className={`absolute top-3 right-3 w-9 h-9 rounded-full backdrop-blur-md border transition-all duration-300 flex items-center justify-center ${
                  localIsFavorite(product._id)
                    ? "bg-red-500/90 border-red-400 text-white shadow-lg shadow-red-500/25"
                    : "bg-white/20 border-white/30 text-white hover:bg-red-500/80 hover:border-red-400 hover:text-white"
                }`}
              >
                <Heart className={`w-4 h-4 transition-all duration-300 ${localIsFavorite(product._id) ? "fill-current" : ""}`} />
              </button>
            </div>

            {/* Product Info */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-[var(--gold-500)] line-clamp-2">
                  {product.name}
                </h3>
              </div>
              
              <p className="text-sm text-white/70 mb-3 line-clamp-2 flex-1">
                {product.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating || 0)
                          ? 'text-yellow-500 fill-current'
                          : 'text-gray-400'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-white/60">
                  {product.rating?.toFixed(1)} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price and Add to Cart */}
              <div className="flex items-center justify-between mt-auto">
                <div className="text-2xl font-bold text-[var(--gold-400)]">
                  {currency}{product.price}
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCartHandler(product);
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-[var(--gold-500)] to-[var(--gold-400)] text-black font-medium rounded-lg hover:from-[var(--gold-400)] hover:to-[var(--gold-300)] transition-all shadow-lg hover:shadow-xl"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </Link>
  );

  const ProductListCard = ({ product }: { product: Product }) => (
    <Link href={`/products/${product._id}`} className="block h-full">
      <motion.div
        layout
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="card-lux rounded-2xl p-6 flex gap-6 items-center h-full"
      >
        <div className="relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-[var(--gold-500)] mb-2">
            {product.name}
          </h3>
          <p className="text-white/70 mb-3">
            {product.description}
          </p>
          
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating || 0)
                      ? 'text-yellow-500 fill-current'
                      : 'text-gray-400'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-white/60">
              {product.rating?.toFixed(1)} ({product.reviews} reviews)
            </span>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-3">
          <div className="text-2xl font-bold text-[var(--gold-400)]">
            {currency}{product.price}
          </div>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                localToggleFavorite(product._id);
              }}
              className={`p-2 rounded-lg transition-colors ${
                localIsFavorite(product._id)
                  ? "bg-red-500/20 text-red-400"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <Heart className={`w-5 h-5 ${localIsFavorite(product._id) ? "fill-current" : ""}`} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCartHandler(product);
              }}
              className="px-4 py-2 bg-gradient-to-r from-[var(--gold-500)] to-[var(--gold-400)] text-black font-medium rounded-lg hover:from-[var(--gold-400)] hover:to-[var(--gold-300)] transition-all"
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  );

  if (loading) {
    return (
      <div className="min-h-screen px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Loading Header */}
          <div className="text-center mb-12">
            <div className="h-12 bg-white/10 rounded-xl mx-auto max-w-md mb-4 animate-pulse"></div>
            <div className="h-6 bg-white/10 rounded-xl mx-auto max-w-lg animate-pulse"></div>
          </div>
          
          {/* Loading Controls */}
          <div className="mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="h-12 bg-white/10 rounded-xl flex-1 max-w-md animate-pulse"></div>
            <div className="flex gap-3">
              <div className="h-12 w-32 bg-white/10 rounded-xl animate-pulse"></div>
              <div className="h-12 w-20 bg-white/10 rounded-xl animate-pulse"></div>
            </div>
          </div>
          
          {/* Loading Skeleton Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="card-lux rounded-2xl overflow-hidden"
              >
                <div className="h-64 bg-white/10 animate-pulse"></div>
                <div className="p-6 space-y-3">
                  <div className="h-6 bg-white/10 rounded animate-pulse"></div>
                  <div className="h-4 bg-white/10 rounded animate-pulse"></div>
                  <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse"></div>
                  <div className="flex justify-between items-center pt-2">
                    <div className="h-8 w-20 bg-white/10 rounded animate-pulse"></div>
                    <div className="h-10 w-24 bg-white/10 rounded animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold gold-gradient-text mb-4"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(245, 160, 0, 0.3)",
                "0 0 30px rgba(245, 160, 0, 0.5)",
                "0 0 20px rgba(245, 160, 0, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            🛍️ Our Collection
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Discover our handcrafted ladoos, made with the finest ingredients and traditional recipes
          </motion.p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-[var(--gold-500)] focus:outline-none transition-colors"
            />
          </div>

          <div className="flex gap-3">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:border-[var(--gold-500)] focus:outline-none transition-colors"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>

            {/* View Toggle */}
            <div className="flex bg-white/10 backdrop-blur-sm rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-[var(--gold-500)] text-black'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-[var(--gold-500)] text-black'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Products */}
        <AnimatePresence mode="wait">
          {filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16"
            >
              <p className="text-xl text-white/60">No products found matching your search.</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                  : 'space-y-6'
              }
            >
              {filteredProducts.map((product) =>
                viewMode === 'grid' ? (
                  <ProductGridCard key={product._id} product={product} />
                ) : (
                  <ProductListCard key={product._id} product={product} />
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Cart Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-gradient-to-r from-[var(--gold-500)] to-[var(--gold-400)] text-black rounded-full shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            <ShoppingCart className="w-6 h-6" />
            {useFavoritesStore.getState().ids.length > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {useFavoritesStore.getState().ids.length}
              </span>
            )}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}