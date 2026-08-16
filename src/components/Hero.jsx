import React from 'react';
import { CheckCircle2, Star, ArrowRight, ShieldCheck, Clock, MessageSquare, Tag, ThumbsUp } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const highlights = [
    { title: "Full bathroom refurbishments", desc: "Complete strip-out, plumbing, structural prep & luxury fit", icon: CheckCircle2 },
    { title: "Professional & tidy workmanship", desc: "Clean workspace every day, floor protection & dust control", icon: CheckCircle2 },
    { title: "Fast turnaround", desc: "Efficient scheduling so your home is back to normal quickly", icon: CheckCircle2 },
    { title: "Quality finish", desc: "Meticulous tile alignment, flawless sealing & luxury hardware", icon: CheckCircle2 },
    { title: "Clear and honest communication", desc: "Daily progress updates, no hidden surprises or sudden costs", icon: CheckCircle2 },
    { title: "Competitive prices", desc: "Transparent fixed-price quotations tailored to your budget", icon: CheckCircle2 },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 overflow-hidden py-16 lg:py-24">
      {/* Background Image with Dark Vignette Overlay (Image 2 style) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero_luxury_bathroom.jpg" 
          alt="Luxury Bathroom Transformation by DomBathroomsLTD" 
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/60 lg:to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Main Copy (Image 2 Inspired Typography) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-semibold text-xs uppercase tracking-wider backdrop-blur-md">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>DomBathroomsLTD Transformation Specialists</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.1] tracking-tight">
              Trustworthy & professional bathroom renovators
            </h1>

            {/* Handwritten script style accent line (Image 2 matching) */}
            <p className="font-script text-3xl sm:text-4xl text-pink-400 font-bold tracking-wide transform -rotate-1 pl-1">
              Stripping Out • Refurbishing • Beautiful Finish ♥
            </p>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              From stripping out the old bathroom, through the complete refurbishment process, to a fresh, modern and beautifully finished new space — <strong className="text-white font-semibold">we take care of the whole transformation.</strong>
            </p>

            {/* CTA Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-white text-slate-950 hover:bg-slate-100 font-extrabold px-8 py-4 rounded-full shadow-2xl shadow-white/20 transition-all duration-200 text-base flex items-center justify-center gap-3 group active:scale-95"
              >
                <span>Get a free quote</span>
                <ArrowRight className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#before-after"
                className="bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold px-6 py-4 rounded-full transition-all duration-200 text-base text-center backdrop-blur-md"
              >
                View Transformations
              </a>
            </div>

            {/* Quote badge */}
            <div className="pt-2 flex items-center gap-3 text-amber-300/90 text-sm font-semibold italic">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span>"Quality work. Great results. Happy customers."</span>
            </div>
          </div>

          {/* Right Column - Feature Checkmarks Box (Exact Image 1 Checkmarks + Image 2 right list) */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-700/60 relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all" />
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">Why DomBathroomsLTD?</h3>
                  <p className="text-xs text-slate-400">Complete peace of mind for your refurbishment</p>
                </div>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Guaranteed
                </span>
              </div>

              {/* List from Instagram Post (Image 1) */}
              <ul className="space-y-4">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 group/item">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30 group-hover/item:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-slate-950" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover/item:text-amber-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Bottom Quote Banner */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 bg-slate-900/60 -mx-6 -mb-6 p-4 rounded-b-3xl flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold">Thinking about transforming your bathroom?</span>
                <button
                  onClick={onOpenBooking}
                  className="text-amber-400 font-bold hover:underline flex items-center gap-1"
                >
                  Book Free Survey &rarr;
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
