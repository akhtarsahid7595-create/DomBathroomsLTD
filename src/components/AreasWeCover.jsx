import React from 'react';

export default function AreasWeCover() {
  const areas = [
    {
      title: "South Dublin",
      desc: "Tallaght, Dundrum, Rathfarnham, Blackrock and surrounding communities."
    },
    {
      title: "Dublin City & South-West",
      desc: "Dublin City, Clondalkin, Lucan, Ballyfermot and neighbouring suburbs."
    },
    {
      title: "North Dublin & Coast",
      desc: "Howth, Malahide, Clontarf, Raheny and North Dublin."
    },
    {
      title: "North-West & Fingal",
      desc: "Finglas, Blanchardstown, Swords, Castleknock and wider Fingal."
    }
  ];

  return (
    <section id="areas" className="bg-[#101718] text-white py-16 sm:py-20 px-4 sm:px-[6%] border-t border-[#1C2729]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[750px] mx-auto mb-10">
          <div className="eyebrow-jg mb-2">Areas We Cover</div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading leading-tight mb-2">
            Roofing Across Dublin & Leinster
          </h2>
          <p className="text-[#C8D0CE] text-sm sm:text-base font-normal">
            Professional roof repairs, flat roofing, guttering, chimney work and maintenance across Dublin and surrounding areas.
          </p>
        </div>

        {/* 4 Cards Grid matching demo-6.html */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1100px] mx-auto">
          {areas.map((ar, idx) => (
            <div key={idx} className="p-5 border border-[#394544] rounded-[8px] bg-[#162122]/60 hover:border-[#6FB52C] transition-colors">
              <h3 className="text-[#9ADA54] font-bold text-lg font-heading mb-2">
                {ar.title}
              </h3>
              <p className="text-[#C8D0CE] text-sm leading-relaxed font-normal">
                {ar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
