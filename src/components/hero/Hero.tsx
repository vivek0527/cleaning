'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sunriseProgress = useMotionValue(0);
  const bgBrightness = useTransform(sunriseProgress, [0, 1], [0.92, 1]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    // Sunrise animation on load
    const timeout = setTimeout(() => {
      sunriseProgress.set(1);
    }, 200);
    return () => clearTimeout(timeout);
  }, [sunriseProgress]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '2rem',
        paddingBottom: '4rem',
      }}
    >
      {/* Background gradient that transitions from darker to bright */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 120% 100% at 70% 110%, rgba(232,185,49,0.08) 0%, transparent 60%),
            linear-gradient(180deg, #F5F0E6 0%, #FDFBF7 40%, #FDFBF7 100%)
          `,
          filter: useTransform(bgBrightness, (v) => `brightness(${v})`),
        }}
      />

      {/* Sun Ray - follows cursor on desktop */}
      {!prefersReducedMotion && (
        <div
          className="hide-mobile"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(232,185,49,0.1) 0%, transparent 35%)`,
            transition: 'background 0.6s ease-out',
          }}
        />
      )}

      {/* Rising sunlight element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 80 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          right: '-5%',
          bottom: '-20%',
          width: '70vw',
          height: '70vw',
          maxWidth: '900px',
          maxHeight: '900px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,185,49,0.06) 0%, rgba(232,185,49,0.02) 40%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
          maxWidth: '760px',
        }}>
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="section-label" style={{ marginBottom: '1.5rem' }}>
                Professional Cleaning · London
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: '1.5rem' }}
            >
              Bring the{' '}
              <span style={{
                color: 'var(--accent-hover)',
                position: 'relative',
                display: 'inline-block',
              }}>
                Sunshine
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  viewBox="0 0 200 12"
                  style={{
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    width: '100%',
                    height: '12px',
                    overflow: 'visible',
                  }}
                >
                  <motion.path
                    d="M 2 8 Q 50 2, 100 6 T 198 5"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  />
                </motion.svg>
              </span>{' '}
              Home.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              style={{
                fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
                lineHeight: 1.7,
                maxWidth: '560px',
                marginBottom: '2.5rem',
              }}
            >
              Professional cleaning services for homes and businesses across London.
              Thoughtful cleaning, beautiful results and service you can rely on.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <Link href="/booking" className="btn btn-primary btn-lg">
                Book a Cleaning
                <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="btn btn-secondary btn-lg">
                View Our Services
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="hide-mobile">
          <motion.div
            initial={{ opacity: 0, y: 30, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              right: '8%',
              top: '28%',
              background: 'var(--card)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem 1.75rem',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--card-border)',
              maxWidth: '220px',
            }}
          >
            <Sparkles size={20} style={{ color: 'var(--accent)', marginBottom: '0.5rem' }} />
            <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--foreground)', marginBottom: '0.125rem' }}>Fresh spaces.</p>
            <p style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--foreground-muted)' }}>Happy homes.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              right: '15%',
              bottom: '18%',
              background: 'var(--primary)',
              color: 'var(--primary-foreground)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem 1.75rem',
              boxShadow: 'var(--shadow-lg)',
              maxWidth: '240px',
            }}
          >
            <MapPin size={16} style={{ color: 'var(--accent)', marginBottom: '0.5rem' }} />
            <p style={{ fontWeight: 700, fontSize: '0.9375rem' }}>Professional Cleaning</p>
            <p style={{ fontSize: '0.8125rem', opacity: 0.7 }}>London</p>
          </motion.div>
        </div>
      </div>

      {/* Subtle particles / light rays */}
      {!prefersReducedMotion && (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 4 + i,
                delay: 2 + i * 0.8,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              style={{
                position: 'absolute',
                right: `${10 + i * 12}%`,
                top: `${20 + i * 8}%`,
                width: 4,
                height: 4,
                borderRadius: '50%',
                background: 'var(--accent)',
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
