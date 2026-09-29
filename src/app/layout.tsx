import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingCTA } from '@/components/layout/FloatingCTA';

export const metadata: Metadata = {
  title: {
    default: 'Sunshine Cleaning Services | Professional Cleaning in London',
    template: '%s | Sunshine Cleaning Services',
  },
  description:
    'Professional cleaning services for homes and businesses across London. Deep cleaning, end of tenancy, regular cleaning, commercial and carpet cleaning. Bring the Sunshine Home.',
  keywords: [
    'cleaning services London',
    'professional cleaning London',
    'deep cleaning London',
    'end of tenancy cleaning London',
    'regular cleaning London',
    'commercial cleaning London',
    'carpet cleaning London',
    'residential cleaning London',
  ],
  authors: [{ name: 'Sunshine Cleaning Services Limited' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Sunshine Cleaning Services',
    title: 'Sunshine Cleaning Services | Professional Cleaning in London',
    description:
      'Professional cleaning services for homes and businesses across London. Thoughtful cleaning, beautiful results and service you can rely on.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunshine Cleaning Services | Professional Cleaning in London',
    description:
      'Professional cleaning services for homes and businesses across London.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
