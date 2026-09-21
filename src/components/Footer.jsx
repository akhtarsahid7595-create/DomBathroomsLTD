import React from 'react';
import EvercrestLogo from './EvercrestLogo';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="bg-[#0A2916] text-white py-16 border-t border-emerald-900/60 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-[#0F381E] p-4 rounded-xl border border-emerald-800/80 inline-block shadow-md">
              <EvercrestLogo variant="dark" />
            </div>

            <p className="text-emerald-100/90 text-xs leading-relaxed max-w-sm font-normal">
              Family-owned exterior contractor serving homes and commercial properties across Ireland since 1998. Fully licensed, bonded, and insured.
            </p>

            <div className="space-y-2 text-xs text-emerald-200">
              <p className="flex items-center gap-2">
                <span>📞</span> <a href="tel:0871234567" className="hover:underline font-bold text-white">(087) 123 4567</a>
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span> <span>info@evercrestroofing.ie</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📍</span> <span>Serving Homes & Businesses Across Ireland 🇮🇪</span>
              </p>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs text-emerald-200/90">
              <li><a href="#services" className="hover:text-white transition-colors">Roofing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Roof Repair</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Rubber Roofing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Slate Repair</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Dry Verge Systems</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Gutters</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Soffits & Fascia</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Chimney Repair</a></li>
            </ul>
          </div>

          {/* Areas We Serve Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">Areas We Serve</h4>
            <ul className="space-y-2 text-xs text-emerald-200/90">
              <li>County Dublin</li>
              <li>County Cork</li>
              <li>County Galway</li>
              <li>County Kildare</li>
              <li>County Wicklow</li>
              <li>County Limerick</li>
              <li>County Meath</li>
              <li className="text-emerald-400 font-semibold cursor-pointer" onClick={onOpenQuote}>View all areas →</li>
            </ul>
          </div>

          {/* Hours & License */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">Hours & Credentials</h4>
            <div className="text-xs text-emerald-200/90 space-y-1">
              <p className="font-semibold text-white">Monday – Friday:</p>
              <p>8:00 AM – 5:00 PM</p>
              <p className="font-semibold text-white pt-1">Saturday – Sunday:</p>
              <p>Closed (Emergency Line Active)</p>
            </div>

            <div className="pt-2 text-xs text-emerald-300 space-y-1">
              <p>Licensed, Bonded & Insured</p>
              <p>License IRL #026195</p>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                ★ Review us on Google
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300">
          <p>© {new Date().getFullYear()} Evercrest Roofing LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookie Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
