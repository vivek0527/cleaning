import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'See how easy it is to book a professional cleaning service with Sunshine Cleaning Services. Choose your service, pick a time, and enjoy the difference.',
};

export default function HowItWorksPage() {
  return (
    <>
      <section style={{
        background: 'linear-gradient(180deg, var(--background-warm) 0%, var(--background) 100%)',
        padding: 'clamp(4rem, 8vw, 7rem) 0 clamp(2rem, 4vw, 3rem)',
      }}>
        <div className="container">
          <span className="section-label">How It Works</span>
          <h1 style={{ marginBottom: '1.5rem' }}>Simple, straightforward cleaning.</h1>
          <p style={{ fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)', maxWidth: '560px' }}>
            Booking a professional cleaning service shouldn&apos;t be complicated. Here&apos;s our simple process from start to finish.
          </p>
        </div>
      </section>

      <ProcessTimeline />

      {/* Detail Sections */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {[
              {
                step: '01',
                title: 'Choose Your Service',
                description: 'Browse our range of cleaning services — from deep cleaning and end of tenancy to regular maintenance and carpet cleaning. Select the service that matches what you need.',
              },
              {
                step: '02',
                title: 'Pick Your Date & Time',
                description: 'Choose a date and time that works for you. We offer flexible scheduling to fit around your commitments. Morning, afternoon, or specific time — let us know what suits.',
              },
              {
                step: '03',
                title: 'We Take Care of the Rest',
                description: 'Our professional cleaning team arrives on time, equipped with everything needed. We work methodically through your space, paying attention to the details that matter.',
              },
              {
                step: '04',
                title: 'Enjoy the Difference',
                description: 'Come home or return to your workspace to find a fresher, cleaner environment. That\'s the Sunshine difference — a space that genuinely feels better.',
              },
            ].map((item) => (
              <div key={item.step} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                <span style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-display)',
                  lineHeight: 1,
                  flexShrink: 0,
                }}>
                  {item.step}
                </span>
                <div>
                  <h3 style={{ marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '1rem', lineHeight: 1.7 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--background-warm)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Ready to get started?</h2>
          <p style={{ maxWidth: '480px', margin: '0 auto 2rem' }}>
            Book your cleaning in minutes.
          </p>
          <Link href="/booking" className="btn btn-primary btn-lg">
            Book a Cleaning <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
