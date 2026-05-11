'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu on navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = useCallback((href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname?.startsWith(href)) return true;
    return false;
  }, [pathname]);

  // Determine if we're on a page with a dark hero overlay (white text needed)
  // All pages have hero sections now, so navbar is always transparent at top
  const isTransparent = !scrolled && !menuOpen;

  // Text color logic: transparent navbar = white text, scrolled = dark text
  const textColor = isTransparent ? 'white' : 'var(--color-dark)';
  const logoColor = isTransparent ? 'white' : 'var(--color-dark)';
  const activeLinkColor = isTransparent ? 'white' : 'var(--color-dark)';
  const inactiveLinkColor = isTransparent ? 'rgba(255,255,255,0.8)' : 'var(--color-dark)';

  return (
    <header
      className="navbar-header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        backgroundColor: isTransparent ? 'transparent' : 'rgba(250, 247, 244, 0.98)',
        backdropFilter: isTransparent ? 'none' : 'blur(12px)',
        WebkitBackdropFilter: isTransparent ? 'none' : 'blur(12px)',
        borderBottom: isTransparent ? '1px solid transparent' : '1px solid #E8E0DA',
        boxShadow: scrolled && !menuOpen ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', zIndex: 10000 }}>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '22px',
              fontStyle: 'italic',
              color: menuOpen ? 'var(--color-dark)' : logoColor,
              fontWeight: 500,
              letterSpacing: '0.01em',
              transition: 'color 0.4s ease',
            }}>
              Reena Beauty Salon
            </span>
          </Link>

          {/* Desktop Nav — hidden below md, flex on md+ */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link-desktop"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  letterSpacing: '0.03em',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  paddingBottom: '4px',
                  fontWeight: isActive(link.href) ? 600 : 400,
                  color: isActive(link.href) ? activeLinkColor : inactiveLinkColor,
                  opacity: 1,
                }}
              >
                {link.label}
                {isActive(link.href) && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: isTransparent ? 'white' : 'var(--color-maroon)',
                    transition: 'background-color 0.3s ease',
                  }} />
                )}
              </Link>
            ))}
          </nav>

          {/* Book Now Button — hidden below md */}
          <div className="desktop-book-btn">
            <Link
              href="/contact"
              style={{
                backgroundColor: isTransparent ? 'rgba(255,255,255,0.15)' : 'var(--color-maroon)',
                color: isTransparent ? 'white' : 'white',
                border: isTransparent ? '1px solid rgba(255,255,255,0.4)' : '1px solid var(--color-maroon)',
                padding: '10px 22px',
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase' as const,
                textDecoration: 'none',
                display: 'inline-block',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: isTransparent ? 'blur(4px)' : 'none',
              }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger — hidden on md+ */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-hamburger"
            aria-label="Toggle menu"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: menuOpen ? 'var(--color-dark)' : textColor,
              zIndex: 10000,
              transition: 'color 0.3s ease',
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              style={{
                display: 'block',
                fontFamily: 'var(--font-serif)',
                fontSize: '24px',
                color: 'var(--color-dark)',
                textDecoration: 'none',
                padding: '16px 20px',
                borderRadius: '12px',
                transition: 'all 0.2s ease',
                fontWeight: isActive(link.href) ? 600 : 400,
                backgroundColor: isActive(link.href) ? 'rgba(92, 27, 46, 0.08)' : 'rgba(0,0,0,0.02)',
                border: isActive(link.href) ? '1px solid rgba(92, 27, 46, 0.1)' : '1px solid transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary"
            style={{ marginTop: '32px', textAlign: 'center', width: '100%' }}
          >
            Book Appointment
          </Link>
        </div>
      )}

      <style>{`
        .desktop-nav {
          display: none;
          gap: 32px;
          align-items: center;
        }
        .desktop-book-btn {
          display: none;
        }
        .mobile-hamburger {
          display: flex !important;
        }
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          background-color: var(--color-cream);
          z-index: 9999;
          padding: 80px 24px 40px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow-y: auto;
        }

        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }
          .desktop-book-btn {
            display: block;
          }
          .mobile-hamburger {
            display: none !important;
          }
          .mobile-menu-overlay {
            display: none !important;
          }
        }

        /* Desktop nav link hover */
        .nav-link-desktop:hover {
          opacity: 1 !important;
        }

        .mobile-nav-link:hover {
          background-color: rgba(92, 27, 46, 0.06) !important;
          border-color: rgba(92, 27, 46, 0.12) !important;
        }

        /* Book button hover */
        .desktop-book-btn a:hover {
          transform: translateY(-1px);
        }
      `}</style>
    </header>
  );
}
