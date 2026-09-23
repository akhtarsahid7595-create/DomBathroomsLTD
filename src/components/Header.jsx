import React, { useState } from 'react';

export default function Header({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white border-b border-[#E7EBE9] z-50 h-[78px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-[6%] w-full flex justify-between items-center">
        
        {/* Brand Logo matching demo-6.html */}
        <a href="#" className="text-xl sm:text-2xl font-black text-[#101718] font-heading tracking-tight uppercase">
          EVERCREST <span className="text-[#6FB52C]">ROOFING</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-[#17201E] font-heading">
          <a href="#about" className="hover:text-[#6FB52C] transition-colors">About Us</a>
          <a href="#services" className="hover:text-[#6FB52C] transition-colors">Services</a>
          <a href="#areas" className="hover:text-[#6FB52C] transition-colors">Areas We Cover</a>
          <a href="#faq" className="hover:text-[#6FB52C] transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-[#6FB52C] transition-colors">Contact Us</a>
        </nav>

        {/* Free Quote CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenQuote}
            className="btn-jg text-xs sm:text-sm py-2.5 px-5"
          >
            FREE QUOTE
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#101718] hover:text-[#6FB52C] transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[78px] left-0 w-full bg-white border-b border-[#E7EBE9] p-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 font-bold text-[#17201E] text-base font-heading">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">About Us</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Services</a>
            <a href="#areas" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Areas We Cover</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">FAQ</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Contact Us</a>
          </nav>
          
          <div className="pt-2 flex flex-col gap-3">
            <a href="tel:0852242621" className="btn-outline-jg bg-[#101718] text-white w-full text-center text-sm py-3 font-bold">
              📞 CALL 085 224 2621
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="btn-jg w-full text-center text-sm py-3 font-bold"
            >
              GET A FREE QUOTE
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
