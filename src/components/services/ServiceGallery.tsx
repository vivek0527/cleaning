'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { photography } from '@/data/photography';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function ServiceGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  const servicePhotos: Record<string, string> = photography.services;
  const currentPhoto = servicePhotos[activeService.slug] || photography.hero;

  return (
    <section
      id="services-stage"
      style={{
        position: 'relative',
        background: '#0E0E0E',
        color: '#FFFFFF',
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        overflow: 'hidden',
      }}
    >
      {/* Subtle ambient light leak in background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232, 185, 49, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.95rem',
              borderRadius: '9999px',
              background: 'rgba(232, 185, 49, 0.12)',
              border: '1px solid rgba(232, 185, 49, 0.3)',
              color: 'var(--accent)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              fontFamily: 'var(--font-display)',
            }}
          >
            <span>02 / SERVICES PORTFOLIO</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: '1.25rem',
              color: '#FFFFFF',
            }}
          >
            Curated Services.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FFE885 0%, #E8B931 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Impeccable Spaces.
            </span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              color: 'rgba(255, 255, 255, 0.65)',
              lineHeight: 1.6,
              maxWidth: '560px',
            }}
          >
            Select a service to explore its specialized workflow, equipment, and tailored London standard.
          </p>
        </div>

        {/* Cinematic Interactive Showcase (Desktop) */}
        <div
          className="hide-mobile"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '2.5rem',
            alignItems: 'stretch',
            minHeight: '620px',
          }}
        >
          {/* Left: Large Cinematic Image Stage with Crossfade & Dynamic Details */}
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              minHeight: '620px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 24px 70px rgba(0, 0, 0, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            {/* Background Photographic Layer with AnimatePresence Crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'absolute', inset: 0, zIndex: 1 }}
              >
                <Image
                  src={currentPhoto}
                  alt={activeService.name}
                  fill
                  quality={88}
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  style={{ objectFit: 'cover' }}
                />
                {/* Gradient vignette */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `
                      linear-gradient(180deg, rgba(14,14,14,0.3) 0%, rgba(14,14,14,0.65) 50%, rgba(14,14,14,0.95) 100%),
                      radial-gradient(ellipse at 80% 20%, rgba(232,185,49,0.18) 0%, transparent 60%)
                    `,
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Stage Header Info */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  background: 'rgba(18, 18, 18, 0.65)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '0.875rem',
                    color: 'var(--accent)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {String(activeIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                </span>
                <span style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.2)' }} />
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'rgba(255,255,255,0.85)',
                  }}
                >
                  London Specialized Care
                </span>
              </div>
            </div>

            {/* Stage Body Content */}
            <div style={{ position: 'relative', zIndex: 2, maxWidth: '580px' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3
                    style={{
                      fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                      fontWeight: 800,
                      fontFamily: 'var(--font-display)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                      marginBottom: '1rem',
                      color: '#FFFFFF',
                    }}
                  >
                    {activeService.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '1.0625rem',
                      lineHeight: 1.65,
                      color: 'rgba(255, 255, 255, 0.82)',
                      marginBottom: '1.75rem',
                    }}
                  >
                    {activeService.description}
                  </p>

                  {/* Highlights Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '0.75rem',
                      marginBottom: '2.25rem',
                    }}
                  >
                    {activeService.features.slice(0, 4).map((f, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.875rem',
                          color: 'rgba(255, 255, 255, 0.9)',
                        }}
                      >
                        <div
                          style={{
                            width: 18,
                            height: 18,
                            borderRadius: '50%',
                            background: 'rgba(232, 185, 49, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Check size={11} color="var(--accent)" strokeWidth={3} />
                        </div>
                        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  <MagneticButton
                    href={`/services/${activeService.slug}`}
                    variant="primary"
                    size="md"
                    dataCursor="VIEW"
                  >
                    Explore {activeService.name}
                  </MagneticButton>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Service Selectors Navigation */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '0.75rem',
            }}
          >
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.35rem 1.75rem',
                    borderRadius: 'var(--radius-lg)',
                    background: isActive ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(12px)',
                    border: isActive
                      ? '1px solid rgba(232, 185, 49, 0.5)'
                      : '1px solid rgba(255, 255, 255, 0.06)',
                    cursor: 'pointer',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    textAlign: 'left',
                    width: '100%',
                    transform: isActive ? 'translateX(8px)' : 'translateX(0)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                        fontSize: '0.875rem',
                        color: isActive ? 'var(--accent)' : 'rgba(255, 255, 255, 0.35)',
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          fontSize: '1.125rem',
                          color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.75)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {service.name}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: '0.8125rem',
                          color: 'rgba(255, 255, 255, 0.45)',
                          marginTop: '0.15rem',
                        }}
                      >
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    animate={{
                      x: isActive ? 0 : -8,
                      opacity: isActive ? 1 : 0.2,
                      scale: isActive ? 1.1 : 0.9,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: isActive ? 'var(--accent)' : 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isActive ? '#1A1A1A' : 'rgba(255, 255, 255, 0.5)',
                      flexShrink: 0,
                    }}
                  >
                    <ArrowRight size={15} strokeWidth={2.5} />
                  </motion.div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile: Interactive Swipeable / Stacked Experience with Photographic Cards */}
        <div
          className="hide-desktop"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {services.map((service, index) => {
            const photo = servicePhotos[service.slug] || photography.hero;
            return (
              <div
                key={service.id}
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  minHeight: '340px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.75rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Image
                  src={photo}
                  alt={service.name}
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(14,14,14,0.1) 0%, rgba(14,14,14,0.85) 100%)',
                  }}
                />
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: 'var(--accent)',
                      letterSpacing: '0.1em',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {service.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      marginBottom: '1rem',
                      lineHeight: 1.5,
                    }}
                  >
                    {service.shortDescription}
                  </p>
                  <MagneticButton
                    href={`/services/${service.slug}`}
                    variant="glass"
                    size="sm"
                  >
                    View Details
                  </MagneticButton>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
