import type { Metadata } from 'next';
import { companyInfo } from '@/data/content';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Sunshine Cleaning Services Limited. Read our terms of service for professional cleaning in London.',
};

export default function TermsPage() {
  return (
    <>
      <section style={{
        background: 'linear-gradient(180deg, var(--background-warm) 0%, var(--background) 100%)',
        padding: 'clamp(4rem, 8vw, 7rem) 0 clamp(2rem, 4vw, 3rem)',
      }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h1 style={{ marginBottom: '1rem' }}>Terms & Conditions</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--foreground-muted)' }}>
            Last updated: This document will be updated once the terms are finalised.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Overview</h2>
              <p>These terms govern the use of the {companyInfo.name} website and services. By using our website or booking our services, you agree to these terms.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Services</h2>
              <p>{companyInfo.name} provides professional cleaning services for residential and commercial properties in London. Service details, availability and scope are subject to confirmation at the time of booking.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Bookings</h2>
              <p>Bookings submitted through the website are requests and are subject to confirmation. We will contact you to confirm availability and any specific details before the cleaning date.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Cancellation</h2>
              <p>If you need to cancel or reschedule a booking, please contact us as soon as possible. Specific cancellation policies will be confirmed when the booking is finalised.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Liability</h2>
              <p>We take reasonable care when providing our services. Liability details will be specified in the full terms of service when they are finalised.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Contact</h2>
              <p>
                {companyInfo.name}<br />
                {companyInfo.address.full}<br />
                {companyInfo.phoneFormatted}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
