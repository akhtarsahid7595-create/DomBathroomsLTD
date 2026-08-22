import React from 'react';
import { Play } from 'lucide-react';

export default function ProcessVideoSection({ onOpenQuote }) {
  return (
    <section id="process" className="py-20 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight heading-underline">
            BEFORE ➔ STRIP-OUT ➔ FINAL RESULT!
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            See how M&H Plumbing & Heating transforms old bathrooms across Liverpool & North West.
          </p>
        </div>

        {/* Video Player Frame Container */}
        <div className="relative bg-black rounded-lg border-2 border-slate-800 overflow-hidden shadow-2xl group max-w-4xl mx-auto">
          <div className="relative aspect-video w-full flex items-center justify-center bg-slate-900">
            <img 
              src="/hero_luxury_bathroom.jpg" 
              alt="M&H Plumbing & Heating Renovation Showcase" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity"
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <button 
                onClick={onOpenQuote}
                className="w-20 h-20 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-2xl transition-transform transform hover:scale-110 active:scale-95"
                aria-label="Play Showcase"
              >
                <Play className="w-10 h-10 fill-white translate-x-0.5" />
              </button>
              <span className="bg-slate-900/90 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-slate-700">
                M&H PLUMBING SHOWCASE
              </span>
            </div>
          </div>

          <div className="bg-slate-900 p-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-300 uppercase">
            <span>M&H PLUMBING & HEATING • LIVERPOOL & NORTH WEST</span>
            <button 
              onClick={onOpenQuote}
              className="text-red-500 hover:underline"
            >
              BOOK YOUR FREE SURVEY &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
