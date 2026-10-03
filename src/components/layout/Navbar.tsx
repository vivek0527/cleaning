'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Sun } from 'lucide-react';
import { mainNavItems, companyInfo } from '@/data/content';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  // Is on home page (which has full-screen dark hero)
  const isHome = pathname === '/';

  return (
    <>
      <nav
        className="navbar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: isScrolled ? '68px' : '88px',
          background: isScrolled
            ? 'rgba(14, 14, 14, 0.82)'
            : isHome
            ? 'transparent'
            : 'rgba(253, 251, 247, 0.92)',
          backdropFilter: isScrolled || !isHome ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled || !isHome ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: isScrolled
            ? '1px solid rgba(255, 255, 255, 0.08)'
            : !isHome
            ? '1px solid var(--border-light)'
            : '1px solid transparent',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              textDecoration: 'none',
            }}
            aria-label="Sunshine Cleaning Services - Home"
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFE885 0%, #E8B931 50%, #D4A520 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 14px rgba(232, 185, 49, 0.45)',
              }}
            >
              <Sun size={20} color="#1A1A1A" strokeWidth={2.6} />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: isScrolled ? '1.15rem' : '1.25rem',
                letterSpacing: '-0.02em',
                color: isScrolled || isHome ? '#FFFFFF' : 'var(--foreground)',
                transition: 'color 0.3s ease, font-size 0.3s ease',
              }}
            >
              SUNSHINE
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <div
            className="hide-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.25rem',
            }}
          >
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              const linkColor =
                isScrolled || isHome
                  ? isActive
                    ? '#FFFFFF'
                    : 'rgba(255, 255, 255, 0.72)'
                  : isActive
                  ? 'var(--foreground)'
                  : 'var(--foreground-muted)';

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-display)',
                    color: linkColor,
                    transition: 'color 0.2s ease',
                    position: 'relative',
                    textDecoration: 'none',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      style={{
                        position: 'absolute',
                        bottom: -4,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: 'var(--accent)',
                        borderRadius: 2,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA & Phone */}
          <div
            className="hide-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
            }}
          >
            <a
              href={companyInfo.phoneHref}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: isScrolled || isHome ? 'rgba(255, 255, 255, 0.8)' : 'var(--foreground-muted)',
                textDecoration: 'none',
              }}
            >
              <Phone size={14} style={{ color: 'var(--accent)' }} />
              <span>{companyInfo.phoneFormatted}</span>
            </a>

            <MagneticButton href="/booking" variant="primary" size="sm" dataCursor="BOOK">
              Book a Cleaning
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="hide-desktop"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              color: isScrolled || isHome ? '#FFFFFF' : 'var(--foreground)',
              zIndex: 1002,
            }}
          >
            {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(12, 12, 12, 0.98)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '2rem',
            }}
            role="dialog"
            aria-label="Mobile navigation"
          >
            {mainNavItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.05, duration: 0.35 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  style={{
                    display: 'block',
                    fontSize: '2rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                    color: pathname === item.href ? 'var(--accent)' : '#FFFFFF',
                    padding: '0.6rem 1.5rem',
                    textAlign: 'center',
                    letterSpacing: '-0.02em',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.35 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginTop: '2rem',
                alignItems: 'center',
                width: '100%',
                maxWidth: '300px',
              }}
            >
              <Link
                href="/booking"
                className="btn btn-primary btn-lg"
                style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
                onClick={() => setIsMobileOpen(false)}
              >
                Book a Cleaning
              </Link>
              <a
                href={companyInfo.phoneHref}
                className="btn btn-secondary"
                style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
                onClick={() => setIsMobileOpen(false)}
              >
                <Phone size={16} />
                {companyInfo.phoneFormatted}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
