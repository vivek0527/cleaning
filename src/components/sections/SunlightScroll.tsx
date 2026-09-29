'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { sunlightStages } from '@/data/content';

export function SunlightScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      'rgb(220, 215, 205)',
      'rgb(232, 226, 214)',
      'rgb(242, 237, 227)',
      'rgb(248, 243, 233)',
      'rgb(251, 247, 239)',
      'rgb(253, 251, 247)',
    ]
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
  }, []);

  if (prefersReducedMotion) {
    return (
      <section className="section" style={{ background: 'var(--background)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Transformation</span>
          <h2 style={{ marginBottom: '3rem' }}>From dull to sunshine-ready.</h2>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
          }}>
            {sunlightStages.map((stage) => (
              <div key={stage.word} style={{
                padding: '1.5rem 2.5rem',
                background: 'var(--card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--card-border)',
              }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{stage.word}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} style={{ position: 'relative', minHeight: '200vh' }}>
      <motion.div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor,
          overflow: 'hidden',
        }}
      >
        <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span className="section-label" style={{ justifyContent: 'center', marginBottom: '2rem', display: 'inline-flex' }}>
            Transformation
          </span>

          {sunlightStages.map((stage, i) => {
            const start = i / sunlightStages.length;
            const end = (i + 1) / sunlightStages.length;
            const mid = (start + end) / 2;

            return (
              <SunlightWord
                key={stage.word}
                word={stage.word}
                scrollYProgress={scrollYProgress}
                start={start}
                mid={mid}
                end={end}
              />
            );
          })}
        </div>

        {/* Rising sun circle */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '-30%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60vw',
            height: '60vw',
            maxWidth: '600px',
            maxHeight: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(232,185,49,0.08) 0%, transparent 70%)',
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.9]),
            scale: useTransform(scrollYProgress, [0, 1], [0.6, 1.2]),
          }}
        />
      </motion.div>
    </section>
  );
}

function SunlightWord({
  word,
  scrollYProgress,
  start,
  mid,
  end,
}: {
  word: string;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  start: number;
  mid: number;
  end: number;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.04, mid, end - 0.04, end],
    [0, 1, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [start, start + 0.04, end - 0.04, end],
    [30, 0, 0, -30]
  );

  const scale = useTransform(
    scrollYProgress,
    [start, start + 0.04, mid, end - 0.04, end],
    [0.95, 1, 1, 1, 0.95]
  );

  return (
    <motion.h2
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(3rem, 8vw, 6rem)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        opacity,
        y,
        scale,
        whiteSpace: 'nowrap',
      }}
    >
      {word}
      <span style={{ color: 'var(--accent)' }}>.</span>
    </motion.h2>
  );
}
