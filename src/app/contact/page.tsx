'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Instagram, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!/^03\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be a valid 11-digit Pakistani mobile number starting with 03 (e.g. 03XXXXXXXXX).';
    }
    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStatus('loading');
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    
    if (id === 'phone') {
      const onlyNums = value.replace(/\D/g, '').slice(0, 11);
      setFormData((prev) => ({ ...prev, [id]: onlyNums }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
    
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: '' }));
  };

  const faqItems = [
    {
      question: 'How far in advance should I book my bridal appointment?',
      answer: 'We recommend booking bridal appointments at least 1–3 months in advance to secure your preferred date and allow time for consultations.',
    },
    {
      question: 'Do you offer consultations before major hair transformations?',
      answer: 'Yes, we provide personalized consultations to discuss your desired look, hair condition, and suitable treatments.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We kindly request at least 24 hours’ notice for cancellations or rescheduling to help us accommodate other clients.',
    },
    {
      question: 'Are your products safe for sensitive skin?',
      answer: 'Absolutely. We use high-quality and skin-friendly products, and our team carefully considers allergies before treatments.',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as any }
  };

  return (
    <main className="pt-[72px] bg-background">
      {/* Page Hero - Increased padding and added animated star */}
      <section className="relative w-full py-32 md:py-48 px-6 md:px-20 flex flex-col items-center justify-center text-center overflow-hidden bg-[#4a5240]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto z-10"
        >

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display-lg text-4xl sm:text-5xl md:text-8xl text-white mb-10"
          >
            Get in <span className="italic font-decorative-accent text-[#c1cab3]">Touch</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-body-md text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you have a question about our services, pricing, or want to book an appointment, our sanctuary team is ready to assist you.
          </motion.p>
        </motion.div>
        
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c1cab3]/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
      </section>

      {/* Main Content: Form & Info Card - Fixed overlap and increased vertical space */}
      <section className="pb-32 md:pb-48 px-6 md:px-20 max-w-container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch -mt-16 md:-mt-40">
          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 bg-white p-8 md:p-16 shadow-2xl rounded-[2.5rem] md:rounded-[3rem] border border-outline-variant/5"

          >
            <div className="flex items-center gap-4 mb-12">
               <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                  <MessageSquare className="w-6 h-6" />
               </div>
               <h2 className="font-display-lg text-3xl md:text-5xl text-[#333b2a]">Send an Inquiry</h2>
            </div>
            
            <form className="space-y-12" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="font-label-caps text-[10px] text-on-surface-variant/60 uppercase tracking-widest px-1" htmlFor="name">Full Name</label>
                  <input
                    className={`minimal-input font-body-md text-primary w-full py-4 ${errors.name ? 'border-red-400' : ''}`}
                    id="name"
                    placeholder="E.g. Aisha Khan"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="text-red-500 text-xs px-1">{errors.name}</p>}
                </div>
                <div className="space-y-3">
                  <label className="font-label-caps text-[10px] text-on-surface-variant/60 uppercase tracking-widest px-1" htmlFor="email">Email Address</label>
                  <input
                    className={`minimal-input font-body-md text-primary w-full py-4 ${errors.email ? 'border-red-400' : ''}`}
                    id="email"
                    placeholder="aisha@example.pk"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-500 text-xs px-1">{errors.email}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="font-label-caps text-[10px] text-on-surface-variant/60 uppercase tracking-widest px-1" htmlFor="phone">Phone Number</label>
                  <input
                    className={`minimal-input font-body-md text-primary w-full py-4 ${errors.phone ? 'border-red-400' : ''}`}
                    id="phone"
                    placeholder="03XXXXXXXXX"
                    type="tel"
                    maxLength={11}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <p className="text-red-500 text-xs px-1">{errors.phone}</p>}
                </div>
                <div className="space-y-3">
                  <label className="font-label-caps text-[10px] text-on-surface-variant/60 uppercase tracking-widest px-1" htmlFor="service">Interested Service</label>
                  <select
                    className={`minimal-input font-body-md text-primary w-full py-4 bg-transparent cursor-pointer ${errors.service ? 'border-red-400' : ''}`}
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a Service</option>
                    <option value="hair">Hair Styling & Color</option>
                    <option value="skin">Skincare & Facials</option>
                    <option value="bridal">Bridal Makeup</option>
                    <option value="nails">Nail Art & Care</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-xs px-1">{errors.service}</p>}
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-label-caps text-[10px] text-on-surface-variant/60 uppercase tracking-widest px-1" htmlFor="message">Your Message</label>
                <textarea
                  className={`minimal-input font-body-md text-primary w-full py-4 resize-none ${errors.message ? 'border-red-400' : ''}`}
                  id="message"
                  placeholder="Tell us about your beauty goals..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs px-1">{errors.message}</p>}
              </div>

              <button
                className="btn-primary w-full md:w-auto mt-4"
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Processing...' : 'Book My Consultation'}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 bg-green-50 text-green-700 border border-green-100 rounded-[2rem] flex items-center gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6" />
                    <p className="font-body-md font-medium">Inquiry received! We'll contact you shortly.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 bg-[#333b2a] p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] text-white relative overflow-hidden flex flex-col justify-between shadow-2xl"

          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 space-y-16">
              <div className="space-y-10">
                <h3 className="font-display-lg text-3xl md:text-5xl">Our <span className="italic font-decorative-accent text-[#c1cab3]">Sanctuary</span></h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex flex-shrink-0 items-center justify-center group-hover:bg-secondary-fixed group-hover:text-primary transition-all duration-500">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-label-caps text-[10px] text-white/50 uppercase tracking-[0.2em] mb-2">Location</p>
                      <p className="font-body-md text-lg leading-relaxed">G-11/MARKAZ, Silver Plaza, 1st Floor, Islamabad, Pakistan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex flex-shrink-0 items-center justify-center group-hover:bg-secondary-fixed group-hover:text-primary transition-all duration-500">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-label-caps text-[10px] text-white/50 uppercase tracking-[0.2em] mb-2">WhatsApp / Call</p>
                      <p className="font-body-md text-lg">0325 9117272</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex flex-shrink-0 items-center justify-center group-hover:bg-secondary-fixed group-hover:text-primary transition-all duration-500">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-label-caps text-[10px] text-white/50 uppercase tracking-[0.2em] mb-2">Email</p>
                      <p className="font-body-md text-lg break-all">bookings@reenabeauty.pk</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="space-y-10">
                <div className="flex items-center gap-4">
                   <div className="w-8 h-[1px] bg-secondary-fixed"></div>
                   <h4 className="font-label-caps text-xs uppercase tracking-[0.3em]">Opening Hours</h4>
                </div>
                <div className="space-y-6 font-body-md text-lg">
                  <div className="flex justify-between border-b border-white/10 pb-5">
                    <span className="text-white/70">Mon - Sun</span>
                    <span className="font-bold text-secondary-fixed">10:00 am – 08:00 pm</span>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4" /> Medical Grade Sanitization
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 pt-20">
               <a 
                 href="https://www.instagram.com/reena_beauty_salon?igsh=MWo4MDFucDlua3VnOA%3D%3D&utm_source=qr" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-4 text-white/40 hover:text-secondary-fixed transition-all duration-500 group"
               >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="font-label-caps text-[10px] uppercase tracking-[0.3em]">Follow @reena_beauty_salon</span>
               </a>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Map - Added top margin for breathing room */}
      <section className="px-6 md:px-20 pb-32 md:pb-48">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full h-[400px] md:h-[600px] relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white"

        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.46460334865!2d73.0116664!3d33.6666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe3874313f83%3A0xc30403328e29a96e!2sG-11%20Markaz%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="bg-[#333b2a] text-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl flex items-center gap-4 md:gap-6 border border-white/20 backdrop-blur-2xl">
              <div className="w-12 h-12 bg-[#c1cab3] rounded-2xl flex items-center justify-center text-[#333b2a] shadow-lg">
                 <MapPin className="w-7 h-7" />
              </div>
              <div>
                <p className="font-label-caps text-[10px] uppercase tracking-[0.4em] text-[#c1cab3] mb-1">Visit Our Sanctuary</p>
                <p className="font-body-md font-bold text-xl">G-11 Markaz, Islamabad</p>
              </div>
              </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section - Consistent padding */}
      <section className="py-32 md:py-48 bg-[#f6f3f0] px-6 md:px-20">
        <div className="max-w-container-max mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-24">

            <h2 className="font-display-lg text-3xl md:text-7xl text-[#333b2a] mb-8">Common <span className="italic font-decorative-accent text-secondary">Inquiries</span></h2>

            <p className="font-body-md text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">Everything you need to know about our sanctuary rituals and policies.</p>
          </motion.div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>
    </main>
  );
}
