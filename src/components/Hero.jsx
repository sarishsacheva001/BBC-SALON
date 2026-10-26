import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Sparkles, Star } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function Hero({ onBookClick, onExploreClick }) {
  return (
    <section id="home" className="hero-section">
      <div className="container-wide">
        <div className="hero-grid">
          {/* Left Column: Editorial Typography & CTAs */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Location Pill */}
            <div className="hero-location-badge">
              <MapPin size={14} color="var(--color-champagne-gold)" />
              <span>Phagwara, Punjab</span>
              <span style={{ color: 'var(--color-champagne-gold)' }}>•</span>
              <span className="punjabi-sub" style={{ fontSize: '0.72rem' }}>ਨੇੜੇ ਸਿਟੀ ਪੈਲੇਸ</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              Your Hair. <br />
              Your Beauty. <br />
              <span className="emphasis">Your Signature.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="hero-subtext">
              Discover a personalized beauty experience at BBC Salon, Phagwara.
              From beautiful hair transformations to your everyday beauty rituals, make time for yourself.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onBookClick}
                id="hero-primary-cta"
              >
                <Calendar size={16} />
                <span>Book an Appointment</span>
              </button>

              <button
                type="button"
                className="btn btn-outline"
                onClick={onExploreClick}
                id="hero-secondary-cta"
              >
                <Sparkles size={16} />
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Meta Strip with Verified Disclaimer */}
            <div className="hero-meta-strip">
              <div className="meta-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span className="meta-number">{salonData.business.rating.score}</span>
                  <div style={{ display: 'flex', color: '#D4AF37' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="#D4AF37" strokeWidth={0} />
                    ))}
                  </div>
                </div>
                <span className="meta-label">
                  {salonData.business.rating.totalReviews} Google Reviews*
                </span>
              </div>

              <div className="meta-item">
                <span className="meta-number">Ladies</span>
                <span className="meta-label">Exclusive Salon Sanctuary</span>
              </div>

              <div className="meta-item">
                <span className="meta-number">Plahi Rd</span>
                <span className="meta-label">Near City Palace</span>
              </div>
            </div>

            <p style={{ fontSize: '0.72rem', color: 'var(--color-muted-taupe)', marginTop: '0.85rem', fontStyle: 'italic' }}>
              *Supplied listing data. Live listing details verified prior to full commercial publication.
            </p>
          </motion.div>

          {/* Right Column: Editorial Visual Composition */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-image-frame">
              <div className="hero-main-img-wrapper">
                <img
                  src="/images/client-balayage-highlights.png"
                  alt="Authentic BBC Salon client balayage and highlights in Phagwara"
                  className="hero-main-img"
                  fetchPriority="high"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(37, 26, 21, 0.88)',
                    color: 'var(--color-champagne-gold)',
                    border: '1px solid var(--color-gold-border)',
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    backdropFilter: 'blur(6px)',
                    borderRadius: 'var(--radius-xs)',
                  }}
                >
                  Authentic Client Transformation
                </div>
              </div>

              {/* Floating Luxury Card */}
              <div className="hero-floating-card">
                <div className="floating-icon-box">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="floating-card-title">Real Salon Results</h4>
                  <p className="floating-card-sub">
                    Directly photographed at BBC Salon, Plahi Road.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Refined Scroll Prompt */}
      <a
        href="#services"
        className="hero-scroll-cue"
        onClick={(e) => {
          e.preventDefault();
          onExploreClick();
        }}
        aria-label="Scroll down to explore services"
      >
        <span>Explore</span>
        <div className="scroll-line" />
      </a>
    </section>
  );
}
