import React from 'react';

export default function ChatFloatingWidget({ onOpenQuote }) {
  return (
    <button
      onClick={onOpenQuote}
      className="fixed bottom-4 right-4 z-50 bg-[#0F381E] text-white font-bold font-heading p-3 sm:px-5 sm:py-3 rounded-full shadow-2xl border border-emerald-500/40 hover:bg-[#15522B] transition-all flex items-center gap-2 group"
      aria-label="Chat with us"
    >
      <span className="text-lg">💬</span>
      <span className="hidden sm:inline text-sm">Chat with us</span>
    </button>
  );
}
