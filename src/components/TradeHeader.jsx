import React, { useState } from 'react';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';

export default function TradeHeader({ onOpenQuote }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Official Logo Image (Matching User Provided Logo Image) */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src="/dom_logo.png" 
              alt="DOM BATHROOMS LTD Logo" 
              className="h-14 sm:h-16 w-auto object-contain py-1"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-wide uppercase text-slate-200">
            <a href="#" className="hover:text-red-500 transition-colors">Home</a>
            <a href="#services" className="hover:text-red-500 transition-colors">Services</a>
            <a href="#why-us" className="hover:text-red-500 transition-colors">Why Choose Us</a>
            <a href="#process" className="hover:text-red-500 transition-colors">Our Process</a>
            <a href="#reviews" className="hover:text-red-500 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-red-500 transition-colors">Contact Us</a>
          </nav>

          {/* Action Button & Hamburger (Exact Image 2 Header Layout) */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenQuote}
              className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-md uppercase tracking-wider transition-all duration-150 shadow-md active:scale-95 flex items-center gap-1.5"
            >
              <span>GET A QUOTE</span>
            </button>

            {/* Red Hamburger Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2.5 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-4 text-center">
          <nav className="flex flex-col gap-4 font-bold text-sm text-white uppercase tracking-wider">
            <a href="#" onClick={() => setMenuOpen(false)} className="py-2 hover:text-red-500">Home</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="py-2 hover:text-red-500">Services</a>
            <a href="#why-us" onClick={() => setMenuOpen(false)} className="py-2 hover:text-red-500">Why Choose Us</a>
            <a href="#process" onClick={() => setMenuOpen(false)} className="py-2 hover:text-red-500">Our Process</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)} className="py-2 hover:text-red-500">Reviews</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="py-2 hover:text-red-500">Contact Us</a>
          </nav>
          
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <a href="tel:07700900123" className="flex items-center justify-center gap-2 text-red-500 font-extrabold text-base">
              <Phone className="w-4 h-4" /> 07700 900123
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
