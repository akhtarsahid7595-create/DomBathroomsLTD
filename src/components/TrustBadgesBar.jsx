import React from 'react';

export default function TrustBadgesBar() {
  const badges = [
    {
      title: "20-Year Guarantee",
      subtitle: "Full Structural Warranty",
      icon: "🛡️"
    },
    {
      title: "Dry Verge Certified",
      subtitle: "Mortar-Free Edge Lock",
      icon: "⚙️"
    },
    {
      title: "EPDM Rubber Installer",
      subtitle: "Flat Roof Specialists",
      icon: "🏗️"
    },
    {
      title: "Service Financing",
      subtitle: "Flexible Payment Plans",
      icon: "💳"
    }
  ];

  return (
    <section className="bg-white py-6 sm:py-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest font-heading mb-4 sm:mb-6">
          FEATURED TRUST & GUARANTEES
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 items-center">
          {badges.map((b, idx) => (
            <div key={idx} className="flex items-center justify-start sm:justify-center gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-700/40 transition-colors">
              <span className="text-xl sm:text-2xl shrink-0">{b.icon}</span>
              <div className="text-left">
                <span className="text-xs sm:text-sm font-bold text-slate-900 font-heading block leading-tight">{b.title}</span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium block truncate">{b.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
