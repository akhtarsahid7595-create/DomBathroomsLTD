import React from 'react';
import { Star, ShieldCheck, Clock, ThumbsUp, Sparkles, MessageCircle, PiggyBank, Heart } from 'lucide-react';

export default function WhyChooseUsSection({ onOpenBooking }) {
  const points = [
    {
      icon: ShieldCheck,
      title: "Full Bathroom Refurbishments",
      desc: "From initial strip-out to final polish, we manage every single step so you don't have to stress about organizing builders or plumbers."
    },
    {
      icon: ThumbsUp,
      title: "Professional & Tidy Workmanship",
      desc: "We treat your home with total respect. Daily cleanup, heavy-duty floor protective film, and dust extractors keep your house spotless."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      desc: "Our experienced crew works efficiently without sacrificing attention to detail, ensuring your new bathroom is ready on schedule."
    },
    {
      icon: Sparkles,
      title: "Quality Finish",
      desc: "Laser-aligned tiles, perfectly mitred trim edges, high-grade waterproof grout, and premium fixture installation that stands the test of time."
    },
    {
      icon: MessageCircle,
      title: "Clear & Honest Communication",
      desc: "No radio silence. We keep you informed with daily photo updates, transparent timelines, and honest advice at every step."
    },
    {
      icon: PiggyBank,
      title: "Competitive Prices",
      desc: "Fair, transparent fixed-price quotations with zero hidden surprises. High quality craftsmanship doesn't have to break the bank."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold text-xs uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            <span>Our Commitment To You</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Quality Work. Great Results. Happy Customers.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Here is why homeowners across London & surrounding areas trust DomBathroomsLTD with their most valuable spaces.
          </p>
        </div>

        {/* 6 Core Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <div 
                key={i}
                className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 p-8 sm:p-10 rounded-3xl border border-purple-800/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-heading font-bold text-white">Thinking about transforming your bathroom?</h3>
            <p className="text-sm text-slate-300">
              Message DomBathroomsLTD today for a FREE quote and let's turn your old bathroom into something you'll love!
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-8 py-4 rounded-full shadow-lg shadow-emerald-500/20 text-sm shrink-0 transition-transform active:scale-95"
          >
            Message Us for Free Quote
          </button>
        </div>

      </div>
    </section>
  );
}
