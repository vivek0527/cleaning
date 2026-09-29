import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles, Key, CalendarCheck, Clock, Building2, Layers } from 'lucide-react';
import { services } from '@/data/services';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={24} />,
  Key: <Key size={24} />,
  CalendarCheck: <CalendarCheck size={24} />,
  Clock: <Clock size={24} />,
  Building2: <Building2 size={24} />,
  Layers: <Layers size={24} />,
};

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional cleaning services in London: deep cleaning, end of tenancy, regular cleaning, one-off cleaning, commercial cleaning and carpet cleaning.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(180deg, var(--background-warm) 0%, var(--background) 100%)',
        padding: 'clamp(4rem, 8vw, 7rem) 0 clamp(3rem, 6vw, 5rem)',
      }}>
        <div className="container">
          <span className="section-label">Our Services</span>
          <h1 style={{ marginBottom: '1.5rem' }}>What we do.</h1>
          <p style={{ fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)', maxWidth: '560px' }}>
            Professional cleaning services for homes and businesses across London. Choose the service that fits your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.5rem',
          }}>
            {services.map((service, i) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--card-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                  textDecoration: 'none',
                  transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                }}>
                  <div style={{
                    width: 52,
                    height: 52,
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--accent-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-hover)',
                  }}>
                    {iconMap[service.icon]}
                  </div>
                  <span style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: 'var(--foreground-muted)',
                    fontFamily: 'var(--font-display)',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.375rem' }}>
                  {service.name}
                </h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, flex: 1, marginBottom: '1.5rem' }}>
                  {service.shortDescription}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-hover)', fontWeight: 600, fontSize: '0.9rem' }}>
                  Learn More
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--muted)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Not sure which service you need?</h2>
          <p style={{ maxWidth: '480px', margin: '0 auto 2rem' }}>
            Get in touch and we&apos;ll help you find the right cleaning solution.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/booking" className="btn btn-primary">Book a Cleaning</Link>
            <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
