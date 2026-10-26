import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, AlertCircle } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function Services({ onSelectService }) {
  // Separate priority hair services from secondary services
  const priorityServices = salonData.services.filter((s) => s.isPriority);
  const secondaryServices = salonData.services.filter((s) => !s.isPriority);

  return (
    <section id="services" className="section services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">Curated Offerings</div>
          <h2 className="section-title">A Little Care. A Beautiful Difference.</h2>
          <p className="section-desc">
            Explore our curated menu of hair artistry, restorative therapies, and beauty rituals
            designed exclusively for women in Phagwara.
          </p>
        </div>

        {/* Priority Highlight Header: Client-Favored Hair Artistry */}
        <div style={{ marginBottom: '1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600, color: 'var(--color-champagne-gold)' }}>
              Core Specialization
            </span>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--color-espresso)', marginTop: '0.2rem' }}>
              Signature Hair Artistry &amp; Treatments
            </h3>
          </div>
          <span className="verification-badge">
            Highlighted based on supplied Phagwara client feedback
          </span>
        </div>

        {/* Priority Services Grid */}
        <div className="services-priority-grid">
          {priorityServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card priority-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="service-img-wrapper">
                <img
                  src={service.image}
                  alt={`${service.title} at BBC Salon Phagwara`}
                  className="service-img"
                  loading="lazy"
                />
                <div className="service-tag">{service.priorityLabel}</div>
              </div>

              <div className="service-body">
                <span className="service-category">{service.category}</span>
                <h4 className="service-title">{service.title}</h4>
                <span className="service-punjabi">{service.punjabiTitle}</span>
                <p className="service-desc">{service.shortDesc}</p>

                {/* Service Highlights */}
                <ul className="service-highlights">
                  {service.highlights.map((item, i) => (
                    <li key={i} className="service-highlight-item">
                      <Check size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer with Price Tag & Action */}
                <div className="service-footer">
                  <span className="service-price-note">
                    {service.price}
                  </span>
                  <button
                    type="button"
                    className="service-enquire-btn"
                    onClick={() => onSelectService(service.title)}
                  >
                    <span>Enquire</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Services Header */}
        <div style={{ margin: '4rem 0 1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600, color: 'var(--color-champagne-gold)' }}>
              Complete Pampering
            </span>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--color-espresso)', marginTop: '0.2rem' }}>
              Facial, Bridal &amp; Nail Care Rituals
            </h3>
          </div>
          <span style={{ fontSize: '0.85rem', color: 'var(--color-muted-taupe)' }}>
            Exclusively tailored for celebrations and daily rejuvenation
          </span>
        </div>

        {/* Secondary Services Grid */}
        <div className="services-secondary-grid">
          {secondaryServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-secondary-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <img
                src={service.image}
                alt={`${service.title} service`}
                className="service-secondary-img"
                loading="lazy"
              />
              <div className="service-secondary-body">
                <span className="service-category">{service.category}</span>
                <h4 className="service-secondary-title">{service.title}</h4>
                <p className="service-secondary-desc">{service.shortDesc}</p>

                <div className="service-footer" style={{ marginTop: 'auto' }}>
                  <span className="service-price-note">
                    {service.price}
                  </span>
                  <button
                    type="button"
                    className="service-enquire-btn"
                    onClick={() => onSelectService(service.title)}
                  >
                    <span>Enquire</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explicit Owner Confirmation Notice */}
        <div className="services-owner-note">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--color-espresso)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem' }}>
            <AlertCircle size={16} color="var(--color-champagne-gold)" />
            <span>Salon Owner Verification Notice</span>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'rgba(56, 40, 32, 0.75)', maxWidth: '720px', margin: '0 auto' }}>
            Proposed service list and sample descriptions. Exact menu offerings, tiered service pricing, and brand-specific package details will be confirmed with BBC Salon management prior to official publication.
          </p>
        </div>
      </div>
    </section>
  );
}
