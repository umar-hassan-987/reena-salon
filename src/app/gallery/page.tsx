'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Instagram, Sparkles, Scissors, Heart, CheckCircle2, LayoutGrid, Maximize2 } from 'lucide-react';
import ComparisonSlider from '@/components/ComparisonSlider';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<null | { src: string; alt: string; cat: string; dataAlt?: string }>(null);
  const imageBasePath = '/images/combined';

  const categories = ['All', 'Bridal', 'Hair', 'Skin & Facials', 'Nails', 'Makeup'];

  const images = [
    {
      src: `${imageBasePath}/realistic_high_quality_close_up_portrait_of_a_pakistani_woman_with_flawless.png`,
      alt: 'Close-up portrait of a Pakistani woman with flawless, glowing skin and a minimalist makeup look.',
      cat: 'Bridal',
      dataAlt: 'A close-up portrait of a Pakistani woman with flawless, glowing skin, showcasing a minimalist makeup look. The lighting is soft and natural, emphasizing a dewy finish and subtle warm tones.',
    },
    {
      src: `${imageBasePath}/realistic_high_quality_sophisticated_shot_of_a_pakistani_woman_with_perfectly.png`,
      alt: 'A sophisticated shot of a Pakistani woman with perfectly styled, voluminous brunette hair.',
      cat: 'Hair',
      dataAlt: 'A sophisticated shot of a Pakistani woman with perfectly styled, voluminous brunette hair, cascading smoothly.',
    },
    {
      src: `${imageBasePath}/realistic_high_quality_macro_beauty_shot_focusing_on_expertly_manicured_nails.png`,
      alt: 'A macro beauty shot focusing on expertly manicured nails in a soft champagne tone.',
      cat: 'Nails',
      dataAlt: 'A macro beauty shot focusing on expertly manicured nails painted in a soft, neutral champagne tone.',
    },
    {
      src: `${imageBasePath}/realistic_high_quality_tranquil_scene_showing_a_facial_treatment_in_progress.png`,
      alt: 'A tranquil scene showing a facial treatment in progress with a hydrating mask applied.',
      cat: 'Skin & Facials',
      dataAlt: 'A tranquil scene showing a facial treatment in progress. A Pakistani client is resting with a hydrating mask applied.',
    },
    {
      src: `${imageBasePath}/realistic_high_quality_striking_profile_portrait_of_a_pakistani_woman.png`,
      alt: 'A striking profile portrait of a Pakistani woman showcasing an elegant, modern makeup application.',
      cat: 'Makeup',
      dataAlt: 'A striking profile portrait of a Pakistani woman showcasing an elegant, modern makeup application.',
    },
    {
      src: `${imageBasePath}/realistic_high_quality_bridal_styling_shot_featuring_a_pakistani_woman_with_an.png`,
      alt: 'A beautiful bridal styling shot featuring a Pakistani woman with an intricate, softly swept updo and pearl accessories.',
      cat: 'Bridal',
      dataAlt: 'A beautiful bridal styling shot featuring a Pakistani woman with an intricate, softly swept updo adorned with tiny pearl accessories.',
    },
  ];

  const transformations = [
    {
      title: 'Color Correction & Gloss',
      desc: 'Restoring vitality and rich tones to previously dull hair.',
      after: `${imageBasePath}/realistic_hair_transformation_after_shot_pakistani_woman_with_vibrant_rich.png`,
      before: `${imageBasePath}/realistic_hair_transformation_before_shot_pakistani_woman_with_dull_flat_and.png`,
    },
    {
      title: 'Signature Hydration Facial',
      desc: 'Deep cleansing and moisture infusion for an instant glow.',
      after: `${imageBasePath}/realistic_skin_transformation_after_shot_close_up_of_a_pakistani_woman_s_face.png`,
      before: `${imageBasePath}/realistic_skin_transformation_before_shot_close_up_of_a_pakistani_woman_s_face.png`,
    },
    {
      title: 'Bridal Styling',
      desc: 'A complete, timeless bridal look that lasts all day.',
      after: `${imageBasePath}/realistic_bridal_transformation_after_shot_a_complete_timeless_pakistani_bridal.png`,
      before: `${imageBasePath}/realistic_bridal_transformation_before_shot_a_pakistani_woman_with_a_natural.png`,
    },
  ];

  const filteredImages = activeCategory === 'All' ? images : images.filter((img) => img.cat === activeCategory);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as any }
  };

  return (
    <main className="pt-[72px] bg-background min-h-screen">
      {/* Page Hero */}
      <section className="py-24 md:py-32 px-6 md:px-20 text-center max-w-5xl mx-auto overflow-hidden">

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display-lg text-4xl sm:text-5xl md:text-7xl text-primary mb-8"
        >
          Our <span className="italic font-decorative-accent text-secondary">Work</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-body-md text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
        >
          Explore the artistry and expertise behind every transformation at Reena Beauty Salon. Step into a world of curated beauty.
        </motion.p>
      </section>

      {/* Category Filter Bar */}
      <section className="px-6 md:px-20 max-w-container-max mx-auto mb-16 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-label-caps text-[9px] md:text-[10px] uppercase tracking-[0.2em] px-6 md:px-8 py-2.5 md:py-3 rounded-full border transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                  : 'bg-white text-on-surface-variant border-outline-variant/30 hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

      </section>

      {/* Masonry Photo Grid */}
      <section className="px-6 md:px-20 max-w-container-max mx-auto mb-32">
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="gallery-item break-inside-avoid relative group overflow-hidden rounded-[2rem] cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center backdrop-blur-[2px]">
                   <Maximize2 className="w-10 h-10 text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform" />
                   <span className="bg-white/90 backdrop-blur-md text-primary font-label-caps text-[10px] uppercase tracking-widest px-4 py-2 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform delay-75">
                    {img.cat}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Transformations Section (Interactive B/A Sliders) */}
      <section className="bg-[#333b2a] py-32 md:py-48 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-fixed/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-container-max mx-auto relative z-10">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-24"
          >
            <span className="font-label-caps text-secondary-fixed uppercase tracking-[0.4em] mb-6 inline-block text-[10px]">The Art of Change</span>
            <h2 className="font-display-lg text-3xl md:text-7xl text-white mb-8">Transformations</h2>

            <p className="font-body-md text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Experience the perfect balance of beauty and wellness through treatments that elevate your natural charm.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {transformations.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group"
              >
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-8 border border-white/5">
                  <ComparisonSlider 
                    beforeImage={item.before}
                    afterImage={item.after}
                    beforeLabel="Before"
                    afterLabel="After"
                  />
                </div>
                <h3 className="font-headline-sm text-2xl text-white mb-3 group-hover:text-secondary-fixed transition-colors">{item.title}</h3>
                <p className="font-body-md text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Sanctuary CTA */}
      <section className="py-32 md:py-48 px-6 md:px-20 text-center max-w-5xl mx-auto overflow-hidden">
        <motion.div {...fadeInUp}>
          <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mx-auto mb-10">
             <Instagram className="w-8 h-8" />
          </div>
          <h2 className="font-display-lg text-3xl md:text-7xl text-primary mb-8">Join Our <span className="italic font-decorative-accent text-secondary">Sanctuary</span></h2>

          <p className="font-body-md text-lg text-on-surface-variant max-w-2xl mx-auto mb-16 leading-relaxed">
            Step into a world of beauty, self-care, and confidence. Follow us for daily inspiration and the latest salon trends.
          </p>
          <a
            className="btn-primary scale-110"
            href="https://www.instagram.com/reena_beauty_salon?igsh=MWo4MDFucDlua3VnOA%3D%3D&utm_source=qr" target="_blank"
          >
            <span>Follow @reena_beauty_salon</span>
          </a>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-10 right-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all border border-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-6xl w-full flex flex-col items-center" 
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[75vh] w-auto object-contain rounded-[2rem] mb-10 shadow-2xl border-4 border-white/10"
              />
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center space-y-4"
              >
                <span className="font-label-caps text-xs text-secondary-fixed uppercase tracking-widest px-4 py-2 bg-white/10 rounded-full">
                  {selectedImage.cat}
                </span>
                <p className="text-white/80 font-body-md text-lg max-w-3xl px-6 leading-relaxed">
                  {selectedImage.dataAlt || selectedImage.alt}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
