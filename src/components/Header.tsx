'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Carticon from "./Carticon";
import Container from "./Container";
import FavoriteButton from "./FavoriteButton";
import HeaderMenu from './HeaderMenu';
import Logo from "./Logo";
import MobileMenu from './MobileMenu';
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";
import { Button } from './ui/button';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-40 overflow-hidden"
      suppressHydrationWarning
    >
      {/* Subtle glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
          
      <div className="relative z-10 py-4 px-4 sm:px-6">
        <Container className="flex items-center justify-between">
          {/* Left section - Mobile Menu Toggle and Logo */}
          <div className="flex items-center gap-3">
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full border border-white/20"
                suppressHydrationWarning
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
            <Logo />
          </div>

          {/* Center section - Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <HeaderMenu />
          </div>

          {/* Right section - Navigation Actions */}
          <div className="flex items-center gap-3 relative">
            {/* Desktop Navigation Actions */}
            <div className="hidden md:flex items-center gap-3 relative overflow-visible">
              <div className="relative">
                <SearchBar />
              </div>
              <Carticon />
              <FavoriteButton />
              <SignIn />
            </div>
            
            {/* Mobile Navigation Actions */}
            <div className="flex md:hidden items-center gap-2">
              <div className="relative">
                <SearchBar />
              </div>
              <Carticon />
              <FavoriteButton />
              <SignIn />
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      </AnimatePresence>
    </motion.header>
  );
}