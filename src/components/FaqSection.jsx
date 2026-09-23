import React from 'react';

export default function FaqSection() {
  const faqs = [
    {
      q: "How do I know if my roof needs a repair or a full replacement?",
      a: "We can inspect the roof and advise. A leak may be repairable, while widespread deterioration or structural problems can require replacement."
    },
    {
      q: "Why is a Dry Verge system better than mortar?",
      a: "Dry verge systems are mechanically fixed and avoid the cracking and deterioration that can affect mortar over time."
    },
    {
      q: "Do you provide emergency repairs after a storm?",
      a: "Yes. Emergency repair services can help make a damaged roof safe and watertight as quickly as possible."
    },
    {
      q: "Are gutter cleaning services available for commercial buildings?",
      a: "Yes. Services can cover both domestic properties and commercial units."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 px-4 sm:px-[6%] bg-white">
      <div className="max-w-[850px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[750px] mx-auto mb-10">
          <div className="eyebrow-jg mb-2">FAQ'S</div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#17201E] font-heading leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Collapsible Details matching demo-6.html */}
        <div className="divide-y divide-[#DCE2DF] border-t border-b border-[#DCE2DF]">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group py-4.5 cursor-pointer">
              <summary className="font-extrabold text-[#17201E] text-base sm:text-lg font-heading list-none flex justify-between items-center py-2 select-none group-hover:text-[#6FB52C] transition-colors">
                <span>{faq.q}</span>
                <span className="text-[#6FB52C] font-black text-xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-[#697372] text-sm sm:text-base leading-relaxed pt-2 pb-2 font-normal">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
