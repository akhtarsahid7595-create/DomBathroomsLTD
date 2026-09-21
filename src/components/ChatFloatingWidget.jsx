import React from 'react';

export default function ChatFloatingWidget({ onOpenQuote }) {
  return (
    <button
      onClick={onOpenQuote}
      className="chat-widget-btn group shadow-2xl border border-emerald-500/30"
      aria-label="Chat with us"
    >
      <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 font-bold text-sm">
        💬
      </div>
      <span className="text-sm font-bold font-heading">Chat with us</span>
    </button>
  );
}
