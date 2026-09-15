import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Phone } from 'lucide-react';

export default function TradeHero({ onOpenQuote }) {
  return (
    <section className="relative bg-slate-950 text-white min-h-[80vh] flex flex-col justify-between overflow-hidden font-sans">
      
      {/* Full-Bleed Background Image (Exact Image 1 Hero Style) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero_luxury_bathroom.jpg" 
          alt="Peter's Window Cleaning Work Showcase" 
          className="w-full h-full object-cover filter brightness-60 contrast-115"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />
      </div>

      {/* Centered Hero Content (100% Matching Image 1 Headline & Buttons Layout) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center my-auto py-20 lg:py-28 space-y-8">
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white leading-[1.15]">
          Domestic &amp; Commercial <br className="hidden sm:inline" />
          <span className="text-blue-400">Window Cleaning Services</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-200 text-lg sm:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
          Bespoke Traditional &amp; Reach &amp; Wash Systems For Homes &amp; Workplaces
        </p>

        {/* 2 Side-by-Side Pill CTA Buttons (Exact Image 1 Buttons Layout) */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-full shadow-2xl transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Book A Consultation</span>
          </button>

          <a
            href="#services"
            className="w-full sm:w-auto bg-blue-900/60 hover:bg-blue-800/80 text-white border border-blue-400/50 font-bold text-base px-8 py-4 rounded-full transition-all text-center backdrop-blur-md"
          >
            View Cleaning Services
          </a>

        </div>

        {/* Quick Flyer Badges */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-extrabold text-blue-200 uppercase tracking-wider">
          <span className="flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-700 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-blue-400" /> Fully Insured
          </span>
          <span className="flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-700 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-blue-400" /> VAT Registered
          </span>
          <span className="flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-700 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-blue-400" /> 6 / 8 / 12 Weeks Rotations
          </span>
        </div>

      </div>

      {/* Bottom Announcement Banner Strip (Exact Image 1 Bottom Bar Layout) */}
      <div className="relative z-10 bg-blue-900/90 border-t border-blue-700/60 py-3.5 px-4 text-center text-xs sm:text-sm font-bold text-white tracking-wide backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
          <span>We have state-of-the-art pure water hot wash solutions for hard-to-reach windows &amp; Velux skylights!</span>
        </div>
      </div>

    </section>
  );
}
