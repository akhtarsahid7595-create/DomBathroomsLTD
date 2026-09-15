import React from 'react';
import { Phone, Globe, Calendar } from 'lucide-react';

export default function ContactBar() {
  return (
    <div className="bg-red-600 text-white py-3 px-4 shadow-md font-sans">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-xs sm:text-sm font-bold uppercase tracking-wider">
        
        <a 
          href="tel:0867858590" 
          className="flex items-center gap-2 hover:text-slate-100 transition-colors"
        >
          <Phone className="w-4 h-4 fill-white text-red-600 shrink-0" />
          <span>CALL / TEXT / WHATSAPP: 086 785 8590</span>
        </a>

        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-white shrink-0" />
          <span>PETERSWINDOWCLEANING.COM</span>
        </div>

        <div className="flex items-center gap-2 hidden md:flex">
          <Calendar className="w-4 h-4 text-white shrink-0" />
          <span>ROTATIONS: 6 / 8 / 12 WEEKS ROTATION</span>
        </div>

      </div>
    </div>
  );
}
