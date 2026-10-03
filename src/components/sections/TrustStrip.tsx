'use client';

import { Shield, CalendarClock, Home, MapPin, CheckCircle } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';
import { trustItems } from '@/data/content';

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={20} />,
  CalendarClock: <CalendarClock size={20} />,
  Home: <Home size={20} />,
  MapPin: <MapPin size={20} />,
  CheckCircle: <CheckCircle size={20} />,
};

export function TrustStrip() {
  return (
    <section
      style={{
        position: 'relative',
        zIndex: 5,
        background: '#141414',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: 'clamp(2rem, 3.5vw, 2.75rem) 0',
      }}
    >
      <div className="container">
        <StaggerContainer
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center',
          }}
        >
          {trustItems.map((item) => (
            <StaggerItem key={item.label}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.85rem',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    background: 'rgba(232, 185, 49, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    flexShrink: 0,
                  }}
                >
                  {iconMap[item.icon]}
                </div>
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.88)',
                    letterSpacing: '-0.01em',
                    fontFamily: 'var(--font-display)',
                    margin: 0,
                  }}
                >
                  {item.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
