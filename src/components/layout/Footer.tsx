import Link from 'next/link';
import { Sun, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { companyInfo, footerServiceLinks, footerCompanyLinks, footerLegalLinks } from '@/data/content';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--primary)',
      color: 'var(--primary-foreground)',
      paddingTop: 'clamp(4rem, 8vw, 6rem)',
      paddingBottom: '2rem',
    }}>
      <div className="container">
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
        }}>
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Sun size={20} color="#1A1A1A" />
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                SUNSHINE
              </span>
            </div>
            <p style={{
              color: 'rgba(253,251,247,0.6)',
              fontSize: '0.9375rem',
              lineHeight: 1.7,
              maxWidth: '300px',
            }}>
              Professional cleaning services for homes and businesses in London.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem', color: 'var(--accent)' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ color: 'rgba(253,251,247,0.7)', fontSize: '0.9375rem', transition: 'color 0.2s' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem', color: 'var(--accent)' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ color: 'rgba(253,251,247,0.7)', fontSize: '0.9375rem', transition: 'color 0.2s' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem', color: 'var(--accent)' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <p style={{ color: 'rgba(253,251,247,0.8)', fontSize: '0.9375rem', fontWeight: 600 }}>
                {companyInfo.founder}
              </p>
              <a href={companyInfo.phoneHref} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(253,251,247,0.7)', fontSize: '0.9375rem' }}>
                <Phone size={14} />
                {companyInfo.phoneFormatted}
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'rgba(253,251,247,0.7)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                <MapPin size={14} style={{ marginTop: 4, flexShrink: 0 }} />
                <span>
                  {companyInfo.address.line1}<br />
                  {companyInfo.address.city}<br />
                  {companyInfo.address.region}<br />
                  {companyInfo.address.postcode}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div style={{
          background: 'rgba(253,251,247,0.06)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          <div>
            <p style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>
              Ready to bring the sunshine home?
            </p>
            <p style={{ color: 'rgba(253,251,247,0.6)', fontSize: '0.9375rem' }}>
              Book your cleaning today or get in touch.
            </p>
          </div>
          <Link href="/booking" className="btn btn-primary">
            Book a Cleaning
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(253,251,247,0.1)',
          paddingTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ color: 'rgba(253,251,247,0.4)', fontSize: '0.8125rem' }}>
            © {currentYear} {companyInfo.name}
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {footerLegalLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{ color: 'rgba(253,251,247,0.4)', fontSize: '0.8125rem', transition: 'color 0.2s' }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
