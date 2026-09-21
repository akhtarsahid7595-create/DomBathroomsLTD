import React from 'react';

export default function Hero({ onOpenQuote }) {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#0B0F17] overflow-hidden py-16 lg:py-24 border-b border-slate-800/80">
      {/* High-Res Roof Background Image with Multi-stage Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=2070&auto=format&fit=crop"
          alt="Evercrest Roofing Slate Roof Ireland"
          className="w-full h-full object-cover object-center brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17] via-[#0B0F17]/90 to-[#0B0F17]/70 lg:to-[#0B0F17]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-[#0B0F17]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: High Luxury Contrast Headline & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                PROUDLY IRISH & LOCALLY OWNED ☘️
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-none font-heading">
                STRONG ROOFS. <br />
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">
                  SAFE HOMES.
                </span>
              </h1>
              <p className="font-script text-3xl sm:text-4xl text-emerald-400 font-normal pt-2">
                Built for Ireland.
              </p>
            </div>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl font-light leading-relaxed">
              From emergency leaks to complete slate re-roofing, Evercrest Roofing delivers 
              unmatched craftsmanship built to withstand harsh Irish weather. Fully insured, local, and 100% guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button onClick={onOpenQuote} className="pill-btn-emerald text-base py-4 px-8">
                <span>GET A FREE QUOTE</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <a 
                href="#services" 
                className="pill-btn-outline text-base py-4 px-8 text-center"
              >
                View Services
              </a>
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold text-sm">✓</span>
                <span>No Obligation Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold text-sm">✓</span>
                <span>24/7 Emergency Call Out</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold text-sm">✓</span>
                <span>20-Year Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Checkmark Card List (Pattern 1) */}
          <div className="lg:col-span-5">
            <div className="obsidian-card p-6 sm:p-8 backdrop-blur-xl border border-emerald-500/20 bg-[#131924]/90 shadow-2xl relative">
              <div className="absolute -top-3 right-6 badge-gold shadow-md">
                100% GUARANTEED
              </div>

              <h2 className="text-xl font-bold text-white mb-2 font-heading">
                Our Expert Services
              </h2>
              <p className="text-xs text-slate-400 mb-6">
                Complete roofing & exterior solutions for homes across Ireland.
              </p>

              <ul className="space-y-3.5">
                {[
                  "Roof Repairs & Full Replacement",
                  "Flat Roofing Specialists (EPDM & Felt)",
                  "Dry Verge & Ridge Systems",
                  "Chimney & Valley Repairs",
                  "Roof Cleaning & Biological Treatment",
                  "UPVC Fascia, Soffit & Guttering",
                  "24/7 Emergency Call Out Service"
                ].map((service, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-200 group">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                      ✓
                    </span>
                    <span className="font-medium">{service}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Need Urgent Repair?</span>
                  <span className="text-sm font-bold text-white">Call 24/7 Dispatch</span>
                </div>
                <button
                  onClick={onOpenQuote}
                  className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500 hover:text-black transition-colors text-xs font-bold"
                >
                  Contact Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
