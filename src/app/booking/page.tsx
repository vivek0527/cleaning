import type { Metadata } from 'next';
import { BookingWizard } from '@/components/booking/BookingWizard';

export const metadata: Metadata = {
  title: 'Book a Cleaning',
  description: 'Book a professional cleaning service in London. Choose your service, pick your date and time, and let Sunshine Cleaning Services take care of the rest.',
};

export default function BookingPage() {
  return (
    <>
      <section style={{
        background: 'linear-gradient(180deg, var(--background-warm) 0%, var(--background) 100%)',
        padding: 'clamp(4rem, 8vw, 6rem) 0 clamp(2rem, 4vw, 3rem)',
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Booking</span>
          <h1 style={{ marginBottom: '1rem' }}>Book your cleaning.</h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}>
            Complete the form below and we&apos;ll be in touch to confirm your booking.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <BookingWizard />
        </div>
      </section>
    </>
  );
}
