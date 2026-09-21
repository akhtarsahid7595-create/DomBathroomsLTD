import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import PricingPackagesSection from './components/PricingPackagesSection';
import GallerySection from './components/GallerySection';
import CtaBanner from './components/CtaBanner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenQuote = () => setIsBookingOpen(true);
  const handleCloseQuote = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F17] font-sans antialiased text-white selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      {/* Top Emergency Announcement Bar */}
      <TopBar />

      {/* Sticky Glassmorphism Header */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Pattern 1: High-Impact Split Hero */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* Pattern 2: "Who We Are ?" 2-Column Feature Split */}
        <WhoWeAre onOpenQuote={handleOpenQuote} />

        {/* Core Roofing Services Section */}
        <ServicesSection onOpenQuote={handleOpenQuote} />

        {/* Pattern 3: "Why Choose Us" Checkmark Grid */}
        <WhyChooseUsSection onOpenQuote={handleOpenQuote} />

        {/* Pattern 4: Vertical Table Service Package Cards & Disclaimer */}
        <PricingPackagesSection onOpenQuote={handleOpenQuote} />

        {/* Real Project Photo Gallery */}
        <GallerySection onOpenQuote={handleOpenQuote} />

        {/* Pattern 5: High-Impact CTA Banner + 3-Icon Feature Bar */}
        <CtaBanner onOpenQuote={handleOpenQuote} />

        {/* Contact Form Section */}
        <ContactSection />
      </main>

      {/* Footer & Quote Request Modal */}
      <Footer onOpenQuote={handleOpenQuote} />
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseQuote} />
    </div>
  );
}
