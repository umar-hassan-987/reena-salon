'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Sparkles, Scissors, Heart, Eraser, SprayCan as Spray, Brush, Pipette as Palette, CheckCircle2, X, Clock, Star, MessageCircle, Phone } from 'lucide-react';
import { servicesData, ServiceDetail } from '@/data/servicesData';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const categories = [
    {
      id: 'threading',
      name: 'Threading',
      image: '/images/service_img/threading.webp',
      items: [
        { name: 'Eyebrows', id: 'threading-eyebrows' },
        { name: 'Upper Lip' },
        { name: 'Brow Waxing' },
        { name: 'Forehead' },
        { name: 'Chin' },
        { name: 'Sidelburn' },
        { name: 'Full Face Wax With Mask' },
        { name: 'Full Face Threading', id: 'threading-full-face' },
      ],
    },
    {
      id: 'waxing',
      name: 'Waxing',
      image: '/images/service_img/waxing.webp',
      items: [
        { name: 'Half/Full Arms' },
        { name: 'Half/Full Legs' },
        { name: 'Underarms' },
        { name: 'Back Neck' },
        { name: 'Belly' },
        { name: 'Full Body', id: 'waxing-full-body' },
        { name: 'Brazilian' },
        { name: 'Bikini' },
      ],
    },
    {
      id: 'facials',
      name: 'Facials',
      image: '/images/service_img/facial.webp',
      items: [
        { name: 'Thalia' },
        { name: 'Janssen (Oak Ferox)', id: 'facials-janssen' },
        { name: 'Janssen AM Firming Ampoule' },
        { name: 'Gold' },
        { name: 'Whitening', id: 'facials-whitening' },
        { name: 'Deep Cleansing' },
        { name: 'Polymer' },
        { name: 'Bleach' },
      ],
    },
    {
      id: 'hair',
      name: 'Hair Styling',
      image: '/images/service_img/haircut.webp',
      items: [
        { name: 'Cut (Professional)', id: 'hair-cut' },
        { name: 'Dye (Premium)' },
        { name: 'Highlights' },
        { name: 'Balayage', id: 'hair-balayage' },
        { name: 'Keratin Treatment' },
        { name: 'Diamond Treatment' },
        { name: 'Nikkah Styling' },
        { name: 'Bridal Hairdo' },
      ],
    },
    {
        id: 'makeup',
        name: 'Makeup',
        image: '/images/service_img/bride.webp',
        items: [
          { name: 'Engagement' },
          { name: 'Natural Glam' },
          { name: 'Model Bride' },
          { name: 'Party Signature' },
          { name: 'Mehndi' },
          { name: 'Baraat', id: 'makeup-bridal' },
        ],
      },
  ];

  const handleServiceClick = (item: any, catName: string) => {
    const dataId = item.id || `${catName.toLowerCase()}-${item.name.toLowerCase().replace(/\s+/g, '-')}`;
    const details = servicesData[dataId] || {
      id: dataId,
      name: item.name,
      category: catName,
      description: `Experience our signature ${item.name} ritual. Our experts use premium products and refined techniques to ensure a relaxing and transformative session tailored specifically to your needs.`,
      benefits: ['Premium Products', 'Expert Application', 'Relaxing Environment'],
      priceRange: 'Contact for Pricing'
    };
    setSelectedService(details);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as any }
  };

  return (
    <main className="pt-[72px] bg-background">
      {/* Page Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0 z-0"
        >
          <img
            alt="Salon Interior"
            className="w-full h-full object-cover"
            src="/images/saloon.webp"
          />
          <div className="absolute inset-0 bg-[#333b2a]/60 backdrop-blur-[2px]"></div>
        </motion.div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display-lg text-4xl sm:text-5xl md:text-8xl text-white mb-8"
          >
            Our <span className="italic font-decorative-accent text-[#c1cab3]">Services</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-body-lg text-lg text-white/80 leading-relaxed"
          >
            A world of personalized luxury and unparalleled care designed to reveal your best version.
          </motion.p>
        </div>
      </section>

      {/* Featured Highlight Cards */}
      <section className="px-6 md:px-20 max-w-container-max mx-auto -mt-20 relative z-20 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { image: '/images/service_img/bride.webp', title: 'Bridal Artistry', desc: 'Bespoke makeup and styling' },
            { image: '/images/service_img/facial.webp', title: 'Luxury Facials', desc: 'Rejuvenating skin treatments' },
            { image: '/images/service_img/haircut.webp', title: 'Hair Styling', desc: 'Expert cutting & coloring' },
            { image: '/images/service_img/nails.webp', title: 'Nail Rituals', desc: 'Meticulous hand & feet care' },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-outline-variant/10 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-20 h-[85px] bg-[#f6f3f0] rounded-3xl flex items-center justify-center overflow-hidden mb-8 shadow-inner">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-label-caps text-xs uppercase tracking-widest text-[#4a5240] mb-4 font-bold">{card.title}</h3>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] leading-relaxed max-w-[150px]">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-xl border-y border-outline-variant/10 py-6">
        <div className="max-w-container-max mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-8 md:justify-center min-w-max">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="font-label-caps text-[11px] uppercase text-on-surface-variant hover:text-[#4a5240] transition-all tracking-[0.2em] relative group pb-1"
              >
                {cat.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#4a5240] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Menu Sections */}
      {categories.map((cat, index) => (
        <section
          key={cat.id}
          className={`py-32 px-6 md:px-20 ${index % 2 === 1 ? 'bg-[#f6f3f0]' : 'bg-white'}`}
          id={cat.id}
        >
          <div className="max-w-container-max mx-auto">
            <motion.div 
              {...fadeInUp}
              className="flex items-center gap-4 mb-20 md:justify-center"
            >
              <div className="w-12 h-12 bg-[#4a5240] text-white rounded-xl flex items-center justify-center overflow-hidden">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <h2 className="font-display-lg text-3xl md:text-6xl text-[#333b2a]">{cat.name}</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
              {cat.items.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 2) * 0.1 }}
                  onClick={() => handleServiceClick(item, cat.name)}
                  className="flex justify-between items-center border-b border-[#4a5240]/10 pb-6 group cursor-pointer hover:border-[#4a5240] transition-all"
                >
                  <div className="space-y-1">
                    <h3 className="font-headline-sm text-2xl text-[#4a5240] group-hover:text-[#59614e] transition-colors">{item.name}</h3>
                    <p className="font-label-caps text-[9px] uppercase tracking-widest text-[#c1cab3] opacity-0 group-hover:opacity-100 transition-opacity">View Ritual Details</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#f6f3f0] flex items-center justify-center text-[#4a5240] group-hover:bg-[#4a5240] group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-[#333b2a]/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white md:text-[#333b2a] md:bg-[#f6f3f0] md:border-none hover:scale-110 transition-transform"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-[#4a5240]">
                <img 
                  src={
                    selectedService.category === 'Threading' ? '/images/service_img/threading.webp' :
                    selectedService.category === 'Waxing' ? '/images/service_img/waxing.webp' :
                    selectedService.category === 'Facials' ? '/images/service_img/facial.webp' :
                    selectedService.category === 'Hair Styling' ? '/images/service_img/haircut.webp' :
                    '/images/service_img/bride.webp'
                  }
                  alt={selectedService.name}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#333b2a] to-transparent p-10 flex flex-col justify-end">
                  <span className="font-label-caps text-[10px] text-[#c1cab3] uppercase tracking-[0.3em] mb-2">{selectedService.category}</span>
                  <h2 className="font-display-lg text-4xl text-white">{selectedService.name}</h2>
                </div>
              </div>

              <div className="flex-1 p-8 md:p-14 overflow-y-auto max-h-[60vh] md:max-h-none">
                <div className="space-y-8">
                  <div>
                    <h4 className="font-label-caps text-[10px] uppercase tracking-widest text-[#c1cab3] mb-4">Ritual Description</h4>
                    <p className="font-body-md text-lg text-on-surface-variant leading-relaxed">{selectedService.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-[#f6f3f0] p-6 rounded-2xl">
                      <div className="flex items-center gap-3 text-[#4a5240] mb-2">
                        <Clock className="w-4 h-4" />
                        <span className="font-label-caps text-[10px] uppercase tracking-widest">Duration</span>
                      </div>
                      <p className="font-body-md font-bold text-[#333b2a]">{selectedService.duration || 'Consultation'}</p>
                    </div>
                    <div className="bg-[#f6f3f0] p-6 rounded-2xl">
                      <div className="flex items-center gap-3 text-[#4a5240] mb-2">
                        <Star className="w-4 h-4" />
                        <span className="font-label-caps text-[10px] uppercase tracking-widest">Price Ritual</span>
                      </div>
                      <p className="font-body-md font-bold text-[#333b2a]">{selectedService.priceRange || 'Contact Us'}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-label-caps text-[10px] uppercase tracking-widest text-[#c1cab3] mb-4">Key Benefits</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedService.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3 text-on-surface-variant text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#c1cab3]" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 flex flex-col sm:flex-row gap-4">
                    <a 
                      href="https://wa.me/923259117272" 
                      target="_blank"
                      className="flex-1 bg-[#25D366] text-white py-5 rounded-full font-label-caps text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:shadow-xl transition-all active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4" /> WhatsApp Us
                    </a>
                    <a 
                      href="tel:03259117272" 
                      className="flex-1 bg-[#333b2a] text-white py-5 rounded-full font-label-caps text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:shadow-xl transition-all active:scale-95"
                    >
                      <Phone className="w-4 h-4" /> Call Sanctuary
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom Booking Banner */}
      <section className="py-40 px-6 md:px-20 bg-[#333b2a] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
           <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1600&q=80" className="w-full h-full object-cover" />
        </div>
        <motion.div 
          {...fadeInUp}
          className="max-w-3xl mx-auto flex flex-col items-center relative z-10"
        >
          <h2 className="font-display-lg text-3xl md:text-7xl mb-12 leading-tight">Ready for Your Transformation?</h2>

          <p className="font-body-lg text-xl text-white/70 mb-16 max-w-2xl">
            Schedule your consultation today and step into a world of personalized luxury and unparalleled care.
          </p>
          <Link href="/contact" className="btn-primary scale-125 bg-white text-[#333b2a] hover:bg-[#c1cab3]">
            BOOK AN APPOINTMENT
          </Link>
        </motion.div>
      </section>
    </main>
  );
}