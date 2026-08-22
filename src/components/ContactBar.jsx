import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactBar() {
  return (
    <div className="bg-red-600 text-white py-3 px-4 shadow-md font-sans">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-xs sm:text-sm font-bold uppercase tracking-wider">
        
        <a 
          href="tel:07700900888" 
          className="flex items-center gap-2 hover:text-slate-100 transition-colors"
        >
          <Phone className="w-4 h-4 fill-white text-red-600 shrink-0" />
          <span>CALL US: 07700 900888</span>
        </a>

        <a 
          href="mailto:info@mhplumbingheating.co.uk" 
          className="flex items-center gap-2 hover:text-slate-100 transition-colors"
        >
          <Mail className="w-4 h-4 text-white shrink-0" />
          <span>EMAIL: INFO@MHPLUMBINGHEATING.CO.UK</span>
        </a>

        <div className="flex items-center gap-2 hidden md:flex">
          <MapPin className="w-4 h-4 text-white shrink-0" />
          <span>LIVERPOOL, NORTH WEST & NORTH WALES</span>
        </div>

      </div>
    </div>
  );
}
