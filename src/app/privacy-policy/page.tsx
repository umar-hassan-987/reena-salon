'use client';

import { useState } from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const dynamic = 'force-static';

const sections = [
  {
    id: 'information-collection',
    title: 'Information Collection',
    content: `At Reena Beauty Salon, we gather specific personal details to curate an experience tailored precisely to your needs. This includes, but is not limited to, your name, contact information, appointment history, and specific aesthetic preferences or sensitivities discussed during consultations.

Information is collected when you book an appointment, whether through our digital concierge service or directly at our boutique. We treat this data with the utmost discretion, viewing it as essential to maintaining the high standards of our sanctuary.`,
  },
  {
    id: 'use-of-information',
    title: 'Use of Information',
    content: `The details you entrust to us are utilized strictly to elevate your salon experience. We use your contact information to seamlessly manage your schedule, sending refined reminders and necessary updates regarding your appointments.

Furthermore, understanding your previous treatments and preferences allows our specialists to anticipate your needs, ensuring that every visit feels personalized and exceptionally luxurious. We do not engage in the indiscriminate sharing or selling of your personal sanctuary data to third-party marketing entities.`,
  },
  {
    id: 'data-protection',
    title: 'Data Protection',
    content: `Safeguarding your digital footprint is paramount. We employ sophisticated, industry-standard security protocols to protect against unauthorized access, alteration, or disclosure of your personal information.

Our digital infrastructure is regularly audited to ensure compliance with leading privacy standards. Your trust is the foundation of our relationship, and we are dedicated to maintaining an impenetrable environment for your personal details.`,
  },
  {
    id: 'cancellation',
    title: 'Cancellation Policy',
    content: `Time within our sanctuary is carefully orchestrated to provide uninterrupted luxury for every guest. Therefore, we respectfully require an elegant notice period for any adjustments to your reserved time.

Cancellations or rescheduling requests must be made a minimum of 24 hours prior to your scheduled appointment. This courtesy allows us to extend the available time to other discerning clients.

Adjustments made with less than the required notice may be subject to a nominal fee, reflecting the dedicated time our specialists had reserved exclusively for you.`,
    highlight: true,
  },
];

export default function PrivacyPolicyPage() {
  const [active, setActive] = useState('information-collection');

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(44, 24, 16, 0.65) 0%, rgba(44, 24, 16, 0.55) 100%)' }} />
        <AnimateOnScroll style={{ position: 'relative', textAlign: 'center', padding: '40px 24px 0' }}>
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>LEGAL & POLICIES</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(34px, 5vw, 54px)', fontWeight: 500, color: 'white', marginBottom: '16px', textShadow: '0 2px 16px rgba(0,0,0,0.15)' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto' }}>
            Your sanctuary is built on trust. We are committed to protecting your personal information and ensuring a secure, serene experience.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: 'var(--color-cream)', padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '220px 1fr', gap: '60px' }}>
          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '90px', height: 'fit-content' }} className="privacy-sidebar">
            <nav>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => { e.preventDefault(); setActive(section.id); document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    color: active === section.id ? 'var(--color-maroon)' : 'var(--color-text)',
                    fontWeight: active === section.id ? 500 : 400,
                    textDecoration: 'none',
                    padding: '8px 0',
                    borderLeft: `2px solid ${active === section.id ? 'var(--color-maroon)' : 'transparent'}`,
                    paddingLeft: '14px',
                    marginBottom: '4px',
                    transition: 'all 0.2s',
                  }}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div>
            {sections.map((section) => (
              <AnimateOnScroll key={section.id}>
                <div
                  id={section.id}
                  style={{
                    marginBottom: '56px',
                    padding: section.highlight ? '32px' : '0',
                    backgroundColor: section.highlight ? 'white' : 'transparent',
                    boxShadow: section.highlight ? '0 2px 20px rgba(0,0,0,0.05)' : 'none',
                    borderRadius: section.highlight ? '2px' : '0',
                    scrollMarginTop: '90px',
                  }}
                >
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 500, color: 'var(--color-dark)', marginBottom: '20px', lineHeight: 1.3 }}>
                    {section.highlight && <span style={{ fontSize: '32px', position: 'absolute', right: '32px', opacity: 0.08, fontFamily: 'var(--font-serif)' }}>📅</span>}
                    {section.title}
                  </h2>
                  {section.content.split('\n\n').map((para, i) => {
                    if (para.includes('Cancellations or rescheduling')) {
                      const [before, ...rest] = para.split('Cancellations or rescheduling');
                      return (
                        <p key={i} style={{ fontSize: '14px', color: 'var(--color-text)', lineHeight: 1.85, marginBottom: '16px' }}>
                          {before}<strong>Cancellations or rescheduling</strong>{rest.join('')}
                        </p>
                      );
                    }
                    return (
                      <p key={i} style={{ fontSize: '14px', color: 'var(--color-text)', lineHeight: 1.85, marginBottom: '16px' }}>
                        {para}
                      </p>
                    );
                  })}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .privacy-sidebar { display: none; }
          section > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
