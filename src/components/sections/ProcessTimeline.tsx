'use client';

import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';
import { howItWorksSteps } from '@/data/content';

export function ProcessTimeline() {
  return (
    <section className="section" style={{ background: 'var(--muted)' }}>
      <div className="container">
        <ScrollReveal>
          <span className="section-label">How It Works</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 style={{ marginBottom: '1rem' }}>
            Simple steps to a cleaner space.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p style={{ maxWidth: '480px', marginBottom: '4rem' }}>
            From booking to beautifully clean — here&apos;s how it works.
          </p>
        </ScrollReveal>

        {/* Desktop: Horizontal timeline */}
        <StaggerContainer
          className="hide-mobile"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
            position: 'relative',
          }}
          staggerDelay={0.15}
        >
          {/* Connecting line */}
          <div style={{
            position: 'absolute',
            top: 32,
            left: '12.5%',
            right: '12.5%',
            height: 2,
            background: 'var(--border)',
            zIndex: 0,
          }} />

          {howItWorksSteps.map((step) => (
            <StaggerItem key={step.number} style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <div style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'var(--card)',
                border: '2px solid var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
                fontWeight: 800,
                fontSize: '1.125rem',
                color: 'var(--accent-hover)',
                fontFamily: 'var(--font-display)',
              }}>
                {step.number}
              </div>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.9375rem', maxWidth: '240px', margin: '0 auto' }}>
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mobile: Vertical timeline */}
        <StaggerContainer
          className="hide-desktop"
          style={{ display: 'flex', flexDirection: 'column', gap: '0', position: 'relative', paddingLeft: '3rem' }}
          staggerDelay={0.12}
        >
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            top: '16px',
            bottom: '16px',
            left: '14px',
            width: 2,
            background: 'var(--border)',
          }} />

          {howItWorksSteps.map((step) => (
            <StaggerItem key={step.number} style={{ position: 'relative', paddingBottom: '2.5rem' }}>
              <div style={{
                position: 'absolute',
                left: '-3rem',
                top: 0,
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'var(--card)',
                border: '2px solid var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '0.75rem',
                color: 'var(--accent-hover)',
                fontFamily: 'var(--font-display)',
                zIndex: 1,
              }}>
                {step.number}
              </div>
              <h3 style={{ fontSize: '1.0625rem', marginBottom: '0.375rem' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.9375rem' }}>
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
