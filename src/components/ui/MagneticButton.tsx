'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface MagneticButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  className?: string;
  style?: React.CSSProperties;
  dataCursor?: string;
}

export function MagneticButton({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  showArrow = true,
  className = '',
  style = {},
  dataCursor,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useSpring(0, { damping: 15, stiffness: 150 });
  const y = useSpring(0, { damping: 15, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (e.clientX - centerX) * 0.22;
    const distanceY = (e.clientY - centerY) * 0.22;
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          background: 'linear-gradient(135deg, #E8B931 0%, #D4A520 100%)',
          color: '#1A1A1A',
          boxShadow: isHovered
            ? '0 12px 30px rgba(232, 185, 49, 0.4), inset 0 1px 1px rgba(255,255,255,0.4)'
            : '0 4px 18px rgba(232, 185, 49, 0.25), inset 0 1px 1px rgba(255,255,255,0.3)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        };
      case 'dark':
        return {
          background: 'rgba(26, 26, 26, 0.95)',
          color: '#FFFFFF',
          boxShadow: isHovered
            ? '0 12px 30px rgba(0, 0, 0, 0.35)'
            : '0 4px 16px rgba(0, 0, 0, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        };
      case 'glass':
        return {
          background: 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          color: '#FFFFFF',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        };
      case 'secondary':
      default:
        return {
          background: 'var(--card)',
          color: 'var(--foreground)',
          border: '1px solid var(--border)',
          boxShadow: isHovered
            ? '0 8px 24px rgba(0,0,0,0.08)'
            : '0 2px 8px rgba(0,0,0,0.04)',
        };
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case 'sm':
        return { padding: '0.5rem 1rem 0.5rem 1.25rem', fontSize: '0.875rem' };
      case 'lg':
        return { padding: '1rem 1.75rem 1rem 2rem', fontSize: '1.0625rem' };
      case 'md':
      default:
        return { padding: '0.8rem 1.5rem 0.8rem 1.75rem', fontSize: '0.9375rem' };
    }
  };

  const content = (
    <motion.div
      ref={ref}
      style={{ x, y, display: 'inline-block' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
      data-cursor={dataCursor}
    >
      <div
        className={className}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.875rem',
          borderRadius: '9999px',
          fontWeight: 700,
          fontFamily: 'var(--font-display)',
          letterSpacing: '-0.01em',
          cursor: 'pointer',
          textDecoration: 'none',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
          ...getVariantStyles(),
          ...getSizeStyles(),
          ...style,
        }}
      >
        <span>{children}</span>

        {showArrow && (
          <motion.div
            animate={{
              x: isHovered ? 2 : 0,
              y: isHovered ? -2 : 0,
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: size === 'sm' ? 24 : size === 'lg' ? 34 : 28,
              height: size === 'sm' ? 24 : size === 'lg' ? 34 : 28,
              borderRadius: '50%',
              background:
                variant === 'primary'
                  ? 'rgba(0,0,0,0.1)'
                  : variant === 'glass'
                  ? 'rgba(255,255,255,0.2)'
                  : 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: variant === 'primary' ? '#1A1A1A' : variant === 'glass' ? '#FFFFFF' : '#1A1A1A',
              flexShrink: 0,
            }}
          >
            <ArrowUpRight size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} strokeWidth={2.5} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: 'none', display: 'inline-block' }}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        margin: 0,
        cursor: 'pointer',
        display: 'inline-block',
      }}
    >
      {content}
    </button>
  );
}
