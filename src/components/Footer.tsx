import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#F5C4C4', paddingTop: '48px', paddingBottom: '32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '40px',
          paddingBottom: '40px',
          borderBottom: '1px solid rgba(92,27,46,0.15)',
        }}>
          {/* Brand */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '22px',
              fontStyle: 'italic',
              color: 'var(--color-dark)',
              marginBottom: '12px',
              fontWeight: 400,
            }}>
              Reena Beauty<br />Salon
            </h3>
            <p style={{ fontSize: '12px', color: 'var(--color-text)', lineHeight: 1.6, marginBottom: '16px' }}>
              © 2026 Reena Beauty Salon. All rights reserved.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(92,27,46,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'var(--color-maroon)', fontSize: '14px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(92,27,46,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'var(--color-maroon)', fontSize: '14px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-dark)', marginBottom: '16px' }}>
              Quick Links
            </h4>
            {['/', '/about', '/services', '/blogs', '/contact'].map((href, i) => (
              <Link key={href} href={href} style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-text)', textDecoration: 'none', marginBottom: '10px', transition: 'color 0.2s' }}>
                {['Home', 'About Us', 'Services', 'Blogs', 'Contact'][i]}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-dark)', marginBottom: '16px' }}>
              Legal
            </h4>
            {['/privacy-policy', '/privacy-policy#terms', '/privacy-policy#cancellation'].map((href, i) => (
              <Link key={href} href={href} style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--color-text)', textDecoration: 'none', marginBottom: '10px' }}>
                {['Privacy Policy', 'Terms of Service', 'Cancellation Policy'][i]}
              </Link>
            ))}
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-dark)', marginBottom: '16px' }}>
              Connect
            </h4>
            <p style={{ fontSize: '12px', color: 'var(--color-text)', lineHeight: 1.7 }}>
              G-11 MARKAZ, Silver Plaza<br />
              1st Floor, Islamabad, Pakistan
            </p>
            <p style={{ fontSize: '12px', color: 'var(--color-text)', marginTop: '10px' }}>T: 0315335766</p>
            <p style={{ fontSize: '12px', color: 'var(--color-text)', marginTop: '4px' }}>Bookings@reenabeautysalon.pk</p>
            <p style={{ fontSize: '11px', fontStyle: 'italic', color: 'var(--color-maroon)', marginTop: '16px' }}>
              We don&apos;t keep our beauty secrets
            </p>
          </div>
        </div>

        <p style={{ textAlign: 'center', fontSize: '11px', color: 'var(--color-text)', marginTop: '24px', letterSpacing: '0.04em' }}>
          © 2026 Reena Beauty Salon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
