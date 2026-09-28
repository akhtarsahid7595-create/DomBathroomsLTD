import React from 'react';

export default function TopBar() {
  return (
    <div className="bg-[#0A1E30] text-white py-2 px-4 sm:px-[6%] text-xs sm:text-sm font-medium border-b border-[#1E344A]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <span className="text-slate-300 font-normal">Evercrest Roofing · Dublin & Leinster</span>
        <div className="flex items-center gap-2 text-slate-300">
          <b className="text-[#5A8BAF] font-black uppercase tracking-wider">FREE ROOF INSPECTION</b>
          <span>·</span>
          <a href="tel:0852242621" className="hover:text-[#5A8BAF] transition-colors font-bold">
            Call 085 224 2621
          </a>
        </div>
      </div>
    </div>
  );
}
