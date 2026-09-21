import React from 'react';

export default function Hero({ onOpenQuote }) {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden py-16 lg:py-24">
      {/* Background Image: High-res authentic slate roof Irish residential estate */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
          alt="Evercrest Roofing Irish Estate Roof"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Vignette Overlay for Crisp White Typography Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl space-y-6 text-left">
          
          {/* Top Rating Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/90 text-white border border-emerald-500/40 text-xs font-bold font-heading shadow-md">
            <span>🏅</span>
            <span>Family-Owned Since 1998 • 4.9★ from 350+ Irish Reviews</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-heading">
            Trusted Irish <br />
            Roofing Company & <br />
            Exterior Contractor
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-base sm:text-lg font-normal leading-relaxed max-w-xl">
            Family-owned roofing, slate repairs, flat roofs, and gutters across Ireland. 
            Fully insured master trade contractor with up to 20-year guaranteed workmanship.
          </p>

          {/* Double CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button
              onClick={onOpenQuote}
              className="ic-btn-primary py-4 px-8 text-base shadow-xl"
            >
              <span>Get a Free Estimate</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <a
              href="tel:0871234567"
              className="px-6 py-4 rounded-full bg-white text-slate-900 font-bold font-heading text-base hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <svg className="w-5 h-5 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h32a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
              </svg>
              <span>(087) 123 4567</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
