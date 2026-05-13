'use client';

import { motion } from 'framer-motion';
import { blogs } from '@/data/blogs';
import Link from 'next/link';
import { ArrowRight, Sparkles, Mail, Tag, Clock, Calendar as CalendarIcon } from 'lucide-react';

export default function BlogsPage() {
  const featuredBlog = blogs[0];
  const remainingBlogs = blogs.slice(1);

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
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  return (
    <main className="bg-background min-h-screen pt-[72px]">
      {/* Page Header */}
      <section className="px-6 md:px-20 pt-24 pb-16 text-center max-w-5xl mx-auto overflow-hidden">

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display-lg text-4xl sm:text-5xl md:text-7xl text-primary mb-8"
        >
          Beauty Secrets &amp; <span className="italic font-decorative-accent text-secondary">Insights</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-body-md text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
        >
          Cultivating quiet confidence through mindful rituals, expert advice, and the art of modern sanctuary.
        </motion.p>
      </section>

      {/* Featured Article */}
      <section className="px-6 md:px-20 pb-24 max-w-container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Link href={`/blogs/${featuredBlog.slug}`} className="block group">
            <div className="relative w-full h-[400px] md:h-[650px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-primary/20">

              <img
                alt={featuredBlog.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src={featuredBlog.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-16 max-w-4xl">

                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-3 mb-6"
                >
                   <span className="w-8 h-[1px] bg-secondary-fixed"></span>
                   <span className="font-label-caps text-[10px] text-secondary-fixed uppercase tracking-widest">Featured Story</span>
                </motion.div>
                <h2 className="font-display-lg text-2xl md:text-6xl text-white mb-6 leading-tight group-hover:text-secondary-fixed transition-colors">
                  {featuredBlog.title}
                </h2>

                <p className="font-body-md text-white/70 mb-10 line-clamp-2 max-w-2xl hidden md:block">
                  {featuredBlog.excerpt}
                </p>
                <div className="inline-flex items-center gap-4 bg-white text-primary font-label-caps text-[10px] sm:text-xs uppercase tracking-widest px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all group-hover:bg-secondary-fixed group-hover:text-primary">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </div>

              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="px-6 md:px-20 pb-20 max-w-container-max mx-auto overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 overflow-x-auto no-scrollbar pb-4 md:justify-center"
        >
          {['All Stories', 'Skincare', 'Hair Care', 'Bridal', 'Trends', 'Wellness'].map((cat, idx) => (
            <button
              key={idx}
              className={`font-label-caps text-[10px] uppercase tracking-[0.2em] px-8 py-4 rounded-full border transition-all whitespace-nowrap ${
                idx === 0
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                  : 'bg-white text-on-surface-variant border-outline-variant/30 hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Article Grid */}
      <section className="px-6 md:px-20 pb-32 max-w-container-max mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {blogs.map((post, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <Link href={`/blogs/${post.slug}`} className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-outline-variant/5 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative h-72 overflow-hidden">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    src={post.image}
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md text-primary font-label-caps text-[9px] uppercase tracking-widest px-4 py-2 rounded-full shadow-sm border border-white/20">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-on-surface-variant/40 font-label-caps text-[9px] uppercase tracking-wider mb-6">
                    <span className="flex items-center gap-1.5"><CalendarIcon className="w-3 h-3" /> {post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-outline-variant/30"></span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <h3 className="font-headline-sm text-2xl text-[#333b2a] mb-6 group-hover:text-secondary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant/70 mb-8 line-clamp-3 flex-grow text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-label-caps text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all border-t border-outline-variant/10 pt-6">
                    Continue Reading
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="bg-[#333b2a] py-32 md:py-48 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale">
            <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1600&q=80" className="w-full h-full object-cover" />
        </div>
        <motion.div 
          {...fadeInUp}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-secondary-fixed mx-auto mb-8 border border-white/20">
             <Mail className="w-8 h-8" />
          </div>
          <h2 className="font-display-lg text-3xl md:text-7xl text-white mb-8">Stay <span className="italic font-decorative-accent text-secondary-fixed">Inspired</span></h2>

          <p className="font-body-md text-lg text-white/70 mb-16 max-w-2xl mx-auto leading-relaxed">
            Subscribe for exclusive beauty insights, seasonal care guides, and a touch of sanctuary delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto p-2 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10">
            <input
              className="flex-grow bg-transparent rounded-full px-8 py-5 font-body-md text-white placeholder:text-white/30 focus:outline-none"
              placeholder="Your email address"
              type="email"
            />
            <button
              className="bg-secondary-fixed text-primary font-label-caps text-xs uppercase tracking-widest px-12 py-5 rounded-[1.5rem] hover:bg-white hover:text-primary transition-all shadow-xl"
              type="button"
            >
              Join Us
            </button>
          </form>
          <p className="mt-10 font-label-caps text-[9px] uppercase tracking-[0.3em] text-white/30">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
