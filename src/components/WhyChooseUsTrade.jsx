import React from 'react';

export default function WhyChooseUsTrade({ onOpenQuote }) {
  const flyerBadges = [
    { title: "Local & Reliable", desc: "Trusted local window cleaning service for homes & workplaces." },
    { title: "Professional Hot Wash", desc: "State-of-the-art pure water hot wash equipment for pure shine." },
    { title: "Fully Insured", desc: "Complete peace of mind for residential and commercial properties." },
    { title: "VAT Registered", desc: "Compliant & verified professional business standards." },
    { title: "Flexible Rotations", desc: "6, 8, or 12 weeks rotation schedules tailored to your needs." },
    { title: "No Obligation Quotes", desc: "Free estimates via phone, text, WhatsApp, or email." }
  ];

  return (
    <section id="why-us" className="py-24 bg-white font-sans text-slate-800 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-blue-700 font-semibold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60 inline-block">
              About Peter Reddin
            </span>

            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-slate-900 tracking-tight leading-tight">
              Why Choose Peter's Window Cleaning?
            </h2>

            <p className="text-slate-600 text-base font-light leading-relaxed">
              Peter Reddin provides professional window and outdoor exterior cleaning services using advanced pure water hot wash equipment to keep your residential or commercial property pristine all year round.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="btn-rosewood-primary"
              >
                Book A Consultation
              </button>
            </div>
          </div>

          {/* Right Column Grid (Icon-Free Clean Cards) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {flyerBadges.map((item, idx) => (
              <div key={idx} className="rosewood-card p-6 text-left">
                <h3 className="font-heading font-semibold text-slate-900 text-base mb-1.5">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
