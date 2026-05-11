import type { Metadata } from 'next';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Beauty Secrets & Insights — Our Blog',
  description: 'Discover expert tips, trends, and the philosophy behind minimal, luxurious beauty from the sanctuary of Reena.',
};

export const blogs = [
  {
    slug: '5-tips-for-radiant-skin',
    category: 'SKINCARE',
    categoryColor: '#E8F4E8',
    categoryText: '#2D5A2D',
    title: '5 Tips for Radiant Skin',
    excerpt: 'Unlock the secrets to a natural, luminous glow with our curated daily routines and essential hydration techniques.',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80',
    date: 'March 15, 2024',
    readTime: '4 min read',
    content: `
      <p>Achieving radiant skin is a journey, not a destination. At Reena Beauty Salon, our skin specialists have curated five essential practices that transform dull skin into a luminous canvas.</p>
      <h2>1. Hydration Is Your Foundation</h2>
      <p>Begin every morning with a full glass of water. Your skin is an organ, and like all organs, it thrives on hydration. We recommend drinking at least 8 glasses daily, supplemented with hydrating serums containing hyaluronic acid.</p>
      <h2>2. Double Cleanse Every Evening</h2>
      <p>The double cleansing method — starting with an oil-based cleanser, followed by a water-based one — ensures every trace of makeup, sunscreen, and daily pollution is removed, allowing your skin to breathe and regenerate overnight.</p>
      <h2>3. SPF Is Non-Negotiable</h2>
      <p>Sun protection is the single most effective anti-aging step you can take. Apply a broad-spectrum SPF 30 or higher every morning, even on cloudy days. This prevents hyperpigmentation and premature aging.</p>
      <h2>4. Exfoliate Gently, Twice Weekly</h2>
      <p>Gentle exfoliation removes dead skin cells, allowing your moisturiser to penetrate more deeply. Choose a mild chemical exfoliant over harsh physical scrubs to avoid micro-tears in your skin barrier.</p>
      <h2>5. Sleep Your Way to Glow</h2>
      <p>Quality sleep is your skin's most powerful regeneration tool. During deep sleep, your body produces collagen and repairs damage. Aim for 7-9 hours, and consider a silk pillowcase to minimise friction.</p>
    `,
  },
  {
    slug: 'best-bridal-makeup-trends-2024',
    category: 'BRIDAL',
    categoryColor: '#FBDCDC',
    categoryText: '#5C1B2E',
    title: 'The Best Bridal Makeup Trends of 2024',
    excerpt: 'Explore the shift towards ethereal, \'less is more\' bridal looks that enhance your natural features for the big day.',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80',
    date: 'February 28, 2024',
    readTime: '5 min read',
    content: `
      <p>Bridal beauty in 2024 has taken a turn towards the ethereal — soft, glowing, and deeply personal. Here at Reena Beauty Salon, our bridal makeup artists share the trends defining this season's most beautiful brides.</p>
      <h2>The Soft Glam Revolution</h2>
      <p>Gone are the days of heavy contouring and dramatic smoky eyes. Today's brides are embracing a softer approach — dewy skin, feathery brows, and a flush of rose on the cheeks. The goal is to look like the best version of yourself, not a transformed one.</p>
      <h2>Glass Skin Foundation</h2>
      <p>The 'glass skin' technique uses lightweight, buildable coverage to create a luminous, almost translucent finish. This involves hydrating primers, skin-tint foundations, and strategic highlighting to create depth without heaviness.</p>
      <h2>Romantic Eye Looks</h2>
      <p>Soft, romantic eyes — think blended terracotta shadows, subtle shimmer on the inner corner, and lifted lash lines — are dominating bridal looks. The emphasis is on making eyes appear larger and more awake.</p>
      <h2>Long-Lasting Formulas</h2>
      <p>With events spanning multiple days, our artists prioritise long-wearing formulas. Setting sprays, primer bases, and waterproof products ensure you look flawless from Nikkah to Walima.</p>
    `,
  },
  {
    slug: 'how-to-maintain-your-hair-color',
    category: 'HAIR CARE',
    categoryColor: '#FFF3E0',
    categoryText: '#8B5E00',
    title: 'How to Maintain Your Hair Color',
    excerpt: 'Preserve your salon-fresh color longer with our expert guide to gentle cleansing and deeply nourishing treatments.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    date: 'January 20, 2024',
    readTime: '4 min read',
    content: `
      <p>Colour-treated hair requires a thoughtful routine to preserve its vibrancy and health. Our hair care specialists at Reena Beauty Salon share their essential guide to maintaining salon-fresh colour.</p>
      <h2>Wait Before You Wash</h2>
      <p>After your colour appointment, wait at least 48-72 hours before shampooing. This allows the colour molecules to fully settle into the hair cuticle, resulting in deeper, more lasting colour.</p>
      <h2>Invest in Colour-Safe Products</h2>
      <p>Sulphate-free shampoos and conditioners specifically formulated for colour-treated hair are essential. Regular shampoos strip colour-preserving oils and fade your investment significantly faster.</p>
      <h2>Cold Water Rinse</h2>
      <p>Always finish your hair wash with a cool water rinse. Cold water seals the hair cuticle, locking in moisture and colour, and leaving your hair with a brilliant shine.</p>
      <h2>Heat Protection Every Time</h2>
      <p>Heat styling is one of the greatest enemies of hair colour. Always apply a heat protectant spray before using any heated tools. Keep temperatures below 180°C for colour-treated strands.</p>
    `,
  },
];

export default function BlogsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(44, 24, 16, 0.65) 0%, rgba(44, 24, 16, 0.50) 100%)' }} />
        <AnimateOnScroll style={{ position: 'relative', textAlign: 'center', padding: '40px 24px 0' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(34px, 5vw, 54px)', fontWeight: 500, color: 'white', marginBottom: '16px', textShadow: '0 2px 16px rgba(0,0,0,0.15)' }}>
            Beauty Secrets &amp; Insights
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto' }}>
            Discover expert tips, trends, and the philosophy behind minimal, luxurious beauty from the sanctuary of Reena.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Blog Cards */}
      <section style={{ backgroundColor: 'var(--color-cream)', padding: '20px 24px 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {blogs.map((blog, i) => (
            <AnimateOnScroll key={blog.slug} delay={i * 100}>
              <Link href={`/blogs/${blog.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <article className="card-lift" style={{ backgroundColor: 'white', boxShadow: '0 2px 20px rgba(0,0,0,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                    <img src={blog.image} alt={blog.title} className="img-zoom" />
                    <div style={{ position: 'absolute', top: '14px', left: '14px', backgroundColor: blog.categoryColor, padding: '4px 10px', borderRadius: '2px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: blog.categoryText }}>{blog.category}</span>
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 500, color: 'var(--color-dark)', lineHeight: 1.35, marginBottom: '10px' }}>
                      {blog.title}
                    </h2>
                    <p style={{ fontSize: '13px', color: 'var(--color-text)', lineHeight: 1.75, marginBottom: '20px' }}>
                      {blog.excerpt}
                    </p>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-dark)', display: 'inline-flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid var(--color-dark)', paddingBottom: '2px' }}>
                      READ MORE →
                    </span>
                  </div>
                </article>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ backgroundColor: 'var(--color-cream-dark)', padding: '80px 24px', textAlign: 'center' }}>
        <AnimateOnScroll>
          <div style={{ maxWidth: '560px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 500, color: 'var(--color-dark)', lineHeight: 1.3, marginBottom: '16px' }}>
              Stay Updated with Our Latest Beauty Tips
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text)', lineHeight: 1.75, marginBottom: '32px' }}>
              Join our sanctuary newsletter for exclusive editorial content, wellness insights, and gentle reminders to prioritize your self-care.
            </p>
            <form style={{ display: 'flex', gap: '0', maxWidth: '440px', margin: '0 auto' }}>
              <input
                type="email"
                placeholder="Your email address"
                required
                style={{ flex: 1, padding: '13px 18px', border: '1px solid var(--color-border)', borderRight: 'none', fontFamily: 'var(--font-sans)', fontSize: '13px', backgroundColor: 'white', outline: 'none', color: 'var(--color-dark)' }}
              />
              <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap', padding: '13px 24px' }}>
                Subscribe
              </button>
            </form>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
