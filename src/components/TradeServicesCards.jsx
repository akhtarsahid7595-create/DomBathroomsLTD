import React from 'react';
import { Wrench, Bath, Grid } from 'lucide-react';

export default function TradeServicesCards({ onOpenQuote }) {
  const services = [
    {
      icon: Wrench,
      title: "All Aspects of Plumbing",
      desc: "Complete residential & commercial plumbing solutions, pipework installation, leak repair, sanitaryware fitting, and high-pressure system upgrades across Liverpool & North West.",
    },
    {
      icon: Bath,
      title: "Bathroom Renovations",
      desc: "Full end-to-end bathroom transformations, old suite strip-outs, luxury walk-in rain showers, freestanding bathtubs, and custom vanity unit installations.",
    },
    {
      icon: Grid,
      title: "Precision Tiling",
      desc: "Expert wall & floor tiling, hydrophobic waterproofing tanking, large format porcelain, ceramic metro tiles, herringbone patterns, and flawless silicone sealing.",
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title with Red Underline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 uppercase tracking-tight heading-underline">
            OUR PLUMBING & RENOVATION SERVICES
          </h2>
        </div>

        {/* 3 Vertical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md border border-slate-200 text-center flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
              >
                <div>
                  <div className="trade-icon-badge">
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-heading font-extrabold text-slate-900 mb-4 uppercase">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    {item.desc}
                  </p>
                </div>

                <div>
                  <button
                    onClick={onOpenQuote}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm py-3.5 px-6 rounded-md uppercase tracking-wider transition-colors shadow-sm"
                  >
                    MORE INFO
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
