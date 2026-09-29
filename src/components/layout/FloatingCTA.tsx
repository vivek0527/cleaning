'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { companyInfo } from '@/data/content';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Desktop Floating Button */}
          <motion.div
            className="hide-mobile"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              zIndex: 900,
            }}
          >
            <Link
              href="/booking"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.75rem',
                background: 'var(--primary)',
                color: 'var(--primary-foreground)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
              }}
            >
              Book a Cleaning
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Mobile Bottom Bar */}
          <motion.div
            className="hide-desktop"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 900,
              background: 'rgba(253,251,247,0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderTop: '1px solid var(--border-light)',
              padding: '0.75rem 1rem',
              paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))',
              display: 'flex',
              gap: '0.75rem',
            }}
          >
            <a
              href={companyInfo.phoneHref}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.75rem',
                border: '1.5px solid var(--border)',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                fontSize: '0.875rem',
                fontFamily: 'var(--font-body)',
                color: 'var(--foreground)',
                background: 'transparent',
                textDecoration: 'none',
              }}
            >
              <Phone size={16} />
              Call
            </a>
            <Link
              href="/booking"
              style={{
                flex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.75rem',
                background: 'var(--accent)',
                color: 'var(--accent-foreground)',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                fontSize: '0.875rem',
                fontFamily: 'var(--font-body)',
                boxShadow: 'var(--shadow-accent)',
                textDecoration: 'none',
              }}
            >
              Book a Cleaning
            </Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
