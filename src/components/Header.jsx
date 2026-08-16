import React, { useState } from 'react';
import { Bath, Menu, X, ChevronRight } from 'lucide-react';

export default function Header({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-900/30 group-hover:scale-105 transition-transform duration-200">
              <Bath className="w-7 h-7 text-slate-950 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  DOM BATHROOMS
                </span>
                <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                  LTD
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide uppercase">
                Full Refurbishments & Transformations
              </p>
            </div>
          </a>

          {/* Desktop Nav Links (Image 2 style layout) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#before-after" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              Before & After <span className="bg-amber-500/20 text-amber-400 text-[10px] px-1.5 py-0.5 rounded font-bold">New</span>
            </a>
            <a href="#why-us" className="hover:text-amber-400 transition-colors">Why Choose Us</a>
            <a href="#calculator" className="hover:text-amber-400 transition-colors">Cost Estimator</a>
            <a href="#reviews" className="hover:text-amber-400 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 flex items-center gap-2 group text-sm active:scale-95"
            >
              <span>Get a free quote</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-4">
          <nav className="flex flex-col gap-3 font-semibold text-slate-300">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-amber-400">Services</a>
            <a href="#before-after" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-amber-400">Before & After</a>
            <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-amber-400">Why Choose Us</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-amber-400">Cost Estimator</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-amber-400">Reviews</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-amber-400">Contact</a>
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full bg-amber-500 text-slate-950 font-bold py-3 rounded-full shadow-md hover:bg-amber-400 transition-colors"
          >
            Get a free quote
          </button>
        </div>
      )}
    </header>
  );
}
