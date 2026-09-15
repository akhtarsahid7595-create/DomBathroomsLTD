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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-white">
        
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
            <h3 className="text-2xl font-heading font-bold text-white">CONSULTATION REQUEST RECEIVED!</h3>
            <p className="text-sm text-slate-300">
              Thank you! Peter or Suzanne will contact you shortly to confirm your no-obligation quote and rotation details.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-full text-xs uppercase"
            >
              DONE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white">BOOK A CONSULTATION</h3>
                <p className="text-xs text-slate-400">Peter's Window Cleaning Services • Hot Wash System</p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">YOUR FULL NAME *</label>
              <input 
                type="text" 
                required 
                placeholder="e.g. John Murphy"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">PHONE / WHATSAPP NUMBER *</label>
              <input 
                type="tel" 
                required 
                placeholder="e.g. 086 785 8590"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">SERVICE PREFERENCE</label>
              <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500">
                <option>6 Weeks Window Rotation</option>
                <option>8 Weeks Window Rotation</option>
                <option>12 Weeks Window Rotation</option>
                <option>Gutter Cleaning (10% Off Code MLN9)</option>
                <option>Solar Panel / High Glass Cleaning</option>
                <option>Driveway / Patio Pressure Wash</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3.5 rounded-full shadow-lg transition-all text-sm uppercase tracking-wider"
            >
              CONFIRM CONSULTATION REQUEST
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Or Call / Text Peter or Suzanne: <a href="tel:0867858590" className="text-blue-400 font-bold hover:underline">086 785 8590</a></span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
