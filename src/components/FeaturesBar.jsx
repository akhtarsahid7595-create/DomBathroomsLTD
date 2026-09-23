import React from 'react';

export default function FeaturesBar() {
  const items = [
    { title: "Fully Insured Experts", subtitle: "Peace of mind" },
    { title: "Free Roof Inspection", subtitle: "No-obligation quote" },
    { title: "Emergency Repairs", subtitle: "Rapid response" },
    { title: "Guaranteed Workmanship", subtitle: "Quality you can trust" }
  ];

  return (
    <section className="bg-white border-b border-[#E5E9E7] py-6 px-4 sm:px-[6%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        {items.map((it, idx) => (
          <div key={idx} className="p-3">
            <span className="text-[#6FB52C] font-black text-lg mr-1.5">✓</span>
            <strong className="text-[#17201E] font-heading font-extrabold text-sm sm:text-base block sm:inline">
              {it.title}
            </strong>
            <span className="block text-xs text-[#697372] mt-0.5 font-medium">
              {it.subtitle}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
