import React from 'react';

export default function WhoWeAre({ onOpenQuote }) {
  return (
    <section id="about" className="py-20 bg-[#0B0F17] relative overflow-hidden border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Credentials */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <span>Who We Are</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Proudly Irish. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                Locally Owned Roofing Specialists.
              </span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-light">
              At <strong className="text-white font-semibold">Evercrest Roofing</strong>, we understand Irish weather better than anyone. From Atlantic storm damage in winter to summer roof maintenance, our team brings decades of local hands-on experience in traditional slate, modern tile, dry verge systems, and flat roofing.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              We never cut corners or use low-grade materials. Every project—whether it's replacing a single damaged tile or installing a complete brand-new roof—comes backed by our written 100% Workmanship Guarantee.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#131924] border border-slate-800">
                <span className="text-2xl font-extrabold text-emerald-400 font-heading block">100%</span>
                <span className="text-xs text-slate-400 font-medium">Guaranteed Workmanship</span>
              </div>
              <div className="p-4 rounded-xl bg-[#131924] border border-slate-800">
                <span className="text-2xl font-extrabold text-emerald-400 font-heading block">24/7</span>
                <span className="text-xs text-slate-400 font-medium">Emergency Callout Across Ireland</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenQuote}
                className="pill-btn-emerald py-3.5 px-8 text-sm"
              >
                Discuss Your Roofing Project
              </button>
            </div>
          </div>

          {/* Right Column: High-Res Photo Box with Electric Border */}
          <div className="relative">
            <div className="img-box rounded-2xl border-2 border-emerald-500/30 shadow-2xl shadow-emerald-500/10 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
                alt="Evercrest Roofing Team Working on Roof"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:left-6 bg-[#131924]/95 backdrop-blur-md p-4 rounded-2xl border border-emerald-500/40 shadow-2xl max-w-xs flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xl">
                ☘️
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Serving Ireland</span>
                <span className="text-[11px] text-slate-400 block">Homes & Commercial Buildings</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
