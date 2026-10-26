import React, { useState } from 'react';
import OwnerNoticeBanner from './components/OwnerNoticeBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';

export default function App() {
  const [selectedService, setSelectedService] = useState('Haircut & Styling');

  // Smooth scroll helper
  const scrollToSection = (sectionId) => {
    const targetElement = document.querySelector(sectionId);
    if (targetElement) {
      const headerOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleBookClick = () => {
    scrollToSection('#booking');
  };

  const handleExploreClick = () => {
    scrollToSection('#services');
  };

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    scrollToSection('#booking');
  };

  return (
    <div className="bbc-salon-app">
      {/* Discreet Demo Header */}
      <OwnerNoticeBanner />

      {/* Sticky Luxury Navigation */}
      <Navbar onBookClick={handleBookClick} />

      {/* Main Page Flow */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          onBookClick={handleBookClick}
          onExploreClick={handleExploreClick}
        />

        {/* Services Showcase */}
        <Services onSelectService={handleSelectService} />

        {/* About Editorial Section */}
        <About onBookClick={handleBookClick} />

        {/* Visual Portfolio Gallery */}
        <Gallery />

        {/* Reviews & Social Proof */}
        <Reviews />

        {/* Appointment Enquiries / Booking Form */}
        <BookingForm
          key={selectedService}
          initialService={selectedService}
        />

        {/* Contact & Map Location */}
        <Contact />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Luxury Dark Footer */}
      <Footer />

      {/* Dedicated Floating Mobile Action Bar */}
      <MobileActionBar onBookClick={handleBookClick} />
    </div>
  );
}
