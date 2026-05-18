import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-[72px] px-6 bg-surface-container-low">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <Link href="/" className="font-headline-sm text-[28px] text-[#4a5240] tracking-tighter">Reena Beauty Salon</Link>
          <p className="mt-4 text-on-surface-variant">Your trusted beauty sanctuary in Islamabad for style, luxury, and personalized care.</p>
        </div>

        <div>
          <h4 className="font-label-caps uppercase mb-3">Explore</h4>
          <ul className="space-y-2 text-on-surface-variant">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-label-caps uppercase mb-3">Legal</h4>
          <ul className="space-y-2 text-on-surface-variant">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-label-caps uppercase mb-3">Connect</h4>
          <p className="text-on-surface-variant">G-11 MARKAZ, Silver Plaza, 1st Floor, Islamabad</p>
          <a className="mt-2 block text-on-surface-variant" href="mailto:bookings@reenabeautysalon.com">bookings@reenabeautysalon.com</a>
          <a className="block text-on-surface-variant" href="tel:03115337766">03115337766</a>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-10 pt-6 border-t border-outline-variant/30 flex items-center justify-between text-sm">
        <p className="text-on-surface-variant">© 2024 Reena Beauty Salon. All rights reserved.</p>
        <div className="flex gap-4 text-on-surface-variant">
          <a href="#">Instagram</a>
          <a href="#">Email</a>
        </div>
      </div>
    </footer>
  );
}
