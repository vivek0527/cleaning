'use client';

import { Wind, Search, Heart } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';
import { sunshineDifference } from '@/data/content';

const iconMap: Record<string, React.ReactNode> = {
  Wind: <Wind size={28} />,
  Search: <Search size={28} />,
  Heart: <Heart size={28} />,
};

export function SunshineDifference() {
  return (
    <section className="section" style={{ background: 'var(--background-warm)' }}>
      <div className="container">
        <ScrollReveal>
          <span className="section-label">The Sunshine Difference</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 style={{ marginBottom: '0.5rem' }}>
            More than clean.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--foreground-muted)' }}>
            A space that feels better.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p style={{ maxWidth: '560px', marginBottom: '3.5rem' }}>
            Cleaning isn't just about removing dirt. It's about creating a space that feels
            fresh, comfortable, welcoming, organised and ready for the day.
          </p>
        </ScrollReveal>

        <StaggerContainer
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
          staggerDelay={0.15}
        >
          {sunshineDifference.map((item) => (
            <StaggerItem key={item.title}>
              <div style={{
                background: 'var(--card)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(2rem, 4vw, 3rem)',
                border: '1px solid var(--card-border)',
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                height: '100%',
              }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--accent-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-hover)',
                  marginBottom: '1.5rem',
                }}>
                  {iconMap[item.icon]}
                </div>

                <h3 style={{ marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '1rem' }}>{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
