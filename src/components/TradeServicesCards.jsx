import React from 'react';
import { Bath, Grid, Flame, ArrowRight } from 'lucide-react';

export default function TradeServicesCards({ onOpenQuote }) {
  const services = [
    {
      icon: Bath,
      title: "Bathroom Refurbishments",
      desc: "Full bathroom refurbishments from stripping out the old bath to complete high-end luxury installation with fast turnaround and tidy workmanship.",
    },
    {
      icon: Grid,
      title: "Precision Tiling",
      desc: "Professional wall & floor tiling, hydrophobic waterproofing tanking, large format porcelain, herringbone patterns, and seamless silicone sealing.",
    },
    {
      icon: Flame,
      title: "Plumbing & Heating",
      desc: "Expert concealed plumbing, thermostatic luxury rain showers, wall-hung sanitaryware, underfloor heating, and towel radiator installation.",
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title with Red Underline (Exact Image 2 Reference Style) */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 uppercase tracking-tight heading-underline">
            OUR REFURBISHMENT SERVICES
          </h2>
        </div>

        {/* 3 Vertical Cards (Image 2 exact card layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md border border-slate-200 text-center flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
              >
                <div>
                  {/* Circular Red Badge Icon (Exact copy of red circled icons in Image 2) */}
                  <div className="trade-icon-badge">
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-extrabold text-slate-900 mb-4 uppercase">
                    {item.title}
                  </h3>

                  {/* Paragraph */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    {item.desc}
                  </p>
                </div>

                {/* Solid Red Rectangle Button (Exact copy of Red buttons in Image 2) */}
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
