import React from 'react';

export default function AreasWeCover() {
  const areas = [
    {
      title: "South Dublin", href: "/areas/south-dublin/",
      desc: "Tallaght, Dundrum, Rathfarnham, Blackrock and surrounding communities."
    },
    {
      title: "Dublin City & South-West", href: "/areas/dublin-city/",
      desc: "Dublin City, Clondalkin, Lucan, Ballyfermot and neighbouring suburbs."
    },
    {
      title: "North Dublin & Coast", href: "/areas/north-dublin/",
      desc: "Howth, Malahide, Clontarf, Raheny and North Dublin."
    },
    {
      title: "North-West & Fingal", href: "/areas/fingal/",
      desc: "Finglas, Blanchardstown, Swords, Castleknock and wider Fingal."
    }
  ];

  return (
    <section id="areas" className="bg-[#0A1E30] text-white py-16 sm:py-20 px-4 sm:px-[6%] border-t border-[#1E344A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[750px] mx-auto mb-10">
          <div className="text-[#5A8BAF] font-black uppercase text-xs sm:text-sm tracking-widest font-heading mb-2">Areas We Cover</div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading leading-tight mb-2">
            Roofing Across Dublin & Leinster
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal">
            Professional roof repairs, flat roofing, guttering, chimney work and maintenance across Dublin and surrounding areas.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1100px] mx-auto">
          {areas.map((ar, idx) => (
            <a href={ar.href} key={idx} className="p-5 border border-[#1E344A] rounded-[8px] bg-[#0F2942]/60 hover:border-[#5A8BAF] transition-colors">
              <h3 className="text-[#5A8BAF] font-bold text-lg font-heading mb-2">
                {ar.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                {ar.desc}
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
