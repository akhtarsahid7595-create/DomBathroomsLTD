import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#080D0D] text-[#C8D0CD] py-12 sm:py-16 px-4 sm:px-[6%] border-t border-[#182020] text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
        
        {/* Brand Column */}
        <div className="space-y-3">
          <div className="text-2xl font-black text-white font-heading tracking-tight uppercase">
            EVERCREST <span className="text-[#6FB52C]">ROOFING</span>
          </div>
          <p className="text-xs sm:text-sm text-[#85908D] leading-relaxed">
            Professional roofing services across Dublin and surrounding counties.
          </p>
          <small className="block text-[#85908D] text-xs pt-2">
            © {new Date().getFullYear()} Evercrest Roofing. All Rights Reserved.
          </small>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-3">
          <strong className="text-white font-heading font-extrabold text-base block">Quick Links</strong>
          <div className="space-y-2 text-xs sm:text-sm font-medium">
            <a href="#about" className="block hover:text-white transition-colors">About Us</a>
            <a href="#services" className="block hover:text-white transition-colors">Services</a>
            <a href="#areas" className="block hover:text-white transition-colors">Areas We Cover</a>
            <a href="#contact" className="block hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-3">
          <strong className="text-white font-heading font-extrabold text-base block">Contact Info</strong>
          <div className="space-y-2 text-xs sm:text-sm font-medium">
            <a href="tel:0852242621" className="block text-[#6FB52C] font-bold text-base hover:underline">
              085 224 2621
            </a>
            <a href="mailto:evercrestroofing@gmail.com" className="block hover:text-white transition-colors">
              evercrestroofing@gmail.com
            </a>
            <span className="block text-[#85908D]">Dublin & Leinster, Ireland</span>
            <span className="block text-[#9ADA54] font-semibold">24/7 Emergency Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
