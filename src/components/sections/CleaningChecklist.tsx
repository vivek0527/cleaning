'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';
import { cleaningChecklist } from '@/data/content';

export function CleaningChecklist() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <section className="section" style={{ background: 'var(--background-warm)' }}>
      <div className="container">
        <ScrollReveal>
          <span className="section-label">What We Cover</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 style={{ marginBottom: '1rem' }}>
            Our cleaning checklist.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p style={{ maxWidth: '520px', marginBottom: '3rem' }}>
            Here&apos;s what&apos;s included in a thorough clean. Every room, every detail.
          </p>
        </ScrollReveal>

        <StaggerContainer
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
          staggerDelay={0.1}
        >
          {cleaningChecklist.map((category) => (
            <StaggerItem key={category.name}>
              <div style={{
                background: 'var(--card)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                border: '1px solid var(--card-border)',
                height: '100%',
              }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  marginBottom: '1.25rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '2px solid var(--accent-soft)',
                }}>
                  {category.name}
                </h3>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {category.items.map((item) => {
                    const key = `${category.name}-${item}`;
                    const isChecked = checkedItems.has(key);

                    return (
                      <li key={item}>
                        <button
                          onClick={() => toggleItem(key)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            width: '100%',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.9375rem',
                            color: isChecked ? 'var(--foreground)' : 'var(--foreground-muted)',
                            textAlign: 'left',
                            padding: '0.25rem 0',
                            transition: 'color 0.2s',
                          }}
                          aria-label={`${isChecked ? 'Uncheck' : 'Check'} ${item}`}
                        >
                          <motion.div
                            animate={{
                              background: isChecked ? 'var(--accent)' : 'transparent',
                              borderColor: isChecked ? 'var(--accent)' : 'var(--border)',
                            }}
                            transition={{ duration: 0.2 }}
                            style={{
                              width: 22,
                              height: 22,
                              borderRadius: 'var(--radius-sm)',
                              border: '2px solid var(--border)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            {isChecked && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                              >
                                <Check size={14} color="white" strokeWidth={3} />
                              </motion.div>
                            )}
                          </motion.div>
                          <span style={{
                            textDecoration: isChecked ? 'line-through' : 'none',
                            opacity: isChecked ? 0.7 : 1,
                          }}>
                            {item}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
