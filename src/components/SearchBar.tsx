'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({ onSearch }: { onSearch?: (query: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <div ref={searchRef} className="relative">
      {isOpen ? (
        <div className="absolute right-0 top-0 w-64 bg-black/30 backdrop-blur-lg rounded-full ring-2 ring-white/30 z-50">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-2 pl-10 bg-transparent text-white placeholder-white/60 rounded-full focus:outline-none"
            />
            <Search 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60 cursor-pointer" 
              onClick={handleSearch}
            />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </form>
        </div>
      ) : null}
      
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
        aria-label="Open search"
      >
        <Search className="h-5 w-5 text-white/80" />
      </button>
    </div>
  );
}