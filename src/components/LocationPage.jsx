import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SeoHead from './SeoHead';

export default function LocationPage({ data, onOpenQuote }) {
  return <div className="min-h-screen bg-white text-[#0A1E30]">
    <SeoHead title={data.title} description={data.description} path={data.path} />
    <Header onOpenQuote={onOpenQuote} />
    <main>
      <section className="bg-[#0A1E30] text-white py-20 px-4 sm:px-[6%]"><div className="max-w-5xl mx-auto"><p className="eyebrow-jg text-[#5A8BAF]">Evercrest Roofing · Dublin</p><h1 className="text-4xl sm:text-6xl font-black font-heading mt-4">Roofing Services in {data.area}</h1><p className="text-slate-300 text-lg max-w-2xl mt-6 leading-relaxed">{data.intro}</p><button onClick={onOpenQuote} className="btn-jg bg-[#5A8BAF] mt-8">Request a free quote</button></div></section>
      <section className="py-16 px-4 sm:px-[6%]"><div className="max-w-5xl mx-auto"><h2 className="text-3xl sm:text-4xl font-black font-heading">Local roofing help for {data.area}</h2><p className="text-[#5A6A7A] leading-relaxed mt-5 max-w-3xl">{data.body}</p><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">{['Roof repairs','Emergency leak repairs','Flat roofing','Guttering and chimneys'].map(item => <a className="card-jg p-5 font-bold font-heading hover:text-[#3B6991]" href={item === 'Roof repairs' ? '/roof-repairs-dublin/' : item === 'Flat roofing' ? '/flat-roofing-dublin/' : item === 'Guttering and chimneys' ? '/gutter-repairs-dublin/' : '/emergency-roof-repairs-dublin/'} key={item}>{item}</a>)}</div></div></section>
    </main><Footer />
  </div>;
}
