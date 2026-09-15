import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUsTrade({ onOpenQuote }) {
  const points = [
    "State-of-the-art hot wash pure water system",
    "Hard-to-reach & high Velux window specialist",
    "6 / 8 / 12 weeks rotation schedules available",
    "All-year outdoor driveway & patio surface washing",
    "Guaranteed spot-free & streak-free finish",
    "No-obligation free quotes via Call, Text or WhatsApp"
  ];

  return (
    <section id="why-us" className="py-20 bg-white font-sans text-slate-900 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <h2 className="text-3xl sm:text-4xl font-heading font-black uppercase tracking-tight heading-underline mb-8">
          WHY CHOOSE PETER'S WINDOW CLEANING?
        </h2>

        <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
          Peter Reddin provides professional window and outdoor exterior cleaning services using advanced pure water hot wash equipment to keep your residential or commercial property pristine all year round.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left">
          {points.map((p, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-md border border-slate-200 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="font-bold text-sm text-slate-900">{p}</span>
            </div>
          ))}
        </div>

        <div>
          <button
            onClick={onOpenQuote}
            className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base px-10 py-4 rounded-md uppercase tracking-wider transition-colors shadow-md"
          >
            GET A NO OBLIGATION QUOTE
          </button>
        </div>

      </div>
    </section>
  );
}
