'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function HomeBookingCTA() {
  return (
    <section className="section" style={{ background: 'var(--muted)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <ScrollReveal>
          <span className="section-label" style={{ justifyContent: 'center' }}>Ready?</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 style={{ marginBottom: '1rem' }}>
            Bring the sunshine home.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p style={{ maxWidth: '480px', margin: '0 auto 2.5rem', fontSize: '1.0625rem' }}>
            Book your cleaning today and experience the difference a professional service makes.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/booking" className="btn btn-primary btn-lg">
              Book a Cleaning
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn btn-secondary btn-lg">
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
