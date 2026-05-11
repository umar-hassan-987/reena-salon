import type { Metadata } from 'next';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Our Services — Beauty, Hair, Nails & More',
  description: 'Explore Reena Beauty Salon\'s full range of luxury services including hair styling, bridal makeup, facials, nail art, waxing, threading and body massage.',
};

const mainServices = [
  {
    title: 'Haircare & Styling',
    desc: 'From precision cuts to luxurious blowouts, our hair artists craft styles that complement your unique beauty.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    bg: '#FAF7F4',
  },
  {
    title: 'Facial Treatments',
    desc: 'Reveal your most luminous skin with our curated facial rituals, tailored to your skin type and concerns.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80',
    bg: '#FBDCDC',
  },
  {
    title: 'Nail Art & Care',
    desc: 'From classic polish to intricate nail art, our nail specialists transform your hands and feet.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
    bg: '#FAF7F4',
  },
  {
    title: 'Party & Bridal Makeup',
    desc: 'Look and feel extraordinary for your most important moments with our expert makeup artists.',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80',
    bg: '#FBDCDC',
  },
];

const serviceCategories = [
  {
    title: 'Threading',
    items: ['Eyebrow Threading', 'Upper Lip Threading', 'Forehead Threading', 'Chin Threading', 'Sideburn Threading', 'Full Face Threading', 'Full Body Threading'],
  },
  {
    title: 'Waxing',
    items: ['Half Arms Wax', 'Half Legs Wax', 'Full Arms Wax', 'Full Legs Wax', 'Underarms Wax', 'Back Wax', 'Braid Back Wax', 'Brazilian Wax'],
  },
  {
    title: 'Facials',
    items: ['Papaya Facial', 'Lemon Peel Facial', 'Whitening Facial', 'Moisturizing Facial', 'Anti-Aging Facial', 'Bleach Facial', 'Gold Facial', 'Refresh'],
  },
  {
    title: 'Body Massage',
    items: ['Full Body Massage', 'Full Body Polishing', 'Lymphatic Drainage Massage', 'Hot Stone Massage', 'Head Massage', 'Foot Massage'],
  },
  {
    title: 'Hair Services',
    items: ['Hair Cut (Short)', 'Hair Cut (Medium Length)', 'Hair Highlights (Short)', 'Highlights (Starting From)', 'Keratin', 'Rebonding – (Starting From)', 'Straight Perm', 'Deep Conditioning', 'Hair Straightening (Starting From)', 'Balayage Styling'],
  },
  {
    title: 'Nails',
    items: ['Acrylic Nails', 'Gel Nails', 'Gel Polish', 'Glitter Coat', 'Nail Extensions', 'Nail Removal', 'Whitening Nails', '3 Single Nails Fix'],
  },
  {
    title: 'Manicure',
    items: ['Luxe Manicure (Special)', 'Manicure Extension', 'Salon Wellness', 'Pedicure', 'Whitening (Special)', 'Royal Spa Pedicure', 'Pedicure Extension', 'Spa Pedicure', 'Whitening Pedicure Elite'],
  },
  {
    title: 'Makeup',
    items: ['Bridal Makeup', 'Nikah Makeup', 'Party Makeup', 'Mehndi', 'Party Makeup (Formal Shoot)', 'Duty Party Makeup (Shoot)', 'Single Pony Makeup', 'Eyeliner'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(44, 24, 16, 0.60) 0%, rgba(44, 24, 16, 0.50) 100%)' }} />
        <AnimateOnScroll style={{ position: 'relative', textAlign: 'center', padding: '40px 24px 0' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 500, color: 'white', marginBottom: '16px', textShadow: '0 2px 16px rgba(0,0,0,0.15)' }}>
            Our Services
          </h1>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)' }}>
            Artistry in Beauty, Breathe in Class
          </p>
        </AnimateOnScroll>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: 'var(--color-cream)', padding: '56px 24px', textAlign: 'center' }}>
        <AnimateOnScroll>
          <p style={{ fontSize: '14px', color: 'var(--color-text)', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto' }}>
            At Reena Beauty Salon, every service is crafted with precision and passion. We provide an exceptional range of beauty treatments designed to leave you feeling refreshed, radiant, and truly pampered. Browse our complete service menu below and discover your perfect experience.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Main Service Cards */}
      <section style={{ backgroundColor: 'var(--color-cream)', padding: '0 24px 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2px' }}>
          {mainServices.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={i * 100}>
              <div style={{ backgroundColor: service.bg, overflow: 'hidden' }}>
                <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img src={service.image} alt={service.title} className="img-zoom" />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 500, color: 'var(--color-dark)', marginBottom: '10px' }}>{service.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--color-text)', lineHeight: 1.7, marginBottom: '16px' }}>{service.desc}</p>
                  <Link href="/contact" style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-maroon)', textDecoration: 'none', borderBottom: '1px solid var(--color-maroon)', paddingBottom: '2px' }}>
                    Book Now →
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Detailed Service Lists */}
      <section style={{ backgroundColor: 'var(--color-cream-dark)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <AnimateOnScroll style={{ textAlign: 'center', marginBottom: '52px' }}>
            <p className="section-label">COMPLETE MENU</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 500, color: 'var(--color-dark)' }}>
              All Services
            </h2>
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
            {serviceCategories.map((cat, i) => (
              <AnimateOnScroll key={cat.title} delay={i * 60}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 500, color: 'var(--color-dark)', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid var(--color-border)' }}>
                    {cat.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {cat.items.map((item) => (
                      <li key={item} style={{ fontSize: '13px', color: 'var(--color-text)', padding: '5px 0', borderBottom: '1px solid rgba(232,224,218,0.5)', lineHeight: 1.5 }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--color-dark)', padding: '64px 24px', textAlign: 'center' }}>
        <AnimateOnScroll>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 500, color: 'white', marginBottom: '20px' }}>
            Ready for your transformation?
          </h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto 32px' }}>
            Book your appointment today and let our expert team craft an experience perfectly tailored to you.
          </p>
          <Link href="/contact" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--color-dark)' }}>
            Book Appointment
          </Link>
        </AnimateOnScroll>
      </section>
    </>
  );
}
