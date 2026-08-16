import React from 'react';
import { Wrench, Grid, Droplets, Zap, ShieldCheck, Flame, ArrowUpRight } from 'lucide-react';

export default function ServicesSection({ onOpenBooking }) {
  const services = [
    {
      icon: Wrench,
      title: "Full Bathroom Refurbishments",
      badge: "Most Popular",
      desc: "Complete end-to-end transformation from initial demolition & strip-out to final high-end silicone seals and hardware.",
      features: ["Complete strip-out & waste disposal", "Structural & plasterboard prep", "Full suite & sanitaryware fitting"]
    },
    {
      icon: Grid,
      title: "Precision Tiling & Waterproofing",
      badge: "Expert Craftsmen",
      desc: "Flawless wall & floor tiling with large format porcelain, natural stone, marble herringbone, and certified hydrophobic tanking.",
      features: ["Certified wetroom waterproofing", "Large format & metro tiling", "Laser-guided tile leveling"]
    },
    {
      icon: Droplets,
      title: "Luxury Walk-In Showers & Wetrooms",
      badge: "Luxury Upgrade",
      desc: "Convert awkward bath layouts into sleek frameless glass walk-in rain shower enclosures with linear channel drainage.",
      features: ["Custom recessed LED niches", "Thermostatic dual rain showers", "Flush low-profile trays"]
    },
    {
      icon: Flame,
      title: "Underfloor Heating & Radiators",
      badge: "Comfort",
      desc: "Keep your feet warm all winter with smart digital electric or water underfloor heating systems and designer heated towel rails.",
      features: ["Smart touchscreen thermostats", "Designer towel warmer rails", "Energy efficient heating mats"]
    },
    {
      icon: Zap,
      title: "Bespoke Lighting & Electrical",
      badge: "Ambience",
      desc: "Integrated mood lighting, anti-fog LED demister mirrors, shaver sockets, and IP65 waterproof recessed ceiling downlights.",
      features: ["Dimmable ceiling downlights", "Demisting smart mirrors", "PIR sensor night lighting"]
    },
    {
      icon: ShieldCheck,
      title: "Plumbing & Sanitaryware Fitting",
      badge: "Quality Guaranteed",
      desc: "Expert plumbing rerouting, wall-hung toilets, concealed cisterns, double vanity basins, and high-pressure pumps.",
      features: ["Concealed cistern plumbing", "Wall-hung vanity installation", "High-flow pressure boost pumps"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="text-amber-400 text-xs font-extrabold tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Our Refurbishment Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
              We Take Care of the Whole Transformation
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              No need to manage multiple tradesmen. We handle demolition, plumbing, electrical, tiling, and joinery under one roof.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold px-6 py-3.5 rounded-full border border-slate-700 transition-colors shrink-0 text-sm flex items-center gap-2"
          >
            <span>Request Custom Service</span>
            <ArrowUpRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full group-hover:bg-amber-500/10 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {item.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{feat}</span>
                    </div>
                  ))}

                  <button
                    onClick={onOpenBooking}
                    className="mt-4 w-full py-2.5 rounded-xl bg-slate-950 hover:bg-amber-500/10 text-amber-400 font-semibold text-xs transition-colors flex items-center justify-center gap-1 border border-slate-800 hover:border-amber-500/30"
                  >
                    <span>Get Quote for {item.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
