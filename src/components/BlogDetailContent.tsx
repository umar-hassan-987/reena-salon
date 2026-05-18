'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

interface Blog {
  slug: string;
  category: string;
  title: string;
  image: string;
  date: string;
  readTime: string;
  content: string;
  excerpt?: string;
  author?: string;
  authorImage?: string;
}

interface BlogDetailContentProps {
  blog: Blog;
  related: Blog[];
}

export default function BlogDetailContent({ blog, related }: BlogDetailContentProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as any }
  };

  return (
    <main className="pt-[72px] bg-white min-h-screen">
      {/* Article Hero */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-end overflow-hidden bg-gradient-to-b from-slate-100 to-white">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </motion.div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pb-20 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <Link href="/blogs" className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 group">
               <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </Link>
            <span className="bg-secondary-fixed text-primary font-label-caps text-[10px] uppercase tracking-widest px-4 py-2 rounded-full shadow-md">
              {blog.category}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display-lg text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-10 leading-tight max-w-5xl font-bold drop-shadow-lg"
          >
            {blog.title}
          </motion.h1>

          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 md:gap-12 text-white/85 font-label-caps text-[10px] md:text-[11px] uppercase tracking-widest"
          >
            <span className="flex items-center gap-2.5"><Calendar className="w-4 h-4 text-secondary-fixed flex-shrink-0" /> {blog.date}</span>
            <span className="flex items-center gap-2.5"><Clock className="w-4 h-4 text-secondary-fixed flex-shrink-0" /> {blog.readTime}</span>
            <span className="flex items-center gap-2.5"><Sparkles className="w-4 h-4 text-secondary-fixed flex-shrink-0" /> {blog.author || 'Reena Editorial'}</span>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Sidebar */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-40 space-y-12">
               <div className="bg-gradient-to-br from-secondary-fixed/5 to-transparent p-8 rounded-2xl border border-secondary-fixed/10">
                 <h4 className="font-label-caps text-[11px] text-primary/50 uppercase tracking-[0.3em] mb-6 font-semibold">Quick Actions</h4>
                 <div className="flex flex-col gap-4">
                    <button className="flex items-center gap-4 text-primary font-label-caps text-[10px] tracking-widest hover:text-secondary transition-colors group">
                       <div className="w-10 h-10 rounded-xl bg-primary/8 group-hover:bg-secondary-fixed group-hover:text-white flex items-center justify-center transition-all"><Share2 className="w-4 h-4" /></div>
                       Share Story
                    </button>
                    <button className="flex items-center gap-4 text-primary font-label-caps text-[10px] tracking-widest hover:text-secondary transition-colors group">
                       <div className="w-10 h-10 rounded-xl bg-primary/8 group-hover:bg-secondary-fixed group-hover:text-white flex items-center justify-center transition-all"><Bookmark className="w-4 h-4" /></div>
                       Save Reading
                    </button>
                 </div>
               </div>
               
               <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary-fixed/5 rounded-2xl border border-primary/10 shadow-sm">
                  <h4 className="font-display-lg text-2xl text-primary mb-4 leading-tight font-bold">Expert Consultation</h4>
                  <p className="font-body-md text-sm text-on-surface-variant/70 mb-8 leading-relaxed">Get personalized beauty advice from our salon specialists tailored to your unique needs.</p>
                  <Link href="/contact" className="text-secondary font-label-caps text-[10px] tracking-widest uppercase flex items-center gap-2 group hover:gap-3 transition-all">
                    Book Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>
            </div>
          </aside>

          {/* Main Article */}
          <article className="lg:col-span-7">
            <motion.div 
              {...fadeInUp}
              className="blog-content max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            
            <motion.div 
              {...fadeInUp}
              className="mt-20 pt-16 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-10"
            >
                <div className="flex items-start md:items-center gap-5">
                  {blog.authorImage ? (
                   <img src={blog.authorImage} alt={blog.author || 'Author'} className="w-16 h-16 rounded-full object-cover shadow-md flex-shrink-0" />
                  ) : (
                   <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary-fixed to-primary flex items-center justify-center text-white font-bold text-lg flex-shrink-0">RE</div>
                  )}
                  <div>
                    <p className="font-bold text-primary text-lg">{blog.author || 'Reena Editorial'}</p>
                    <p className="text-xs text-on-surface-variant/60 font-label-caps uppercase tracking-widest mt-1">Expert Contributor</p>
                    <p className="text-sm text-on-surface-variant/70 mt-2">Beauty specialist with extensive industry knowledge</p>
                  </div>
                </div>
              <div className="flex flex-wrap gap-3">
                 {['#SkinCare', '#LuxuryBeauty', '#Wellness'].map(tag => (
                   <span key={tag} className="text-[11px] font-label-caps uppercase tracking-widest text-primary/60 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 hover:bg-primary/10 hover:text-primary transition-all">
                     {tag}
                   </span>
                 ))}
              </div>
            </motion.div>
          </article>

        </div>
      </section>

      {/* You Might Also Like */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6"
          >
            <div>
              <span className="font-label-caps text-secondary uppercase tracking-[0.4em] mb-4 inline-block text-[10px] font-semibold">Discover More</span>
              <h2 className="font-display-lg text-4xl md:text-6xl lg:text-7xl text-primary font-bold leading-tight">You Might Also Like</h2>

            </div>
            <Link href="/blogs" className="font-label-caps text-primary uppercase tracking-[0.2em] items-center gap-2 border-b-2 border-primary/30 hover:border-primary transition-all pb-2 text-[10px] font-semibold hover:text-secondary group flex">
              View All Articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {related.map((post, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <Link href={`/blogs/${post.slug}`} className="group block h-full">
                  <div className="relative h-72 rounded-2xl overflow-hidden mb-7 shadow-lg hover:shadow-2xl transition-all duration-500">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-6 left-6">
                       <span className="bg-white/95 backdrop-blur-md text-primary font-label-caps text-[9px] uppercase tracking-widest px-4 py-2 rounded-full shadow-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-xl md:text-2xl text-primary group-hover:text-secondary transition-colors leading-snug mb-4 font-bold line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-on-surface-variant/70 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-secondary font-label-caps text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                    Read Story <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/95 py-24 md:py-32 px-6 md:px-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48 blur-3xl" />
        
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto relative z-10">
          <MessageSquare className="w-14 h-14 text-secondary/80 mx-auto mb-10 opacity-70" />
          <h2 className="font-display-lg text-3xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight font-bold">
            Ready to Transform <span className="italic font-decorative-accent text-secondary/90">Your Beauty?</span>
          </h2>
          <p className="text-white/80 font-body-md text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
            Experience professional beauty care tailored to your unique needs. Book your personalized consultation today.
          </p>

          <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-primary hover:bg-secondary-fixed hover:text-white px-8 md:px-10 py-4 rounded-full font-label-caps text-[11px] uppercase tracking-wider font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
            Book Your Appointment <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
