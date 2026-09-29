import type { Metadata } from 'next';
import { companyInfo } from '@/data/content';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Sunshine Cleaning Services Limited. Learn how we collect, use and protect your personal data.',
};

export default function PrivacyPage() {
  return (
    <>
      <section style={{
        background: 'linear-gradient(180deg, var(--background-warm) 0%, var(--background) 100%)',
        padding: 'clamp(4rem, 8vw, 7rem) 0 clamp(2rem, 4vw, 3rem)',
      }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h1 style={{ marginBottom: '1rem' }}>Privacy Policy</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--foreground-muted)' }}>
            Last updated: This document will be updated once the privacy policy is finalised.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Introduction</h2>
              <p>{companyInfo.name} is committed to protecting your personal data. This policy explains how we collect, use and safeguard information when you use our website or services.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Information We Collect</h2>
              <p style={{ marginBottom: '0.75rem' }}>We may collect the following information when you use our booking or contact forms:</p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                <li><p>Name</p></li>
                <li><p>Email address</p></li>
                <li><p>Phone number</p></li>
                <li><p>Property address and postcode</p></li>
                <li><p>Service preferences and booking details</p></li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>How We Use Your Information</h2>
              <p>Your information is used to process bookings, respond to enquiries, and provide our cleaning services. We do not sell or share your personal data with third parties for marketing purposes.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Data Security</h2>
              <p>We take appropriate measures to protect your personal data against unauthorised access, alteration, disclosure or destruction.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Your Rights</h2>
              <p>You have the right to access, correct or delete your personal data. To exercise these rights, contact us using the details on our contact page.</p>
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
