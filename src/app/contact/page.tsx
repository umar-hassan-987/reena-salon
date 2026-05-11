'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Plus, Minus } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const dynamic = 'force-static';

const faqs = [
  { q: 'Q1. How can I stop hair loss?', a: 'Hair loss can be addressed with a combination of professional treatments and proper at-home care. We recommend our nourishing hair treatments and can advise on the best routine for your hair type during your visit.' },
  { q: 'Q2. Can I wax if I have body acne?', a: 'We advise against waxing over active acne as it can spread bacteria and cause irritation. Our specialists can assess your skin and recommend the most suitable hair removal method for your skin condition.' },
  { q: 'Q3. How to fix dry, weak nails?', a: 'Dry, weak nails benefit from regular moisturising with cuticle oil, a balanced diet rich in biotin, and avoiding harsh chemicals. Our nail care specialists offer strengthening treatments to help restore nail health.' },
  { q: 'Q4. What services does Reena Beauty Salon offer?', a: 'We offer a comprehensive range of beauty services including hair styling, bridal and party makeup, facials, threading, waxing, manicures, pedicures, nail art, and body massage treatments.' },
  { q: 'Q5. Do I need an appointment or can I walk in?', a: 'While we welcome walk-ins based on availability, we strongly recommend booking an appointment to ensure you receive your preferred time slot and dedicated specialist attention.' },
];

const services = ['Hair Styling', 'Bridal Makeup', 'Party Makeup', 'Facials', 'Threading', 'Waxing', 'Manicure', 'Pedicure', 'Nail Art', 'Body Massage'];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', date: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(44, 24, 16, 0.60) 0%, rgba(44, 24, 16, 0.50) 100%)' }} />
        <AnimateOnScroll style={{ position: 'relative', textAlign: 'center', padding: '40px 24px 0' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(34px, 5vw, 54px)', fontWeight: 500, color: 'white', marginBottom: '14px', textShadow: '0 2px 16px rgba(0,0,0,0.15)' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto' }}>
            We&apos;d Love to Hear From You. Your journey to a tranquil sanctuary begins here. Drop us a message, and our team will get back to you shortly.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Form + Info */}
      <section style={{ backgroundColor: 'var(--color-cream)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
          {/* Form */}
          <AnimateOnScroll direction="left">
            <div style={{ backgroundColor: 'white', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', borderRadius: '2px' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 500, color: 'var(--color-dark)', marginBottom: '28px' }}>
                Send a Message
              </h2>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>✉️</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--color-dark)', marginBottom: '10px' }}>Message Sent!</h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text)' }}>Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '11px', fontWeight: 500, color: 'var(--color-dark)', letterSpacing: '0.06em', display: 'block', marginBottom: '6px' }}>FULL NAME *</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Eg: Saima Hayat" style={{ width: '100%', padding: '11px 14px', border: '1px solid var(--color-border)', fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-dark)', outline: 'none', backgroundColor: 'transparent' }} />
                    </div>
                    <div>
                      <label style={{ fontSize: '11px', fontWeight: 500, color: 'var(--color-dark)', letterSpacing: '0.06em', display: 'block', marginBottom: '6px' }}>EMAIL ADDRESS *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Eg: saima@abc.com" style={{ width: '100%', padding: '11px 14px', border: '1px solid var(--color-border)', fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-dark)', outline: 'none', backgroundColor: 'transparent' }} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '11px', fontWeight: 500, color: 'var(--color-dark)', letterSpacing: '0.06em', display: 'block', marginBottom: '6px' }}>CONTACT NO. *</label>
                      <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Eg: +92 500 420 5000" style={{ width: '100%', padding: '11px 14px', border: '1px solid var(--color-border)', fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-dark)', outline: 'none', backgroundColor: 'transparent' }} />
                    </div>
                    <div>
                      <label style={{ fontSize: '11px', fontWeight: 500, color: 'var(--color-dark)', letterSpacing: '0.06em', display: 'block', marginBottom: '6px' }}>SELECT THE SERVICE</label>
                      <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} style={{ width: '100%', padding: '11px 14px', border: '1px solid var(--color-border)', fontFamily: 'var(--font-sans)', fontSize: '13px', color: form.service ? 'var(--color-dark)' : '#999', outline: 'none', backgroundColor: 'white', appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23555\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}>
                        <option value="">Select the service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 500, color: 'var(--color-dark)', letterSpacing: '0.06em', display: 'block', marginBottom: '6px' }}>BOOKING DATE</label>
                    <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} style={{ width: '100%', padding: '11px 14px', border: '1px solid var(--color-border)', fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-dark)', outline: 'none', backgroundColor: 'transparent' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 500, color: 'var(--color-dark)', letterSpacing: '0.06em', display: 'block', marginBottom: '6px' }}>MESSAGE</label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="You can ask any query" rows={4} style={{ width: '100%', padding: '11px 14px', border: '1px solid var(--color-border)', fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-dark)', outline: 'none', backgroundColor: 'transparent', resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>
                    SUBMIT REQUEST
                  </button>
                </form>
              )}
            </div>
          </AnimateOnScroll>

          {/* Info */}
          <AnimateOnScroll direction="right">
            <div>
              <div style={{ marginBottom: '36px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 500, color: 'var(--color-dark)', marginBottom: '16px' }}>Location</h3>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <MapPin size={16} color="var(--color-maroon)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <p style={{ fontSize: '14px', color: 'var(--color-text)', lineHeight: 1.7 }}>
                    G-11 MARKAZ, Silver Plaza<br />1st Floor, Islamabad, Pakistan
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '36px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 500, color: 'var(--color-dark)', marginBottom: '16px' }}>Get in Touch</h3>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                  <Phone size={14} color="var(--color-maroon)" />
                  <span style={{ fontSize: '14px', color: 'var(--color-text)' }}>T: 0315335766</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Mail size={14} color="var(--color-maroon)" />
                  <a href="mailto:Bookings@reenabeautysalon.pk" style={{ fontSize: '14px', color: 'var(--color-text)', textDecoration: 'none' }}>Bookings@reenabeautysalon.pk</a>
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--color-pink-light)', padding: '20px', borderRadius: '2px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px' }}>
                  <Clock size={15} color="var(--color-maroon)" />
                  <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600, color: 'var(--color-dark)' }}>Hours</h4>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--color-text)' }}>
                  <span>Mon to Sun</span>
                  <span style={{ fontWeight: 500 }}>10:00 am – 08:00 pm</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Map Placeholder */}
      <section style={{ height: '300px', backgroundColor: '#E8E0DA', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://api.mapbox.com/styles/v1/mapbox/light-v11/static/73.0479,33.6844,13,0/1200x300@2x?access_token=pk.placeholder)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(30%) brightness(0.95)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <MapPin size={32} color="var(--color-maroon)" />
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-dark)', fontWeight: 500 }}>G-11 MARKAZ, Silver Plaza, Islamabad</p>
          <a href="https://maps.google.com/?q=G-11+MARKAZ+Silver+Plaza+Islamabad" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ marginTop: '8px', fontSize: '11px', padding: '8px 18px' }}>
            Open in Maps
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: 'var(--color-cream)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <AnimateOnScroll style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 500, color: 'var(--color-dark)', marginBottom: '12px' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text)' }}>Everything you need to know before your visit.</p>
          </AnimateOnScroll>
          <div>
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={faq.q} delay={i * 60}>
                <div style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, color: 'var(--color-dark)', flex: 1, paddingRight: '16px' }}>{faq.q}</span>
                    {openFaq === i ? <Minus size={16} color="var(--color-maroon)" /> : <Plus size={16} color="var(--color-dark)" />}
                  </button>
                  {openFaq === i && (
                    <div style={{ paddingBottom: '20px' }}>
                      <p style={{ fontSize: '13px', color: 'var(--color-text)', lineHeight: 1.8 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
