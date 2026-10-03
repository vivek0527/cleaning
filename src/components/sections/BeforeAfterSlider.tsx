'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, MoveHorizontal } from 'lucide-react';
import { photography } from '@/data/photography';

export function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => updatePosition(e.clientX);
    const handleTouchMove = (e: TouchEvent) => updatePosition(e.touches[0].clientX);
    const handleEnd = () => setIsDragging(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, updatePosition]);

  return (
    <section
      style={{
        position: 'relative',
        background: '#121212',
        color: '#FFFFFF',
        padding: 'clamp(5rem, 8vw, 8rem) 0',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto clamp(2.5rem, 4vw, 4rem)' }}>
          <div
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
              marginBottom: '1rem',
              fontFamily: 'var(--font-display)',
            }}
          >
            <Sparkles size={13} />
            <span>Visual Transformation</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
              color: '#FFFFFF',
              marginBottom: '1.25rem',
            }}
          >
            See The Sunshine{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FFE885 0%, #E8B931 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Difference.
            </span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.6,
            }}
          >
            Slide across to experience the shift from accumulated city wear to a radiant, hygienic London sanctuary.
          </p>
        </div>

        {/* 80-90vh Immersive Interactive Comparison Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          role="slider"
          aria-label="Before and after professional cleaning transformation"
          aria-valuenow={Math.round(sliderPos)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') setSliderPos((p) => Math.max(0, p - 3));
            if (e.key === 'ArrowRight') setSliderPos((p) => Math.min(100, p + 3));
          }}
          data-cursor="DRAG"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1200px',
            height: 'clamp(460px, 78vh, 760px)',
            margin: '0 auto',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            cursor: 'ew-resize',
            userSelect: 'none',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 30px 90px rgba(0, 0, 0, 0.8), 0 0 40px rgba(232, 185, 49, 0.08)',
          }}
        >
          {/* "BEFORE" Image Layer (Full view behind) */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <Image
              src={photography.beforeAfter.before}
              alt="Before professional cleaning"
              fill
              quality={88}
              sizes="(min-width: 1200px) 1200px, 100vw"
              style={{
                objectFit: 'cover',
                filter: 'brightness(0.72) contrast(0.92) saturate(0.8)',
              }}
            />
            {/* Subtle before overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(20, 20, 20, 0.25)',
              }}
            />
          </div>

          {/* "AFTER" Image Layer (Clipped to slider position) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              transition: isDragging ? 'none' : 'clip-path 0.1s ease',
            }}
          >
            <Image
              src={photography.beforeAfter.after}
              alt="After Sunshine Cleaning professional service"
              fill
              quality={90}
              sizes="(min-width: 1200px) 1200px, 100vw"
              style={{
                objectFit: 'cover',
                filter: 'brightness(1.04) contrast(1.05) saturate(1.06)',
              }}
            />
            {/* Sunshine warm ambient glow overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  radial-gradient(ellipse at 80% 20%, rgba(232, 185, 49, 0.15) 0%, transparent 60%),
                  linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)
                `,
              }}
            />
          </div>

          {/* Floating Frosted Pill Badges */}
          <div
            style={{
              position: 'absolute',
              top: '2rem',
              left: '2rem',
              zIndex: 10,
              padding: '0.45rem 1.15rem',
              borderRadius: '9999px',
              background: 'rgba(10, 10, 10, 0.75)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.75)',
              fontFamily: 'var(--font-display)',
            }}
          >
            BEFORE
          </div>

          <div
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              zIndex: 10,
              padding: '0.45rem 1.15rem',
              borderRadius: '9999px',
              background: 'rgba(232, 185, 49, 0.95)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#1A1A1A',
              fontFamily: 'var(--font-display)',
              boxShadow: '0 4px 20px rgba(232, 185, 49, 0.4)',
            }}
          >
            AFTER SUNSHINE
          </div>

          {/* Glowing Draggable Vertical Divider Bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${sliderPos}%`,
              transform: 'translateX(-50%)',
              width: 3,
              background: 'linear-gradient(180deg, rgba(232,185,49,0.3) 0%, rgba(255,255,255,1) 50%, rgba(232,185,49,0.3) 100%)',
              boxShadow: '0 0 25px rgba(232, 185, 49, 0.8), 0 0 10px rgba(255,255,255,0.9)',
              zIndex: 20,
              pointerEvents: 'none',
            }}
          >
            {/* Glowing Draggable Center Handle */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 54,
                height: 54,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FAF0D0 100%)',
                border: '3px solid var(--accent)',
                boxShadow: '0 4px 25px rgba(0, 0, 0, 0.4), 0 0 24px rgba(232, 185, 49, 0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1A1A1A',
              }}
            >
              <MoveHorizontal size={22} strokeWidth={2.5} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
