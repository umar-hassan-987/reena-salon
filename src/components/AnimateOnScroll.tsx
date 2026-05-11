'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  direction = 'up',
  className,
  style,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const initialTransform =
    direction === 'up'
      ? 'translateY(28px)'
      : direction === 'left'
      ? 'translateX(-28px)'
      : direction === 'right'
      ? 'translateX(28px)'
      : 'none';

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: !mounted || visible ? 1 : 0,
        transform: !mounted || visible ? 'translate(0, 0)' : initialTransform,
        transition: mounted ? 'opacity 0.7s ease, transform 0.7s ease' : 'none',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
