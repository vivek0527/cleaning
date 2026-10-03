'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface CinematicPhotoBreakProps {
  imageSrc: string;
  alt: string;
  quote?: string;
  caption?: string;
}

export function CinematicPhotoBreak({
  imageSrc,
  alt,
  quote = 'Every surface restored to its cleanest, most luminous potential.',
  caption = 'Greater London Residential & Commercial Portfolios',
}: CinematicPhotoBreakProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: 'clamp(480px, 72vh, 760px)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Parallax Photographic Canvas */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-12%',
          y,
          scale,
        }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          quality={88}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </motion.div>

      {/* Atmospheric Overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 60% 30%, rgba(232, 185, 49, 0.2) 0%, transparent 65%),
            linear-gradient(180deg, rgba(14,14,14,0.6) 0%, rgba(14,14,14,0.2) 50%, rgba(14,14,14,0.85) 100%)
          `,
        }}
      />

      {/* Centered Editorial Glass Card */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'center',
          padding: '2rem 1.5rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: '680px',
            textAlign: 'center',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            borderRadius: 'var(--radius-xl)',
            background: 'rgba(18, 18, 18, 0.55)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.45)',
            color: '#FFFFFF',
          }}
        >
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              background: 'rgba(232, 185, 49, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent)',
              margin: '0 auto 1.5rem',
            }}
          >
            <Sparkles size={18} />
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2.35rem)',
              fontWeight: 800,
              lineHeight: 1.25,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
              color: '#FFFFFF',
            }}
          >
            &ldquo;{quote}&rdquo;
          </h3>

          <p
            style={{
              fontSize: '0.875rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.65)',
              fontWeight: 600,
              margin: 0,
            }}
          >
            {caption}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
