import React from 'react';
import { ShieldCheck, Award, ThumbsUp } from 'lucide-react';

export default function TradeHero({ onOpenQuote }) {
  return (
    <section className="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden">
      {/* Background Image with Dark Trade Vignette (Image 2 style) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero_luxury_bathroom.jpg" 
          alt="DOM BATHROOMS LTD Trade Work" 
          className="w-full h-full object-cover filter brightness-50 contrast-110"
        />
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        
        {/* Main Heading (Image 2 exact style) */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white uppercase leading-tight">
          WELCOME TO <span className="text-red-600">DOM BATHROOMS LTD</span>
        </h1>

        {/* Copywriting */}
        <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          From stripping out old bathrooms, through the complete refurbishment process, to a fresh, modern and beautifully finished new space — <strong className="text-white font-bold">we take care of the whole transformation.</strong>
        </p>

        {/* Red CTA Button (Matching Image 2 red button design) */}
        <div className="pt-4">
          <button
            onClick={onOpenQuote}
            className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-base sm:text-lg px-10 py-4 rounded-md uppercase tracking-wider transition-all duration-150 shadow-xl active:scale-95 border-2 border-red-500"
          >
            GET A FREE QUOTE
          </button>
        </div>

        {/* Trust Badges Bar Below Button (Matching Image 2 Trustpilot/Checkatrade Box) */}
        <div className="pt-8 max-w-xl mx-auto">
          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-lg flex items-center justify-around text-xs font-bold uppercase tracking-wider text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-red-500" />
              <span>FULLY INSURED</span>
            </div>
            <div className="w-px h-6 bg-slate-800" />
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>QUALITY FINISH</span>
            </div>
            <div className="w-px h-6 bg-slate-800" />
            <div className="flex items-center gap-2">
              <ThumbsUp className="w-5 h-5 text-emerald-500" />
              <span>100% SATISFACTION</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
