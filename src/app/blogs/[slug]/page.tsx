import type { Metadata } from 'next';
import Link from 'next/link';
import { blogs } from '../page';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  return {
    title: blog?.title ?? 'Blog Post',
    description: blog?.excerpt ?? '',
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  const related = blogs.filter((b) => b.slug !== slug).slice(0, 2);

  if (!blog) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', padding: '120px 24px 80px' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', marginBottom: '16px' }}>Post Not Found</h1>
        <Link href="/blogs" className="btn-outline">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '480px', overflow: 'hidden' }}>
        <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(44, 24, 16, 0.55) 0%, rgba(44, 24, 16, 0.40) 40%, rgba(44, 24, 16, 0.65) 100%)' }} />
        <div style={{ position: 'absolute', bottom: '40px', left: '0', right: '0', padding: '0 24px', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'inline-block', backgroundColor: blog.categoryColor, padding: '4px 12px', borderRadius: '2px', marginBottom: '14px' }}>
              <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: blog.categoryText }}>{blog.category}</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 500, color: 'white', lineHeight: 1.2, textShadow: '0 2px 16px rgba(0,0,0,0.15)' }}>
              {blog.title}
            </h1>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginTop: '12px' }}>{blog.date} &bull; {blog.readTime}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: 'var(--color-cream)', padding: '64px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '40px', fontSize: '12px', color: 'var(--color-text-light)' }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'var(--color-text-light)' }}>Home</Link>
            <span>›</span>
            <Link href="/blogs" style={{ textDecoration: 'none', color: 'var(--color-text-light)' }}>Blogs</Link>
            <span>›</span>
            <span style={{ color: 'var(--color-dark)' }}>{blog.title}</span>
          </div>

          <AnimateOnScroll>
            <div
              style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.9, color: 'var(--color-text)' }}
              dangerouslySetInnerHTML={{ __html: blog.content.replace(/<h2>/g, '<h2 style="font-family: var(--font-serif); font-size: 26px; font-weight: 500; color: var(--color-dark); margin: 40px 0 16px; line-height: 1.3;">').replace(/<p>/g, '<p style="margin-bottom: 20px;">') }}
            />
          </AnimateOnScroll>

          {/* CTA */}
          <div style={{ marginTop: '60px', padding: '40px', backgroundColor: 'var(--color-pink-light)', textAlign: 'center', borderRadius: '2px' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 500, color: 'var(--color-dark)', marginBottom: '12px' }}>
              Ready to experience it yourself?
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--color-text)', marginBottom: '24px' }}>
              Book an appointment at Reena Beauty Salon and let our experts take care of you.
            </p>
            <Link href="/contact" className="btn-primary">Book Appointment</Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section style={{ backgroundColor: 'var(--color-cream-dark)', padding: '64px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 500, color: 'var(--color-dark)', marginBottom: '36px', textAlign: 'center' }}>
            You Might Also Like
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {related.map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 100}>
                <Link href={`/blogs/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <article className="card-lift-sm" style={{ backgroundColor: 'white', overflow: 'hidden', borderRadius: '2px', boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}>
                    <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                      <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '20px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: post.categoryText, backgroundColor: post.categoryColor, padding: '3px 8px', borderRadius: '2px', display: 'inline-block', marginBottom: '10px' }}>{post.category}</span>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 500, color: 'var(--color-dark)', lineHeight: 1.35 }}>{post.title}</h3>
                    </div>
                  </article>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
