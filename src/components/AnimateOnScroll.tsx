'use client';

import { useEffect, useRef } from 'react';

export default function AnimateOnScroll({ children, className = '', direction = 'up', delay = 0 }: any) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-active');
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} opacity-0 transform transition-all duration-700 translate-y-4 reveal`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
