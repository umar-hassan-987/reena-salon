'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface PackageProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export default function PackageCard({
  title,
  price,
  description,
  features,
  isPopular = false,
}: PackageProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative p-8 rounded-2xl flex flex-col h-full transition-all duration-300 ${
        isPopular
          ? 'bg-primary-container text-white shadow-2xl scale-105 z-10'
          : 'bg-white text-on-surface border border-outline-variant hover:border-primary/30 shadow-sm hover:shadow-xl'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] uppercase tracking-widest px-4 py-1 rounded-full font-bold">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className={`font-headline-sm text-2xl mb-2 ${isPopular ? 'text-white' : 'text-primary'}`}>
          {title}
        </h3>
        <p className={`font-body-md text-sm ${isPopular ? 'text-white/80' : 'text-on-surface-variant'}`}>
          {description}
        </p>
      </div>

      <div className="mb-8">
        <span className="text-4xl font-display-lg">{price}</span>
        <span className={`text-sm ml-2 ${isPopular ? 'text-white/60' : 'text-on-surface-variant'}`}>
          / session
        </span>
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 ${isPopular ? 'text-secondary-fixed' : 'text-secondary'}`} />
            <span className={`text-sm ${isPopular ? 'text-white/90' : 'text-on-surface-variant'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`w-full text-center py-4 rounded-lg font-label-caps text-xs uppercase tracking-widest transition-all duration-300 ${
          isPopular
            ? 'bg-white text-primary hover:bg-surface-variant'
            : 'bg-primary text-white hover:bg-secondary'
        }`}
      >
        Book This Package
      </Link>
    </motion.div>
  );
}
