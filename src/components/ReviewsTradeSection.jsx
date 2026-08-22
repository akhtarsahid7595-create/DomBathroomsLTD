import React from 'react';
import { Star } from 'lucide-react';

export default function ReviewsTradeSection() {
  return (
    <section id="reviews" className="py-20 bg-white font-sans text-slate-900 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <h2 className="text-3xl sm:text-4xl font-heading font-black uppercase tracking-tight heading-underline mb-8">
          WHAT OUR CLIENTS SAY
        </h2>

        {/* Google 5-Star Badge */}
        <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg inline-flex flex-col items-center gap-2 mb-10 shadow-sm">
          <span className="font-extrabold text-sm text-slate-800 uppercase tracking-wide">5 STAR RATED ON</span>
          <div className="flex text-amber-400 gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>
          <div className="flex items-center gap-1 font-bold text-xs text-slate-700">
            <span className="text-blue-600 font-extrabold text-base">G</span>
            <span className="text-red-600 font-extrabold text-base">o</span>
            <span className="text-amber-500 font-extrabold text-base">o</span>
            <span className="text-blue-600 font-extrabold text-base">g</span>
            <span className="text-green-600 font-extrabold text-base">l</span>
            <span className="text-red-600 font-extrabold text-base">e</span>
            <span className="ml-1 text-slate-500 font-semibold">(5.0/5.0)</span>
          </div>
        </div>

        {/* Customer Review Card */}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-lg border border-slate-200 shadow-md text-left max-w-xl mx-auto space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-sm">
              M
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-slate-900">Michael & Sarah T.</h4>
              <p className="text-xs text-slate-500">Liverpool • Verified Google Review</p>
            </div>
          </div>

          <div className="flex text-amber-400 gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>

          <p className="text-slate-700 text-sm leading-relaxed italic">
            "M&H Plumbing & Heating completely renovated our bathroom and carried out all precision tiling and pipework. Outstanding quality finish, fast turnaround, clean workspace every day, and very competitive prices!"
          </p>
        </div>

        <div>
          <a
            href="#contact"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm py-3 px-8 rounded uppercase tracking-wider transition-colors shadow-sm"
          >
            REVIEW US ON GOOGLE
          </a>
        </div>

      </div>
    </section>
  );
}
