import Link from 'next/link';
import { Facebook, Instagram, Mail, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-[120px] px-margin-mobile md:px-margin-desktop bg-surface-container-low dark:bg-surface-container-highest">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto">
        {/* Brand */}
        <div className="md:col-span-1 mb-8 md:mb-0">
          <Link
            href="/"
            className="mb-6 block"
          >
            <img src="/logo.svg" alt="Reena Beauty Salon Logo" className="h-14 w-auto" />
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">
            Reena Beauty Salon is your trusted beauty destination for luxurious treatments, expert care, and personalized styling experiences.
          </p>
        </div>

        {/* Links 1 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-caps text-[12px] text-[#4a5240] uppercase tracking-widest mb-2">Explore</h4>
          <Link
            className="font-body-md text-body-md text-on-surface-variant hover:text-[#6b7260] transition-colors duration-300"
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-body-md text-body-md text-on-surface-variant hover:text-[#6b7260] transition-colors duration-300"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="font-body-md text-body-md text-on-surface-variant hover:text-[#6b7260] transition-colors duration-300"
            href="/gallery"
          >
            Gallery
          </Link>
          <Link
            className="font-body-md text-body-md text-on-surface-variant hover:text-[#6b7260] transition-colors duration-300"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="font-body-md text-body-md text-on-surface-variant hover:text-[#6b7260] transition-colors duration-300"
            href="/contact"
          >
            Contact
          </Link>
        </div>

        {/* Links 2 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-caps text-[12px] text-[#4a5240] uppercase tracking-widest mb-2">Legal</h4>
          <Link
            className="font-body-md text-body-md text-on-surface-variant hover:text-[#6b7260] transition-colors duration-300"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="font-body-md text-body-md text-on-surface-variant hover:text-[#6b7260] transition-colors duration-300"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="font-body-md text-body-md text-on-surface-variant hover:text-[#6b7260] transition-colors duration-300"
            href="/contact#faq"
          >
            FAQ
          </Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-caps text-[12px] text-[#4a5240] uppercase tracking-widest mb-2">Contact Info</h4>
          <p className="font-body-md text-sm text-on-surface-variant mb-2">
            G-11/MARKAZ, Silver Plaza, 1st Floor
            <br />
            Islamabad, Pakistan
          </p>
          <p className="font-body-md text-sm text-on-surface-variant mb-2">
            Mon-Sun: 10:00 am– 08:00 pm
            <br />
            (Open 7 days a week)
          </p>
          <a
            className="font-body-md text-sm text-[#4a5240] hover:text-[#6b7260] transition-colors duration-300 break-all"
            href="mailto:bookings@reenabeautysalon.pk"
          >
            bookings@reenabeautysalon.pk
          </a>
          <a
            className="font-body-md text-sm text-[#4a5240] hover:text-[#6b7260] transition-colors duration-300"
            href="tel:03259117272"
          >
            03259117272
          </a>
          <a
            className="font-body-md text-sm text-[#4a5240] hover:text-[#6b7260] transition-colors duration-300"
            href="tel:0512222212"
          >
            051 2222212
          </a>

        </div>
      </div>


      <div className="max-w-container-max mx-auto mt-16 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body-md text-sm text-on-surface-variant">
          © 2026 Reena Beauty Salon. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            className="text-primary hover:text-secondary transition-colors duration-300"
            href="https://www.facebook.com/share/1B4DF9YSnL/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            className="text-primary hover:text-secondary transition-colors duration-300"
            href="https://www.instagram.com/reena_beauty_salon?igsh=MWo4MDFucDlua3VnOA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            className="text-primary hover:text-secondary transition-colors duration-300"
            href="https://m.youtube.com/@reenabeautysalon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>


    </footer>

  );
}
