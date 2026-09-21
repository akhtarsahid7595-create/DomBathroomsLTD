import React from 'react';

export default function CtaBanner({ onOpenQuote }) {
  return (
    <section className="py-16 bg-[#0B0F17] relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pattern 5: High Impact CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-950 via-[#131924] to-slate-950 border border-emerald-500/30 p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=1000&auto=format&fit=crop" 
              alt="Evercrest Roof Banner"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <span>GET A FREE NO-OBLIGATION QUOTE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Ready to Upgrade or Repair Your Roof?
            </h2>

            <p className="text-slate-300 text-base font-light leading-relaxed">
              Don't wait for minor leaks to turn into costly structural ceiling damage. Call Evercrest Roofing today for expert advice, fast dispatch, and guaranteed quality.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="pill-btn-emerald text-base py-4 px-8"
              >
                <span>GET A FREE QUOTE</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 text-xs font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>24/7 Emergency Service Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pattern 5: 3-Icon Feature Footer Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          
          <div className="obsidian-card p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-heading">QUALITY YOU CAN SEE</h3>
              <p className="text-xs text-slate-400">Premium materials & expert installation</p>
            </div>
          </div>

          <div className="obsidian-card p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-heading">PROTECTION YOU CAN TRUST</h3>
              <p className="text-xs text-slate-400">Built to withstand Irish weather</p>
            </div>
          </div>

          <div className="obsidian-card p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-heading">SERVICE YOU CAN COUNT ON</h3>
              <p className="text-xs text-slate-400">Reliable, local & always here</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
