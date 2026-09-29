'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import { contactFormSchema, type ContactForm as ContactFormType } from '@/lib/validation';
import { services } from '@/data/services';

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormType) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log('Contact form submitted:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 4000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'var(--card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--card-border)',
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'var(--sage-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem',
          }}
        >
          <Check size={28} style={{ color: 'var(--sage)' }} strokeWidth={3} />
        </motion.div>
        <h3 style={{ marginBottom: '0.5rem' }}>Message sent</h3>
        <p style={{ fontSize: '0.9375rem' }}>
          We&apos;ll get back to you as soon as possible.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <label className="label" htmlFor="contact-name">Name *</label>
          <input id="contact-name" className={`input ${errors.name ? 'input-error' : ''}`} placeholder="Your name" {...register('name')} />
          {errors.name && <p className="error-text">{errors.name.message}</p>}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label className="label" htmlFor="contact-phone">Phone *</label>
            <input id="contact-phone" className={`input ${errors.phone ? 'input-error' : ''}`} placeholder="07xxx xxx xxx" type="tel" {...register('phone')} />
            {errors.phone && <p className="error-text">{errors.phone.message}</p>}
          </div>
          <div>
            <label className="label" htmlFor="contact-email">Email *</label>
            <input id="contact-email" className={`input ${errors.email ? 'input-error' : ''}`} placeholder="you@email.com" type="email" {...register('email')} />
            {errors.email && <p className="error-text">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label className="label" htmlFor="contact-service">Service of Interest</label>
          <select id="contact-service" className="input" {...register('service')}>
            <option value="">Select a service (optional)</option>
            {services.map((s) => (
              <option key={s.id} value={s.name}>{s.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="label" htmlFor="contact-message">Message *</label>
          <textarea id="contact-message" className={`input ${errors.message ? 'input-error' : ''}`} placeholder="How can we help?" {...register('message')} />
          {errors.message && <p className="error-text">{errors.message.message}</p>}
        </div>

        <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ alignSelf: 'flex-start' }}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
          {!isSubmitting && <Send size={16} />}
        </button>
      </div>
    </form>
  );
}
