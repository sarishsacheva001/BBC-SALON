import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { salonData } from '../data/salonData';

// Module-level calculation of today's date for past-date prevention
const getTodayDateString = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
const MIN_APPOINTMENT_DATE = getTodayDateString();

const TIME_SLOTS = [
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
  '07:00 PM',
];

export default function BookingForm({ initialService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || 'Haircut & Styling',
    date: '',
    time: '11:00 AM',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(null);

  // Validation function
  const validate = () => {
    const newErrors = {};

    // Name check
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    // Indian Phone check: allows 10 digits starting with 6,7,8,9, or with +91 / 0
    const cleanPhone = formData.phone.replace(/[\s\-()]/g, '');
    const indianPhoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your mobile number.';
    } else if (!indianPhoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number (e.g. 98765 43210).';
    }

    // Service check
    if (!formData.service) {
      newErrors.service = 'Please select a preferred service.';
    }

    // Date check (cannot be empty and cannot be in the past)
    if (!formData.date) {
      newErrors.date = 'Please select your desired date.';
    } else if (formData.date < MIN_APPOINTMENT_DATE) {
      newErrors.date = 'Appointment date cannot be in the past.';
    }

    // Time check
    if (!formData.time) {
      newErrors.time = 'Please select a time slot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for that field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Format human-friendly appointment enquiry message for WhatsApp
    const appointmentMessage =
      `*BBC SALON — Appointment Enquiry*\n` +
      `--------------------------------\n` +
      `• *Client Name:* ${formData.name.trim()}\n` +
      `• *Phone:* ${formData.phone.trim()}\n` +
      `• *Requested Service:* ${formData.service}\n` +
      `• *Preferred Date:* ${formData.date}\n` +
      `• *Preferred Time:* ${formData.time}\n` +
      (formData.notes.trim() ? `• *Notes / Requests:* ${formData.notes.trim()}\n` : '') +
      `--------------------------------\n` +
      `*Note:* Submitted via BBC Salon Web Enquiry. Please verify slot availability.`;

    const encodedMessage = encodeURIComponent(appointmentMessage);
    const whatsappUrl = `https://wa.me/${salonData.business.whatsapp.number}?text=${encodedMessage}`;

    // Handoff to WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
      setSubmittedMessage({
        name: formData.name,
        service: formData.service,
        date: formData.date,
        time: formData.time,
        whatsappUrl,
      });
    }, 400);
  };

  return (
    <section id="booking" className="section booking-section">
      <div className="container">
        <div className="booking-wrapper">
          {/* Header */}
          <div className="booking-header">
            <div className="eyebrow">Personalized Scheduling</div>
            <h2 className="booking-title">Reserve Your Salon Time</h2>
            <p className="booking-subtext">
              Submit your appointment request below. Your details will be pre-formatted into a
              direct WhatsApp message to our salon desk (+91 89684 88010) for quick confirmation.
            </p>
          </div>

          {/* Form */}
          <form className="booking-form" onSubmit={handleSubmit} noValidate>
            <div className="form-grid-2">
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="booking-name" className="form-label">
                  Your Full Name <span className="required">*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    id="booking-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Jaspreet Kaur"
                    className={`form-input ${errors.name ? 'has-error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                  />
                </div>
                {errors.name && (
                  <span className="form-error-msg" role="alert">
                    <AlertCircle size={12} />
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Mobile Number */}
              <div className="form-group">
                <label htmlFor="booking-phone" className="form-label">
                  Phone Number (WhatsApp) <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="booking-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 89684 88010"
                  className={`form-input ${errors.phone ? 'has-error' : ''}`}
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && (
                  <span className="form-error-msg" role="alert">
                    <AlertCircle size={12} />
                    {errors.phone}
                  </span>
                )}
              </div>
            </div>

            <div className="form-grid-2">
              {/* Preferred Service */}
              <div className="form-group">
                <label htmlFor="booking-service" className="form-label">
                  Desired Service <span className="required">*</span>
                </label>
                <select
                  id="booking-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`form-select ${errors.service ? 'has-error' : ''}`}
                  aria-required="true"
                >
                  {salonData.services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.category})
                    </option>
                  ))}
                  <option value="Custom Hair Consultation">
                    Custom Hair Consultation &amp; Assessment
                  </option>
                  <option value="Other Beauty Package">Other Beauty Ritual</option>
                </select>
                {errors.service && (
                  <span className="form-error-msg" role="alert">
                    <AlertCircle size={12} />
                    {errors.service}
                  </span>
                )}
              </div>

              {/* Preferred Date */}
              <div className="form-group">
                <label htmlFor="booking-date" className="form-label">
                  Preferred Date <span className="required">*</span>
                </label>
                <input
                  type="date"
                  id="booking-date"
                  name="date"
                  min={MIN_APPOINTMENT_DATE}
                  value={formData.date}
                  onChange={handleChange}
                  className={`form-input ${errors.date ? 'has-error' : ''}`}
                  aria-required="true"
                  aria-invalid={!!errors.date}
                />
                {errors.date && (
                  <span className="form-error-msg" role="alert">
                    <AlertCircle size={12} />
                    {errors.date}
                  </span>
                )}
              </div>
            </div>

            <div className="form-grid-2">
              {/* Preferred Time Slot */}
              <div className="form-group">
                <label htmlFor="booking-time" className="form-label">
                  Preferred Time Slot <span className="required">*</span>
                </label>
                <select
                  id="booking-time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`form-select ${errors.time ? 'has-error' : ''}`}
                  aria-required="true"
                >
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {errors.time && (
                  <span className="form-error-msg" role="alert">
                    <AlertCircle size={12} />
                    {errors.time}
                  </span>
                )}
              </div>

              {/* Salon Direct Contact Helper */}
              <div className="form-group" style={{ justifyContent: 'center' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-muted-taupe)', fontWeight: 600 }}>
                  Immediate Assistance?
                </span>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-espresso)', marginTop: '0.2rem' }}>
                  Call our salon desk directly at{' '}
                  <a
                    href={`tel:${salonData.business.phone.raw}`}
                    style={{ fontWeight: 600, color: 'var(--color-champagne-gold)', textDecoration: 'underline' }}
                  >
                    {salonData.business.phone.display}
                  </a>
                </p>
              </div>
            </div>

            {/* Optional Notes */}
            <div className="form-group">
              <label htmlFor="booking-notes" className="form-label">
                Hair Length / Skin Notes / Specific Requests (Optional)
              </label>
              <textarea
                id="booking-notes"
                name="notes"
                rows="3"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Let us know your hair length, prior chemical treatments, or any special occasion requirements..."
                className="form-textarea"
              />
            </div>

            {/* Crucial Instructions Banner */}
            <div className="form-notice-box">
              <AlertCircle size={18} />
              <div>
                <strong>Appointment Confirmation Notice:</strong> Clicking &quot;Send Enquiry via WhatsApp&quot; will launch WhatsApp with your prefilled details addressed to <strong>BBC Salon (+91 89684 88010)</strong>. Please press &quot;Send&quot; in WhatsApp to dispatch your message. Final appointment timing is confirmed only once our team verifies salon chair availability with you.
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-gold"
              style={{ width: '100%', padding: '1.1rem 2rem', fontSize: '0.9rem' }}
              disabled={isSubmitting}
              id="submit-enquiry-btn"
            >
              {isSubmitting ? (
                <span>Preparing WhatsApp Message...</span>
              ) : (
                <>
                  <Sparkles size={16} />
                  <span>Send Appointment Enquiry via WhatsApp</span>
                </>
              )}
            </button>
          </form>

          {/* Feedback Modal / State */}
          {submittedMessage && (
            <div
              style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'var(--color-success-bg)',
                border: '1px solid var(--color-success)',
                borderRadius: 'var(--radius-xs)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--color-success)', fontWeight: 600, marginBottom: '0.5rem' }}>
                <CheckCircle2 size={20} />
                <span>WhatsApp Enquiry Generated!</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-espresso)', marginBottom: '0.85rem' }}>
                Thank you, <strong>{submittedMessage.name}</strong>! We prepared your request for <strong>{submittedMessage.service}</strong> on <strong>{submittedMessage.date}</strong> at <strong>{submittedMessage.time}</strong>.
              </p>
              <p style={{ fontSize: '0.82rem', color: 'rgba(56, 40, 32, 0.8)', marginBottom: '1rem' }}>
                If WhatsApp did not open automatically on your device, please click the button below to complete sending your message:
              </p>
              <a
                href={submittedMessage.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: '0.82rem', padding: '0.65rem 1.25rem' }}
              >
                <span>Open WhatsApp Now (+91 89684 88010)</span>
                <ExternalLink size={14} />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
