import React from 'react';

export default function ServicesSection({ onOpenQuote }) {
  const services = [
    {
      title: "Roofing & Full Replacement",
      desc: "Ireland's trusted certified roofing contractor for complete roof replacements and new installations built to last decades.",
      img: "/images/service_roof_replacement.jpg"
    },
    {
      title: "Roof Repair & Storm Damage",
      desc: "Roof leak, storm damage, and emergency repair. Fast response and expert tile replacement across Ireland.",
      img: "/images/service_roof_repair.jpg"
    },
    {
      title: "Rubber Roofing (EPDM)",
      desc: "EPDM rubber roofing systems for flat and low-slope roofs: full installation, replacement, and flat roof repair.",
      img: "/images/service_flat_roof_epdm.jpg"
    },
    {
      title: "Natural Slate & Chimney Repair",
      desc: "Traditional Irish natural slate work, chimney repointing, lead step flashing, and valley water restoration.",
      img: "/images/service_slate_chimney.jpg"
    },
    {
      title: "Dry Verge & Ridge Systems",
      desc: "Maintenance-free UPVC dry verge capping and dry ridge systems. Protect gable ends without crumbling mortar.",
      img: "/images/service_dry_verge.jpg"
    },
    {
      title: "Fascia, Soffit & Guttering",
      desc: "Seamless UPVC gutter installation, downspouts, soffit ventilation, and timber fascia board replacement.",
      img: "/images/service_guttering.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider font-heading">
            <span>OUR EXTERIOR SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Expert Roofing & Exterior Contracting
          </h2>
          <p className="text-slate-600 text-base font-normal">
            Select a service below to explore our trade solutions and request a free estimate.
          </p>
        </div>

        {/* IrelandContracting Style 3-Column Card Grid with AI Generated Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div 
              key={idx}
              className="ic-card flex flex-col justify-between group cursor-pointer"
              onClick={onOpenQuote}
            >
              <div>
                <div className="ic-card-img">
                  <img
                    src={srv.img}
                    alt={srv.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-[#0F381E] font-heading group-hover:text-emerald-700 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {srv.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <span className="text-emerald-800 font-bold text-sm flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform font-heading">
                  Learn more 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
