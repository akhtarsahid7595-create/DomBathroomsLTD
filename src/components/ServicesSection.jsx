import React from 'react';

export default function ServicesSection({ onOpenQuote }) {
  const services = [
    {
      title: "Roof Repairs & Replacement",
      desc: "From missing slate fixes to complete re-roofing projects. We work with natural slate, clay tiles, and modern concrete roofing.",
      badge: "MOST REQUESTED",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
        </svg>
      )
    },
    {
      title: "Flat Roofing Specialists",
      desc: "Seamless EPDM rubber membrane, high-performance felt, and fiberglass flat roofs designed to withstand standing water.",
      badge: "WEATHERPROOF",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Dry Verge & Ridge Systems",
      desc: "Maintenance-free dry verge caps and dry ridge systems. Protect your roof edges without decaying mortar lines.",
      badge: "ZERO MAINTENANCE",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Chimney & Valley Repairs",
      desc: "Chimney repointing, lead flashing replacement, chimney cap installation, and valley water channel restoration.",
      badge: "LEAK PROTECTION",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m3 0h1" />
        </svg>
      )
    },
    {
      title: "Roof Cleaning & Treatment",
      desc: "Soft wash moss removal, lichen treatment, and biocide protective coating to extend your roof's lifespan.",
      badge: "APPEARANCE & CARE",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "UPVC Fascia, Soffit & Guttering",
      desc: "Full installation, replacement, and unblocking of UPVC guttering, fascia boards, and soffit ventilation systems.",
      badge: "DRAINAGE",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Lead Work & Flashing",
      desc: "Traditional sheet lead fitting for roof valleys, wall step flashing, and chimney aprons to prevent water ingress.",
      badge: "HIGH PRECISION",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h6z" />
        </svg>
      )
    },
    {
      title: "24/7 Emergency Call Out",
      desc: "Storm damage response, emergency tarpaulin sealing, structural leak containment across all counties in Ireland.",
      badge: "24/7 DISPATCH",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#0B0F17] relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <span>OUR ROOFING SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Complete Roofing Solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              For Homes & Businesses Across Ireland
            </span>
          </h2>

          <p className="text-slate-400 text-base font-light">
            Every service is backed by guaranteed workmanship, high-grade Irish weather-tested materials, and fixed transparent quotes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => (
            <div 
              key={idx}
              className="obsidian-card p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {srv.icon}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 uppercase tracking-wide">
                    {srv.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-heading group-hover:text-emerald-300 transition-colors">
                  {srv.title}
                </h3>

                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Fixed Quote</span>
                <button
                  onClick={onOpenQuote}
                  className="text-emerald-400 font-bold hover:text-emerald-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Book Service →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenQuote}
            className="pill-btn-emerald py-4 px-8 text-sm"
          >
            Request a Free Site Inspection
          </button>
        </div>

      </div>
    </section>
  );
}
