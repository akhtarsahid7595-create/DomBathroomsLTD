import React from 'react';

export default function GallerySection({ onOpenQuote }) {
  const projects = [
    {
      title: "Natural Slate Re-Roofing",
      location: "County Dublin",
      tag: "FULL RE-ROOF",
      img: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Seamless EPDM Flat Roof",
      location: "County Cork",
      tag: "FLAT ROOFING",
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Dry Verge System Retrofit",
      location: "County Galway",
      tag: "DRY VERGE",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Chimney Repointing & Lead Flashing",
      location: "County Kildare",
      tag: "CHIMNEY REPAIR",
      img: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "UPVC Fascia, Soffit & Guttering",
      location: "County Wicklow",
      tag: "GUTTERING & FASCIA",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Roof Moss Soft Wash & Seal",
      location: "County Limerick",
      tag: "ROOF CLEANING",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-[#0B0F17] relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <span>REAL PROJECT GALLERY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Our Completed Projects <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Across Ireland
            </span>
          </h2>
          
          <p className="text-slate-400 text-base font-light">
            Examine our high-standard craftsmanship in slate, tile, flat roofs, and UPVC dry verge systems.
          </p>
        </div>

        {/* 6-Card Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, idx) => (
            <div 
              key={idx}
              className="obsidian-card overflow-hidden group border border-slate-800 flex flex-col"
            >
              <div className="img-box aspect-[4/3] relative rounded-none border-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#0B0F17]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                  {item.tag}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                    <span>📍</span> {item.location}, Ireland
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-semibold">100% Guaranteed</span>
                  <button
                    onClick={onOpenQuote}
                    className="text-slate-300 font-bold hover:text-emerald-400 transition-colors"
                  >
                    Similar Quote →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button onClick={onOpenQuote} className="pill-btn-emerald py-4 px-8 text-sm">
            Get Quote For Your Roof Type
          </button>
        </div>

      </div>
    </section>
  );
}
