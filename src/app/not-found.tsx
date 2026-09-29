import Link from 'next/link';
import { Sun, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(180deg, var(--background-warm) 0%, var(--background) 100%)',
    }}>
      <div style={{ textAlign: 'center', maxWidth: '480px', padding: '2rem' }}>
        <div style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: 'var(--accent-soft)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 2rem',
        }}>
          <Sun size={36} style={{ color: 'var(--accent-hover)' }} />
        </div>

        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
          Looks like this page needs a little sunshine.
        </h1>

        <p style={{ marginBottom: '2.5rem', fontSize: '1.0625rem' }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        <Link href="/" className="btn btn-primary btn-lg">
          <ArrowLeft size={18} />
          Back Home
        </Link>
      </div>
    </section>
  );
}
