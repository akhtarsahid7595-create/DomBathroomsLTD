import React from 'react';
import { Bath, Phone, Mail, MapPin, Instagram, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg text-slate-950">
                <Bath className="w-6 h-6 stroke-[2.2]" />
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                DOM BATHROOMS <span className="text-amber-400">LTD</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              From stripping out old bathrooms to complete luxury refurbishments — we deliver quality work, great results, and happy customers every single time.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                <ShieldCheck className="w-4 h-4" /> Fully Insured & Guaranteed
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#before-after" className="hover:text-amber-400 transition-colors">Before & After</a></li>
              <li><a href="#why-us" className="hover:text-amber-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">Cost Estimator</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Full Refurbishments</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Bathroom Strip-Outs</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Precision Tiling</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Walk-In Wetrooms</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Underfloor Heating</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Concealed Plumbing</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <a href="tel:07700900123" className="text-white hover:text-amber-400 font-bold">07700 900123</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400" />
                <span className="text-white font-semibold">@dombathroomsltd</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <span>Serving London, Essex & Surrounding Home Counties</span>
              </li>
            </ul>

            <button
              onClick={onOpenBooking}
              className="mt-4 w-full bg-slate-900 hover:bg-amber-500 text-amber-400 hover:text-slate-950 font-bold py-2.5 rounded-xl border border-slate-800 transition-all text-xs"
            >
              Request Free Quote
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} DomBathroomsLTD. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Quality work. Great results. Happy customers.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
