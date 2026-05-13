'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Instagram, Sparkles, Scissors, Heart, CheckCircle2, LayoutGrid, Maximize2 } from 'lucide-react';
import ComparisonSlider from '@/components/ComparisonSlider';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<null | { src: string; alt: string; cat: string; dataAlt?: string }>(null);

  const categories = ['All', 'Bridal', 'Hair', 'Skin & Facials', 'Nails', 'Makeup'];

  const images = [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLDHI1q2xflnI1qjVyy17jPwtPhPZak_AdM_fU6eJVKLSYKJqFYml1-rY7c2zNj1hAO-Ch0NICkZrHqqurQqTpUynVykK681WWADcxq6s7wtPqc_hMsqv0TWs8in_3Yn1yMravxXykvSC0DfpwToWL8EZcwmWVPskaXxPvyYju9yHFcfyTAPoUWGnVsOxzhlOyZmSCPA3jBe7wY1bSKuDzOE8I00YZSLFW8ecWDRsziJHxCLqIXv42kOM85B_S-dWF-KdsXH5O-AE',
      alt: 'Gallery Image',
      cat: 'Bridal',
      dataAlt: 'A close-up portrait of a woman with flawless, glowing skin, showcasing a minimalist makeup look. The lighting is soft and natural, emphasizing a dewy finish and subtle warm tones.',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKEhyZKO1g7Q3lV_SwLd2LZ9CABhV8G84wRxrrwOUekygXtmNd2QLZ_acxAyNneTLIauAELh96BDL0QhEYosqXluX5gZHHwigLXyFmk0U6s0i5RRwDeNEkl-NB0oJ_4LCVkiQFPA5H_VTA7kapMQJ3sV157m5mMj62Nl9o6AlOivuNRa8zWRJkZrWbdLfHoS1NVwdGD_O_TTIq-n4OHCSldkcZiilZu9BYzCdM6k4_jIBfZsMw3PgFJ7n3URnajYEkgHCQHtMMmgM',
      alt: 'Gallery Image',
      cat: 'Hair',
      dataAlt: 'A sophisticated shot of a woman with perfectly styled, voluminous brunette hair, cascading smoothly.',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-2JcHUA0tkqiCOXCfihEP92sOHdoZPX-pG4miL378hFz8NamySQi9I_kse6j4zNmWQix35ltnK4xNam4TZWVyzatWihxNmGND-c1ScpEGv7c2Ev0TH5eN_wdZqe0agsirXt51qH1wT7frZqvgPJUpU6a-Wu9K_BJvq3BZEWnCi0Vpw704BC5C2KbuHOXplxWXzpsboJlmro6ZggV9er9pR6-a9Q_MqxgSQrlmqnj5xG7KDd4rcviaXBi-D11YTx-SZaFXocvYGNI',
      alt: 'Gallery Image',
      cat: 'Nails',
      dataAlt: 'A macro beauty shot focusing on expertly manicured nails painted in a soft, neutral champagne tone.',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY6DDc8e1H9TwGuY2x4GtJ4PDefLxdCs_BGoZjU16pxSFBgaRH5srqLfZ-f_I2rMWIfANIrIlRrW53250vGEBJzUNNPaIn79YA6d4gvQEPTJuGJtz7XFkCNilFpUt5J1s6a5daA0M2Rhut3hjwH5sWx9mADaHBPoKUsy-39jX-FPRbYtUmytW37ZYu0Fw9dw08IFkjmQwwp733z-ue9LUwjsOaoxnpfCWalWaYXF6pr7ex9XXNugqd-Y8Tc4OHAv6_nLZfPLnJNCY',
      alt: 'Gallery Image',
      cat: 'Skin & Facials',
      dataAlt: 'A tranquil scene showing a facial treatment in progress. A client is resting with a hydrating mask applied.',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc0Y0ahSdkl_ez7ItOC8k1FNcfQ7ol19qEeHH9detoNcWkQw2-LZ-w975VGssCT9ynD5BYAcD8rOn-dOH5Q1It-gSmu1mvczMcvkQXXaQoeSJcG_qfWysCelBpNmh2R1UApU3O5uKLOtZeorYY-4w0JypcPqe6UYDFBnmHW3odL7MofX5Z68wox5MHGpvyGqtoe12w6ua_wmjYUJWuDILMacWKIBvetZSrk0ncZ5DEbb65MlL9l1pL179W7m30fURwT2DfV5zWfzg',
      alt: 'Gallery Image',
      cat: 'Makeup',
      dataAlt: 'A striking profile portrait of a woman showcasing an elegant, modern makeup application.',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqI9oEHzrTfXzJeKsf9dZtENK-ox1YmimRHuzvvvQqAOWN_CVuwUifGf__e-IBS1nqIBDr_UwIHwRUIry3yTxO-KE9VZGba8IG2PCTKoOyomHcNELbG-u4K5aSEveGc9BLbVQEmFSF24X7kAfadv9JOMnoD9NoUD6PCVqnfsNEL4pPbdmKYeomvHBxJVRS-wPvUFWIW1AFu9hDgqx09L_jPmVsOV9g9Mh03fwJVDpXvwzLN2E4lqfuTCVMjrBnXgZhQgVkNe46t3Y',
      alt: 'Gallery Image',
      cat: 'Bridal',
      dataAlt: 'A beautiful bridal styling shot featuring a woman with an intricate, softly swept updo adorned with tiny pearl accessories.',
    },
  ];

  const transformations = [
    {
      title: 'Color Correction & Gloss',
      desc: 'Restoring vitality and rich tones to previously dull hair.',
      after: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAwIenWtu5X-ChWvVLm1G3vdvKegv0PO8OYEwI4UNB2HHhuHvut37ZaANXtRBOyLiIAjXgNYW791riUGmzIY9Md_-8qEbynvPQgaSVaWFjgs_NxHseuiKmS4Cdnk-1M062s1kKVms9RWichVjTE-WX5oFlMzTTe8WnP2IwYrPdoD3b6tEUu-rNGGLfaSLE5F6s5UZS2DIs_bConz1EIbLRe6npfXdWMhLsB-d6BqNoUd0L8FkVps467IFelB7yRjs3L46HnqD-dCg',
      before: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8N5uSkK2Pa5b1vGS42-ifAkuH9IHR4oU2vaSDV1VwCsBE_ktx1cYY1vIGIk80UJNIQmzPi3OKLAu_jDvr0J0njqCQEU--nZS9VYMaBczo4OxGg5FBBCDRw71slXmdweoOEgb6GyXYOSyq8_Y3yW3kcbaYB5AJkAaAVdRHGZApdcpMewudcAEOvXhcHnfQym4B-HZ50ZQDneZe3LAi0He7QT_TZgnrLK9twU-_oVtXUJZa-jq3E3FmhpZ_Qd6-95QgqJTN4Id1JjA',
    },
    {
      title: 'Signature Hydration Facial',
      desc: 'Deep cleansing and moisture infusion for an instant glow.',
      after: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2uvfcvXGwp7JMOYkBYYm3SkF_GtBg4KRYn5p_kHoEE9wYK9qw6WQDvLalGelmM3hHWLf08bESL3K7XTx_akDfgs44W724K52IC9OKgBRkYMX5PIRXK9pNhItldJHxObGYWsUfLg1OhO9A3xrWXJRTzGxnSPB2iT8k9v92Fp-WobJBAqDdEEnkh_mitgafqMHGGv81fJAjt6620o-b1xUgL6UeUsH135gxedmCqhYDne1lH519i5KbiK6vyZTWmd9IJADqH2mCuJo',
      before: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuuN9YYcfWDxeX5ORkO8kzsBXjkPBEnhl9-d6YQwS4YYM1eDvTa3-Hp4jCcJZo278jV5Zlnc9TjOdZq9I81gjKBGhT8SoIhX2l-GZAJj4L-SjIEko0tEaTAQ964c1wOKHnwJzVRat55PFbOc1gSK6daVIzAIHvAnzqHtHd2qokcnvnO6i6etkxyslnqmM4CnHeTRj_LlsIDWVUjZ30qGWsvNx2taqxuiSRbXGJT2x4ArUXj2qyLNWE9h9Q613MsyhZIlr7FhPJnwU',
    },
    {
      title: 'Bridal Styling',
      desc: 'A complete, timeless bridal look that lasts all day.',
      after: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMyJGhd_xZ1Iz8EDOBaOVWu8O0JMBLTl-WVRdvJDsxlsgRNa2FbbZCOTGBUISryV_38SjxN3MDOefiP2n-t_uK1_imOtOeJPMDGgkrhSgqVf0_RAQ_55Yd1n6_1MUL0Ygo7haQxdYpwuGJzYoXBLA9sLXbtnYdSrWWuPraMQXbqTNe_0jVXt6UvOt65FhBWucPXjUMnpRTZOUGvg_hrtpuJLSJURbwpBLTbn3-vxTOmWgsDSHB_hxS4DsbBTDI3Vht_Kb8lobf-hQ',
      before: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBahmPhValzYhVoqJ7xWPA-DI2hoqqDkyLBc0Wf9nxhrWaeELaJU1gbYd9hcugkeGFRa6a8Nc740YeQSU3Uj96SBeIwfefbT06hxkI4qNLfgiGZJ79aXfojKuO-l_WwoUIvjQMjk-oBNQt5ibUGKnag62QN847CLVHwIJ56jWXYPuVOuM2TBBQTYrn57yjJFGDXKa-TJhhHs41vY2LxtqwbJcyIa3CkzX3MEPrvEJSNQTRGpTxIzzX4_vK1u_OitwqJK870bYnWyI',
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
            href="https://instagram.com/reenabeauty" target="_blank"
          >
            <span>Follow @reenabeauty</span>
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
