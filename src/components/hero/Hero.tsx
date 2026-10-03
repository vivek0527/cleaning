'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, MapPin, ChevronDown } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { photography } from '@/data/photography';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '24%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.65, 0.92]);

  const words = ['BRING', 'THE', 'SUNSHINE', 'HOME.'];

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100svh',
        height: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        color: '#FFFFFF',
        padding: '0 1.5rem',
      }}
    >
      {/* 1. Full-screen Photographic Background with initial load scale & parallax */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          y: bgY,
          scale: bgScale,
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', width: '100%', height: '100%' }}
        >
          <Image
            src={photography.hero}
            alt="Pristine, sun-drenched London luxury penthouse"
            fill
            priority
            quality={90}
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 40%',
            }}
          />
        </motion.div>
      </motion.div>

      {/* 2. Dark Vignette Cinematic Gradient */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: `
            radial-gradient(ellipse 90% 80% at 50% 40%, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.85) 100%),
            linear-gradient(180deg, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.3) 40%, rgba(10,10,10,0.92) 100%)
          `,
          opacity: overlayOpacity,
        }}
      />

      {/* 3. Subtle Warm Sunlight Glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '65vw',
          height: '65vw',
          maxWidth: '900px',
          maxHeight: '900px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,185,49,0.24) 0%, rgba(232,185,49,0.06) 50%, transparent 75%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      />

      {/* 4. Hero Content Layer */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 4,
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          y: textY,
          opacity: textOpacity,
          paddingTop: '3rem',
        }}
      >
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '1.75rem' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.45rem 1.15rem',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            }}
          >
            <Sparkles size={14} style={{ color: 'var(--accent)' }} />
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.95)',
                fontFamily: 'var(--font-display)',
              }}
            >
              London's Premier Cleaning Specialists
            </span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)' }} />
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>Pankaj Yadav</span>
          </div>
        </motion.div>

        {/* 5. Editorial Massive Headline with Line-by-Line Clip-Path Reveal */}
        <h1
          style={{
            margin: 0,
            padding: 0,
            fontSize: 'clamp(3.5rem, 8.5vw, 9.25rem)',
            fontWeight: 800,
            fontFamily: 'var(--font-display)',
            lineHeight: 0.94,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.15em',
            marginBottom: '2rem',
          }}
        >
          {words.map((word, index) => {
            const isSunshine = word === 'SUNSHINE';
            return (
              <div
                key={word}
                style={{
                  overflow: 'hidden',
                  padding: '0.05em 0.2em',
                }}
              >
                <motion.span
                  initial={{ y: '110%', opacity: 0, rotateX: 35 }}
                  animate={{ y: '0%', opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 1.1,
                    delay: 0.35 + index * 0.14,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    display: 'inline-block',
                    background: isSunshine
                      ? 'linear-gradient(135deg, #FFE885 0%, #E8B931 50%, #D4A520 100%)'
                      : 'linear-gradient(180deg, #FFFFFF 30%, rgba(255,255,255,0.78) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: isSunshine
                      ? '0 0 45px rgba(232, 185, 49, 0.45)'
                      : '0 4px 30px rgba(0,0,0,0.5)',
                    position: 'relative',
                  }}
                >
                  {word}
                </motion.span>
              </div>
            );
          })}
        </h1>

        {/* Supporting Editorial Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(1.0625rem, 1.8vw, 1.35rem)',
            lineHeight: 1.6,
            maxWidth: '620px',
            color: 'rgba(255, 255, 255, 0.86)',
            marginBottom: '2.5rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            fontWeight: 400,
          }}
        >
          Meticulous residential, tenancy, and commercial care across Greater London.
          Transforming living spaces with sunlight clarity, trusted craftsmanship, and unwavering detail.
        </motion.p>

        {/* Magnetic CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            gap: '1.25rem',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <MagneticButton href="/booking" variant="primary" size="lg" dataCursor="BOOK">
            Book a Cleaning
          </MagneticButton>

          <MagneticButton href="/services" variant="glass" size="lg" dataCursor="VIEW">
            Explore Services
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Floating Ambient Info Pill (Desktop Only) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="hide-mobile"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '3rem',
          zIndex: 4,
          display: 'flex',
          alignItems: 'center',
          gap: '0.875rem',
          padding: '0.625rem 1.25rem',
          borderRadius: '9999px',
          background: 'rgba(18, 18, 18, 0.45)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '0.8125rem',
        }}
      >
        <MapPin size={15} style={{ color: 'var(--accent)' }} />
        <span>1 A Speranza Street, London SE18 1NX</span>
      </motion.div>

      {/* 6. Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          zIndex: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.35rem',
          cursor: 'pointer',
        }}
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }}
      >
        <span
          style={{
            fontSize: '0.6875rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.65)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
          }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} color="rgba(255, 255, 255, 0.75)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
