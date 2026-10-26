import React from 'react';
import { ArrowUp, Phone, MessageCircle } from 'lucide-react';
import { salonData } from '../data/salonData';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Appointment Enquiry', href: '#booking' },
    { label: 'Contact & Location', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Identity */}
          <div className="footer-col">
            <div className="brand-wrapper" style={{ marginBottom: '1.25rem' }}>
              <div className="brand-monogram">B</div>
              <div className="brand-text">
                <span className="brand-title" style={{ color: 'var(--color-warm-ivory)' }}>
                  {salonData.business.name}
                </span>
                <span className="brand-punjabi" style={{ color: 'var(--color-champagne-gold)' }}>
                  {salonData.business.punjabiName}
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'rgba(246, 240, 231, 0.75)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Dedicated exclusively to women. Delivering precision haircuts, couture hair coloring,
              and restorative therapies in a tranquil, hygienic ladies sanctuary in Phagwara.
            </p>

            <span className="verification-badge" style={{ color: 'var(--color-champagne-gold)', borderColor: 'rgba(185, 154, 112, 0.3)' }}>
              Phagwara Ladies Salon Sanctuary
            </span>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-title">Explore</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Signature Offerings */}
          <div className="footer-col">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link">Haircut &amp; Styling</a></li>
              <li><a href="#services" className="footer-link">Hair Coloring &amp; Balayage</a></li>
              <li><a href="#services" className="footer-link">Restorative Hair Treatments</a></li>
              <li><a href="#services" className="footer-link">Sensory Hair Spa</a></li>
              <li><a href="#services" className="footer-link">Facial &amp; Skin Care</a></li>
              <li><a href="#services" className="footer-link">Bridal &amp; Party Makeup</a></li>
              <li><a href="#services" className="footer-link">Manicure &amp; Pedicure</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Phagwara Landmark */}
          <div className="footer-col">
            <h4 className="footer-title">Visit Us</h4>
            <p style={{ fontSize: '0.88rem', color: 'rgba(246, 240, 231, 0.8)', lineHeight: '1.6', marginBottom: '0.75rem' }}>
              <strong>{salonData.business.address.street}</strong><br />
              {salonData.business.address.city}, {salonData.business.address.state} — {salonData.business.address.pincode}
            </p>

            <p style={{ fontSize: '0.82rem', color: 'var(--color-champagne-gold)', marginBottom: '1.25rem' }}>
              Plus Code: {salonData.business.locationCode}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a
                href={`tel:${salonData.business.phone.raw}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-warm-ivory)', fontSize: '0.9rem' }}
              >
                <Phone size={14} color="var(--color-champagne-gold)" />
                <span>{salonData.business.phone.display}</span>
              </a>

              <a
                href={`https://wa.me/${salonData.business.whatsapp.number}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-warm-ivory)', fontSize: '0.9rem' }}
              >
                <MessageCircle size={14} color="var(--color-champagne-gold)" />
                <span>WhatsApp Appointment Enquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} {salonData.business.name} ({salonData.business.badge}), Phagwara.
            Demonstration presentation prepared for the salon owner. All rights reserved.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.7rem', color: 'var(--color-muted-taupe)' }}>
          Pricing, operating schedule, and service details shown are for demonstration and will be finalized upon owner consultation.
        </div>
      </div>
    </footer>
  );
}
