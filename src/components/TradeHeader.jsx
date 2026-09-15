import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function TradeHeader({ onOpenQuote }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo (Crisp Desktop Size) */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <img 
              src="/peter_logo.svg" 
              alt="Peter's Window Cleaning Services Logo" 
              className="h-11 sm:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav Links (Clean Spacing, No Wrap) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold text-slate-700 tracking-wide uppercase">
            <a href="#" className="hover:text-blue-600 transition-colors whitespace-nowrap">Home</a>
            <a href="#services" className="hover:text-blue-600 transition-colors whitespace-nowrap">Window Cleaning</a>
            <a href="#services" className="hover:text-blue-600 transition-colors whitespace-nowrap flex items-center gap-1.5">
              <span>Gutter Cleaning</span>
              <span className="bg-blue-100 text-blue-700 border border-blue-200 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full lowercase">
                10% off
              </span>
            </a>
            <a href="#services" className="hover:text-blue-600 transition-colors whitespace-nowrap">Exterior Services</a>
            <a href="#why-us" className="hover:text-blue-600 transition-colors whitespace-nowrap">About Us</a>
            <a href="#reviews" className="hover:text-blue-600 transition-colors whitespace-nowrap">Testimonials</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors whitespace-nowrap">Contact</a>
          </nav>

          {/* Primary Action Pill Button (Fixed Desktop Padding, No Overflow) */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-blue-600/20 active:scale-95 whitespace-nowrap"
            >
              Book A Consultation
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 text-center shadow-lg">
          <nav className="flex flex-col gap-3 font-semibold text-xs text-slate-800 uppercase tracking-wider">
            <a href="#" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-600">Home</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-600">Window Cleaning</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-600">Gutter Cleaning (10% Off)</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-600">Exterior Services</a>
            <a href="#why-us" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-600">About Us</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-600">Testimonials</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="py-2 hover:text-blue-600">Contact</a>
          </nav>
          
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <button
              onClick={() => { setMenuOpen(false); onOpenQuote(); }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-full text-xs uppercase shadow-md"
            >
              Book A Consultation
            </button>
            <a href="tel:0867858590" className="flex items-center justify-center gap-2 text-blue-600 font-bold text-xs pt-1">
              <Phone className="w-3.5 h-3.5" /> 086 785 8590
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
