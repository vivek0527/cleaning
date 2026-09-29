import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { FAQAccordion } from '@/components/sections/FAQAccordion';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(180deg, var(--background-warm) 0%, var(--background) 100%)',
        padding: 'clamp(4rem, 8vw, 7rem) 0 clamp(3rem, 6vw, 5rem)',
      }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <Link href="/services" style={{ fontSize: '0.875rem', color: 'var(--foreground-muted)', marginBottom: '1rem', display: 'inline-block' }}>
            ← All Services
          </Link>
          <h1 style={{ marginBottom: '1.5rem' }}>{service.name}</h1>
          <p style={{ fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)', maxWidth: '560px' }}>
            {service.description}
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/booking" className="btn btn-primary btn-lg">
              Book {service.name}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: '2.5rem' }}>What&apos;s included.</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '0.75rem',
          }}>
            {service.features.map((feature) => (
              <div key={feature} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 1.25rem',
                background: 'var(--muted)',
                borderRadius: 'var(--radius)',
              }}>
                <Check size={18} style={{ color: 'var(--sage)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9375rem', fontWeight: 500 }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable For */}
      <section className="section" style={{ background: 'var(--background-warm)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem' }}>Suitable for.</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {service.suitableFor.map((item) => (
              <span key={item} style={{
                padding: '0.625rem 1.25rem',
                background: 'var(--card)',
                border: '1px solid var(--card-border)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9375rem',
                fontWeight: 500,
              }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ marginBottom: '2.5rem' }}>Our process.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', position: 'relative', paddingLeft: '3.5rem' }}>
            <div style={{
              position: 'absolute',
              top: '16px',
              bottom: '16px',
              left: '15px',
              width: 2,
              background: 'var(--border)',
            }} />
            {service.process.map((step, i) => (
              <div key={step.number} style={{ position: 'relative', paddingBottom: i < service.process.length - 1 ? '2.5rem' : 0 }}>
                <div style={{
                  position: 'absolute',
                  left: '-3.5rem',
                  top: 0,
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  color: 'var(--accent-foreground)',
                  fontFamily: 'var(--font-display)',
                  zIndex: 1,
                }}>
                  {step.number}
                </div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.375rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.9375rem' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="section" style={{ background: 'var(--muted)' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <FAQAccordion faqs={service.faqs} title="Frequently asked questions." />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Ready to book?</h2>
          <p style={{ maxWidth: '480px', margin: '0 auto 2rem' }}>
            Book your {service.name.toLowerCase()} today or get in touch to discuss your requirements.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/booking" className="btn btn-primary btn-lg">
              Book a Cleaning
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn btn-secondary btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
