import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, HeartHandshake, ShieldCheck, Feather, Edit3 } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function About({ onBookClick }) {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Editorial Visual with Custom Monogram Stamp */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200"
                alt="BBC Salon luxury ladies interior sanctuary in Phagwara"
                className="about-img"
                loading="lazy"
              />
            </div>

            {/* Circular Editorial Stamp */}
            <div className="about-stamp">
              <span className="about-stamp-title">LADIES</span>
              <span className="about-stamp-sub">ਸਿਰਫ਼ ਔਰਤਾਂ ਲਈ</span>
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.12em', color: 'var(--color-champagne-gold)', marginTop: '0.2rem' }}>
                PHAGWARA
              </span>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow no-after">The BBC Salon Experience</div>
            <h2 className="about-title">Beauty That Feels Like You.</h2>

            <p className="about-text">
              At {salonData.business.name}, we believe beauty is an intimate expression of individuality.
              Nestled on {salonData.business.address.street} in {salonData.business.address.city}, our ladies salon is thoughtfully designed as
              a peaceful sanctuary where you can step away from the bustle of daily life and immerse
              yourself in dedicated personal care.
            </p>

            <p className="about-text">
              Every appointment begins with attentive listening. Whether you desire a contemporary
              hair transformation, rich luminous hair coloring, or a restorative scalp ritual, our approach
              centers around personalized consultation and gentle, high-performance formulations.
            </p>

            {/* Phagwara Location Landmark Callout */}
            <div className="about-location-callout">
              <MapPin size={22} color="var(--color-champagne-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div className="about-callout-text">
                <h4>Conveniently Located in Phagwara</h4>
                <p>
                  {salonData.business.address.full}.
                  A discreet, welcoming sanctuary designed exclusively for women.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="about-values-grid">
              <div className="about-value-item">
                <div className="about-value-icon">
                  <HeartHandshake size={16} />
                </div>
                <div className="about-value-text">
                  <h5>Personal Attention</h5>
                  <p>Attentive stylists who listen to your preferences and lifestyle.</p>
                </div>
              </div>

              <div className="about-value-item">
                <div className="about-value-icon">
                  <ShieldCheck size={16} />
                </div>
                <div className="about-value-text">
                  <h5>Dedicated Ladies Sanctuary</h5>
                  <p>A safe, hygienic, and fully private environment for women.</p>
                </div>
              </div>

              <div className="about-value-item">
                <div className="about-value-icon">
                  <Sparkles size={16} />
                </div>
                <div className="about-value-text">
                  <h5>Quality Formulations</h5>
                  <p>Gentle hair pigments and restorative nourishing products.</p>
                </div>
              </div>

              <div className="about-value-item">
                <div className="about-value-icon">
                  <Feather size={16} />
                </div>
                <div className="about-value-text">
                  <h5>Tailored Rituals</h5>
                  <p>Custom treatments designed for hair health and radiant skin.</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onBookClick}
              >
                <span>Reserve Your Time</span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--color-muted-taupe)' }}>
                <Edit3 size={13} color="var(--color-champagne-gold)" />
                <span>Story &amp; founder profile ready for owner customization</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
