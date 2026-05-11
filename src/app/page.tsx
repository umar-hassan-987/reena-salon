import type { Metadata } from 'next';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Your Exclusive Sanctuary for Luxury & Pampering',
  description: 'Step into a world of refined elegance where expert stylists and premium treatments await to reveal your most radiant self.',
};

const services = [
  {
    title: 'Bridal Artistry',
    category: 'BRIDAL',
    categoryColor: '#FBDCDC',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80',
  },
  {
    title: 'Luxury Facials',
    category: 'SKINCARE',
    categoryColor: '#D4E8D4',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80',
  },
  {
    title: 'Hair Styling',
    category: null,
    categoryColor: null,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
  },
  {
    title: 'Manicure & Pedicure',
    category: null,
    categoryColor: null,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
  },
];

const testimonials = [
  {
    name: 'Hafsa Nadeem',
    avatar: 'H',
    rating: 5,
    text: 'This Salon has options to shine with style of my day. You might see such a search for another salon. This Salon is just a wonderful brand! Discovered their Skincare and Hairstyle, beautifully done.',
  },
  {
    name: 'Syeda Fatima Abbasi',
    avatar: 'S',
    rating: 5,
    text: 'Reena Beauty Salon is that name that appears to be you shall meet to be one of the finest. Professional service and incredible attention to detail.',
  },
  {
    name: 'Agha Ahmed',
    avatar: 'A',
    rating: 5,
    text: 'Reena and Samina are humble... great work and very understanding. My wife leaves here feeling absolutely amazing every single time.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(44, 24, 16, 0.55) 0%, rgba(44, 24, 16, 0.40) 50%, rgba(44, 24, 16, 0.60) 100%)',
        }} />
        <div style={{ position: 'relative', textAlign: 'center', padding: '0 24px', maxWidth: '750px' }}>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(38px, 5.5vw, 66px)',
            fontWeight: 500,
            color: 'white',
            lineHeight: 1.15,
            marginBottom: '20px',
            textShadow: '0 2px 20px rgba(0,0,0,0.15)',
          }}>
            Your Exclusive Sanctuary for Luxury &amp; Pampering
          </h1>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.88)',
            lineHeight: 1.7,
            marginBottom: '36px',
            maxWidth: '540px',
            margin: '0 auto 36px',
          }}>
            Step into a world of refined elegance where expert stylists and premium treatments await to reveal your most radiant self.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--color-dark)', border: 'none' }}>
              Book Appointment
            </Link>
            <Link href="/services" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.6)', color: 'white' }}>
              View Service Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section style={{ backgroundColor: 'var(--color-cream)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <AnimateOnScroll direction="left">
            <div style={{ borderRadius: '2px', overflow: 'hidden', aspectRatio: '4/5' }}>
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80"
                alt="Luxury beauty treatment"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
            <div>
              <p className="section-label">OUR PHILOSOPHY</p>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 500, color: 'var(--color-dark)', lineHeight: 1.25, marginBottom: '20px' }}>
                A Journey of Beauty &amp; Excellence
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--color-text)', lineHeight: 1.8, marginBottom: '12px' }}>
                At Reena Beauty Salon, we believe beauty is a deeply personal experience. Our sanctuary in Islamabad is designed to offer you an escape from the ordinary, where personalized care and sophisticated styling merge.
              </p>
              <p style={{ fontSize: '14px', color: 'var(--color-text)', lineHeight: 1.8, marginBottom: '28px' }}>
                We commit to the finest products and techniques to ensure every visit leaves you feeling perfectly refreshed and flawless.
              </p>
              <Link href="/about" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-dark)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--color-dark)', paddingBottom: '2px' }}>
                SHOW OUR STORY →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ backgroundColor: 'var(--color-cream-dark)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <AnimateOnScroll style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p className="section-label">OUR SERVICES</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 500, color: 'var(--color-dark)' }}>
              Curated Experiences
            </h2>
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {services.map((service, i) => (
              <AnimateOnScroll key={service.title} delay={i * 100}>
                <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', cursor: 'pointer' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="img-zoom"
                  />
                  {service.category && (
                    <div style={{ position: 'absolute', top: '16px', left: '16px', backgroundColor: service.categoryColor || '#fff', padding: '4px 10px', borderRadius: '2px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-dark)' }}>{service.category}</span>
                    </div>
                  )}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 16px', background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'white', fontWeight: 400 }}>{service.title}</h3>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/services" className="btn-outline">
              VIEW FULL MENU →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: 'var(--color-cream)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <AnimateOnScroll style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p className="section-label">TESTIMONIALS</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 500, color: 'var(--color-dark)' }}>
              What Our Clients Say
            </h2>
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 120}>
                <div style={{ backgroundColor: 'white', padding: '28px', boxShadow: '0 2px 16px rgba(0,0,0,0.04)', borderRadius: '2px' }}>
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="star">★</span>
                    ))}
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--color-text)', lineHeight: 1.75, marginBottom: '20px', fontStyle: 'italic' }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--color-pink-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontSize: '14px', color: 'var(--color-maroon)', fontWeight: 500 }}>
                      {t.avatar}
                    </div>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 500, color: 'var(--color-dark)' }}>{t.name}</span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section style={{ backgroundColor: '#E8DDD6', padding: '48px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
          {[
            { icon: '📍', title: 'Visit Us', lines: ['G-11 MARKAZ, 1st Floor', 'Shops & Marina Islamabad'] },
            { icon: '🕐', title: 'Opening Hours', lines: ['10:00 am – 08:00 pm', 'Monday to Sunday'] },
            { icon: '📞', title: 'Contact', lines: ['0315335766', 'Bookings@reenabeautysalon.pk'] },
          ].map((item) => (
            <AnimateOnScroll key={item.title} direction="up">
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '20px', marginBottom: '10px' }}>{item.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-dark)', marginBottom: '8px' }}>{item.title}</h4>
                {item.lines.map((line) => (
                  <p key={line} style={{ fontSize: '13px', color: 'var(--color-text)', lineHeight: 1.6 }}>{line}</p>
                ))}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
