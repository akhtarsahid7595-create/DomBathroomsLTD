import React, { useState } from 'react';
import { Menu, X, Phone, Droplet } from 'lucide-react';

export default function TradeHeader({ onOpenQuote }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Brand Logo (White & Blue Theme) */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md group-hover:bg-blue-700 transition-colors">
              <Droplet className="w-7 h-7 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-heading font-black text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  PETER'S
                </span>
                <span className="bg-blue-100 text-blue-700 text-[10px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">
                  SERVICES
                </span>
              </div>
              <p className="text-[10px] font-extrabold text-blue-600 tracking-wider uppercase">
                Window &amp; Exterior Cleaning
              </p>
            </div>
          </a>

          {/* Desktop Nav Links (Matching Image 1 Clean Header Layout) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-semibold tracking-wide text-slate-700">
            <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Window Cleaning</a>
            <a href="#services" className="hover:text-blue-600 transition-colors flex items-center gap-1">
              Gutter Cleaning <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.2 rounded">10% OFF</span>
            </a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Exterior Washing</a>
            <a href="#why-us" className="hover:text-blue-600 transition-colors">Why Choose Us</a>
            <a href="#reviews" className="hover:text-blue-600 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* Primary Action Button (Matching Image 1 Pill Button) */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenQuote}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-150 shadow-md active:scale-95 hidden sm:inline-flex items-center gap-1.5"
            >
              <span>Book A Consultation</span>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-900 text-white border-b border-slate-800 px-6 py-6 space-y-4 text-center">
          <nav className="flex flex-col gap-4 font-bold text-sm uppercase tracking-wider">
            <a href="#" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-400">Home</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-400">Window Cleaning</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-400">Gutter Cleaning (10% Off)</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-400">Exterior Washing</a>
            <a href="#why-us" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-400">Why Choose Us</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-400">Reviews</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-400">Contact</a>
          </nav>
          
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <button
              onClick={() => { setMenuOpen(false); onOpenQuote(); }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-full text-xs uppercase"
            >
              Book A Consultation
            </button>
            <a href="tel:0867858590" className="flex items-center justify-center gap-2 text-blue-400 font-extrabold text-base">
              <Phone className="w-4 h-4" /> 086 785 8590
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
