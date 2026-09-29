'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

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
    <section className="section">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">Results</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 style={{ marginBottom: '1rem' }}>
            See the difference.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p style={{ maxWidth: '480px', marginBottom: '3rem' }}>
            Drag the slider to see the transformation a professional clean makes.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            role="slider"
            aria-label="Before and after comparison slider"
            aria-valuenow={Math.round(sliderPos)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') setSliderPos((p) => Math.max(0, p - 2));
              if (e.key === 'ArrowRight') setSliderPos((p) => Math.min(100, p + 2));
            }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '900px',
              aspectRatio: '16/10',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              cursor: 'ew-resize',
              userSelect: 'none',
              margin: '0 auto',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            {/* "Before" side — darker, messy environment */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, #D4CFC6 0%, #B8B2A6 50%, #A8A196 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                textAlign: 'center',
                opacity: 0.5,
              }}>
                <p style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🏠</p>
                <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#666' }}>Before the clean</p>
              </div>
            </div>

            {/* "After" side — bright, clean, sunshine */}
            <div style={{
              position: 'absolute',
              inset: 0,
              clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              background: 'linear-gradient(135deg, #FDFBF7 0%, #FBF3DC 40%, #F5DFA0 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: isDragging ? 'none' : 'clip-path 0.1s ease',
            }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>✨</p>
                <p style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--accent-hover)' }}>After Sunshine Cleaning</p>
              </div>
            </div>

            {/* Slider handle */}
            <div style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${sliderPos}%`,
              transform: 'translateX(-50%)',
              width: 4,
              background: 'white',
              boxShadow: '0 0 12px rgba(0,0,0,0.3)',
              zIndex: 10,
            }}>
              {/* Handle circle */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'white',
                boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2px',
              }}>
                <span style={{ fontSize: '14px', color: 'var(--foreground-muted)' }}>◄</span>
                <span style={{ fontSize: '14px', color: 'var(--foreground-muted)' }}>►</span>
              </div>
            </div>

            {/* Labels */}
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              background: 'rgba(0,0,0,0.6)',
              color: 'white',
              padding: '0.375rem 0.875rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              zIndex: 5,
            }}>
              Before
            </div>
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              right: '1rem',
              background: 'var(--accent)',
              color: 'var(--accent-foreground)',
              padding: '0.375rem 0.875rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              zIndex: 5,
            }}>
              After
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
