import Link from 'next/link';
import { NAVIGATION_LINKS } from '@/constants/navigation';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-950 via-yellow-900 to-orange-950 border-t border-amber-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-left">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent mb-4">
              Aurum Delights
            </h3>
            <p className="text-sm text-amber-200 mb-4">
              Crafting premium baked goods with passion and quality ingredients since 2025.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-amber-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href={NAVIGATION_LINKS.SHOP} className="text-amber-200/80 hover:text-amber-100 transition-colors">Products</Link></li>
              <li><Link href={NAVIGATION_LINKS.ABOUT} className="text-amber-200/80 hover:text-amber-100 transition-colors">About Us</Link></li>
              <li><Link href={NAVIGATION_LINKS.CART} className="text-amber-200/80 hover:text-amber-100 transition-colors">Cart</Link></li>
              <li><Link href={NAVIGATION_LINKS.CONTACT} className="text-amber-200/80 hover:text-amber-100 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-amber-100 mb-4">Contact Us</h4>
            <div className="text-amber-200/80 space-y-2">
              <p>204, Satyam Apartment, Vishwakarma Nagar</p>
              <p>Nagpur, Maharashtra, India, 440027</p>
              <p>Aurum.delights1509@gmail.com</p>
              <p>+91 9145477577</p>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-amber-700/30 text-xs sm:text-sm text-amber-400/80">
          <p>© {new Date().getFullYear()} Aurum Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}