import React from 'react';
import { Sparkles, Sun, Droplets, ShieldCheck, ArrowRight } from 'lucide-react';

export default function TradeServicesCards({ onOpenQuote }) {
  const services = [
    {
      icon: Droplets,
      title: "Reach & Wash Window Cleaning",
      desc: "Domestic and commercial window cleaning using pure water hot wash system. Specialized in hard-to-reach windows and Velux skylights.",
      badge: "Pure Hot Wash"
    },
    {
      icon: Sparkles,
      title: "Gutter & Fascia Cleaning",
      desc: "Complete gutter clearance, fascia and soffit washing. Special offer: Get 10% off gutter cleaning by quoting discount code MLN9!",
      badge: "10% OFF OFFER"
    },
    {
      icon: Sun,
      title: "Solar Panel & High Glass",
      desc: "Maximise energy yield with pure water solar panel cleaning. Services for apartments, commercial buildings, and landlords.",
      badge: "Commercial & Landlords"
    },
    {
      icon: ShieldCheck,
      title: "Driveway & Outdoor Power Wash",
      desc: "All-year outdoor rotary surface pressure washing for driveways, patios, paving, and moss removal for spotless outdoor spaces.",
      badge: "All-Year Outdoor"
    }
  ];

  return (
    <section id="services" className="py-24 bg-blue-50/50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title with Blue Underline */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-blue-600 font-extrabold text-xs uppercase tracking-widest bg-blue-100 px-3.5 py-1 rounded-full border border-blue-200">
            Professional Exterior Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 uppercase tracking-tight heading-underline">
            OUR WINDOW &amp; EXTERIOR CLEANING SERVICES
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto pt-2">
            Taking bookings on 6, 8, or 12 weeks rotation schedules across homes and commercial premises.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div>
                  <button
                    onClick={onOpenQuote}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 px-4 rounded-xl uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
