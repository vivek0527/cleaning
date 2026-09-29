import { FAQAccordion } from './FAQAccordion';
import { generalFaqs } from '@/data/faq';

export function HomeFAQ() {
  // Show first 5 FAQs on home page
  const homeFaqs = generalFaqs.slice(0, 5);
  
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '760px' }}>
        <FAQAccordion
          faqs={homeFaqs}
          title="Common questions."
          subtitle="Quick answers to help you get started."
        />
      </div>
    </section>
  );
}
