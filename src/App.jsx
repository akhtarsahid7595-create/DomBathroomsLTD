import React, { useState } from 'react';
import TradeHeader from './components/TradeHeader';
import ContactBar from './components/ContactBar';
import TradeHero from './components/TradeHero';
import TradeServicesCards from './components/TradeServicesCards';
import ProcessVideoSection from './components/ProcessVideoSection';
import WhyChooseUsTrade from './components/WhyChooseUsTrade';
import CalloutBanners from './components/CalloutBanners';
import ContactTradeSection from './components/ContactTradeSection';
import ReviewsTradeSection from './components/ReviewsTradeSection';
import AccreditationBadges from './components/AccreditationBadges';
import TradeFooter from './components/TradeFooter';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenQuote = () => setIsBookingOpen(true);
  const handleCloseQuote = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 font-sans">
      {/* Top Navigation & Contact Bar (Image 2 Exact Structure) */}
      <TradeHeader onOpenQuote={handleOpenQuote} />
      <ContactBar />

      {/* Main Trade Content Sections */}
      <main className="flex-grow">
        <TradeHero onOpenQuote={handleOpenQuote} />
        <TradeServicesCards onOpenQuote={handleOpenQuote} />
        <ProcessVideoSection onOpenQuote={handleOpenQuote} />
        <WhyChooseUsTrade onOpenQuote={handleOpenQuote} />
        <CalloutBanners onOpenQuote={handleOpenQuote} />
        <ContactTradeSection onOpenQuote={handleOpenQuote} />
        <ReviewsTradeSection />
        <AccreditationBadges />
      </main>

      {/* Footer & Quote Request Modal */}
      <TradeFooter onOpenQuote={handleOpenQuote} />
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseQuote} />
    </div>
  );
}
