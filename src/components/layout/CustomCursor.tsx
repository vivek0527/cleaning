'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'text'>('default');
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useSpring(-100, { damping: 28, stiffness: 350 });
  const mouseY = useSpring(-100, { damping: 28, stiffness: 350 });

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia('(hover: none) or (pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        setCursorText(text);
        setCursorVariant('text');
        return;
      }

      const interactive = target.closest('a, button, [role="button"], input, select, textarea');
      if (interactive) {
        // If it's a booking action
        const textContent = (interactive.textContent || '').toLowerCase();
        const href = interactive.getAttribute('href') || '';
        if (textContent.includes('book') || href.includes('booking')) {
          setCursorText('BOOK');
          setCursorVariant('text');
        } else if (textContent.includes('service') || textContent.includes('view') || textContent.includes('learn')) {
          setCursorText('VIEW');
          setCursorVariant('text');
        } else {
          setCursorText('');
          setCursorVariant('hover');
        }
        return;
      }

      setCursorText('');
      setCursorVariant('default');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!mounted || isTouch) return null;

  const isText = cursorVariant === 'text' && cursorText;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <motion.div
        animate={{
          width: isText ? 64 : cursorVariant === 'hover' ? 44 : 12,
          height: isText ? 64 : cursorVariant === 'hover' ? 44 : 12,
          backgroundColor: isText
            ? 'var(--accent)'
            : cursorVariant === 'hover'
            ? 'rgba(232, 185, 49, 0.2)'
            : 'var(--accent)',
          borderColor: isText ? 'var(--accent)' : 'rgba(232, 185, 49, 0.6)',
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 300 }}
        style={{
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: cursorVariant === 'hover' ? 'blur(4px)' : 'none',
          border: cursorVariant === 'hover' ? '1.5px solid rgba(232, 185, 49, 0.7)' : 'none',
          boxShadow: isText ? '0 4px 20px rgba(232, 185, 49, 0.4)' : '0 2px 10px rgba(232, 185, 49, 0.25)',
        }}
      >
        {isText && (
          <span
            style={{
              fontSize: '10px',
              fontWeight: 800,
              letterSpacing: '0.1em',
              color: '#1A1A1A',
              fontFamily: 'var(--font-display)',
              textTransform: 'uppercase',
            }}
          >
            {cursorText}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
