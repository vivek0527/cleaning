'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Key, CalendarCheck, Clock, Building2, Layers } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { services } from '@/data/services';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={24} />,
  Key: <Key size={24} />,
  CalendarCheck: <CalendarCheck size={24} />,
  Clock: <Clock size={24} />,
  Building2: <Building2 size={24} />,
  Layers: <Layers size={24} />,
};

// Colors for subtle background tints per service
const bgTints = [
  'rgba(232,185,49,0.04)',
  'rgba(139,173,139,0.06)',
  'rgba(232,185,49,0.03)',
  'rgba(232,185,49,0.05)',
  'rgba(139,173,139,0.04)',
  'rgba(232,185,49,0.04)',
];

export function ServiceGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section className="section">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">Our Services</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 style={{ marginBottom: '1rem' }}>
            What we do.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p style={{ maxWidth: '520px', marginBottom: '3.5rem' }}>
            Professional cleaning services designed for homes and businesses across London.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {/* Desktop: Interactive Gallery */}
          <div className="hide-mobile" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            minHeight: '480px',
          }}>
            {/* Left: Active service detail */}
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              background: bgTints[activeIndex],
              border: '1px solid var(--card-border)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div style={{ color: 'var(--accent-hover)', marginBottom: '1.5rem' }}>
                    {iconMap[activeService.icon]}
                  </div>

                  <p style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: 'var(--accent-hover)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                  }}>
                    {String(activeIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                  </p>

                  <h3 style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 700,
                    marginBottom: '1rem',
                  }}>
                    {activeService.name}
                  </h3>

                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: 1.7,
                    marginBottom: '2rem',
                    maxWidth: '440px',
                  }}>
                    {activeService.description}
                  </p>

                  <Link
                    href={`/services/${activeService.slug}`}
                    className="btn btn-dark btn-sm"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Service navigation list */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {services.map((service, i) => (
                <button
                  key={service.id}
                  onClick={() => setActiveIndex(i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    padding: '1.25rem 1.5rem',
                    background: i === activeIndex ? 'var(--muted)' : 'transparent',
                    border: 'none',
                    borderRadius: 'var(--radius)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left',
                    width: '100%',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  <span style={{
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: i === activeIndex ? 'var(--accent-hover)' : 'var(--foreground-muted)',
                    fontFamily: 'var(--font-display)',
                    minWidth: '28px',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span style={{
                    fontWeight: i === activeIndex ? 700 : 500,
                    fontSize: '1.0625rem',
                    color: i === activeIndex ? 'var(--foreground)' : 'var(--foreground-muted)',
                    flex: 1,
                  }}>
                    {service.name}
                  </span>

                  <motion.div
                    animate={{ x: i === activeIndex ? 0 : -8, opacity: i === activeIndex ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight size={18} style={{ color: 'var(--accent-hover)' }} />
                  </motion.div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical cards */}
          <div className="hide-desktop" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            {services.map((service, i) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.25rem',
                  background: 'var(--card)',
                  border: '1px solid var(--card-border)',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
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
                  {iconMap[service.icon]}
                </div>

                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--foreground)', marginBottom: '0.125rem' }}>
                    {service.name}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--foreground-muted)', lineHeight: 1.5 }}>
                    {service.shortDescription}
                  </p>
                </div>

                <ArrowRight size={18} style={{ color: 'var(--foreground-muted)', flexShrink: 0 }} />
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
