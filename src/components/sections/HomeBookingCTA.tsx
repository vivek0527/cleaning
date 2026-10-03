'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Phone } from 'lucide-react';
import { photography } from '@/data/photography';
import { companyInfo } from '@/data/content';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function HomeBookingCTA() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'clamp(520px, 68vh, 680px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0F0F0F',
        color: '#FFFFFF',
        padding: 'clamp(5rem, 8vw, 7.5rem) 1.5rem',
      }}
    >
      {/* Background Photography */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.38, zIndex: 1 }}>
        <Image
          src={photography.breaks.sereneBedroom}
          alt="Serene, immaculate London bedroom"
          fill
          quality={88}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(circle at 50% 40%, rgba(232, 185, 49, 0.22) 0%, transparent 65%),
              linear-gradient(180deg, rgba(15,15,15,0.7) 0%, rgba(15,15,15,0.92) 100%)
            `,
          }}
        />
      </div>

      {/* Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '820px',
          margin: '0 auto',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1.15rem',
            borderRadius: '9999px',
            background: 'rgba(232, 185, 49, 0.15)',
            border: '1px solid rgba(232, 185, 49, 0.35)',
            color: 'var(--accent)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-display)',
          }}
        >
          <Sparkles size={13} />
          <span>Transform Your Space</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(2.75rem, 6vw, 5rem)',
            fontWeight: 900,
            fontFamily: 'var(--font-display)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: '#FFFFFF',
            marginBottom: '1.25rem',
          }}
        >
          Ready to Bring the{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #FFE885 0%, #E8B931 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Sunshine Home?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
            lineHeight: 1.65,
            color: 'rgba(255, 255, 255, 0.78)',
            maxWidth: '560px',
            margin: '0 auto 2.75rem',
          }}
        >
          Book your personalized cleaning session in minutes or speak directly with Pankaj Yadav and our London team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: 'flex',
            gap: '1.25rem',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <MagneticButton href="/booking" variant="primary" size="lg" dataCursor="BOOK">
            Book a Cleaning Now
          </MagneticButton>

          <MagneticButton href={companyInfo.phoneHref} variant="glass" size="lg">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={16} />
              Call {companyInfo.phoneFormatted}
            </span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
