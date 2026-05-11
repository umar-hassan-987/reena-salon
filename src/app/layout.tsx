import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: 'Reena Beauty Salon — Islamabad\'s Luxury Beauty Sanctuary',
    template: '%s | Reena Beauty Salon',
  },
  description: 'Reena Beauty Salon is your trusted beauty sanctuary in Islamabad for style, luxury and personalised care. Book your appointment today.',
  keywords: ['beauty salon', 'Islamabad', 'hair styling', 'bridal makeup', 'facials', 'luxury salon', 'Reena Beauty Salon'],
  openGraph: {
    title: 'Reena Beauty Salon — Islamabad\'s Luxury Beauty Sanctuary',
    description: 'Your exclusive sanctuary for luxury & pampering in Islamabad.',
    siteName: 'Reena Beauty Salon',
    locale: 'en_PK',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
