import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesBar from './components/FeaturesBar';
import ServicesSection from './components/ServicesSection';
import WhoWeAre from './components/WhoWeAre';
import GallerySection from './components/GallerySection';
import AreasWeCover from './components/AreasWeCover';
import FaqSection from './components/FaqSection';
import QuoteBanner from './components/QuoteBanner';
import Footer from './components/Footer';
import ChatFloatingWidget from './components/ChatFloatingWidget';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenQuote = () => setIsBookingOpen(true);
  const handleCloseQuote = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-[#17201E] selection:bg-[#6FB52C] selection:text-white overflow-x-hidden">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Header / Navbar */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 3. Hero Section */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* 4. Features Bar */}
        <FeaturesBar />

        {/* 5. Services Section */}
        <ServicesSection onOpenQuote={handleOpenQuote} />

        {/* 6. About Section */}
        <WhoWeAre onOpenQuote={handleOpenQuote} />

        {/* 7. Our Gallery Section */}
        <GallerySection onOpenQuote={handleOpenQuote} />

        {/* 8. Areas We Cover Section */}
        <AreasWeCover />

        {/* 9. FAQ Section */}
        <FaqSection />

        {/* 10. Free Quote Callout Banner */}
        <QuoteBanner onOpenQuote={handleOpenQuote} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Floating Quote Widget */}
      <ChatFloatingWidget onOpenQuote={handleOpenQuote} />

      {/* Free Quote Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseQuote} />
    </div>
  );
}
