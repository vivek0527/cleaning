import type { Metadata } from 'next';
import { Phone, MapPin, Clock } from 'lucide-react';
import { companyInfo } from '@/data/content';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Sunshine Cleaning Services Limited. Get in touch for professional cleaning services in London. Call 07542 834 640 or use our contact form.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(180deg, var(--background-warm) 0%, var(--background) 100%)',
        padding: 'clamp(4rem, 8vw, 7rem) 0 clamp(3rem, 6vw, 5rem)',
      }}>
        <div className="container">
          <span className="section-label">Contact</span>
          <h1 style={{ marginBottom: '1.5rem' }}>Get in touch.</h1>
          <p style={{ fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)', maxWidth: '520px' }}>
            We&apos;d love to hear from you. Reach out by phone or use the form below.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
          }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ marginBottom: '2rem' }}>{companyInfo.name}</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 'var(--radius)',
                    background: 'var(--accent-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-hover)',
                    flexShrink: 0,
                  }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, marginBottom: '0.25rem', color: 'var(--foreground)' }}>Phone</p>
                    <a href={companyInfo.phoneHref} style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--foreground)' }}>
                      {companyInfo.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 'var(--radius)',
                    background: 'var(--accent-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-hover)',
                    flexShrink: 0,
                  }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, marginBottom: '0.25rem', color: 'var(--foreground)' }}>Address</p>
                    <p style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                      {companyInfo.address.line1}<br />
                      {companyInfo.address.city}<br />
                      {companyInfo.address.region}<br />
                      {companyInfo.address.postcode}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 'var(--radius)',
                    background: 'var(--accent-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-hover)',
                    flexShrink: 0,
                  }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, marginBottom: '0.25rem', color: 'var(--foreground)' }}>Founder</p>
                    <p style={{ fontSize: '0.9375rem' }}>{companyInfo.founder}</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div style={{
                width: '100%',
                height: 240,
                borderRadius: 'var(--radius-lg)',
                background: 'var(--muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--card-border)',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <MapPin size={28} style={{ color: 'var(--foreground-muted)', marginBottom: '0.5rem' }} />
                  <p style={{ fontSize: '0.875rem', color: 'var(--foreground-muted)' }}>
                    Map integration available
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Send us a message.</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
