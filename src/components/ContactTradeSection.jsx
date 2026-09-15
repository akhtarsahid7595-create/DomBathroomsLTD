import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, MessageCircle } from 'lucide-react';

export default function ContactTradeSection({ onOpenQuote }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-white font-sans border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <h2 className="text-3xl sm:text-4xl font-heading font-black uppercase tracking-tight heading-underline mb-6">
          CONTACT PETER'S WINDOW CLEANING
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Need hard-to-reach windows washed or driveway pressure cleaning? Call, text, WhatsApp or fill out the form below for a FREE no obligation quote!
        </p>

        {/* Quick Contact Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm font-extrabold uppercase">
          <a href="tel:0867858590" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded flex items-center gap-2 shadow-md">
            <Phone className="w-4 h-4" /> Call 086 785 8590
          </a>
          <a href="https://wa.me/353867858590" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded flex items-center gap-2 shadow-md">
            <MessageCircle className="w-4 h-4" /> WhatsApp Us
          </a>
        </div>

        {submitted ? (
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg text-center space-y-4 max-w-xl mx-auto">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
            <h3 className="text-xl font-heading font-bold text-white">THANK YOU! MESSAGE RECEIVED</h3>
            <p className="text-slate-400 text-sm">
              Peter's Window Cleaning Services will review your message and get back to you with your no-obligation quote.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-red-500 hover:underline font-bold"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-slate-900 p-6 sm:p-8 rounded-lg border border-slate-800 text-left max-w-2xl mx-auto space-y-4 shadow-xl">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold text-slate-300 uppercase mb-1">YOUR NAME *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. John Murphy"
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-300 uppercase mb-1">PHONE / WHATSAPP *</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="e.g. 086 785 8590"
                  value={form.phone}
                  onChange={(e) => setForm({...form, phone: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold text-slate-300 uppercase mb-1">SERVICE NEEDED</label>
              <select className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600">
                <option>Hot Wash Window Cleaning (6/8/12 Wk Rotation)</option>
                <option>Hard-to-Reach / Velux Window Wash</option>
                <option>Driveway & Patio Pressure Surface Wash</option>
                <option>Gutter, Fascia & Soffit Cleaning</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-extrabold text-slate-300 uppercase mb-1">PROPERTY DETAILS</label>
              <textarea 
                rows={3} 
                placeholder="Tell us about your windows or exterior cleaning requirements..."
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm py-4 rounded uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>SEND NO OBLIGATION QUOTE REQUEST</span>
            </button>
          </form>
        )}

      </div>
    </section>
  );
}
