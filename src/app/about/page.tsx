import type { Metadata } from 'next';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'About Us — Our Story & Philosophy',
  description: 'Discover the passion behind Reena Beauty Salon — your trusted beauty sanctuary in Islamabad for style, luxury and personalised care.',
};

const philosophy = [
  {
    icon: '💎',
    title: 'Your Beauty, Your Way',
    desc: 'At Reena Salon, we know that you\'re unique, and so is your beauty journey. Our personalised care ensures to enhance your natural charm.',
  },
  {
    icon: '✨',
    title: 'Where Quality Meets Glamour',
    desc: 'You deserve to shine with quality that speaks for itself. Salon premium products and expert techniques ensure luxurious experiences every time.',
  },
  {
    icon: '🛡️',
    title: 'Safety First, Always',
    desc: 'Your health and safety are our top concerns. We maintain the highest hygiene standards, ensuring every tool and surface is sanitized.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(44, 24, 16, 0.60) 0%, rgba(44, 24, 16, 0.50) 100%)' }} />
        <AnimateOnScroll style={{ position: 'relative', textAlign: 'center', padding: '40px 24px 0' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 500, color: 'white', marginBottom: '16px', textShadow: '0 2px 16px rgba(0,0,0,0.15)' }}>
            About Us
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
            Discover the passion behind Reena Beauty Salon — your trusted beauty sanctuary in Islamabad for style, luxury and personalised care.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Story Section */}
      <section style={{ backgroundColor: 'var(--color-pink-light)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <AnimateOnScroll direction="left">
            <div style={{ borderRadius: '2px', overflow: 'hidden', aspectRatio: '4/5' }}>
              <img
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&q=80"
                alt="Reena Beauty Salon Interior"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 500, color: 'var(--color-dark)', lineHeight: 1.25, marginBottom: '20px' }}>
                A Journey of Beauty &amp; Excellence
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--color-text)', lineHeight: 1.85, marginBottom: '16px' }}>
                Our mission at Reena Beauty Salon Islamabad is to transform beauty for the lively spirit of our city. Ladies, if you want to have some ME TIME, then we&apos;re your favourite place to relax and enjoy some pampering.
              </p>
              <p style={{ fontSize: '14px', color: 'var(--color-text)', lineHeight: 1.85 }}>
                The Talented Artists at our Salon work harder to bring out your natural beauty, so you can leave feeling fabulous every time!
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Our Philosophy */}
      <section style={{ backgroundColor: 'var(--color-cream)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <AnimateOnScroll style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 500, color: 'var(--color-dark)' }}>
              Our Philosophy
            </h2>
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '44px' }}>
            {philosophy.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 130}>
                <div style={{ backgroundColor: 'white', padding: '32px 24px', textAlign: 'center', boxShadow: '0 2px 16px rgba(0,0,0,0.04)', borderRadius: '2px' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: 'var(--color-pink-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '22px' }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 600, color: 'var(--color-dark)', marginBottom: '12px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--color-text)', lineHeight: 1.75 }}>
                    {item.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/contact" className="btn-outline">
              JOIN THE REENA FAMILY
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--color-pink-light)', padding: '80px 24px', textAlign: 'center' }}>
        <AnimateOnScroll>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 500, color: 'var(--color-dark)', lineHeight: 1.3, marginBottom: '20px' }}>
              Join the best salon in Islamabad, and let&apos;s elevate your beauty game together!
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text)', lineHeight: 1.8, marginBottom: '32px' }}>
              Here, we believe that every client deserves to radiate confidence and style. That&apos;s why we provide personalised care that&apos;s as unique as you are. Step into Reena Salon, indulge in a royal pampering experience, and walk out with a smile.
            </p>
            <Link href="/contact" className="btn-outline">
              LET&apos;S CONNECT
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
