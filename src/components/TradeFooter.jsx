import React from 'react';
import { Phone, Mail, MapPin, Instagram, Globe, MessageCircle } from 'lucide-react';

export default function TradeFooter({ onOpenQuote }) {
  return (
    <footer className="bg-slate-950 text-slate-400 font-sans border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Logo & Description */}
          <div className="space-y-4">
            <img 
              src="/peter_logo.svg" 
              alt="Peter's Window Cleaning Services Logo" 
              className="h-14 w-auto object-contain"
            />

            <p className="text-xs text-slate-400 leading-relaxed">
              Peter's Window Cleaning Services (Peter Reddin). Pure water hot wash window cleaning &amp; all-year outdoor exterior power washing. 6, 8, or 12 weeks rotation schedules available.
            </p>

            <div className="flex items-center gap-3 text-white pt-2">
              <a href="https://instagram.com/peterswindowcleaningservices" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-900 hover:bg-red-600 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/353867858590" className="w-8 h-8 rounded-full bg-slate-900 hover:bg-emerald-600 flex items-center justify-center transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-black text-white uppercase tracking-wider mb-4">CONTACT DETAILS</h4>
            <div className="flex items-center gap-2.5 text-xs">
              <Phone className="w-4 h-4 text-red-500 shrink-0" />
              <a href="tel:0867858590" className="text-white hover:text-red-500 font-bold">086 785 8590</a>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Globe className="w-4 h-4 text-red-500 shrink-0" />
              <span className="text-white font-bold">peterswindowcleaning.com</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>Residential &amp; Commercial Outdoor Cleaning</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-heading font-black text-white uppercase tracking-wider mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-wider text-slate-300">
              <li><a href="#" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Hot Wash Cleaning</a></li>
              <li><a href="#why-us" className="hover:text-red-500 transition-colors">Why Choose Us</a></li>
              <li><a href="#process" className="hover:text-red-500 transition-colors">Pure Water System</a></li>
              <li><a href="#reviews" className="hover:text-red-500 transition-colors">Google Reviews</a></li>
            </ul>
          </div>

          {/* Useful Info Column */}
          <div>
            <h4 className="text-sm font-heading font-black text-white uppercase tracking-wider mb-4">OUR SERVICES</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Hot Wash Window Cleaning</li>
              <li>Hard to Reach Velux Windows</li>
              <li>6 / 8 / 12 Weeks Rotations</li>
              <li>Outdoor Pressure Washing</li>
              <li>Fascia, Soffit &amp; Gutter Clean</li>
            </ul>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} PETER'S WINDOW CLEANING SERVICES (Peter Reddin). All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
