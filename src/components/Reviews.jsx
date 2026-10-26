import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink, ShieldCheck } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function Reviews() {
  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        {/* Header */}
        <div className="reviews-header">
          <div className="eyebrow" style={{ color: 'var(--color-champagne-gold)' }}>
            Client Sentiment
          </div>

          {/* Supplied Google Rating Badge */}
          <div className="rating-score-badge">
            <div className="stars-row">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#D4AF37" strokeWidth={0} />
              ))}
            </div>
            <span className="rating-number">{salonData.business.rating.score} / 5.0</span>
            <span className="rating-sub">({salonData.business.rating.totalReviews} Supplied Google Reviews)</span>
          </div>

          <h2 className="section-title" style={{ color: 'var(--color-warm-ivory)' }}>
            Cherished Experiences in Phagwara
          </h2>

          <p className="section-desc" style={{ color: 'rgba(246, 240, 231, 0.8)' }}>
            Customer feedback consistently celebrates our attentive hospitality, precision haircuts,
            luminous hair coloring, and rejuvenating hair care treatments.
          </p>
        </div>

        {/* Feedback Theme Cards */}
        <div className="reviews-grid">
          {salonData.reviewThemes.map((theme, index) => (
            <motion.div
              key={theme.topic}
              className="review-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote size={28} className="review-quote-icon" />

              <p className="review-quote-text">
                &ldquo;{theme.quote}&rdquo;
              </p>

              <div className="review-footer">
                <div style={{ display: 'flex', color: '#D4AF37', marginBottom: '0.4rem' }}>
                  {[...Array(theme.rating)].map((_, i) => (
                    <Star key={i} size={13} fill="#D4AF37" strokeWidth={0} />
                  ))}
                </div>
                <h4 className="review-theme-title">{theme.topic}</h4>
                <div className="review-focus-tag">{theme.focus}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action & Source Note */}
        <div className="reviews-cta-wrap">
          <a
            href={salonData.business.googleMaps.searchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
          >
            <span>Verify &amp; Read Reviews on Google</span>
            <ExternalLink size={15} />
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.74rem', color: 'var(--color-taupe-light)' }}>
            <ShieldCheck size={14} color="var(--color-champagne-gold)" />
            <span>
              Customer sentiments compiled from supplied business profile feedback. No fabricated reviews or identities.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
