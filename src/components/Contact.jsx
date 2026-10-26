import React from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
  AlertTriangle,
  Compass,
} from 'lucide-react';
import { salonData } from '../data/salonData';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">Find Us In Phagwara</div>
          <h2 className="section-title">Visit Our Sanctuary</h2>
          <p className="section-desc">
            Located in the heart of Phagwara on Plahi Road, near City Palace.
            Drop in for a personalized hair consultation or reach out to us directly.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Salon Details & Opening Hours */}
          <div className="contact-details">
            {/* Address & Direct Actions Card */}
            <div className="contact-card">
              <span className="eyebrow no-after" style={{ marginBottom: '0.5rem' }}>
                Salon Address
              </span>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.2rem' }}>
                {salonData.business.name}
              </h3>
              <p className="brand-punjabi" style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                {salonData.business.punjabiName}
              </p>

              <ul className="contact-info-list">
                <li className="contact-info-item">
                  <div className="contact-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-info-text">
                    <h5>Address &amp; Landmark</h5>
                    <p>{salonData.business.address.street}</p>
                    <p style={{ color: 'var(--color-muted-taupe)', fontSize: '0.9rem' }}>
                      {salonData.business.address.city}, {salonData.business.address.state} — {salonData.business.address.pincode}
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-champagne-gold)', marginTop: '0.2rem' }}>
                      Plus Code: {salonData.business.locationCode}
                    </p>
                  </div>
                </li>

                <li className="contact-info-item">
                  <div className="contact-icon-box">
                    <Phone size={20} />
                  </div>
                  <div className="contact-info-text">
                    <h5>Telephone Consultation</h5>
                    <a href={`tel:${salonData.business.phone.raw}`}>
                      {salonData.business.phone.display}
                    </a>
                  </div>
                </li>

                <li className="contact-info-item">
                  <div className="contact-icon-box">
                    <MessageCircle size={20} />
                  </div>
                  <div className="contact-info-text">
                    <h5>WhatsApp Direct</h5>
                    <a
                      href={`https://wa.me/${salonData.business.whatsapp.number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +{salonData.business.whatsapp.number} (Instant Chat)
                    </a>
                  </div>
                </li>
              </ul>

              {/* Action Buttons */}
              <div className="contact-actions">
                <a
                  href={`tel:${salonData.business.phone.raw}`}
                  className="btn btn-primary"
                  style={{ flexGrow: 1 }}
                >
                  <Phone size={15} />
                  <span>Call Salon</span>
                </a>

                <a
                  href={`https://wa.me/${salonData.business.whatsapp.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ flexGrow: 1 }}
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={salonData.business.googleMaps.searchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ width: '100%' }}
                >
                  <Navigation size={15} />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Opening Hours Schedule */}
            <div className="hours-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={18} color="var(--color-champagne-gold)" />
                  <h4 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)' }}>
                    Salon Operating Hours
                  </h4>
                </div>
                <span className="verification-badge">Tentative Schedule</span>
              </div>

              {/* Notice regarding unverified overnight records */}
              <div
                style={{
                  background: 'rgba(185, 154, 112, 0.08)',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-xs)',
                  borderLeft: '2px solid var(--color-champagne-gold)',
                  marginBottom: '1rem',
                  fontSize: '0.78rem',
                  lineHeight: '1.5',
                  color: 'rgba(56, 40, 32, 0.8)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600, color: 'var(--color-espresso)', marginBottom: '0.15rem' }}>
                  <AlertTriangle size={13} color="var(--color-champagne-gold)" />
                  <span>Owner Confirmation Required</span>
                </div>
                {salonData.hours.statusNotice}
              </div>

              <table className="hours-table">
                <tbody>
                  {salonData.hours.schedule.map((item) => (
                    <tr key={item.day}>
                      <td className="hours-day">
                        {item.day}
                        {item.day === 'Monday' || item.day === 'Tuesday' ? (
                          <span style={{ fontSize: '0.68rem', color: 'var(--color-muted-taupe)', marginLeft: '0.4rem', fontWeight: 'normal' }}>
                            (Pending verify)
                          </span>
                        ) : null}
                      </td>
                      <td className="hours-time">{item.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed & Landmarks */}
          <div className="map-container">
            <div className="map-frame-wrapper">
              <iframe
                title="BBC Salon Phagwara Location on Google Maps"
                src={salonData.business.googleMaps.embedUrl}
                className="map-iframe"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Landmark & Finding Guidance */}
            <div
              style={{
                background: 'var(--color-soft-white)',
                border: '1px solid var(--color-gold-border)',
                borderRadius: 'var(--radius-xs)',
                padding: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Compass size={18} color="var(--color-champagne-gold)" />
                <h4 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)' }}>
                  Landmark Navigation Guide
                </h4>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'rgba(56, 40, 32, 0.8)', lineHeight: '1.6' }}>
                Located on <strong>Plahi Road</strong>, in close proximity to <strong>City Palace</strong>.
                If arriving from Phagwara GT Road or Railway Station, proceed toward Plahi Road.
                Free parking and quiet access available for salon patrons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
