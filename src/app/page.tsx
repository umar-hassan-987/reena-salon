'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ComparisonSlider from '@/components/ComparisonSlider';
import PackageCard from '@/components/PackageCard';
import FAQAccordion from '@/components/FAQAccordion';
import { Calendar, ArrowRight, Star, Quote, Instagram, Phone } from 'lucide-react';

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as any }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.15
      }
    },
    viewport: { once: true }
  };

  const faqItems = [
    {
      question: "Do I need to book an appointment in advance?",
      answer: "Yes, we highly recommend booking at least 2-3 days in advance to ensure your preferred time slot. For bridal services, we recommend booking 2-4 weeks ahead."
    },
    {
      question: "What premium products do you use?",
      answer: "We use world-class brands including L'Oréal Professional, Dermalogica, and MAC to ensure the best results for your hair and skin."
    },
    {
      question: "Where is the salon located?",
      answer: "We are centrally located in the heart of Islamabad. You can find our exact location on the Contact page."
    },
    {
      question: "Do you offer home services?",
      answer: "Currently, we focus on providing a premium experience within our sanctuary. However, for bridal parties, we can arrange on-site styling."
    }
  ];

  const packages = [
    {
      title: "Bridal Glow",
      price: "Rs. 25,000",
      description: "Complete preparation for your big day.",
      features: ["Advanced Bridal Makeup", "Hair Styling & Accessories", "Luxury Facial", "Nail Art & Henna"],
      isPopular: true
    },
    {
      title: "Weekend Refresh",
      price: "Rs. 8,500",
      description: "Quick rejuvenation for your well-deserved break.",
      features: ["Express Facial", "Blow-dry & Styling", "Classic Manicure", "Relaxing Head Massage"]
    },
    {
      title: "Self-Care Ritual",
      price: "Rs. 15,000",
      description: "The ultimate indulgence for skin and soul.",
      features: ["Premium Hydro-Facial", "Deep Conditioning Treatment", "Luxury Pedicure", "Skin Consultation"]
    }
  ];

  return (
    <main className="pt-[72px] relative">
      {/* Hero Banner */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0 z-0"
        >
          <img
            alt="Luxury Salon Interior"
            className="w-full h-full object-cover object-center"
            src="/images/saloon_hero.webp"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
        </motion.div>
        
        <div className="relative z-10 text-center px-6 md:px-20 max-w-5xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display-lg text-3xl sm:text-4xl md:text-7xl text-white max-w-4xl mb-6 md:mb-8 leading-[1.1]"
          >
            Enhancing Your Natural <span className="italic font-decorative-accent text-[#c1cab3]">Radiance</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-body-md text-lg text-white/80 max-w-2xl mb-12"
          >
            A trusted sanctuary where luxury, comfort, and personalized care come together to reveal the best version of you.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link href="/contact" className="font-label-caps text-[11px] sm:text-[12px] bg-[#4a5240] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full uppercase tracking-[0.1em] hover:bg-[#6b7260] transition-all duration-300 shadow-2xl md:scale-110">
              BOOK AN APPOINTMENT
            </Link>

            <Link
              href="#services"
              className="font-label-caps text-sm text-white/90 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
            >
              Our Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>


      </section>

      {/* Trust Bar */}
      <section className="relative -mt-10 md:-mt-16 z-20 py-10 md:py-12 bg-[#4a5240] mx-4 sm:mx-10 md:mx-20 rounded-2xl shadow-2xl">

        <div className="max-w-container-max mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center"
          >
            <motion.div variants={fadeInUp}>
              <p className="font-display-lg text-3xl md:text-4xl text-white mb-1 md:mb-2">4.9<span className="text-[#c1cab3] text-lg md:text-xl">/5</span></p>
              <p className="font-label-caps text-[9px] md:text-[10px] text-white/70 uppercase tracking-widest">Client Rating</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="font-display-lg text-3xl md:text-4xl text-white mb-1 md:mb-2">15<span className="text-[#c1cab3] text-lg md:text-xl">+</span></p>
              <p className="font-label-caps text-[9px] md:text-[10px] text-white/70 uppercase tracking-widest">Years Experience</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="font-display-lg text-3xl md:text-4xl text-white mb-1 md:mb-2">5k<span className="text-[#c1cab3] text-lg md:text-xl">+</span></p>
              <p className="font-label-caps text-[9px] md:text-[10px] text-white/70 uppercase tracking-widest">Happy Clients</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="font-display-lg text-3xl md:text-4xl text-white mb-1 md:mb-2">10</p>
              <p className="font-label-caps text-[9px] md:text-[10px] text-white/70 uppercase tracking-widest">Expert Stylists</p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 px-6 md:px-20 max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl"
          >

            <img
              alt="Spa Treatment"
              className="w-full h-full object-cover"
              src="/images/modals/dreamgirl.webp"
            />
            <div className="absolute inset-0 bg-[#333b2a]/10 mix-blend-overlay"></div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <span className="font-label-caps text-[#59614e] uppercase tracking-[0.3em] mb-6 inline-block px-3 py-1 bg-[#59614e]/10 rounded-full text-[10px]">Our Philosophy</span>
            <h2 className="font-display-lg text-3xl md:text-6xl text-[#333b2a] mb-8 leading-tight">
              A Journey of Beauty &amp; <span className="italic font-decorative-accent text-[#59614e]">Excellence</span>
            </h2>

            <p className="font-body-md text-lg text-on-surface-variant mb-8 leading-relaxed">
              Every service at Reena Beauty Salon is designed to provide a relaxing and premium experience. From expert hairstyling and skincare to makeup and self-care treatments, our goal is to help every client feel refreshed, confident, and beautiful.
            </p>
            <p className="font-body-md text-on-surface-variant mb-12 leading-relaxed">
              Whether you’re preparing for a special occasion or simply taking time for yourself, our talented artists and beauty specialists are dedicated to making every visit memorable. At Reena, beauty is more than a treatment, it’s an experience of confidence, relaxation, and self-expression.
            </p>
            <Link href="/about" className="font-label-caps text-[12px] border border-[#59614e] text-[#59614e] px-10 py-5 rounded-full uppercase tracking-[0.1em] hover:bg-[#59614e]/10 transition-all duration-300 group flex items-center gap-2">
              Discover Our Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-24 bg-[#f6f3f0] px-6 md:px-20 overflow-hidden">
        <div className="max-w-container-max mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <span className="font-label-caps text-[#59614e] uppercase tracking-[0.3em] mb-4 inline-block text-[10px]">Social Proof</span>
            <h2 className="font-display-lg text-3xl md:text-6xl text-[#333b2a] mb-6">Real Results</h2>

            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Slide to witness the transformative power of our professional treatments.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
             >
               <ComparisonSlider 
                 beforeImage="/images/modals/bride/before.png"
                 afterImage="/images/modals/bride/after.png"
                 beforeLabel="Before"
                 afterLabel="After"
               />
             </motion.div>
             <div className="space-y-8">
               <motion.div {...fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant">
                 <h3 className="font-headline-sm text-2xl text-[#333b2a] mb-4">Bridal Transformation</h3>
                 <p className="font-body-md text-on-surface-variant mb-6">Our signature bridal makeup focuses on highlighting your best features while ensuring a long-lasting, camera-ready finish that looks natural in person.</p>
                 <div className="flex gap-4">
                   <div className="flex-1 bg-surface p-4 rounded-lg">
                     <p className="font-label-caps text-[10px] text-[#59614e] mb-1">Duration</p>
                     <p className="font-body-md font-bold">120 Mins</p>
                   </div>
                   <div className="flex-1 bg-surface p-4 rounded-lg">
                     <p className="font-label-caps text-[10px] text-[#59614e] mb-1">Intensity</p>
                     <p className="font-body-md font-bold">Customized</p>
                   </div>
                 </div>
               </motion.div>
               <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#4a5240] text-white p-8 rounded-2xl shadow-xl">
                 <Quote className="w-10 h-10 text-[#c1cab3] mb-6 opacity-50" />
                 <p className="text-xl italic font-display-lg mb-6 leading-relaxed">&quot;I couldn't believe it was me in the mirror. The team at Reena truly has magic in their hands.&quot;</p>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-[#c1cab3] flex items-center justify-center text-[#4a5240] font-bold">AK</div>
                   <div>
                     <p className="font-bold">Anam Khan</p>
                     <p className="text-xs text-white/60">Bridal Client</p>
                   </div>
                 </div>
               </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-24 md:py-32 bg-[#4a5240] px-6 md:px-20">
        <div className="max-w-container-max mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-20"
          >
            <span className="font-label-caps text-[#c1cab3] uppercase tracking-[0.3em] mb-4 inline-block text-[10px]">Core Services</span>
            <h2 className="font-display-lg text-3xl md:text-6xl text-white mb-6">
              Curated Rituals
            </h2>

            <p className="text-white/70 max-w-xl mx-auto">Meticulously crafted beauty experiences designed for your ultimate wellbeing.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Bridal Artistry",
                img: "/images/service_img/bride.webp",
                desc: "Bespoke makeup and styling for your special day."
              },
              {
                title: "Luxury Facials",
                img: "/images/service_img/facial.webp",
                desc: "Rejuvenating treatments for a radiant, healthy glow."
              },
              {
                title: "Hair Styling",
                img: "/images/service_img/haircut.webp",
                desc: "Expert cutting and coloring tailored to you."
              },
              {
                title: "Nail Care",
                img: "/images/service_img/nails.webp",
                desc: "Meticulous rituals for sophisticated elegance."
              }
            ].map((service, idx) => (

              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="group relative h-[405px] md:h-[455px] rounded-2xl overflow-hidden cursor-pointer"

              >
                <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4a5240]/90 via-[#4a5240]/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="font-headline-sm text-2xl text-white mb-2">{service.title}</h3>
                  <p className="text-white/70 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{service.desc}</p>
                  <Link href="/services" className="text-[#c1cab3] font-label-caps text-[10px] tracking-widest uppercase flex items-center gap-2">
                    Explore <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div {...fadeInUp} className="mt-20 text-center">
            <Link href="/services" className="px-12 py-5 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors font-label-caps text-xs tracking-widest uppercase">
              View Complete Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background overflow-hidden">
        <div className="max-w-container-max mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-20"
          >
            <span className="font-label-caps text-[#59614e] uppercase tracking-[0.3em] mb-4 inline-block text-[10px]">Exclusive Offers</span>
            <h2 className="font-display-lg text-3xl md:text-6xl text-[#333b2a] mb-6">Signature Packages</h2>

            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Curated experiences that combine our most popular treatments for exceptional value and results.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {packages.map((pkg, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <PackageCard {...pkg} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Reena */}
      <section className="py-24 bg-[#c1cab3] px-6 md:px-20 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#333b2a]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-container-max mx-auto text-center relative z-10">
          <motion.h2 {...fadeInUp} className="font-display-lg text-3xl md:text-6xl text-[#333b2a] mb-12 md:mb-20">Why Reena Salon?</motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { image: "/images/service_img/haircut.webp", title: "Expert Care", desc: "Our team consists of certified professionals with over a decade of industry experience." },
              { image: "/images/service_img/facial.webp", title: "Premium Products", desc: "We exclusively use high-end, dermatology-tested products for safe and lasting results." },
              { image: "/images/service_img/nails.webp", title: "Hygiene First", desc: "Medical-grade sterilization and disposable kits are used for every single client." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-3xl bg-[#333b2a]/5 overflow-hidden mb-8 rotate-3 hover:rotate-0 transition-transform shadow-lg">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <motion.h3 {...fadeInUp} className="font-headline-sm text-2xl text-[#333b2a] mb-4">{item.title}</motion.h3>
                <motion.p {...fadeInUp} className="font-body-md text-on-surface-variant leading-relaxed">{item.desc}</motion.p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Meet Our Artists */}
      <section className="py-24 md:py-32 px-6 md:px-20 max-w-container-max mx-auto">
        <div className="text-center mb-20">
          <motion.h2 {...fadeInUp} className="font-display-lg text-3xl md:text-6xl text-[#333b2a] mb-4">Meet Our Artists</motion.h2>

          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="font-body-md text-on-surface-variant">The visionary hands behind your transformation.</motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: "Sarah Ahmed", role: "Senior Stylist", img: "/images/team/Sarah.png" },
            { name: "Fatima Khan", role: "Lead Makeup Artist", img: "/images/team/Fatima.png" },
            { name: "Zainab Ali", role: "Esthetician", img: "/images/team/Zainab.png" }
          ].map((artist, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="relative w-56 md:w-64 h-72 md:h-80 mx-auto rounded-3xl overflow-hidden mb-8 shadow-xl">

                <img src={artist.img} alt={artist.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-[#333b2a]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="font-headline-sm text-2xl text-[#333b2a] mb-2">{artist.name}</h3>
              <p className="font-label-caps text-[#59614e] tracking-widest uppercase text-[10px]">{artist.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#ffffff] px-6 md:px-20">
        <div className="max-w-container-max mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-display-lg text-3xl md:text-6xl text-[#333b2a] mb-6">Common Inquiries</h2>

            <p className="font-body-md text-on-surface-variant">Everything you need to know before your first visit.</p>
          </motion.div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-24 md:py-32 px-6 md:px-20 max-w-container-max mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
          <div>
            <h2 className="font-display-lg text-3xl md:text-6xl text-[#333b2a] mb-4">Our Sanctuary</h2>

            <p className="font-body-md text-on-surface-variant flex items-center justify-center md:justify-start gap-2">
              <Instagram className="w-4 h-4 text-[#59614e]" /> @reena_beauty_salon
            </p>
          </div>
          <a
            className="font-label-caps text-[#59614e] uppercase tracking-[0.2em] items-center gap-2 border-b border-[#59614e]/30 hover:border-[#59614e] transition-all pb-2 text-[10px]"
            href="https://www.instagram.com/reena_beauty_salon?igsh=MWo4MDFucDlua3VnOA%3D%3D&utm_source=qr" target="_blank"
          >
            Visit Our Instagram
          </a>
        </div>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {[
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBm2VIGqN46737D4x63BIjZf1hWoBXcFbAnDdRuosAfBqF1411TPasS5hHGlhvgFvl_bx838pbXIzkSyIVaIMyYmToqaOWhmxnUn5OtBT5hB7fPTGLoaX6ufOK0JnR273mVPLrN8F743IO9pv72qks_fTxDc8oSBGr19JwRsmxsZY1dLw0obry5ilT5AjhksGS8fvuJ00GbKwfl3Idp83UUTw8Yle2Eap5bovfolLaXNISwAEWARJbZSM7X9jcYGYuyNYn43kBEnuY',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB984YFzDFty7CIetVvpTkmyQNLESeCTUvW60vLOVZU066Qeac4jMpmqcCa8HfL96VyoPAZljZz_k2VBbIDGEJU0_iLK9h_N_O2t8_lG8r5Lpw1gcS7k2n0ybTuwZoQROR96tQ6HzZqwOx5-WSLhgrIRFm19lkdp8B_svad0q-BEg8_1aTL2EWfrnfABvRuuS220OulHHK16pguBozw4XcAZAadGv2HyDruK4FNTefuOdc17Q56apF3Z00i0-jzOlMVZVeOUgqeVys',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCAt_7TfmfXOJjNxtTKC94h1xZ8A4rbMLbslMB1Q9axEfJsuYjTp03mqEhX00A12LSJTjjW64hG37zB19wDD1skE7IuaLchezfO8vi3mTOFr93SMhAIyBvMOhj9d3AyURahbBMnPdIqU44jeNDKeCCei4ArkJQUWuvy0fOJYBgq09HVVbrd2fZisR-XsISB_UiM_KLQtKOsOoAWKR42d0qyWbq0r7mBB06BUP0nIUD-lZ3ISDTL5lU3LAZUWO4usJSevgoXHO-ugAo',
            'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
            'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
            'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
          ].map((src, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              whileHover={{ scale: 0.98 }}
              className="aspect-square overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                alt={`Instagram ${idx + 1}`}
                className="w-full h-full object-cover"
                src={src}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#333b2a] py-24 md:py-32 px-6 md:px-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img src="/images/saloon.webp" className="w-full h-full object-cover" alt="Salon" />
        </div>

        <motion.div 
          {...fadeInUp}
          className="max-w-3xl mx-auto flex flex-col items-center relative z-10"
        >
          <Star className="w-12 h-12 text-[#c1cab3] mb-8 animate-pulse" />
          <h2 className="font-display-lg text-3xl md:text-7xl text-white mb-8">Ready for Your Transformation?</h2>

          <motion.p {...fadeInUp} className="font-body-md text-white/70 mb-12 text-lg">
            Schedule your consultation today and step into a world of personalized luxury. Let us bring out your best glow.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="/contact" className="px-12 py-5 bg-white text-[#333b2a] rounded-full hover:bg-[#c1cab3] transition-all font-label-caps text-xs tracking-widest uppercase shadow-2xl">
              BOOK AN APPOINTMENT
            </Link>
            <a href="tel:03259117272" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <Phone className="w-5 h-5" /> <span className="font-label-caps tracking-widest text-sm">0325 9117272</span>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
