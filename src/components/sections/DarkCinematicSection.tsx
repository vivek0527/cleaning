'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Sparkles } from 'lucide-react';
import { photography } from '@/data/photography';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function DarkCinematicSection() {
  const metrics = [
    { value: '500+', label: 'London Properties Transformed' },
    { value: '99.8%', label: 'First-Time Inspection Pass Rate' },
    { value: '100%', label: 'Dedicated Eco-Conscious Standards' },
  ];

  return (
    <section
      style={{
        position: 'relative',
        background: '#080808',
        color: '#FFFFFF',
        padding: 'clamp(6rem, 12vw, 11rem) 0',
        overflow: 'hidden',
      }}
    >
      {/* Background Architectural Atmosphere */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.28, zIndex: 1 }}>
        <Image
          src={photography.darkStatement}
          alt="Atmospheric London residence"
          fill
          quality={85}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(circle at 70% 30%, rgba(232, 185, 49, 0.15) 0%, transparent 60%),
              linear-gradient(180deg, #080808 0%, rgba(8,8,8,0.7) 40%, #080808 100%)
            `,
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'center',
          }}
        >
          {/* Left: Giant Triad Typography */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(232, 185, 49, 0.12)',
                border: '1px solid rgba(232, 185, 49, 0.3)',
                color: 'var(--accent)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '1.75rem',
                fontFamily: 'var(--font-display)',
              }}
            >
              <Award size={14} />
              <span>The London Standard</span>
            </motion.div>

            <div
              style={{
                fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
                fontWeight: 900,
                fontFamily: 'var(--font-display)',
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.1em',
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ color: '#FFFFFF' }}
              >
                CLEAN.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: 'linear-gradient(135deg, #FFE885 0%, #E8B931 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 35px rgba(232,185,49,0.3)',
                }}
              >
                CARE.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ color: '#FFFFFF' }}
              >
                CONFIDENCE.
              </motion.span>
            </div>
          </div>

          {/* Right: Narrative & Proof Pillars */}
          <div style={{ maxWidth: '540px' }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.85)',
                marginBottom: '2.5rem',
              }}
            >
              Founded by Pankaj Yadav on Speranza Street, Sunshine Cleaning Services Limited was created to redefine professional hygiene in London. We pair hotel-grade precision with the warmth and uplifting clarity of pure sunlight.
            </motion.p>

            {/* Metrics Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '1.5rem',
                marginBottom: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              {metrics.map((m, i) => (
                <div key={i}>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                      color: 'var(--accent)',
                      margin: 0,
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {m.value}
                  </p>
                  <p
                    style={{
                      fontSize: '0.8125rem',
                      color: 'rgba(255, 255, 255, 0.65)',
                      marginTop: '0.4rem',
                      lineHeight: 1.4,
                    }}
                  >
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <MagneticButton href="/booking" variant="primary" size="lg" dataCursor="BOOK">
                Book a Cleaning
              </MagneticButton>
              <MagneticButton href="/about" variant="glass" size="lg">
                About Our Team
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
