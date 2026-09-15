import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, MessageCircle, Mail, Globe } from 'lucide-react';

export default function ContactTradeSection({ onOpenQuote }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-white font-sans border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        <span className="text-blue-400 font-extrabold text-xs uppercase tracking-widest bg-blue-900/50 px-3.5 py-1 rounded-full border border-blue-700/60">
          Get In Touch
        </span>

        <h2 className="text-3xl sm:text-4xl font-heading font-black uppercase tracking-tight heading-underline mt-3 mb-6">
          CONTACT PETER OR SUZANNE
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Need hard-to-reach windows washed, gutter clearance, or outdoor power washing? Contact us today for a FREE no obligation quote!
        </p>

        {/* Contact Info Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
          <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Mobile &amp; WhatsApp</div>
              <a href="tel:0867858590" className="text-sm font-extrabold text-white hover:text-blue-400 transition-colors">086 785 8590</a>
            </div>
          </div>

          <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Office Line</div>
              <a href="tel:018499468" className="text-sm font-extrabold text-white hover:text-blue-400 transition-colors">01 849 9468</a>
            </div>
          </div>

          <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Email Address</div>
              <a href="mailto:info@peterswindowcleaning.com" className="text-xs font-bold text-white hover:text-blue-400 transition-colors">info@peterswindowcleaning.com</a>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center space-y-4 max-w-xl mx-auto">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
            <h3 className="text-xl font-heading font-bold text-white">THANK YOU! MESSAGE RECEIVED</h3>
            <p className="text-slate-400 text-sm">
              Peter or Suzanne will get back to you shortly with your free no-obligation quotation.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-blue-400 hover:underline font-bold"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 text-left max-w-2xl mx-auto space-y-4 shadow-xl">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold text-slate-300 uppercase mb-1">YOUR NAME *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. John Murphy"
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
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
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold text-slate-300 uppercase mb-1">SERVICE &amp; ROTATION PREFERENCE</label>
              <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500">
                <option>Window Cleaning (6 Weeks Rotation)</option>
                <option>Window Cleaning (8 Weeks Rotation)</option>
                <option>Window Cleaning (12 Weeks Rotation)</option>
                <option>Gutter Cleaning (Quote Code MLN9 - 10% Off)</option>
                <option>Solar Panel Cleaning</option>
                <option>Driveway / Patio Surface Cleaning</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-extrabold text-slate-300 uppercase mb-1">PROPERTY DETAILS</label>
              <textarea 
                rows={3} 
                placeholder="Tell us about your property windows or exterior cleaning requirements..."
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm py-4 rounded-full uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
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
