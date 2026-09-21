import React from 'react';

export default function Hero({ onOpenQuote }) {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center bg-slate-900 overflow-hidden py-12 sm:py-16 lg:py-24">
      {/* Background Image: AI-generated authentic luxury traditional Irish house with natural slate roof */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_roof_banner.jpg"
          alt="Evercrest Contracting Residential Roof"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft subtle left gradient overlay for crisp white typography readability while keeping house bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl space-y-4 sm:space-y-6 text-left">
          
          {/* Top Rating Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-800 text-white border border-emerald-500/40 text-[11px] sm:text-xs font-bold font-heading shadow-md max-w-full">
            <span>🏅</span>
            <span className="truncate">Family-Owned Since 1998 • 4.9★ (350+ Reviews)</span>
          </div>

          {/* H1 Headline - Mobile Scaled */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] font-heading drop-shadow-md">
            Trusted Irish <br />
            Roofing Company & <br />
            Exterior Contractor
          </h1>

          {/* Subtitle */}
          <p className="text-slate-100 text-sm sm:text-lg font-normal leading-relaxed max-w-xl drop-shadow">
            Family-owned roofing, slate repairs, flat roofs, and gutters across Ireland. 
            Fully insured master trade contractor with up to 20-year guaranteed workmanship.
          </p>

          {/* Double CTA Buttons - Full Width Stacked on Mobile */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4 w-full">
            <button
              onClick={onOpenQuote}
              className="ic-btn-primary py-4 px-6 sm:px-8 text-sm sm:text-base shadow-xl w-full sm:w-auto min-h-[48px] justify-center"
            >
              <span>Get a Free Estimate</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <a
              href="tel:0871234567"
              className="px-6 py-4 rounded-full bg-white text-slate-900 font-bold font-heading text-sm sm:text-base hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-lg border border-slate-200 w-full sm:w-auto min-h-[48px]"
            >
              {/* Bulletproof Phone SVG Icon */}
              <svg className="w-5 h-5 text-emerald-800 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.52 21 3 13.48 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.37 2.4z" />
              </svg>
              <span>(087) 123 4567</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
