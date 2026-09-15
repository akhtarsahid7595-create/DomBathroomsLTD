import React from 'react';
import { ShieldCheck, Award, ThumbsUp } from 'lucide-react';

export default function TradeHero({ onOpenQuote }) {
  return (
    <section className="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero_luxury_bathroom.jpg" 
          alt="Peter's Window Cleaning Work Showcase" 
          className="w-full h-full object-cover filter brightness-40 contrast-125"
        />
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white uppercase leading-tight">
          WELCOME TO <span className="text-red-600">PETER'S WINDOW CLEANING</span>
        </h1>

        {/* Copywriting from Instagram posts */}
        <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          Hard-to-reach windows? We use a <strong className="text-white font-bold">state-of-the-art hot wash system</strong> for spot-free, crystal clear glass. Taking bookings on 6 / 8 / 12 weeks rotation schedule for all-year outdoor cleaning.
        </p>

        {/* Red CTA Button */}
        <div className="pt-4">
          <button
            onClick={onOpenQuote}
            className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-base sm:text-lg px-10 py-4 rounded-md uppercase tracking-wider transition-all duration-150 shadow-xl active:scale-95 border-2 border-red-500"
          >
            GET A FREE NO OBLIGATION QUOTE
          </button>
        </div>

        {/* Trust Badges */}
        <div className="pt-8 max-w-xl mx-auto">
          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-lg flex items-center justify-around text-xs font-bold uppercase tracking-wider text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-red-500" />
              <span>HOT WASH SYSTEM</span>
            </div>
            <div className="w-px h-6 bg-slate-800" />
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>HARD TO REACH WINDOWS</span>
            </div>
            <div className="w-px h-6 bg-slate-800" />
            <div className="flex items-center gap-2">
              <ThumbsUp className="w-5 h-5 text-emerald-500" />
              <span>6/8/12 WEEKS ROTATION</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
