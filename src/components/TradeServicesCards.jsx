import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function TradeServicesCards({ onOpenQuote }) {
  const services = [
    {
      title: "Reach & Wash Window Cleaning",
      category: "Pure Hot Wash",
      desc: "Domestic and commercial window cleaning using state-of-the-art pure water hot wash equipment. Specialized in hard-to-reach windows and Velux skylights."
    },
    {
      title: "Gutter & Fascia Cleaning",
      category: "10% OFF Special",
      desc: "Complete gutter clearance, fascia and soffit washing. Special offer: Get 10% off gutter cleaning by quoting discount code MLN9!"
    },
    {
      title: "Solar Panel & High Glass",
      category: "Commercial & Landlords",
      desc: "Maximise energy yield with pure water solar panel cleaning. Specialized services for apartments, commercial buildings, and property managers."
    },
    {
      title: "Driveway & Outdoor Cleaning",
      category: "All-Year Exterior",
      desc: "All-year outdoor rotary surface pressure washing for driveways, patios, paving, and moss removal to keep your property pristine."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50/70 font-sans border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title (Rosewood Clean Headline Style) */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-blue-700 font-semibold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60">
            Professional Exterior Care
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-slate-900 tracking-tight">
            Our Services
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto font-light leading-relaxed pt-1">
            Taking bookings on 6, 8, or 12 weeks rotation schedules for residential &amp; commercial properties.
          </p>
        </div>

        {/* 4 Minimalist Service Cards (No cheap icons!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, idx) => (
            <div 
              key={idx}
              className="rosewood-card p-8 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md uppercase tracking-wider inline-block mb-6">
                  {item.category}
                </span>

                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed font-light mb-8">
                  {item.desc}
                </p>
              </div>

              <div>
                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 group-hover:text-blue-900 transition-colors"
                >
                  <span>Request A Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
