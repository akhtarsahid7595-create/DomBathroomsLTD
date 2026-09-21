import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBadgesBar from './components/TrustBadgesBar';
import WhoWeAre from './components/WhoWeAre';
import ServicesSection from './components/ServicesSection';
import ChatFloatingWidget from './components/ChatFloatingWidget';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenQuote = () => setIsBookingOpen(true);
  const handleCloseQuote = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-slate-800 selection:bg-emerald-800 selection:text-white overflow-x-hidden">
      {/* Top Announcement Bar (Licensed, Bonded & Insured) */}
      <TopBar />

      {/* IrelandContracting White Sticky Navbar with Phone & Free Estimate CTA */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Hero Section matching Image 1 */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* Trust & Guarantee Bar matching Image 2 */}
        <TrustBadgesBar />

        {/* Centered About Section matching Image 2 */}
        <WhoWeAre onOpenQuote={handleOpenQuote} />

        {/* 3-Column Service Card Grid matching Image 3 */}
        <ServicesSection onOpenQuote={handleOpenQuote} />
      </main>

      {/* Deep Forest Green Footer matching Image 4 */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Floating "Chat with us" Widget */}
      <ChatFloatingWidget onOpenQuote={handleOpenQuote} />

      {/* Estimate Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseQuote} />
    </div>
  );
}
