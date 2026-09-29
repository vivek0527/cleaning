'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Sun } from 'lucide-react';
import { mainNavItems, companyInfo } from '@/data/content';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

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
          height: isScrolled ? 'var(--navbar-height-scrolled)' : 'var(--navbar-height)',
          background: isScrolled ? 'rgba(253,251,247,0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-light)' : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }} aria-label="Sunshine Cleaning Services - Home">
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 10px rgba(232,185,49,0.3)',
            }}>
              <Sun size={20} color="#1A1A1A" strokeWidth={2.5} />
            </div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: isScrolled ? '1.125rem' : '1.25rem',
              letterSpacing: '-0.02em',
              color: 'var(--foreground)',
              transition: 'font-size 0.3s ease',
            }}>
              SUNSHINE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: pathname === item.href ? 'var(--foreground)' : 'var(--foreground-muted)',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                }}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    style={{
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: 'var(--accent)',
                      borderRadius: 1,
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link href="/booking" className="btn btn-primary btn-sm">
              Book a Cleaning
            </Link>
          </div>

          {/* Mobile Menu Button */}
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
              color: 'var(--foreground)',
              zIndex: 1002,
            }}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(253,251,247,0.98)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem',
              paddingBottom: '4rem',
            }}
            role="dialog"
            aria-label="Mobile navigation"
          >
            {mainNavItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  style={{
                    display: 'block',
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)',
                    color: pathname === item.href ? 'var(--accent-hover)' : 'var(--foreground)',
                    padding: '0.75rem 2rem',
                    textAlign: 'center',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem', alignItems: 'center' }}
            >
              <Link href="/booking" className="btn btn-primary btn-lg" onClick={() => setIsMobileOpen(false)}>
                Book a Cleaning
              </Link>
              <a href={companyInfo.phoneHref} className="btn btn-secondary" onClick={() => setIsMobileOpen(false)}>
                <Phone size={16} />
                {companyInfo.phoneFormatted}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div style={{ height: 'var(--navbar-height)' }} />
    </>
  );
}
