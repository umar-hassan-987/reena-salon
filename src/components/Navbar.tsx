'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-outline-variant/10 transition-all duration-500 ${
        isMobileMenuOpen ? 'bg-white' : 'bg-background/80 backdrop-blur-md'
      } ${
        isScrolled ? 'h-[64px]' : 'h-[80px]'
      }`}
      id="navbar"
    >
      <div className="flex justify-between items-center w-full px-6 md:px-margin-desktop max-w-container-max mx-auto h-full">
        <Link
          href="/"
          className="flex items-center group relative z-[70]"
        >
          <img src="/logo.svg" alt="Reena Sanctuary Logo" className="h-12 md:h-14 w-auto group-hover:scale-105 transition-transform duration-300" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`font-label-caps text-[11px] uppercase tracking-[0.2em] transition-all duration-300 relative group py-2 ${
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-on-surface-variant/70 hover:text-primary'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-secondary origin-left transition-transform duration-500 ${
                  pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center">
          <Link href="/contact" className="btn-primary px-8 py-3.5 rounded-full text-[10px] tracking-[0.2em]">
            BOOK RITUAL
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden relative z-[70] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <motion.span 
            animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-6 h-[1.5px] bg-primary rounded-full" 
          />
          <motion.span 
            animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            className="w-6 h-[1.5px] bg-primary rounded-full" 
          />
          <motion.span 
            animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-6 h-[1.5px] bg-primary rounded-full" 
          />
        </button>
      </div>

      {/* Premium Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-white lg:hidden overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
              <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80" className="w-full h-full object-cover" alt="" />
            </div>

            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center px-6 h-[80px] relative z-[110]">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img src="/logo.svg" alt="Reena Sanctuary Logo" className="h-10 w-auto" />
              </Link>
              <button
                className="w-10 h-10 flex items-center justify-center text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <motion.span 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  className="relative w-6 h-6 flex items-center justify-center"
                >
                  <span className="absolute w-6 h-[1.5px] bg-primary rotate-45" />
                  <span className="absolute w-6 h-[1.5px] bg-primary -rotate-45" />
                </motion.span>
              </button>
            </div>
            
            <div className="flex-grow flex flex-col px-10 pb-12 pt-8 overflow-y-auto no-scrollbar relative z-[100]">
              <div className="flex flex-col gap-6 sm:gap-8">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`font-display-lg text-4xl sm:text-5xl transition-colors block ${
                        pathname === link.href ? 'text-secondary italic' : 'text-primary'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 sm:mt-auto space-y-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    href="/contact"
                    className="block w-full bg-[#4a5240] text-white text-center py-5 rounded-full font-label-caps text-[12px] tracking-[0.2em] shadow-xl hover:bg-[#59614e] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    BOOK AN APPOINTMENT
                  </Link>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex justify-between items-center text-on-surface-variant/40 font-label-caps text-[10px] uppercase tracking-[0.3em] border-t border-primary/5 pt-8"
                >
                  <span>Islamabad, PK</span>
                  <span>Est. 2008</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>

  );
}

