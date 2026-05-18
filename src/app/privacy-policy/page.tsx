'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, ShieldCheck, Mail, Phone, Calendar } from 'lucide-react';

export default function LegalAndPoliciesPage() {
  const [activeSection, setActiveSection] = useState('information-collection');

  const sections = [
    {
      id: 'information-collection',
      title: 'Information Collection',
      content: [
        'At Reena Beauty Salon, we gather specific personal details to curate an experience tailored precisely to your needs. This includes, but is not limited to, your name, contact information, appointment history, and specific aesthetic preferences or sensitivities discussed during consultations.',
        'Information is collected when you book an appointment, whether through our digital concierge service or directly at our boutique. We treat this data with the utmost discretion, viewing it as essential to maintaining the high standards of our sanctuary.',
      ],
    },
    {
      id: 'use-of-information',
      title: 'Use of Information',
      content: [
        'The details you entrust to us are utilized strictly to elevate your salon experience. We use your contact information to seamlessly manage your schedule, sending refined reminders and necessary updates regarding your appointments.',
        'Furthermore, understanding your previous treatments and preferences allows our specialists to anticipate your needs, ensuring that every visit feels personalized and exceptionally luxurious. We do not engage in the indiscriminate sharing or selling of your personal sanctuary data to third-party marketing entities.',
      ],
    },
    {
      id: 'data-protection',
      title: 'Data Protection',
      content: [
        'Safeguarding your digital footprint is paramount. We employ sophisticated, industry-standard security protocols to protect against unauthorized access, alteration, or disclosure of your personal information.',
        'Our digital infrastructure is regularly audited to ensure compliance with leading privacy standards. Your trust is the foundation of our relationship, and we are dedicated to maintaining an impenetrable environment for your personal details.',
      ],
    },
    {
      id: 'cancellation-policy',
      title: 'Cancellation Policy',
      content: [
        'Time within our sanctuary is carefully orchestrated to provide uninterrupted luxury for every guest. Therefore, we respectfully require an elegant notice period for any adjustments to your reserved time.',
        'Adjustments made with less than the required notice may be subject to a nominal fee, reflecting the dedicated time our specialists had reserved exclusively for you.',
      ],
      isHighlight: true,
      highlightText: 'Cancellations or rescheduling requests must be made a minimum of 24 hours prior to your scheduled appointment. This courtesy allows us to extend the available time to other discerning clients.',
    },
    {
      id: 'terms-of-service',
      title: 'Terms of Service',
      isTerms: true,
      subsections: [
        {
          title: '1. Appointment Booking & Scheduling',
          text: 'To secure your preferred time with our elite specialists, appointments can be reserved through our online concierge or by phone. We request a valid phone number and contact details to guarantee your booking. We extend a 15-minute grace period to all guests; beyond this, we may need to shorten or reschedule your ritual to preserve the unhurried luxury experience for subsequent clients.',
        },
        {
          title: '2. Sanctuary Etiquette & Conduct',
          text: 'Reena Beauty Salon is a sanctuary of peace, relaxation, and restoration. We kindly ask that you keep mobile devices on silent and respect the serene atmosphere for all clients within the sanctuary. To preserve this sanctuary of safety, we reserve the right to refuse service to anyone demonstrating inappropriate behavior, showing signs of highly contagious health conditions, or failing to comply with our community guidelines.',
        },
        {
          title: '3. Health & Treatment Disclosures',
          text: 'Your health and safety are our absolute priority. Please disclose any skin sensitivities, active allergies, medical conditions, or pregnancy during your initial consultation or booking. Our highly trained specialists will customize your treatments and product selections to accommodate your unique physical profile safely and comfortably.',
        },
        {
          title: '4. Limitation of Liability',
          text: 'While we hold ourselves to the highest standards of safety, medical-grade sanitization, and premium product sourcing, Reena Beauty Salon is not liable for minor skin reactions, standard sensitivity responses, or personal property lost or damaged within the sanctuary premises, unless caused by gross negligence.',
        },
      ],
    },
  ];

  // Set active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // offset for the sticky header/padding

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial hash on mount and scroll to it
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.replace('#', '');
      const el = document.getElementById(sectionId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection(sectionId);
        }, 300);
      }
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update hash in URL quietly
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <main className="pt-[72px] bg-[#ffffff] min-h-screen text-[#333b2a]">
      {/* Editorial Page Header */}
      <section className="w-full bg-[#f9f7f4] py-24 md:py-32 px-6 text-center border-b border-[#e1deda]/30">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="font-label-caps text-xs text-[#767c6b] uppercase tracking-[0.3em] font-semibold">
            Legal &amp; Policies
          </p>
          <h1 className="font-display-lg text-4xl sm:text-5xl md:text-7xl text-[#333b2a] leading-tight font-light">
            Privacy Policy <span className="italic font-decorative-accent text-[#6b7260]">&amp;</span> Terms
          </h1>
          <p className="font-body-md text-base md:text-lg text-[#5c6453] leading-relaxed max-w-2xl mx-auto">
            Your sanctuary is built on trust. We are committed to protecting your personal information, maintaining transparent booking rules, and ensuring a secure, serene experience.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative">
          
          {/* Sticky Left Sidebar Navigation */}
          <aside className="lg:col-span-4 sticky top-32 hidden lg:block">
            <div className="flex flex-col gap-6 pl-4 border-l border-[#e1deda]">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left font-body-md text-base transition-all duration-300 ${
                    activeSection === section.id
                      ? 'text-[#333b2a] font-bold translate-x-1'
                      : 'text-[#878e80] hover:text-[#333b2a]'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
            
            {/* Elegant info note in sidebar */}
            <div className="mt-16 p-8 bg-[#f9f7f4] rounded-3xl border border-[#e1deda]/50 space-y-4 max-w-[280px]">
              <div className="w-10 h-10 bg-[#dde6ce] rounded-xl flex items-center justify-center text-[#4a5240]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="font-display-lg text-lg text-[#333b2a]">Sanctuary Guarantee</p>
              <p className="font-body-md text-xs text-[#5c6453] leading-relaxed">
                Every detail, every service, and all personal data are fully protected with the absolute highest standards of medical-grade sanitization and private discretion.
              </p>
            </div>
          </aside>

          {/* Right Scrollable Content Area */}
          <div className="lg:col-span-8 space-y-24 md:space-y-32">
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                style={{ scrollMarginTop: '108px' }}
                className="space-y-8 scroll-mt-28"
              >
                
                {/* Section Title */}
                <h2 className="font-display-lg text-3xl md:text-5xl text-[#333b2a] border-b border-[#e1deda]/40 pb-4 leading-tight font-light">
                  {section.title}
                </h2>

                {/* Normal Section Content */}
                {!section.isTerms && !section.isHighlight && section.content && (
                  <div className="space-y-6 font-body-md text-base md:text-lg text-[#5c6453] leading-relaxed">
                    {section.content.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )}

                {/* Highlighted Cancellation Policy Card */}
                {section.isHighlight && (
                  <div className="space-y-8">
                    {section.content && (
                      <div className="space-y-6 font-body-md text-base md:text-lg text-[#5c6453] leading-relaxed">
                        {section.content.map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>
                    )}
                    
                    {/* The Watermarked Inspiration Card */}
                    <div className="relative overflow-hidden bg-[#faf7f3] border border-[#e8e5e0] p-8 md:p-12 rounded-[2.5rem] shadow-sm">
                      {/* Subtlest Watermark clock/calendar background */}
                      <div className="absolute right-6 md:right-10 bottom-6 md:bottom-8 text-[#4a5240]/3 pointer-events-none select-none">
                        <Clock className="w-32 h-32 md:w-48 md:h-48" />
                      </div>
                      
                      <div className="relative z-10 space-y-6 max-w-xl">
                        <div className="flex items-center gap-4">
                          <span className="w-1.5 h-6 bg-[#767c6b] rounded-full"></span>
                          <h4 className="font-label-caps text-xs text-[#767c6b] uppercase tracking-[0.2em] font-semibold">
                            Notice Requirement
                          </h4>
                        </div>
                        <p className="font-body-md text-base md:text-xl text-[#333b2a] font-medium leading-relaxed">
                          {section.highlightText}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Terms and Conditions Subsection layout */}
                {section.isTerms && section.subsections && (
                  <div className="space-y-12">
                    {section.subsections.map((sub, i) => (
                      <div key={i} className="space-y-4">
                        <h3 className="font-display-lg text-xl md:text-2xl text-[#333b2a] font-medium">
                          {sub.title}
                        </h3>
                        <p className="font-body-md text-base md:text-lg text-[#5c6453] leading-relaxed">
                          {sub.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

              </article>
            ))}

            {/* Bottom Conversion Banner - Editorial Luxe style */}
            <div className="bg-[#333b2a] rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 space-y-4 text-center md:text-left">
                <p className="font-label-caps text-[10px] text-[#c1cab3] uppercase tracking-[0.3em]">Return to your sanctuary</p>
                <h3 className="font-display-lg text-2xl md:text-4xl">Questions about our policies?</h3>
                <p className="font-body-md text-sm text-white/70 max-w-md leading-relaxed">
                  Our concierge desk is always here to assist with any questions about bookings, privacy, or customized rituals.
                </p>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Link
                  href="/contact"
                  className="btn-primary bg-white text-[#333b2a] hover:bg-[#c1cab3] hover:text-[#333b2a] transition-all text-center py-4 px-8 rounded-full"
                >
                  Contact Concierge
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
