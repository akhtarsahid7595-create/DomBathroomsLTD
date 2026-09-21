import React from 'react';

export default function EvercrestLogo({ variant = 'light', className = '' }) {
  const isDark = variant === 'dark';
  const mainTextColor = isDark ? '#FFFFFF' : '#0F172A';
  const rooferColor = isDark ? '#FFFFFF' : '#0F172A';
  const greenColor = '#10B981';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Recreated Vector SVG Logo Emblem from Flyer */}
      <svg 
        className="w-12 h-12 shrink-0 overflow-visible" 
        viewBox="0 0 200 160" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sun in background */}
        <circle cx="120" cy="55" r="28" fill={isDark ? "#334155" : "#E2E8F0"} />

        {/* Green Mountain Peaks */}
        <path d="M90 75L135 25L180 75H90Z" fill={greenColor} />
        <path d="M125 75L160 38L195 75H125Z" fill="#047857" />

        {/* Roof Peak Structure */}
        <path d="M40 90L115 35L190 90" stroke={mainTextColor} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M45 90L115 38L185 90" stroke={greenColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

        {/* Roof Tiles texture on right slope */}
        <path d="M125 50L170 82" stroke={isDark ? "#94A3B8" : "#64748B"} strokeWidth="3" strokeDasharray="6 4" />
        <path d="M135 43L180 75" stroke={isDark ? "#94A3B8" : "#64748B"} strokeWidth="3" strokeDasharray="6 4" />

        {/* 4-Pane Window inside gable */}
        <rect x="105" y="65" width="20" height="20" rx="2" fill={mainTextColor} />
        <line x1="115" y1="65" x2="115" y2="85" stroke={isDark ? "#0B0F17" : "#FFFFFF"} strokeWidth="2" />
        <line x1="105" y1="75" x2="125" y2="75" stroke={isDark ? "#0B0F17" : "#FFFFFF"} strokeWidth="2" />

        {/* Silhouetted Roofer Working on Left Slope */}
        {/* Head with hard hat */}
        <circle cx="78" cy="38" r="6" fill={rooferColor} />
        <path d="M72 36C72 33 84 33 84 36Z" fill={greenColor} />
        {/* Body bending over roof */}
        <path d="M68 55L78 42L90 48L78 62Z" fill={rooferColor} />
        {/* Arm holding hammer */}
        <path d="M86 46L98 52L94 56" stroke={rooferColor} strokeWidth="3" strokeLinecap="round" />
        {/* Hammer hitting roof */}
        <rect x="94" y="52" width="6" height="4" fill={greenColor} />
        {/* Legs kneeling */}
        <path d="M68 55L58 68L70 72" stroke={rooferColor} strokeWidth="4" strokeLinecap="round" />

        {/* Ground / Roof Base Line */}
        <line x1="20" y1="95" x2="195" y2="95" stroke={greenColor} strokeWidth="4" />
      </svg>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className="text-2xl font-black tracking-tight uppercase font-heading leading-none" style={{ color: mainTextColor }}>
          EVERCREST
        </span>
        <div className="flex items-center gap-2 mt-1">
          <div className="h-[2px] flex-grow bg-emerald-500"></div>
          <span className="text-xs font-black tracking-widest text-emerald-500 uppercase font-heading">
            ROOFING
          </span>
          <div className="h-[2px] flex-grow bg-emerald-500"></div>
        </div>
      </div>
    </div>
  );
}
