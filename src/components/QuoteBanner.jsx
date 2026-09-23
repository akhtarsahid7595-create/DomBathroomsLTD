import React from 'react';

export default function QuoteBanner({ onOpenQuote }) {
  return (
    <section id="contact" className="bg-[#6FB52C] text-white py-16 sm:py-20 px-4 sm:px-[6%] text-center">
      <div className="max-w-[750px] mx-auto space-y-4">
        
        <div className="text-[#10200B] font-black uppercase text-xs sm:text-sm tracking-widest font-heading">
          Get Your Free Roofing Quote Today
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white font-heading leading-tight">
          Need roofing help?
        </h2>

        <p className="text-white text-base sm:text-lg font-normal">
          Contact Evercrest for a fast, free and no-obligation quotation across Dublin and Leinster.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-3">
          <a
            href="tel:0852242621"
            className="btn-jg bg-[#101718] text-white hover:bg-[#1a2527] py-4 px-8 text-base font-extrabold w-full sm:w-auto"
          >
            CALL 085 224 2621
          </a>
          
          <button
            onClick={onOpenQuote}
            className="btn-outline-jg border-2 border-white text-white hover:bg-white hover:text-[#101718] py-4 px-8 text-base font-extrabold w-full sm:w-auto"
          >
            ONLINE FREE QUOTE
          </button>
        </div>

      </div>
    </section>
  );
}
