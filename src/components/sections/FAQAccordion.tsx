'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import type { FAQ } from '@/types';

interface FAQAccordionProps {
  faqs: FAQ[];
  showSearch?: boolean;
  title?: string;
  subtitle?: string;
}

export function FAQAccordion({ faqs, showSearch = false, title, subtitle }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = searchQuery
    ? faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  return (
    <div>
      {title && (
        <ScrollReveal>
          <span className="section-label">FAQ</span>
        </ScrollReveal>
      )}
      {title && (
        <ScrollReveal delay={0.1}>
          <h2 style={{ marginBottom: subtitle ? '0.75rem' : '1.5rem' }}>{title}</h2>
        </ScrollReveal>
      )}
      {subtitle && (
        <ScrollReveal delay={0.15}>
          <p style={{ maxWidth: '520px', marginBottom: '2.5rem' }}>{subtitle}</p>
        </ScrollReveal>
      )}

      {showSearch && (
        <ScrollReveal delay={0.2}>
          <div style={{
            position: 'relative',
            maxWidth: '480px',
            marginBottom: '2rem',
          }}>
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--foreground-muted)',
              }}
            />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input"
              style={{ paddingLeft: '2.75rem' }}
              aria-label="Search frequently asked questions"
            />
          </div>
        </ScrollReveal>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {filteredFaqs.map((faq, index) => (
          <ScrollReveal key={index} delay={0.05 * index}>
            <div style={{
              border: '1px solid var(--card-border)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              background: openIndex === index ? 'var(--card)' : 'transparent',
              transition: 'background 0.3s ease',
            }}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  padding: '1.25rem 1.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--foreground)',
                  textAlign: 'left',
                }}
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ flexShrink: 0 }}
                >
                  <ChevronDown size={18} style={{ color: 'var(--foreground-muted)' }} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{
                      padding: '0 1.5rem 1.25rem',
                      fontSize: '0.9375rem',
                      lineHeight: 1.7,
                    }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        ))}

        {filteredFaqs.length === 0 && searchQuery && (
          <p style={{ textAlign: 'center', padding: '2rem', color: 'var(--foreground-muted)' }}>
            No matching questions found. Try a different search term.
          </p>
        )}
      </div>
    </div>
  );
}
