'use client';

import { useState } from 'react';
import Link from 'next/link';
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
      <section className="relative flex min-h-[380px] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(28,28,26,0.58),rgba(28,28,26,0.38)_50%,rgba(28,28,26,0.58))]" />
        <AnimateOnScroll className="relative z-10 px-6 text-center text-white">
          <p className="section-label text-white/70">Legal &amp; Policies</p>
          <h1 className="text-[clamp(34px,5vw,58px)] leading-[1.1]">Privacy Policy</h1>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-8 text-white/85">
            Your sanctuary is built on trust. We are committed to protecting your personal information and ensuring a secure, serene experience.
          </p>
        </AnimateOnScroll>
      </section>

      <section className="section-spacer px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-[24px] border border-[rgba(198,199,190,0.75)] bg-[var(--color-surface-container-lowest)] p-5 shadow-[0_14px_32px_rgba(28,28,26,0.06)]">
              <p className="section-label">Sections</p>
              <nav className="mt-4 space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(section.id);
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="block rounded-full border-l-2 px-4 py-2 text-[14px] transition"
                    style={{
                      borderLeftColor: active === section.id ? '#4a5240' : 'transparent',
                      color: active === section.id ? '#4a5240' : 'var(--color-text)',
                      backgroundColor: active === section.id ? 'rgba(221,230,206,0.4)' : 'transparent',
                    }}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-8">
            {sections.map((section) => (
              <AnimateOnScroll key={section.id}>
                <article id={section.id} className={section.highlight ? 'sanctuary-card p-8 md:p-10' : 'rounded-[24px] border border-[rgba(198,199,190,0.6)] bg-[var(--color-surface-container-lowest)] p-8 md:p-10 shadow-[0_14px_34px_rgba(28,28,26,0.05)]'} style={{ scrollMarginTop: '96px' }}>
                  <h2 className="font-serif text-[clamp(28px,3.2vw,40px)] text-[#4a5240]">{section.title}</h2>
                  <div className="mt-5 space-y-4 text-[15px] leading-8 text-[var(--color-text)]">
                    {section.content.split('\n\n').map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.highlight ? (
                    <div className="mt-6 rounded-[20px] bg-[#dde6ce] p-5 text-[14px] leading-7 text-[var(--color-text)]">
                      Cancellations or rescheduling requests must be made at least 24 hours before your appointment.
                    </div>
                  ) : null}
                </article>
              </AnimateOnScroll>
            ))}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[24px] bg-[#4a5240] px-6 py-6 text-white">
              <div>
                <p className="section-label text-white/70">Trust</p>
                <p className="text-[15px] leading-7 text-white/80">Read our privacy notes, then return to the salon experience with confidence.</p>
              </div>
              <Link href="/contact" className="btn-primary bg-[var(--color-cream)] text-[#4a5240] hover:text-[#4a5240]">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
