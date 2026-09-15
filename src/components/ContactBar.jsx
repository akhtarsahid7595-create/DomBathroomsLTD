import React from 'react';
import { Phone, Mail, Tag } from 'lucide-react';

export default function ContactBar() {
  return (
    <div className="bg-slate-900 text-slate-300 py-2.5 px-4 text-xs font-normal tracking-wide border-b border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 text-center md:text-left">
        
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <a href="tel:0867858590" className="flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap">
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>Mobile: <strong>086 785 8590</strong></span>
          </a>

          <span className="hidden sm:inline text-slate-700">•</span>

          <a href="tel:018499468" className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap">
            <span>Office: <strong>01 849 9468</strong></span>
          </a>

          <span className="hidden md:inline text-slate-700">•</span>

          <a href="mailto:info@peterswindowcleaning.com" className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap">
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>info@peterswindowcleaning.com</span>
          </a>
        </div>

        <div className="flex items-center gap-2 bg-blue-950/90 text-blue-200 px-3.5 py-1 rounded-full text-[11px] border border-blue-800/60 shrink-0">
          <Tag className="w-3 h-3 text-amber-400 fill-amber-400" />
          <span>NOW 10% OFF GUTTER CLEANING — CODE: <strong className="text-white">MLN9</strong></span>
        </div>

      </div>
    </div>
  );
}
