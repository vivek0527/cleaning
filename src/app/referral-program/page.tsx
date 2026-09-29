import type { Metadata } from 'next';
import Link from 'next/link';
import { Gift, Users, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Referral Program',
  description: 'Share the Sunshine. Refer a friend to Sunshine Cleaning Services and you could both benefit. Learn more about our referral program.',
};

export default function ReferralPage() {
  return (
    <>
      <section style={{
        background: 'linear-gradient(180deg, var(--background-warm) 0%, var(--background) 100%)',
        padding: 'clamp(4rem, 8vw, 7rem) 0 clamp(3rem, 6vw, 5rem)',
      }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="section-label">Referral Program</span>
          <h1 style={{ marginBottom: '1.5rem' }}>Share the Sunshine.</h1>
          <p style={{ fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)', maxWidth: '520px' }}>
            Love our service? Share it with friends and family. Our referral program rewards you both.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          {/* How it Works */}
          <h2 style={{ marginBottom: '2.5rem' }}>How it works.</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}>
            {[
              {
                icon: <Users size={28} />,
                title: 'Refer a Friend',
                desc: 'Share Sunshine Cleaning Services with someone you know who could benefit from a professional clean.',
              },
              {
                icon: <Gift size={28} />,
                title: 'They Book',
                desc: 'When your referral books and completes their first cleaning service, the referral is activated.',
              },
              {
                icon: <ArrowRight size={28} />,
                title: 'You Both Benefit',
                desc: 'Referral rewards will be confirmed once the program details are finalised. Stay tuned.',
              },
            ].map((item) => (
              <div key={item.title} style={{
                padding: '2rem',
                background: 'var(--card)',
                border: '1px solid var(--card-border)',
                borderRadius: 'var(--radius-lg)',
              }}>
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--accent-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-hover)',
                  marginBottom: '1.25rem',
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9375rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Notice */}
          <div style={{
            padding: '2rem',
            background: 'var(--accent-soft)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--accent-light)',
            marginBottom: '3rem',
          }}>
            <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>Referral rewards coming soon</h3>
            <p style={{ fontSize: '0.9375rem' }}>
              The specifics of our referral reward are currently being finalised. Once confirmed, this page will be updated with full details of what you and your referral can expect. Contact us to express interest in the meantime.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1rem' }}>Interested?</h2>
            <p style={{ maxWidth: '480px', margin: '0 auto 2rem' }}>
              Get in touch to learn more about our referral program.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
