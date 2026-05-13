'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function WhatsAppFAB() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  
  // Only show on Home and Contact pages
  const showOnPages = ['/', '/contact'];
  const shouldShowOnPage = showOnPages.includes(pathname);

  useEffect(() => {
    if (!shouldShowOnPage) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Hide if in Hero (first 600px approx)
      const inHero = scrollY < 500;
      
      // Hide if in Footer (near bottom)
      const inFooter = scrollY + windowHeight > documentHeight - 400;

      setIsVisible(!inHero && !inFooter);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldShowOnPage, pathname]);

  if (!shouldShowOnPage) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col gap-4 items-end pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="whatsapp-fab"
            initial={{ scale: 0, opacity: 0, y: 50, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, y: 50, rotate: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="pointer-events-auto"
          >
            <a
              href="https://wa.me/923259117272"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white active:scale-95 transition-transform group overflow-hidden"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-8 h-8" />
              <span className="absolute right-full mr-4 bg-white text-primary text-[10px] font-label-caps uppercase tracking-widest px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-outline-variant/10">
                Chat with us
              </span>
              <motion.span 
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-white/20 pointer-events-none"
              />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

