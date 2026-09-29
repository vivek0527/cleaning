'use client';

import { Shield, CalendarClock, Home, MapPin, CheckCircle } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';
import { trustItems } from '@/data/content';

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={22} />,
  CalendarClock: <CalendarClock size={22} />,
  Home: <Home size={22} />,
  MapPin: <MapPin size={22} />,
  CheckCircle: <CheckCircle size={22} />,
};

export function TrustStrip() {
  return (
    <section style={{
      background: 'var(--primary)',
      color: 'var(--primary-foreground)',
      padding: 'clamp(2.5rem, 5vw, 3.5rem) 0',
    }}>
      <div className="container">
        <StaggerContainer
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
            textAlign: 'center',
          }}
        >
          {trustItems.map((item) => (
            <StaggerItem key={item.label}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
              }}>
                <div style={{ color: 'var(--accent)' }}>
                  {iconMap[item.icon]}
                </div>
                <p style={{
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: 'rgba(253,251,247,0.9)',
                  letterSpacing: '0.01em',
                }}>
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
