import React from 'react';

export default function PricingPackagesSection({ onOpenQuote }) {
  const packages = [
    {
      name: "Emergency Leak & Patch Repair",
      badge: "24/7 RAPID DISPATCH",
      popular: false,
      tagline: "Instant containment for storm leaks, displaced slates, and broken ridge tiles.",
      features: [
        "Immediate 24/7 Emergency Dispatch",
        "Temporary Storm Tarpaulin Sealing",
        "Slate & Tile Sourcing & Replacement",
        "Flashing & Valley Leak Isolation",
        "Complete Written Condition Report"
      ],
      ctaText: "Request Emergency Repair"
    },
    {
      name: "Complete Roof Maintenance & Care",
      badge: "MOST POPULAR",
      popular: true,
      tagline: "Full structural roof refresh, dry verge fitting, moss treatment & gutter clearance.",
      features: [
        "Full Roof Soft-Wash Moss Removal",
        "Dry Verge & Ridge Cap Retrofit",
        "Chimney Repointing & Lead Check",
        "UPVC Gutter Unblocking & Repair",
        "5-Year Workmanship Guarantee"
      ],
      ctaText: "Get Maintenance Quote"
    },
    {
      name: "Full Re-Roof & New Roof Installation",
      badge: "VIP 20-YEAR GUARANTEE",
      popular: false,
      tagline: "Complete stripped-down roof replacement using natural Irish slate or premium tiles.",
      features: [
        "Complete Old Roof Demolition & Disposal",
        "High-Performance Breathable Underlayment",
        "Treated Counter-Batten Installation",
        "Natural Slate / Premium Tile Laying",
        "20-Year Full Structural Guarantee"
      ],
      ctaText: "Schedule Re-Roof Consultation"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-[#0B0F17] relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <span>SERVICE PACKAGES & ESTIMATES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Transparent Roofing Packages <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Tailored to Your Property
            </span>
          </h2>
          
          <p className="text-slate-400 text-base font-light">
            Every project starts with a 100% free site inspection and itemized transparent quote.
          </p>
        </div>

        {/* Pattern 4: 3-Column Pricing Package Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {packages.map((pkg, idx) => (
            <div 
              key={idx}
              className={`obsidian-card p-8 flex flex-col justify-between relative ${
                pkg.popular 
                  ? 'border-2 border-emerald-500 bg-[#131924] shadow-2xl shadow-emerald-500/20 scale-105 z-10' 
                  : 'bg-[#131924]/80'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 badge-gold shadow-lg">
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-heading">
                    PACKAGE 0{idx + 1}
                  </span>
                  {!pkg.popular && (
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white font-heading mb-2">
                  {pkg.name}
                </h3>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {pkg.tagline}
                </p>

                <div className="py-4 border-y border-slate-800/80 mb-6">
                  <span className="text-xs text-slate-400 block font-medium">Pricing</span>
                  <span className="text-2xl font-extrabold text-white font-heading">
                    Free Itemized Quote
                  </span>
                  <span className="text-[11px] text-emerald-400 block mt-1">✓ No deposit required to inspect</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-xs text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button
                  onClick={onOpenQuote}
                  className={`w-full py-3.5 px-6 rounded-full font-bold text-xs font-heading transition-all ${
                    pkg.popular
                      ? 'pill-btn-emerald'
                      : 'pill-btn-outline'
                  }`}
                >
                  {pkg.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pattern 4: Official Disclaimer Block */}
        <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            PLEASE NOTE (OFFICIAL DISCLAIMER):
          </div>
          <p className="leading-relaxed">
            Final project investment varies depending on roof dimensions, structural pitch, tile/slate material selected, scaffolding requirements, and existing timber condition. Every Evercrest Roofing quotation is provided in writing following a comprehensive on-site physical inspection with zero hidden extras.
          </p>
        </div>

      </div>
    </section>
  );
}
