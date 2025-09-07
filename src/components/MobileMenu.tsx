"use client";

import { MOBILE_MENU_ITEMS } from "@/constants/navigation";
import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function MobileMenu({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const pathname = usePathname();
  
  // Function to check if the current path matches a navigation item
  const isActive = (href: string) => {
    // Exact match
    if (pathname === href) return true;
    
    // Special case for shop - also check if we're on product pages
    if (href === '/products') {
      return pathname === '/products' || pathname?.startsWith('/products/');
    }
    
    return false;
  };

  return (
    <div className="md:hidden">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="border-t border-white/10 bg-gradient-to-b from-amber-950/90 to-amber-900/80 backdrop-blur-xl"
        >
          <div className="px-4 py-6 flex flex-col gap-2">
            {MOBILE_MENU_ITEMS.map((i, index) => (
              <motion.div
                key={i.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href={i.href} 
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-xl transition-all duration-300 ${
                    isActive(i.href) 
                      ? "bg-amber-500/20 text-amber-300 border-l-4 border-amber-500 shadow-lg" 
                      : "text-white/80 hover:bg-amber-500/10 hover:text-amber-200"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${isActive(i.href) ? "bg-amber-500" : "bg-amber-500/30"}`}></span>
                    {i.label}
                  </span>
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: MOBILE_MENU_ITEMS.length * 0.1 }}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <SignedOut>
                <Link 
                  href="/sign-in" 
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 rounded-xl text-white/80 hover:bg-amber-500/10 hover:text-amber-200 transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500/30"></span>
                    Login
                  </span>
                </Link>
              </SignedOut>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}