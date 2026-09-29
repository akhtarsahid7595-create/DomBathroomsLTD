import React, { useState, useEffect } from 'react';
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
import QuotePage from './components/QuotePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash === '#quote' ? 'quote' : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#quote') {
        setCurrentPage('quote');
      } else if (window.location.hash === '' || window.location.hash === '#home') {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenQuotePage = () => {
    window.location.hash = '#quote';
    setCurrentPage('quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    window.location.hash = '';
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'quote') {
    return <QuotePage onGoHome={handleGoHome} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-[#17201E] selection:bg-[#6FB52C] selection:text-white overflow-x-hidden">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Header / Navbar */}
      <Header onOpenQuote={handleOpenQuotePage} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 3. Hero Section */}
        <Hero onOpenQuote={handleOpenQuotePage} />

        {/* 4. Features Bar */}
        <FeaturesBar />

        {/* 5. Services Section */}
        <ServicesSection onOpenQuote={handleOpenQuotePage} />

        {/* 6. About Section */}
        <WhoWeAre onOpenQuote={handleOpenQuotePage} />

        {/* 7. Our Gallery Section */}
        <GallerySection onOpenQuote={handleOpenQuotePage} />

        {/* 8. Areas We Cover Section */}
        <AreasWeCover />

        {/* 9. FAQ Section */}
        <FaqSection />

        {/* 10. Free Quote Callout Banner */}
        <QuoteBanner onOpenQuote={handleOpenQuotePage} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Floating Quote Widget */}
      <ChatFloatingWidget onOpenQuote={handleOpenQuotePage} />
    </div>
  );
}
