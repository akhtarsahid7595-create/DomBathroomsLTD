import React from 'react';
import { Star } from 'lucide-react';

export default function ReviewsTradeSection() {
  return (
    <section id="reviews" className="py-24 bg-white font-sans text-slate-900 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <span className="text-blue-600 font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
          Client Feedback
        </span>

        <h2 className="text-3xl sm:text-4xl font-heading font-black uppercase tracking-tight heading-underline mt-3 mb-8">
          WHAT OUR CLIENTS SAY
        </h2>

        {/* Google 5-Star Badge */}
        <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl inline-flex flex-col items-center gap-2 mb-10 shadow-sm">
          <span className="font-extrabold text-sm text-slate-800 uppercase tracking-wide">5 STAR RATED SERVICE</span>
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
        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md text-left max-w-xl mx-auto space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-md">
              P
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-slate-900">Patrick &amp; Mary W.</h4>
              <p className="text-xs text-slate-500">Verified Client Review</p>
            </div>
          </div>

          <div className="flex text-amber-400 gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>

          <p className="text-slate-700 text-sm leading-relaxed italic">
            "Peter and Suzanne do a fantastic job on our 8-week rotation schedule! The pure water hot wash system leaves hard-to-reach skylights and high Velux windows spotless with zero streaks. Punctual, reliable, and great value!"
          </p>
        </div>

        <div>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm py-3.5 px-8 rounded-full uppercase tracking-wider transition-colors shadow-md"
          >
            Review Us On Google
          </a>
        </div>

      </div>
    </section>
  );
}
