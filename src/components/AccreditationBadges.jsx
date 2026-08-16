import React from 'react';

export default function AccreditationBadges() {
  const brands = [
    "Mira Showers",
    "Bristan Plumbing",
    "Topps Tiles",
    "Tile Giant",
    "Checkatrade",
    "City & Guilds"
  ];

  return (
    <section className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Title matching Image 2 "OUR ACCREDITATIONS" */}
        <h3 className="text-sm font-heading font-extrabold uppercase tracking-widest text-slate-400 mb-8">
          OUR ACCREDITATIONS & APPROVED SUPPLIERS
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-75 grayscale hover:grayscale-0 transition-all">
          {brands.map((brand, i) => (
            <div key={i} className="bg-slate-100 border border-slate-200 px-5 py-2.5 rounded text-xs font-extrabold text-slate-800 uppercase tracking-wider shadow-sm">
              {brand}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
