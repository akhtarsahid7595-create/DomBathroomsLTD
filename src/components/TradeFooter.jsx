import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function TradeFooter({ onOpenQuote }) {
  return (
    <footer className="bg-slate-950 text-slate-400 font-sans border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid (Exact Image 2 Footer Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Logo & Description Column */}
          <div className="space-y-4">
            <img 
              src="/dom_logo.png" 
              alt="DOM BATHROOMS LTD Logo" 
              className="h-16 w-auto object-contain"
            />
            <p className="text-xs text-slate-400 leading-relaxed">
              DomBathroomsLTD is a specialist bathroom refurbishment company. Quality work, great results, happy customers.
            </p>
            {/* Social Icons (Matching Image 2 social bar) */}
            <div className="flex items-center gap-3 text-white pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 hover:bg-red-600 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 hover:bg-red-600 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://wa.me/447700900123" className="w-8 h-8 rounded-full bg-slate-900 hover:bg-emerald-600 flex items-center justify-center transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-black text-white uppercase tracking-wider mb-4">CONTACT DETAILS</h4>
            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>London, Essex & Surrounding Areas</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Phone className="w-4 h-4 text-red-500 shrink-0" />
              <a href="tel:07700900123" className="text-white hover:text-red-500 font-bold">07700 900123</a>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Mail className="w-4 h-4 text-red-500 shrink-0" />
              <a href="mailto:info@dombathroomsltd.co.uk" className="text-white hover:text-red-500 font-bold">info@dombathroomsltd.co.uk</a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-heading font-black text-white uppercase tracking-wider mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-wider text-slate-300">
              <li><a href="#" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Refurbishment Services</a></li>
              <li><a href="#why-us" className="hover:text-red-500 transition-colors">Why Choose Us</a></li>
              <li><a href="#process" className="hover:text-red-500 transition-colors">Transformation Process</a></li>
              <li><a href="#reviews" className="hover:text-red-500 transition-colors">Google Reviews</a></li>
            </ul>
          </div>

          {/* Useful Info Column */}
          <div>
            <h4 className="text-sm font-heading font-black text-white uppercase tracking-wider mb-4">USEFUL INFO</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Full Bathroom Strip-Outs</li>
              <li>Precision Porcelain Tiling</li>
              <li>Hydrophobic Waterproofing</li>
              <li>Luxury Shower Suites</li>
              <li>Free On-Site Quotations</li>
            </ul>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} DOM BATHROOMS LTD. All Rights Reserved. Quality Work. Great Results. Happy Customers.</p>
        </div>

      </div>
    </footer>
  );
}
