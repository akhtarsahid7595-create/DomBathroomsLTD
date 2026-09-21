import React from 'react';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="bg-[#080B11] border-t border-slate-800 text-slate-400 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center font-bold text-white shadow-lg shadow-emerald-500/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
                </svg>
              </div>
              <span className="text-xl font-extrabold text-white font-heading tracking-tight">
                EVERCREST <span className="text-emerald-400">ROOFING</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-light">
              STRONG ROOFS. SAFE HOMES. Built for Ireland.<br />
              Expert local roofing contractors providing guaranteed slate repairs, flat roofing, dry verge systems, and 24/7 emergency response.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <span>☘️ Proudly Irish & Locally Owned</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Roofing Services</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Who We Are</a></li>
              <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Service Packages</a></li>
              <li><a href="#gallery" className="hover:text-emerald-400 transition-colors">Project Gallery</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Request Quote</a></li>
            </ul>
          </div>

          {/* Services List */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2 text-xs">
              <li>Roof Repairs & Replacement</li>
              <li>Flat Roofing Specialists</li>
              <li>Dry Verge & Ridge Systems</li>
              <li>Chimney & Valley Repairs</li>
              <li>Roof Cleaning & Treatment</li>
              <li>UPVC Fascia, Soffit & Gutters</li>
              <li>24/7 Emergency Repairs</li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">Contact & Support</h4>
            
            <div className="space-y-2 text-xs">
              <p className="text-slate-300 font-semibold">📍 Serving Homes Across Ireland</p>
              <p className="text-slate-400">Dispatch Units Available Nationwide</p>
              <p className="text-emerald-400 font-bold">⚡ 24/7 Emergency Response Available</p>
            </div>

            <button
              onClick={onOpenQuote}
              className="w-full pill-btn-emerald py-3 text-xs text-center font-bold"
            >
              Get Free Inspection Quote
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Evercrest Roofing Ireland. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>100% Guaranteed Workmanship</span>
            <span>•</span>
            <span>Fully Insured</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
