import React from 'react';
import { Phone, Mail, Tag } from 'lucide-react';

export default function ContactBar() {
  return (
    <div className="bg-blue-600 text-white py-2.5 px-4 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-bold tracking-wide">
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="tel:0867858590" 
            className="flex items-center gap-1.5 hover:text-blue-100 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 fill-white text-blue-600 shrink-0" />
            <span>Mobile: 086 785 8590</span>
          </a>

          <span className="hidden sm:inline text-blue-300">•</span>

          <a 
            href="tel:018499468" 
            className="hidden md:flex items-center gap-1.5 hover:text-blue-100 transition-colors"
          >
            <span>Office: 01 849 9468</span>
          </a>

          <span className="hidden md:inline text-blue-300">•</span>

          <a 
            href="mailto:info@peterswindowcleaning.com" 
            className="hidden lg:flex items-center gap-1.5 hover:text-blue-100 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-white shrink-0" />
            <span>info@peterswindowcleaning.com</span>
          </a>
        </div>

        <div className="flex items-center gap-2 bg-blue-700/80 px-3 py-1 rounded-full text-[11px] border border-blue-500/40">
          <Tag className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
          <span>NOW 10% OFF GUTTER CLEANING — QUOTE <strong>MLN9</strong></span>
        </div>

      </div>
    </div>
  );
}
