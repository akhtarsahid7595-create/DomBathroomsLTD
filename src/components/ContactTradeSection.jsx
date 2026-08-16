import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

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
        
        {/* Title with Red Underline (Matching Image 2 "CONTACT US" block) */}
        <h2 className="text-3xl sm:text-4xl font-heading font-black uppercase tracking-tight heading-underline mb-6">
          CONTACT US
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Thinking about transforming your bathroom? Message DomBathroomsLTD today for a FREE quote and let's turn your old bathroom into something you'll love!
        </p>

        {submitted ? (
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg text-center space-y-4 max-w-xl mx-auto">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
            <h3 className="text-xl font-heading font-bold text-white">THANK YOU! MESSAGE RECEIVED</h3>
            <p className="text-slate-400 text-sm">
              We have received your message and will get back to you shortly with your free quotation.
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
                  placeholder="e.g. John Smith"
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-300 uppercase mb-1">PHONE NUMBER *</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="e.g. 07700 900123"
                  value={form.phone}
                  onChange={(e) => setForm({...form, phone: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold text-slate-300 uppercase mb-1">EMAIL ADDRESS</label>
              <input 
                type="email" 
                placeholder="e.g. john@example.com"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold text-slate-300 uppercase mb-1">PROJECT DETAILS</label>
              <textarea 
                rows={3} 
                placeholder="Describe your bathroom project..."
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600"
              />
            </div>

            {/* Red Button (Exact copy of CONTACT US button in Image 2) */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm py-4 rounded uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>SEND MESSAGE</span>
            </button>
          </form>
        )}

      </div>
    </section>
  );
}
