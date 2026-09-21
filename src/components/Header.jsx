import React, { useState } from 'react';
import EvercrestLogo from './EvercrestLogo';

export default function Header({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white border-b border-slate-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          
          {/* Logo with compact sizing on small mobile viewports */}
          <a href="#" className="flex items-center group shrink-0">
            <EvercrestLogo variant="light" size="small" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-emerald-800">
              <a href="#services">Services</a>
              <svg className="w-4 h-4 text-slate-400 group-hover:text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-emerald-800">
              <a href="#areas">Areas We Serve</a>
              <svg className="w-4 h-4 text-slate-400 group-hover:text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <a href="#about" className="hover:text-emerald-800 transition-colors">About</a>
            <a href="#portfolio" className="hover:text-emerald-800 transition-colors">Portfolio</a>
            <a href="#reviews" className="hover:text-emerald-800 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-emerald-800 transition-colors">Contact</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:0871234567"
              className="ic-btn-phone text-xs sm:text-sm py-2.5 px-3.5 sm:px-5 hidden sm:inline-flex min-h-[44px] items-center"
            >
              <svg className="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h32a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
              </svg>
              <span>(087) 123 4567</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="ic-btn-primary text-xs sm:text-sm py-2.5 px-3.5 sm:px-6 hidden xs:inline-flex min-h-[44px] items-center"
            >
              <span>Get Free Estimate</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:text-emerald-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center border border-slate-200"
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

      {/* Enhanced Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-3 font-semibold text-slate-800 text-base">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-slate-100 flex items-center justify-between">
              <span>Services</span>
              <span className="text-slate-400">→</span>
            </a>
            <a href="#areas" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-slate-100 flex items-center justify-between">
              <span>Areas We Serve</span>
              <span className="text-slate-400">→</span>
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-slate-100 flex items-center justify-between">
              <span>About Us</span>
              <span className="text-slate-400">→</span>
            </a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-slate-100 flex items-center justify-between">
              <span>Portfolio & Gallery</span>
              <span className="text-slate-400">→</span>
            </a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-slate-100 flex items-center justify-between">
              <span>Client Reviews</span>
              <span className="text-slate-400">→</span>
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-slate-100 flex items-center justify-between">
              <span>Contact Us</span>
              <span className="text-slate-400">→</span>
            </a>
          </nav>
          
          <div className="pt-2 flex flex-col gap-3">
            <a href="tel:0871234567" className="ic-btn-phone w-full text-center text-sm py-3.5 font-bold min-h-[48px] flex items-center justify-center">
              📞 Call Direct: (087) 123 4567
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="ic-btn-primary w-full text-center text-sm py-3.5 font-bold min-h-[48px]"
            >
              Get a Free Estimate →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
