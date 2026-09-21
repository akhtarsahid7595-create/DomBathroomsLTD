import React, { useState } from 'react';

export default function Header({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Text Logo with Roof Icon */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
              </svg>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-heading block leading-none">
                EVERCREST <span className="text-emerald-400">ROOFING</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold block mt-0.5">
                LOCAL • RELIABLE • PROFESSIONAL
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#services" className="hover:text-emerald-400 transition-colors">Roofing Services</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">Who We Are</a>
            <a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Choose Us</a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">Packages</a>
            <a href="#gallery" className="hover:text-emerald-400 transition-colors">Work Gallery</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="pill-btn-emerald text-sm py-2.5 px-6 hidden sm:inline-flex"
            >
              Get Free Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* Animated Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800/80 text-slate-200 hover:text-emerald-400 border border-slate-700/60 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dedicated Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F17]/98 backdrop-blur-xl border-b border-slate-800 px-6 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-4 text-base font-semibold text-slate-200">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/60 hover:text-emerald-400 transition-colors"
            >
              Roofing Services
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/60 hover:text-emerald-400 transition-colors"
            >
              Who We Are
            </a>
            <a 
              href="#why-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/60 hover:text-emerald-400 transition-colors"
            >
              Why Choose Us
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/60 hover:text-emerald-400 transition-colors"
            >
              Service Packages
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/60 hover:text-emerald-400 transition-colors"
            >
              Project Gallery
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/60 hover:text-emerald-400 transition-colors"
            >
              Contact Us
            </a>
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full pill-btn-emerald py-3 text-center"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
