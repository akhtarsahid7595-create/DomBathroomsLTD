import React from 'react';

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-emerald-900 via-emerald-950 to-slate-950 border-b border-emerald-900/50 py-2 px-4 text-xs font-medium text-emerald-200">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold tracking-wide text-white">24/7 EMERGENCY CALL OUT SERVICE</span>
          <span className="hidden md:inline text-emerald-400">• Serving Homes & Businesses Across Ireland 🇮🇪</span>
        </div>
        <div className="flex items-center gap-4 text-slate-300 text-xs">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            100% Guaranteed Workmanship
          </span>
          <span className="hidden sm:flex items-center gap-1 text-emerald-300 font-semibold">
            <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h32a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
            </svg>
            Proudly Irish & Locally Owned ☘️
          </span>
        </div>
      </div>
    </div>
  );
}
