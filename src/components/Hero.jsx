import React from 'react';

export default function Hero({ onOpenQuote }) {
  return (
    <section className="relative min-h-[535px] flex items-center bg-[#07100E] overflow-hidden py-16 sm:py-24 px-4 sm:px-[6%]">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_roof_banner.jpg"
          alt="Evercrest Roofing Dublin"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07100E]/95 via-[#07100E]/80 to-[#07100E]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-[720px] space-y-4">
          
          {/* Eyebrow Tagline */}
          <div className="eyebrow-jg">
            Professional Roofing Services
          </div>

          {/* H1 Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black text-white tracking-tight leading-[1.02] font-heading">
            Expert Roof Repairs in Dublin City & County
          </h1>

          {/* Paragraph Copy */}
          <p className="text-[#E2E8E6] text-base sm:text-lg font-normal leading-relaxed">
            Reliable roofing, leak repairs, chimney work, flat roofing, guttering and roof maintenance for homes and businesses across Dublin and surrounding counties.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
            <button
              onClick={onOpenQuote}
              className="btn-jg py-3.5 px-6 text-sm font-bold shadow-lg"
            >
              GET A FREE QUOTE
            </button>

            <a
              href="tel:0852242621"
              className="btn-outline-jg py-3 px-6 text-sm font-bold text-center"
            >
              CALL 085 224 2621
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
