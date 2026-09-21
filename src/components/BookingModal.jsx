import React, { useState } from 'react';

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Roof Repairs & Replacement',
    location: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#131924] border border-emerald-500/30 p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
        >
          ✕
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-2">
            <span>EVERCREST ROOFING IRELAND</span>
          </div>
          <h3 className="text-2xl font-bold text-white font-heading">
            Request a Free Roof Quote
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            No obligation. We will review your project and get back to you promptly.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-black flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-emerald-500/30">
              ✓
            </div>
            <h4 className="text-lg font-bold text-white font-heading">Request Submitted!</h4>
            <p className="text-xs text-slate-300">
              Thank you {formData.name}. Our local roofing specialist will call you shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="pill-btn-emerald py-2.5 px-6 text-xs"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                placeholder="John Murphy"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="087 123 4567"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Roofing Service Needed *</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors"
              >
                <option>Roof Repairs & Replacement</option>
                <option>Flat Roofing Specialists</option>
                <option>Dry Verge & Ridge Systems</option>
                <option>Chimney & Valley Repairs</option>
                <option>Roof Cleaning & Treatment</option>
                <option>Fascia, Soffit & Guttering</option>
                <option>24/7 Emergency Repairs</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Location / County in Ireland *</label>
              <input
                type="text"
                required
                placeholder="e.g. Dublin, Cork, Galway"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Additional Details (Optional)</label>
              <textarea
                rows="3"
                placeholder="Brief description of the issue or project..."
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full pill-btn-emerald py-3.5 text-xs font-bold font-heading mt-2"
            >
              Submit Free Quote Request
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
