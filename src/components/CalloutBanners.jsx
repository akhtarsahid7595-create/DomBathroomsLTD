import React from 'react';

export default function CalloutBanners({ onOpenQuote }) {
  return (
    <div className="font-sans">
      
      {/* Banner 1: GET A NO OBLIGATION CLEANING QUOTE */}
      <section className="relative bg-slate-950 text-white py-20 px-4 text-center overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero_luxury_bathroom.jpg" 
            alt="Peter's Window Cleaning Banner" 
            className="w-full h-full object-cover filter brightness-30 contrast-125"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-5">
          <h2 className="text-3xl sm:text-5xl font-heading font-black uppercase tracking-tight">
            GET A NO OBLIGATION CLEANING QUOTE
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Hard to reach windows or need outdoor power washing? Phone, text, WhatsApp or email Peter or Suzanne today!
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base px-10 py-4 rounded-full uppercase tracking-wider transition-all shadow-xl active:scale-95"
            >
              Book A Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Banner 2: 10% OFF GUTTER CLEANING SPECIAL OFFER (Royal Blue Block) */}
      <section className="bg-blue-600 text-white py-16 px-4 text-center border-t border-blue-700">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-amber-400 text-slate-950 font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
            SPECIAL OFFER
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black uppercase tracking-tight">
            NOW 10% OFF GUTTER CLEANING — QUOTE CODE: MLN9
          </h2>
          <div className="w-12 h-1 bg-white mx-auto my-3 rounded-full" />
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Take advantage of our gutter, fascia &amp; soffit cleaning offer. Book a 6, 8, or 12 weeks rotation schedule today for year-round spotless windows!
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="bg-slate-900 hover:bg-slate-950 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full uppercase tracking-wider transition-colors shadow-md border border-slate-800"
            >
              CLAIM YOUR 10% DISCOUNT
            </button>
          </div>
        </div>
      </section>

      {/* Photo Gallery Banner */}
      <section className="bg-slate-900 border-t border-slate-800">
        <div className="h-64 sm:h-80 w-full overflow-hidden relative">
          <img 
            src="/hero_luxury_bathroom.jpg" 
            alt="Peter's Window Cleaning Work Gallery" 
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>
      </section>

    </div>
  );
}
