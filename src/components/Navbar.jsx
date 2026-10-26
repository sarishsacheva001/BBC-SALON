import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function Navbar({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
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

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container-wide navbar-container">
          {/* Brand Wordmark & Punjabi Tag */}
          <a
            href="#home"
            className="brand-wrapper"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <div className="brand-monogram">B</div>
            <div className="brand-text">
              <span className="brand-title">{salonData.business.name}</span>
              <div className="brand-sub">
                <span className="brand-tag">{salonData.business.badge}</span>
                <span style={{ color: 'var(--color-champagne-gold)', fontSize: '0.7rem' }}>•</span>
                <span className="brand-punjabi">ਬੀਬੀਸੀ ਸਲੋਨ</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="nav-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="nav-actions">
            <button
              type="button"
              className="btn btn-primary btn-book"
              onClick={onBookClick}
              id="nav-book-btn"
            >
              <Calendar size={15} />
              <span>Book Appointment</span>
            </button>

            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <>
          <div
            className="mobile-backdrop"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Menu">
            <div className="mobile-drawer-header">
              <div className="brand-text">
                <span className="brand-title">{salonData.business.name}</span>
                <span className="brand-punjabi">ਬੀਬੀਸੀ ਸਲੋਨ (ਲੇਡੀਜ਼ ਸਲੋਨ)</span>
              </div>
              <button
                type="button"
                className="mobile-toggle-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-footer">
              <button
                type="button"
                className="btn btn-gold"
                style={{ width: '100%' }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick();
                }}
              >
                <Calendar size={16} />
                <span>Book an Appointment</span>
              </button>

              <a
                href={`tel:${salonData.business.phone.raw}`}
                className="btn btn-outline"
                style={{ width: '100%' }}
              >
                <Phone size={16} />
                <span>Call {salonData.business.phone.display}</span>
              </a>

              <p style={{ fontSize: '0.75rem', color: 'var(--color-muted-taupe)', textAlign: 'center', marginTop: '0.5rem' }}>
                {salonData.business.address.street}, {salonData.business.address.city}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
