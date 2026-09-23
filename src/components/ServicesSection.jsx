import React from 'react';

export default function ServicesSection({ onOpenQuote }) {
  const services = [
    {
      title: "Roof Repairs & Replacement",
      desc: "Durable fixes for leaks, damaged tiles and structural roof problems.",
      img: "/images/service_roof_replacement.jpg"
    },
    {
      title: "Flat Roofing",
      desc: "Professional flat-roof repair and replacement solutions.",
      img: "/images/service_flat_roof_epdm.jpg"
    },
    {
      title: "Dry Verge & Ridge Systems",
      desc: "Secure, low-maintenance protection for roof edges and ridges.",
      img: "/images/service_dry_verge.jpg"
    },
    {
      title: "Chimney & Valley Repairs",
      desc: "Leadwork, repointing and repairs to vulnerable roof joints.",
      img: "/images/service_slate_chimney.jpg"
    },
    {
      title: "Roof Cleaning & Treatment",
      desc: "Moss removal and protective roof treatment.",
      img: "/images/service_roof_repair.jpg"
    },
    {
      title: "Fascia, Soffit & Guttering",
      desc: "Rainwater system repairs, cleaning and replacement.",
      img: "/images/service_guttering.jpg"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-[6%] bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[750px] mx-auto mb-10">
          <div className="eyebrow-jg mb-2">Our Services</div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#17201E] font-heading leading-tight mb-2">
            Our Professional Roofing Services
          </h2>
          <p className="text-[#697372] text-sm sm:text-base font-normal">
            Complete roofing and exterior services, from individual repairs to larger roofing projects.
          </p>
        </div>

        {/* 6 Cards Grid matching demo-6.html */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
          {services.map((srv, idx) => (
            <div 
              key={idx}
              className="card-jg cursor-pointer group"
              onClick={onOpenQuote}
            >
              <div 
                className="h-[155px] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${srv.img}')` }}
              />
              <div className="p-5 space-y-1.5">
                <h3 className="text-lg font-bold text-[#17201E] font-heading group-hover:text-[#6FB52C] transition-colors">
                  {srv.title}
                </h3>
                <p className="text-[#697372] text-sm leading-relaxed font-normal">
                  {srv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
