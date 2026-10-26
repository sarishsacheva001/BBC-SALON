import React from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function MobileActionBar({ onBookClick }) {
  return (
    <aside className="mobile-action-bar" aria-label="Quick Actions">
      <a
        href={`tel:${salonData.business.phone.raw}`}
        className="mobile-action-btn mobile-call-btn"
        aria-label="Call BBC Salon"
      >
        <Phone size={16} />
        <span>Call Salon</span>
      </a>

      <button
        type="button"
        className="mobile-action-btn mobile-book-btn"
        onClick={onBookClick}
        aria-label="Book an Appointment"
      >
        <Calendar size={16} />
        <span>Book Appointment</span>
      </button>

      <a
        href={`https://wa.me/${salonData.business.whatsapp.number}?text=${encodeURIComponent(salonData.business.whatsapp.defaultMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-action-btn mobile-wa-btn"
        aria-label="Chat on WhatsApp"
        title="WhatsApp Direct"
      >
        <MessageCircle size={18} />
      </a>
    </aside>
  );
}
