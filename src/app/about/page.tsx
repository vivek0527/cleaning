import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, User } from 'lucide-react';
import { companyInfo } from '@/data/content';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Sunshine Cleaning Services Limited. Professional cleaning services for homes and businesses in London, founded by Pankaj Yadav.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(180deg, var(--background-warm) 0%, var(--background) 100%)',
        padding: 'clamp(4rem, 8vw, 7rem) 0 clamp(3rem, 6vw, 5rem)',
      }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="section-label">About Us</span>
          <h1 style={{ marginBottom: '1.5rem' }}>Cleaning with care.</h1>
          <p style={{ fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)', maxWidth: '560px' }}>
            {companyInfo.name} provides professional cleaning services for homes and businesses across London. We believe in thoughtful cleaning — where every space is treated with attention and care.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
          }}>
            <div>
              <h2 style={{ marginBottom: '1.25rem' }}>Our approach.</h2>
              <p style={{ marginBottom: '1rem' }}>
                At {companyInfo.shortName}, we focus on delivering a cleaning service that goes beyond the surface. Every property is different, and we take the time to understand what each space needs.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Whether it&apos;s a residential deep clean, an end-of-tenancy handover, or regular office maintenance, we bring the same level of professionalism and attention to detail.
              </p>
              <p>
                Based in London, we serve homes and businesses across the city with flexible scheduling and a commitment to quality.
              </p>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}>
              {[
                { title: 'Professional Service', desc: 'Trained cleaning professionals who take pride in their work.' },
                { title: 'Attention to Detail', desc: 'The small things make the biggest difference to how a space feels.' },
                { title: 'Reliability', desc: 'Consistent, on-time service you can count on.' },
                { title: 'Flexibility', desc: 'Scheduling and services designed around your needs.' },
              ].map((item) => (
                <div key={item.title} style={{
                  padding: '1.5rem',
                  background: 'var(--muted)',
                  borderRadius: 'var(--radius-md)',
                }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.375rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9375rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section" style={{ background: 'var(--background-warm)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="section-label">Meet the Founder</span>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
          }}>
            <div style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              background: 'var(--muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <User size={48} style={{ color: 'var(--foreground-muted)', opacity: 0.4 }} />
            </div>
            <div>
              <h2 style={{ marginBottom: '0.375rem' }}>{companyInfo.founder}</h2>
              <p style={{ color: 'var(--foreground-muted)', marginBottom: '1rem', fontSize: '1rem' }}>
                Founder, {companyInfo.name}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href={companyInfo.phoneHref} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9375rem', color: 'var(--foreground-muted)' }}>
                  <Phone size={14} /> {companyInfo.phoneFormatted}
                </a>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9375rem', color: 'var(--foreground-muted)' }}>
                  <MapPin size={14} style={{ marginTop: 3, flexShrink: 0 }} />
                  {companyInfo.address.full}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Ready to experience the difference?</h2>
          <p style={{ maxWidth: '480px', margin: '0 auto 2rem' }}>
            Get in touch or book your first cleaning today.
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
