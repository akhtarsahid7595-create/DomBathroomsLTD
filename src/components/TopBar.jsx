import React from 'react';
import { Phone, Calendar, MapPin, Sparkles } from 'lucide-react';

export default function TopBar({ onOpenBooking }) {
  return (
    <div className="bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-800 text-white text-sm font-medium py-2 px-4 shadow-md relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-purple-100">
          <MapPin className="w-4 h-4 text-purple-300 animate-pulse" />
          <span>Available in London & Surrounding Areas • Fast Turnaround Guarantee</span>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-4">
          <button 
            onClick={onOpenBooking}
            className="bg-white text-purple-950 hover:bg-purple-100 text-xs font-bold py-1.5 px-4 rounded-full transition-all duration-200 shadow-sm flex items-center gap-1.5 active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5 text-purple-700" />
            Booking request
          </button>
          
          <a 
            href="tel:07700900123" 
            className="flex items-center gap-1.5 hover:text-purple-200 transition-colors font-semibold tracking-wide text-xs sm:text-sm"
          >
            <Phone className="w-3.5 h-3.5 text-purple-300" />
            07700 900123
          </a>
        </div>
      </div>
    </div>
  );
}
