import React from 'react';
import { Star, Quote, ThumbsUp } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Marcus & Sarah H.",
      location: "London",
      project: "Full Master Bathroom Refurbishment",
      quote: "DomBathroomsLTD completely transformed our outdated 90s bathroom into a luxury 5-star hotel spa! Dom and his team were so professional, kept everything tidy every single day, and finished right on time.",
      rating: 5,
      date: "Verified Customer"
    },
    {
      name: "David K.",
      location: "Chigwell",
      project: "En-suite Walk-In Wetroom",
      quote: "Top quality work! The tile work is absolutely flawless and the LED recessed niches look incredible. Honest pricing with zero hidden costs. Highly recommend them to anyone wanting a hassle-free renovation.",
      rating: 5,
      date: "Verified Customer"
    },
    {
      name: "Claire & James P.",
      location: "Brentwood",
      project: "Strip-Out & Modern Tiling",
      quote: "From stripping out the old bath to installing our new freestanding tub, communication was clear and honest throughout. Fast turnaround and extremely tidy workmanship. Couldn't be happier!",
      rating: 5,
      date: "Verified Customer"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-slate-900 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-xs uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Happy Customers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real feedback from homeowners who trusted DomBathroomsLTD for their bathroom refurbishment.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div 
              key={i}
              className="bg-slate-950 p-8 rounded-3xl border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-xl relative"
            >
              <Quote className="w-10 h-10 text-slate-800 absolute top-6 right-6 stroke-1" />

              <div>
                {/* Rating Stars */}
                <div className="flex text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, r) => (
                    <Star key={r} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <p className="text-xs text-slate-400">{rev.project} • {rev.location}</p>
                </div>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold px-2 py-0.5 rounded">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
