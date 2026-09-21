import React from 'react';

export default function WhoWeAre({ onOpenQuote }) {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider font-heading">
          <span>ABOUT EVERCREST CONTRACTING</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
          A Full-Service Roofing Company <br />
          Serving Homes & Businesses Across Ireland
        </h2>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
          Evercrest Contracting is a family-owned roofing company and full-service exterior contractor based in Ireland. 
          We replace and repair natural Irish slate, clay tiles, and flat rubber roofs, as well as installing dry verge systems, 
          replacement windows, seamless gutters, soffit and fascia, skylights, and storm lead work.
        </p>

        <p className="text-slate-500 text-sm leading-relaxed">
          As a certified trade contractor with decades of hands-on local experience, we offer comprehensive manufacturer and workmanship warranties up to 20 years on qualifying systems. Storm damage and leak calls are common in Irish weather, so we respond fast to secure your home.
        </p>

        <div className="pt-4 flex justify-center gap-4">
          <button onClick={onOpenQuote} className="ic-btn-primary text-sm py-3.5 px-8">
            Get a Free Estimate →
          </button>
        </div>

      </div>
    </section>
  );
}
