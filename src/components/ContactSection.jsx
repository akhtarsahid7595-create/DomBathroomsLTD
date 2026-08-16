import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';

export default function ContactSection({ onOpenBooking }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    service: 'Full Refurbishment',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social (Image 1 Details) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-amber-400 text-xs font-extrabold tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Get In Touch Today
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-3 tracking-tight">
                Message DomBathroomsLTD Today for a FREE Quote
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
                Ready to transform your old bathroom into something you will love? Fill out the form or reach out directly for a quick response and site survey.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Phone & WhatsApp</h4>
                  <a href="tel:07700900123" className="text-base font-bold text-white hover:text-amber-400 transition-colors">
                    07700 900123
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Mon - Sat: 8:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Instagram DM</h4>
                  <span className="text-base font-bold text-white">@dombathroomsltd</span>
                  <p className="text-xs text-slate-400 mt-0.5">Fast response within 1 hour</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Service Coverage</h4>
                  <p className="text-sm font-bold text-white">London, Essex & Surrounding Home Counties</p>
                  <p className="text-xs text-slate-400 mt-0.5">Free on-site consultation and quotation</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl text-amber-200 text-xs leading-relaxed flex items-center gap-3">
              <Clock className="w-8 h-8 text-amber-400 shrink-0" />
              <span>
                <strong>Fast Turnaround Guarantee:</strong> We schedule surveys promptly and deliver itemized quotations within 24 hours of site inspection.
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">Thank You! Message Received</h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  DomBathroomsLTD will review your request and get back to you shortly to schedule your FREE bathroom survey.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-amber-400 hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white">Request a Free Survey & Quote</h3>
                  <p className="text-xs text-slate-400 mt-1">No obligation. Transparent pricing guaranteed.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Sarah Jenkins" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. 07700 900123" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="e.g. sarah@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Postcode / Area *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. E17 or IG1" 
                      value={formData.postcode}
                      onChange={(e) => setFormData({...formData, postcode: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Primary Service Needed</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="Full Refurbishment">Full Bathroom Refurbishment & Strip-Out</option>
                    <option value="Precision Tiling">Precision Wall & Floor Tiling</option>
                    <option value="Walk-In Wetroom">Walk-In Luxury Wetroom Conversion</option>
                    <option value="Plumbing Fitting">Plumbing & Sanitaryware Installation</option>
                    <option value="Underfloor Heating">Underfloor Heating & Radiators</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Tell Us About Your Bathroom Project</label>
                  <textarea 
                    rows={4}
                    placeholder="Describe your current bathroom and what transformation you are looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold py-4 rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 text-sm active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Free Quote Request</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
