'use client';

import { useCartStore } from "@/store/cart";
import { useFavoritesStore } from "@/store/favorites";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import toast from "react-hot-toast";

type Props = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  rating?: number;
  originalPrice?: number;
  discountPercent?: number;
};

export default function ProductCard({ 
  _id, 
  name, 
  description, 
  price, 
  image,
  rating = 4.8,
  originalPrice,
  discountPercent
}: Props) {
  const addItem = useCartStore((s) => s.addItem);
  const currency = process.env.NEXT_PUBLIC_CURRENCY ?? "₹";
  const favoritesStore = useFavoritesStore();
  const { addFavorite, removeFavorite, isFavorite } = favoritesStore;
  const isFav = isFavorite(_id);
  
  const handleAddToCart = () => {
    addItem({ productId: _id, name, price, quantity: 1, image });
    
    // Show success toast
    toast.success(`${name} added to cart!`, {
      style: {
        background: 'rgba(59, 42, 32, 0.95)',
        color: '#f7ede3',
        border: '1px solid #f59e0b'
      },
      duration: 3000,
      icon: '🛒'
    });
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFav) {
      removeFavorite(_id);
    } else {
      addFavorite(_id);
    }
    
    // Show feedback toast
    if (isFav) {
      toast.success('Removed from favorites', {
        style: {
          background: 'rgba(59, 42, 32, 0.95)',
          color: '#f7ede3',
          border: '1px solid #f59e0b'
        },
        duration: 2000
      });
    } else {
      toast.success('Added to favorites!', {
        style: {
          background: 'rgba(59, 42, 32, 0.95)',
          color: '#f7ede3',
          border: '1px solid #f59e0b'
        },
        duration: 2000
      });
    }
  };

  return (
    <Link href={`/products/${_id}`} className="block h-full">
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
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-900/20 via-yellow-800/15 to-orange-900/20 backdrop-blur-xl border border-amber-500/20 hover:border-amber-400/40 transition-all duration-500 h-full flex flex-col cursor-pointer"
        >
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
        {image && (
          <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-t-2xl bg-gradient-to-br from-amber-50/10 to-orange-100/10">
            <Image 
              src={image} 
              alt={name} 
              fill 
              className="object-cover transition-all duration-700 group-hover:scale-110" 
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Discount Badge */}
            {discountPercent && (
              <div className="absolute top-3 left-3 px-2 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full shadow-lg">
                {discountPercent}% OFF
              </div>
            )}
            
            {/* Favorite Button - Always visible, no overlay */}
            <button
              onClick={handleToggleFavorite}
              className={`absolute top-3 right-3 w-9 h-9 rounded-full backdrop-blur-md border transition-all duration-300 flex items-center justify-center ${
                isFav 
                  ? "bg-red-500/90 border-red-400 text-white shadow-lg shadow-red-500/25" 
                  : "bg-white/20 border-white/30 text-white hover:bg-red-500/80 hover:border-red-400 hover:text-white"
              }`}
              aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart className={`w-4 h-4 transition-all duration-300 ${isFav ? "fill-current" : ""}`} />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 p-4 sm:p-6 flex flex-col">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-amber-400 fill-current' : 'text-gray-400'}`} 
                />
              ))}
            </div>
            <span className="text-xs text-amber-300 font-medium">{rating}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-amber-100 mb-2 line-clamp-2 group-hover:text-amber-50 transition-colors duration-300">
            {name}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-amber-200/80 line-clamp-2 mb-4 flex-1 leading-relaxed">
            {description}
          </p>

          {/* Price Section */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold text-amber-300">
                {currency}{price.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              {originalPrice && (
                <span className="text-sm text-amber-400/60 line-through">
                  {currency}{originalPrice.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                </span>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleAddToCart();
            }}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-amber-900 font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/25 flex items-center justify-center group/btn"
          >
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
      </Tilt>
    </Link>
  );
}