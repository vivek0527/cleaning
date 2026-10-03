'use client';

import { useEffect, useState } from 'react';

export function MouseLighting() {
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState({ x: -1000, y: -1000 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Disable on touch devices
    if (window.matchMedia('(hover: none) or (pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handlePointerMove = (e: PointerEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  if (!mounted || isTouch) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 40,
        background: `radial-gradient(650px circle at ${coords.x}px ${coords.y}px, rgba(232, 185, 49, 0.07), transparent 70%)`,
        transition: 'background 0.15s ease-out',
      }}
    />
  );
}
