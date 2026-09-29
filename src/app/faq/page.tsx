import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { generalFaqs } from '@/data/faq';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Sunshine Cleaning Services. Find answers about our cleaning services, booking process, service areas and more.',
};

export default function FAQPage() {
  return (
    <>
      <section style={{
        background: 'linear-gradient(180deg, var(--background-warm) 0%, var(--background) 100%)',
        padding: 'clamp(4rem, 8vw, 7rem) 0 clamp(2rem, 4vw, 3rem)',
      }}>
        <div className="container">
          <span className="section-label">FAQ</span>
          <h1 style={{ marginBottom: '1.5rem' }}>Frequently asked questions.</h1>
          <p style={{ fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)', maxWidth: '520px' }}>
            Everything you need to know about our cleaning services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <FAQAccordion faqs={generalFaqs} showSearch />
        </div>
      </section>

      <section className="section" style={{ background: 'var(--muted)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Still have questions?</h2>
          <p style={{ maxWidth: '480px', margin: '0 auto 2rem' }}>
            We&apos;re happy to help. Get in touch and we&apos;ll get back to you.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
            <Link href="/booking" className="btn btn-secondary">Book a Cleaning</Link>
          </div>
        </div>
      </section>
    </>
  );
}
