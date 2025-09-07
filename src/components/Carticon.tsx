'use client';

import { useCartStore } from "@/store/cart";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Carticon() {
  const items = useCartStore((state) => state.items);
  const count = items.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <Link 
      href="/cart" 
      className="group relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-white/10"
      suppressHydrationWarning
    >
      <ShoppingBag className="w-5 h-5 text-current transition-transform group-hover:scale-110" />
      {count > 0 && (
        <span 
          className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900 h-5 min-w-5 px-1 rounded-full text-[10px] font-bold flex items-center justify-center shadow-lg"
          suppressHydrationWarning
        >
          {count > 99 ? '99+' : count}
        </span>
      )}
    </Link>
  );
}