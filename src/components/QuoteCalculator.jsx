import React, { useState } from 'react';
import { Calculator, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function QuoteCalculator({ onOpenBooking }) {
  const [size, setSize] = useState('standard'); // 'ensuite' | 'standard' | 'master'
  const [scope, setScope] = useState('full'); // 'tiling' | 'full' | 'luxury'
  const [addons, setAddons] = useState({
    underfloor: true,
    ledNiche: true,
    demisterMirror: false,
    wetroomTray: false
  });

  // Base pricing estimates
  const basePrices = {
    ensuite: { tiling: 2200, full: 3800, luxury: 5400 },
    standard: { tiling: 3100, full: 5200, luxury: 7400 },
    master: { tiling: 4500, full: 7200, luxury: 10500 },
  };

  const addonPrices = {
    underfloor: 450,
    ledNiche: 350,
    demisterMirror: 250,
    wetroomTray: 650
  };

  const calculateEstimate = () => {
    let base = basePrices[size][scope];
    if (addons.underfloor) base += addonPrices.underfloor;
    if (addons.ledNiche) base += addonPrices.ledNiche;
    if (addons.demisterMirror) base += addonPrices.demisterMirror;
    if (addons.wetroomTray) base += addonPrices.wetroomTray;
    
    const min = Math.round(base * 0.95);
    const max = Math.round(base * 1.08);
    return { min, max };
  };

  const estimate = calculateEstimate();

  const toggleAddon = (key) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="calculator" className="py-20 bg-slate-900 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-xs uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Instant Quote Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Estimate Your Transformation Cost
          </h2>
          <p className="text-slate-400 text-base">
            Select your bathroom dimensions and preferred options below to calculate a realistic cost range.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (Left 7 cols) */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-8 shadow-xl">
            
            {/* Step 1: Size */}
            <div>
              <label className="block text-sm font-extrabold text-white uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>1. Select Bathroom Size</span>
                <span className="text-xs text-amber-400 font-semibold">Step 1 of 3</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'ensuite', label: 'En-Suite', sub: 'Compact (~3-5m²)' },
                  { id: 'standard', label: 'Standard Family', sub: 'Medium (~6-9m²)' },
                  { id: 'master', label: 'Master Suite', sub: 'Large (10m²+)' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSize(item.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      size === item.id 
                        ? 'bg-amber-500/10 border-amber-500 text-white shadow-lg' 
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-sm text-white mb-1">{item.label}</div>
                    <div className="text-xs text-slate-400">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scope */}
            <div>
              <label className="block text-sm font-extrabold text-white uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>2. Select Refurbishment Scope</span>
                <span className="text-xs text-amber-400 font-semibold">Step 2 of 3</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'tiling', label: 'Tiling & Refresh', sub: 'Tiles, sealant, paint & hardware' },
                  { id: 'full', label: 'Full Transformation', sub: 'Demolition, plumbing, tiling & suite' },
                  { id: 'luxury', label: 'Luxury Wetroom', sub: 'Walk-in rain shower & custom niches' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setScope(item.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      scope === item.id 
                        ? 'bg-amber-500/10 border-amber-500 text-white shadow-lg' 
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-sm text-white mb-1">{item.label}</div>
                    <div className="text-xs text-slate-400 leading-snug">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add-ons */}
            <div>
              <label className="block text-sm font-extrabold text-white uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>3. Optional Enhancements</span>
                <span className="text-xs text-amber-400 font-semibold">Step 3 of 3</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { key: 'underfloor', label: 'Electric Underfloor Heating', price: '+£450' },
                  { key: 'ledNiche', label: 'Recessed LED Shower Niche', price: '+£350' },
                  { key: 'demisterMirror', label: 'Smart Demisting LED Mirror', price: '+£250' },
                  { key: 'wetroomTray', label: 'Flush Wetroom Tray System', price: '+£650' }
                ].map((item) => {
                  const checked = addons[item.key];
                  return (
                    <button
                      key={item.key}
                      onClick={() => toggleAddon(item.key)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between text-left transition-all ${
                        checked
                          ? 'bg-emerald-500/10 border-emerald-500/50 text-white'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold">
                        <CheckCircle2 className={`w-4 h-4 ${checked ? 'text-emerald-400' : 'text-slate-600'}`} />
                        <span>{item.label}</span>
                      </div>
                      <span className="text-[11px] font-bold text-amber-400">{item.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Result Card (Right 5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 p-8 rounded-3xl border border-amber-500/30 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Calculated Estimate</span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> No Obligation
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-semibold block mb-1">Estimated Refurbishment Investment</span>
                <div className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
                  £{estimate.min.toLocaleString()} – £{estimate.max.toLocaleString()}
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Includes full labour, waste removal, waterproofing, tiling & fixture installation.
                </p>
              </div>

              {/* Guarantees Included */}
              <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Fixed price quote after home survey</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Full insurance & tidy workmanship</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Fast turnaround & clear communication</span>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold py-4 rounded-2xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 text-sm active:scale-95"
              >
                <span>Lock In This Estimate & Book Free Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-400 italic">
                *Final price verified upon on-site survey. Zero hidden charges.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
