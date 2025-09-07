'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MAIN_MENU_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function HeaderMenu() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Function to check if the current path matches a navigation item
  const isActive = (href: string) => {
    // Exact match
    if (pathname === href) return true;
    
    // Special case for products - also check if we're on product pages
    if (href === '/products') {
      return pathname === '/products' || pathname?.startsWith('/products/');
    }
    
    return false;
  };

  // Render simplified version on the server and client to prevent hydration mismatch
  return (
    <nav className="hidden md:block" suppressHydrationWarning>
      <ul className="flex items-center gap-6 text-sm">
        {MAIN_MENU_ITEMS.map((item) => (
          <li key={item.href} className="relative group">
            <Link
              href={item.href}
              className={`transition-colors ${isActive(item.href) ? "text-[var(--gold-300)]" : "text-white/80 hover:text-[var(--gold-300)]"}`}
              suppressHydrationWarning
            >
              {item.label}
            </Link>
            {/* Only render the underline animation after mounting to prevent hydration issues */}
            {isMounted && (
              <span
                className={`pointer-events-none absolute left-0 -bottom-1 h-[2px] rounded bg-[var(--gold-400)] transition-all duration-300 ${
                  isActive(item.href) ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full"
                }`}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}