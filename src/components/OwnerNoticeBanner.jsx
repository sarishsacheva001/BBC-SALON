import React, { useState } from 'react';
import { X } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function OwnerNoticeBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="demo-banner">
      <div className="demo-banner-content">
        <span className="demo-pill">Client Demo</span>
        <span>
          Exclusive website preview for <strong>{salonData.business.name} ({salonData.business.badge})</strong>, Phagwara, Punjab.
        </span>
        <span className="verification-badge" style={{ color: '#E8D9C1', borderColor: 'rgba(232, 217, 193, 0.4)' }}>
          WhatsApp Enquiries Active: {salonData.business.phone.display}
        </span>
      </div>
      <button
        type="button"
        className="demo-close-btn"
        onClick={() => setIsVisible(false)}
        aria-label="Dismiss demo banner"
        title="Dismiss notice"
      >
        <X size={16} />
      </button>
    </div>
  );
}
