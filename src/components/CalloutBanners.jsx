import React from 'react';

export default function CalloutBanners({ onOpenQuote }) {
  return (
    <div className="font-sans">
      
      {/* Banner 1: GET A FREE PLUMBING & RENOVATION QUOTE */}
      <section className="relative bg-slate-950 text-white py-16 px-4 text-center overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero_luxury_bathroom.jpg" 
            alt="M&H Plumbing Quote Banner" 
            className="w-full h-full object-cover filter brightness-30 contrast-125"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-heading font-black uppercase tracking-tight">
            GET A FREE PLUMBING & RENOVATION QUOTE
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto">
            Thinking about renovating your bathroom or need expert plumbing in Liverpool & North West? Message M&H Plumbing & Heating today for a free quote!
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-md uppercase tracking-wider transition-colors shadow-lg"
            >
              GET A FREE QUOTE NOW
            </button>
          </div>
        </div>
      </section>

      {/* Banner 2: 100% SATISFACTION & TRANSPARENT PRICING */}
      <section className="bg-red-600 text-white py-16 px-4 text-center border-t border-red-700">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-heading font-black uppercase tracking-tight">
            100% SATISFACTION & GUARANTEED WORKMANSHIP
          </h2>
          <div className="w-12 h-1 bg-white mx-auto my-3" />
          <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Quality plumbing, precision tiling, and full bathroom renovations. Serving Liverpool, North West, and North Wales with competitive fixed prices.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="bg-slate-900 hover:bg-slate-950 text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-md uppercase tracking-wider transition-colors shadow-md border border-slate-800"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      </section>

      {/* Workmanship Photo Banner */}
      <section className="bg-slate-900 border-t border-slate-800">
        <div className="h-64 sm:h-80 w-full overflow-hidden relative">
          <img 
            src="/hero_luxury_bathroom.jpg" 
            alt="M&H Plumbing Installation Gallery" 
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>
      </section>

    </div>
  );
}
