import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

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
    <section id="why-us" className="py-24 bg-white font-sans text-slate-900 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        <span className="text-blue-600 font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
          Trusted Local Specialist
        </span>

        <h2 className="text-3xl sm:text-4xl font-heading font-black uppercase tracking-tight heading-underline mt-3 mb-6">
          WHY CHOOSE PETER'S WINDOW CLEANING?
        </h2>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-12 font-normal">
          Peter Reddin provides professional window and outdoor exterior cleaning services using advanced pure water hot wash equipment to keep your residential or commercial property pristine all year round.
        </p>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-12">
          {flyerBadges.map((item, idx) => (
            <div key={idx} className="bg-blue-50/40 p-6 rounded-2xl border border-blue-100 hover:border-blue-300 transition-colors shadow-sm">
              <div className="flex items-center gap-2.5 text-blue-600 font-heading font-extrabold text-base mb-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-7">{item.desc}</p>
            </div>
          ))}
        </div>

        <div>
          <button
            onClick={onOpenQuote}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base px-10 py-4 rounded-full uppercase tracking-wider transition-all shadow-lg active:scale-95"
          >
            Book A Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
