import React from 'react';

export default function WhyChooseUsSection({ onOpenQuote }) {
  const points = [
    {
      title: "Quality You Can See",
      desc: "Premium grade roofing materials, heavy-gauge lead work, and high-density slate tiles installed by master trade specialists.",
      highlight: "Premium Materials & Installation"
    },
    {
      title: "Protection You Can Trust",
      desc: "Engineered specifically to withstand heavy Irish rainfall, high winds, standing water, and winter frost cycles.",
      highlight: "Built for Irish Weather"
    },
    {
      title: "Service You Can Count On",
      desc: "Punctual, polite, and fully transparent. We treat your property with complete care and leave site spotless every day.",
      highlight: "Reliable, Local & Always Here"
    },
    {
      title: "100% Guaranteed Workmanship",
      desc: "Every repair, dry verge installation, and re-roof comes with an official written guarantee for complete peace of mind.",
      highlight: "Written Guarantee Provided"
    },
    {
      title: "24/7 Emergency Call Out",
      desc: "Storm leak or fallen ridge tile? Our emergency rapid-response unit is available 24 hours a day across Ireland.",
      highlight: "Rapid Dispatch"
    },
    {
      title: "Proudly Irish & Locally Owned ☘️",
      desc: "Direct local contact with no outsourced middle-men or pushy sales reps. Honest advice from local tradesmen.",
      highlight: "100% Local Enterprise"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-[#0B0F17] relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <span>WHY CHOOSE EVERCREST</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Quality Workmanship. Honest Advice. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Lasting Protection.
            </span>
          </h2>
          
          <p className="text-slate-400 text-base font-light">
            Here is why homeowners and property managers across Ireland trust Evercrest Roofing.
          </p>
        </div>

        {/* Pattern 3: 2-Column Checkmark Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <div 
              key={idx}
              className="obsidian-card p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-extrabold text-base shrink-0 group-hover:bg-emerald-500 group-hover:text-black transition-colors shadow-lg shadow-emerald-500/10">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-emerald-300 transition-colors">
                      {pt.title}
                    </h3>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                      {pt.highlight}
                    </span>
                  </div>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed font-light pt-2">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#131924] via-emerald-950/40 to-[#131924] border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white font-heading">Need an Honest Roof Assessment?</h3>
            <p className="text-xs text-slate-400">Our local team provides free site visits & no-obligation quotes across Ireland.</p>
          </div>
          <button onClick={onOpenQuote} className="pill-btn-emerald shrink-0 py-3.5 px-8 text-sm">
            Schedule Free Inspection
          </button>
        </div>

      </div>
    </section>
  );
}
