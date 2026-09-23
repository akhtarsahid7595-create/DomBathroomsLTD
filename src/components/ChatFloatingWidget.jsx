import React from 'react';

export default function ChatFloatingWidget({ onOpenQuote }) {
  return (
    <button
      onClick={onOpenQuote}
      className="fixed bottom-4 right-4 z-50 bg-[#6FB52C] text-white font-black font-heading p-3 sm:px-5 sm:py-3 rounded-full shadow-2xl hover:bg-[#5ea323] transition-all flex items-center gap-2 group border border-white/30"
      aria-label="Chat with us"
    >
      <span className="text-lg">💬</span>
      <span className="hidden sm:inline text-sm uppercase tracking-wider font-extrabold">Free Quote</span>
    </button>
  );
}
