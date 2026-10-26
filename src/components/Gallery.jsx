import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Filter items
  const filteredItems = activeCategory === 'All'
    ? salonData.galleryItems
    : salonData.galleryItems.filter((item) => item.category === activeCategory);

  // Lock body scroll when lightbox is active
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImageIndex]);

  // Lightbox handlers
  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showPrev = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  }, [selectedImageIndex, filteredItems.length]);

  const showNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  }, [selectedImageIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, showPrev, showNext]);

  const currentItem = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="eyebrow">Visual Portfolio</div>
          <h2 className="section-title">Artistry &amp; Atmosphere</h2>
          <p className="section-desc">
            Explore curated aesthetics showcasing hair styling precision, dimensional hair color,
            restorative treatments, and serene salon spaces.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="gallery-filter-bar">
          {salonData.galleryCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(category);
                setSelectedImageIndex(null);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="gallery-grid">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`gallery-card aspect-${item.aspect || 'square'}`}
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
                aria-label={`View ${item.title}`}
              >
                {item.isAuthentic && (
                  <span className="gallery-authentic-tag">
                    Authentic Client Work
                  </span>
                )}

                <img
                  src={item.image}
                  alt={`${item.title} — ${item.category}`}
                  className="gallery-card-img"
                  loading="lazy"
                />

                <div className="gallery-overlay">
                  <span className="gallery-card-category">{item.category}</span>
                  <h4 className="gallery-card-title">{item.title}</h4>
                  <p className="gallery-card-desc">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Portfolio Status Note */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <span className="verification-badge" style={{ padding: '0.55rem 1.25rem', color: 'var(--color-espresso)', background: 'rgba(185, 154, 112, 0.16)' }}>
            <Sparkles size={14} color="var(--color-champagne-gold)" />
            <span>
              <strong>Authentic Salon Portfolio:</strong> Highlighting real client hair styling, balayage, and restorative smoothing transformations photographed at BBC Salon, Phagwara.
            </span>
          </span>
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {selectedImageIndex !== null && currentItem && (
        <div
          className="lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={closeLightbox}
              aria-label="Close image viewer"
            >
              <X size={20} />
            </button>

            {/* Prev Button */}
            <button
              type="button"
              className="lightbox-nav-btn lightbox-prev"
              onClick={showPrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image Wrapper */}
            <div className="lightbox-img-wrapper">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="lightbox-img"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              className="lightbox-nav-btn lightbox-next"
              onClick={showNext}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Meta Bar */}
            <div className="lightbox-meta">
              <div>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-champagne-gold)' }}>
                  {currentItem.category}
                </span>
                <h3 className="lightbox-title">{currentItem.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(246, 240, 231, 0.8)', marginTop: '0.2rem' }}>
                  {currentItem.description}
                </p>
              </div>

              <span style={{ fontSize: '0.85rem', color: 'var(--color-taupe-light)' }}>
                {selectedImageIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
