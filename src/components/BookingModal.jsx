import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Phone } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-white">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-white">BOOKING REQUEST RECEIVED!</h3>
            <p className="text-sm text-slate-300">
              We have received your request for a free survey. A team member from M&H Plumbing & Heating will contact you shortly to confirm the appointment.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded text-xs uppercase"
            >
              DONE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white">BOOK FREE QUOTE SURVEY</h3>
                <p className="text-xs text-slate-400">M&H Plumbing & Heating • Liverpool & North West</p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">YOUR FULL NAME *</label>
              <input 
                type="text" 
                required 
                placeholder="e.g. Michael Smith"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">PHONE NUMBER *</label>
              <input 
                type="tel" 
                required 
                placeholder="e.g. 07700 900888"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">POSTCODE / AREA *</label>
              <input 
                type="text" 
                required 
                placeholder="e.g. L1 or CH41 (Liverpool / North West)"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">PREFERRED SURVEY DATE</label>
              <input 
                type="date" 
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 rounded-lg shadow-lg transition-all text-sm uppercase tracking-wider"
            >
              CONFIRM BOOKING REQUEST
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>Or call direct: <a href="tel:07700900888" className="text-red-500 font-bold hover:underline">07700 900888</a></span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
