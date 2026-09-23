import React from 'react';

export default function GallerySection({ onOpenQuote }) {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-[6%] bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[750px] mx-auto mb-10">
          <div className="eyebrow-jg mb-2">Our Gallery</div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#17201E] font-heading leading-tight mb-2">
            What We've Done
          </h2>
          <p className="text-[#697372] text-sm sm:text-base font-normal">
            Use this section for real Evercrest before-and-after photos as you build your project portfolio.
          </p>
        </div>

        {/* Gallery Grid matching demo-6.html */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1100px] mx-auto">
          <div 
            className="h-[240px] sm:h-[270px] bg-cover bg-center rounded-[9px] shadow-sm hover:opacity-95 transition-opacity cursor-pointer"
            style={{ backgroundImage: "url('/images/hero_roof_banner.jpg')" }}
            onClick={onOpenQuote}
          />
          <div 
            className="h-[240px] sm:h-[270px] bg-cover bg-center rounded-[9px] shadow-sm hover:opacity-95 transition-opacity cursor-pointer"
            style={{ backgroundImage: "url('/images/service_slate_chimney.jpg')" }}
            onClick={onOpenQuote}
          />
          <div 
            className="h-[240px] sm:h-[270px] bg-cover bg-center rounded-[9px] shadow-sm hover:opacity-95 transition-opacity cursor-pointer"
            style={{ backgroundImage: "url('/images/service_dry_verge.jpg')" }}
            onClick={onOpenQuote}
          />
        </div>

      </div>
    </section>
  );
}
