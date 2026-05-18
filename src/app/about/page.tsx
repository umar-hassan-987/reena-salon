'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Heart, ShieldCheck, UserCheck } from 'lucide-react';

export default function AboutPage() {
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

  return (
    <main className="overflow-hidden">
      {/* Page Hero */}
      <section className="pt-[160px] pb-[100px] px-6 md:px-20 bg-[#4a5240] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 pointer-events-none"
        >

          <img src="/images/hero-salon.jpg" className="w-full h-full object-cover" alt="" />
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display-lg text-4xl sm:text-5xl md:text-8xl text-white mb-8 leading-tight"
          >
            About <span className="italic font-decorative-accent text-[#c1cab3]">Reena</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-body-lg text-xl text-white/80 leading-relaxed max-w-2xl mx-auto"
          >
            A trusted beauty destination in Islamabad where luxury, comfort, and personalized care come together since 2008.
          </motion.p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[700px] rounded-[2rem] overflow-hidden shadow-2xl z-10">

              <img
                alt="Salon Interior"
                className="w-full h-full object-cover"
                src="/images/story-interior.jpg"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#c1cab3] rounded-full flex flex-col items-center justify-center p-8 text-center shadow-xl z-20 border-8 border-white hidden md:flex"
            >
              <Sparkles className="w-10 h-10 text-[#4a5240] mb-4" />
              <p className="font-display-lg text-2xl text-[#4a5240] leading-tight">15+ Years of Excellence</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="font-label-caps text-[#59614e] uppercase tracking-[0.3em] mb-4 inline-block px-3 py-1 bg-[#59614e]/10 rounded-full text-[10px]">Our Journey</span>
            <h2 className="font-display-lg text-3xl md:text-6xl text-[#333b2a] leading-tight">Where Quality Meets <span className="italic font-decorative-accent text-[#59614e]">Passion</span></h2>

            <div className="space-y-6 font-body-md text-lg text-on-surface-variant leading-relaxed">
              <p>
                Our journey began with a simple vision: to create a salon experience that feels elegant, welcoming, and truly personal. At Reena Beauty Salon, we focus on delivering beauty services that combine creativity, professionalism, and care.
              </p>
              <p>
                Whether you’re preparing for a special occasion or simply taking time for yourself, our talented artists and beauty specialists are dedicated to making every visit memorable. We use high-quality products, modern techniques, and personalized consultations to ensure results that match your style and personality.
              </p>
              <p className="font-bold text-[#333b2a]">
                At Reena, beauty is more than a treatment—it’s an experience of confidence, relaxation, and self-expression.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Reena */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-[#4a5240] relative">
        <div className="max-w-container-max mx-auto relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="font-display-lg text-3xl md:text-7xl text-white mb-6">The Reena Standard</h2>
            <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base">Commitments that define every single experience at our sanctuary.</p>

          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: <UserCheck className="w-8 h-8" />, title: 'Personalised Care', desc: 'Customized beauty solutions designed around your unique style and comfort.' },
              { icon: <Sparkles className="w-8 h-8" />, title: 'Premium Products', desc: 'Trusted, high-quality brands to ensure safe treatments and long-lasting results.' },
              { icon: <ShieldCheck className="w-8 h-8" />, title: 'Hygienic Standards', desc: 'Strict cleanliness and medical-grade hygiene across all services.' },
              { icon: <Heart className="w-8 h-8" />, title: 'Expert Artists', desc: 'Experienced professionals passionate about precision and care.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-[2rem] border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 group"

              >
                <div className="w-16 h-16 rounded-2xl bg-[#c1cab3] flex items-center justify-center text-[#4a5240] mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-headline-sm text-2xl text-white mb-4">{item.title}</h3>
                <p className="text-white/60 text-sm font-body-md leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet Our Artists */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background text-center">
        <div className="max-w-container-max mx-auto">
          <motion.h2 {...fadeInUp} className="font-display-lg text-3xl md:text-7xl text-[#333b2a] mb-12 md:mb-20">Meet Our Visionaries</motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { name: 'Laiba Ameen', role: 'Makeup Artist', img: '/images/about-team/Laiba.png' },
              { name: 'Reena Azam', role: 'Owner & Makeup Expert', img: '/images/about-team/reena.png' },
              { name: 'Ms Noreen', role: 'Managing Director', img: '/images/about-team/zara.png' },
            ].map((artist, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center group"
              >
                <div className="w-56 md:w-64 h-56 md:h-64 rounded-full overflow-hidden mb-8 border-8 border-[#c1cab3] shadow-2xl transition-transform duration-500 group-hover:scale-105">

                  <img alt={artist.name} className="w-full h-full object-cover" src={artist.img} />
                </div>
                <h3 className="font-headline-sm text-3xl text-[#333b2a] mb-2">{artist.name}</h3>
                <p className="text-[#59614e] font-label-caps uppercase tracking-widest text-[10px]">{artist.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Block */}
      <section className="py-24 md:py-40 px-6 md:px-20 bg-[#c1cab3] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#4a5240]/5 pointer-events-none"></div>
        <motion.div
          {...fadeInUp}
          className="max-w-4xl mx-auto space-y-12 relative z-10"
        >
          <h2 className="font-display-lg text-3xl md:text-8xl text-[#333b2a] leading-tight">
            Join the Sanctuary in <span className="italic font-decorative-accent text-[#59614e]">Islamabad</span>
          </h2>

          <p className="font-body-lg text-xl text-on-surface-variant leading-relaxed">
            At Reena Beauty Salon, every appointment is more than a beauty session—it’s a moment to relax, refresh, and rediscover your confidence.
          </p>
          <div className="pt-8">
            <Link
              className="font-label-caps text-[12px] bg-[#4a5240] text-white px-12 py-5 rounded-full uppercase tracking-[0.1em] hover:bg-[#6b7260] transition-all duration-300 shadow-2xl scale-125"
              href="/contact"
            >
              BOOK AN APPOINTMENT
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
