import React, { useState } from 'react';

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Roofing & Full Replacement',
    county: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 p-5 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-400 hover:text-slate-900 p-2 rounded-full hover:bg-slate-100 transition-colors z-10"
        >
          ✕
        </button>

        <div className="mb-4 sm:mb-6 shrink-0 pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2 font-heading">
            <span>☘️ EVERCREST CONTRACTING</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
            Get a Free Estimate
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Fill out your details below and our team will get in touch with you promptly.
          </p>
        </div>

        <div className="overflow-y-auto pr-1 flex-grow">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#0F381E] text-white flex items-center justify-center font-bold text-2xl mx-auto shadow-lg">
                ✓
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-heading">Estimate Request Received!</h4>
              <p className="text-xs text-slate-600">
                Thank you {formData.name}. An Evercrest Contracting specialist will reach out to you shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="ic-btn-primary py-2.5 px-6 text-xs"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 text-left pb-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="John Murphy"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-emerald-800 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="(087) 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-emerald-800 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Service Needed *</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-emerald-800 transition-colors"
                >
                  <option>Roofing & Full Replacement</option>
                  <option>Roof Repair & Storm Damage</option>
                  <option>Rubber Roofing (EPDM)</option>
                  <option>Natural Slate & Chimney Repair</option>
                  <option>Dry Verge & Ridge Systems</option>
                  <option>Fascia, Soffit & Guttering</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">County / Location in Ireland *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dublin, Cork, Galway"
                  value={formData.county}
                  onChange={(e) => setFormData({...formData, county: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-emerald-800 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Details / Notes (Optional)</label>
                <textarea
                  rows="3"
                  placeholder="Please describe your roof condition or project..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-emerald-800 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full ic-btn-primary py-3.5 text-xs font-bold font-heading mt-2 min-h-[44px]"
              >
                Get a Free Estimate →
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
