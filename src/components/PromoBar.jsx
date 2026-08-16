import React from 'react';
import { Sparkles } from 'lucide-react';

export default function PromoBar() {
  return (
    <div className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 text-white py-2 px-4 text-center font-extrabold text-xs sm:text-sm tracking-widest uppercase shadow-inner overflow-hidden">
      <div className="flex items-center justify-center gap-2 animate-pulse">
        <Sparkles className="w-4 h-4 text-yellow-200 shrink-0" />
        <span>FULL BATHROOM STRIP-OUT TO LUXURY FINISH • BOOK YOUR FREE SURVEY ON THIS PAGE</span>
        <Sparkles className="w-4 h-4 text-yellow-200 shrink-0 hidden sm:inline-block" />
      </div>
    </div>
  );
}
