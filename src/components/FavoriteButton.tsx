'use client';

import { useFavoritesStore } from "@/store/favorites";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function FavoriteButton() {
  const favoriteIds = useFavoritesStore((s) => s.ids);
  const count = favoriteIds.length;
  
  return (
    <Link 
      href="/favorites" 
      className="group relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:text-red-300 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
      suppressHydrationWarning
    >
      <Heart className="w-5 h-5 text-current transition-transform group-hover:scale-110 group-hover:fill-current" />
      {count > 0 && (
        <span 
          className="absolute -top-1 -right-1 bg-gradient-to-r from-red-400 to-pink-500 text-white h-5 min-w-5 px-1 rounded-full text-[10px] font-bold flex items-center justify-center shadow-lg"
          suppressHydrationWarning
        >
          {count > 99 ? '99+' : count}
        </span>
      )}
    </Link>
  );
}