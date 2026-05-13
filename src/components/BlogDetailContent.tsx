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
    <main className="pt-[72px] bg-background min-h-screen">
      {/* Article Hero */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </motion.div>
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <Link href="/blogs" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
               <ArrowLeft className="w-5 h-5" />
            </Link>
            <span className="bg-secondary-fixed text-primary font-label-caps text-[10px] uppercase tracking-widest px-4 py-2 rounded-full">
              {blog.category}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display-lg text-3xl sm:text-4xl md:text-7xl text-white mb-8 leading-tight max-w-4xl"
          >
            {blog.title}
          </motion.h1>

          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-8 text-white/70 font-label-caps text-[10px] uppercase tracking-widest"
          >
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-secondary-fixed" /> {blog.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-secondary-fixed" /> {blog.readTime}</span>
            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-secondary-fixed" /> Reena Editorial</span>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-24 md:py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 space-y-12">
               <div>
                 <h4 className="font-label-caps text-[11px] text-primary/40 uppercase tracking-[0.3em] mb-6">Actions</h4>
                 <div className="flex flex-col gap-4">
                    <button className="flex items-center gap-4 text-primary font-label-caps text-[10px] tracking-widest hover:text-secondary transition-colors group">
                       <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-secondary-fixed transition-all"><Share2 className="w-4 h-4" /></div>
                       Share Story
                    </button>
                    <button className="flex items-center gap-4 text-primary font-label-caps text-[10px] tracking-widest hover:text-secondary transition-colors group">
                       <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-secondary-fixed transition-all"><Bookmark className="w-4 h-4" /></div>
                       Save Reading
                    </button>
                 </div>
               </div>
               
               <div className="p-8 bg-surface-container-low rounded-[2rem] border border-outline-variant/10">
                  <h4 className="font-display-lg text-2xl text-primary mb-4 leading-tight">Need a Personalized Advice?</h4>
                  <p className="font-body-md text-sm text-on-surface-variant/70 mb-8 leading-relaxed">Our experts are available for detailed consultations on all beauty rituals.</p>
                  <Link href="/contact" className="text-secondary font-label-caps text-[10px] tracking-widest uppercase flex items-center gap-2 group">
                    Book Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>
            </div>
          </aside>

          {/* Main Article */}
          <article className="lg:col-span-7">
            <motion.div 
              {...fadeInUp}
              className="prose prose-lg max-w-none 
                prose-headings:font-display-lg prose-headings:text-[#333b2a] 
                prose-p:font-body-md prose-p:text-on-surface-variant prose-p:leading-relaxed prose-p:text-lg prose-p:mb-8
                prose-h2:text-2xl md:text-4xl prose-h2:mt-12 md:prose-h2:mt-16 prose-h2:mb-6 md:prose-h2:mb-8

                prose-strong:text-primary
                prose-li:text-on-surface-variant prose-li:font-body-md"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            
            <motion.div 
              {...fadeInUp}
              className="mt-20 pt-12 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-8"
            >
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-primary font-bold">RE</div>
                 <div>
                    <p className="font-bold text-primary">Reena Editorial</p>
                    <p className="text-xs text-on-surface-variant/60 font-label-caps uppercase tracking-widest">Beauty Consultant</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 {['#SkinCare', '#LuxuryBeauty', '#Sanctuary'].map(tag => (
                   <span key={tag} className="text-[10px] font-label-caps uppercase tracking-widest text-primary/40 px-3 py-1 bg-surface-container rounded-full">
                     {tag}
                   </span>
                 ))}
              </div>
            </motion.div>
          </article>

        </div>
      </section>

      {/* You Might Also Like */}
      <section className="py-24 md:py-32 bg-[#f6f3f0] px-6 md:px-20 overflow-hidden">
        <div className="max-w-container-max mx-auto">
          <motion.div 
            {...fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div>
              <span className="font-label-caps text-secondary uppercase tracking-[0.4em] mb-4 inline-block text-[10px]">Continued Reading</span>
              <h2 className="font-display-lg text-3xl md:text-6xl text-[#333b2a]">You Might Also Like</h2>

            </div>
            <Link href="/blogs" className="font-label-caps text-[#59614e] uppercase tracking-[0.2em] items-center gap-2 border-b border-[#59614e]/30 hover:border-[#59614e] transition-all pb-2 text-[10px]">
              Explore Full Journal
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {related.map((post, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <Link href={`/blogs/${post.slug}`} className="group block">
                  <div className="relative h-64 rounded-[2rem] overflow-hidden mb-6 shadow-lg">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute top-6 left-6">
                       <span className="bg-white/90 backdrop-blur-md text-primary font-label-caps text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-2xl text-[#333b2a] group-hover:text-secondary transition-colors leading-snug mb-4">{post.title}</h3>
                  <div className="flex items-center gap-2 text-primary font-label-caps text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                    Read Story <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#333b2a] py-24 md:py-32 px-6 md:px-20 text-center relative overflow-hidden">
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto relative z-10">
          <MessageSquare className="w-12 h-12 text-[#c1cab3] mx-auto mb-8 opacity-50" />
          <h2 className="font-display-lg text-3xl md:text-7xl text-white mb-10 leading-tight">Begin Your Personal <span className="italic font-decorative-accent text-secondary-fixed">Transformation</span></h2>

          <Link href="/contact" className="btn-primary scale-110 bg-white text-[#333b2a] hover:bg-secondary-fixed">
            Book An Appointment
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
