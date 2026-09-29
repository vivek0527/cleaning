import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'deep-cleaning',
    name: 'Deep Cleaning',
    slug: 'deep-cleaning',
    description:
      'A thorough, top-to-bottom cleaning service for properties that need detailed attention. Every surface, corner and fixture is carefully cleaned to restore freshness throughout your space.',
    shortDescription:
      'For properties that need detailed attention from top to bottom.',
    icon: 'Sparkles',
    image: '/images/services/deep-cleaning.jpg',
    features: [
      'Complete surface cleaning throughout',
      'Kitchen deep clean including appliances',
      'Bathroom descaling and sanitisation',
      'Skirting boards and door frames',
      'Interior window cleaning',
      'Light fixtures and fittings',
      'Behind and under furniture',
      'Floor cleaning throughout',
    ],
    suitableFor: [
      'Properties needing a thorough refresh',
      'Homes that haven\'t been cleaned in a while',
      'Seasonal deep cleaning',
      'Pre-event preparation',
      'New home preparation',
    ],
    process: [
      { number: '01', title: 'Assessment', description: 'We understand your property and cleaning needs.' },
      { number: '02', title: 'Preparation', description: 'Cleaning supplies and equipment are prepared for your property.' },
      { number: '03', title: 'Deep Clean', description: 'Every room is thoroughly cleaned from top to bottom.' },
      { number: '04', title: 'Final Check', description: 'A walkthrough ensures every detail meets our standards.' },
    ],
    faqs: [
      {
        question: 'How long does a deep cleaning take?',
        answer: 'The duration depends on the size of your property and its current condition. We can provide an estimate after understanding your requirements.',
      },
      {
        question: 'Do I need to be home during the cleaning?',
        answer: 'It\'s entirely up to you. Many clients provide access and carry on with their day.',
      },
      {
        question: 'Do you bring your own cleaning supplies?',
        answer: 'Yes, we bring professional-grade cleaning products and equipment.',
      },
    ],
    active: true,
  },
  {
    id: 'end-of-tenancy',
    name: 'End of Tenancy Cleaning',
    slug: 'end-of-tenancy',
    description:
      'Professional end of tenancy cleaning designed for property handovers. We clean to the standard expected by landlords and letting agents, helping ensure a smooth transition.',
    shortDescription:
      'For property handovers, tenants and landlords.',
    icon: 'Key',
    image: '/images/services/end-of-tenancy.jpg',
    features: [
      'Full property cleaning to handover standard',
      'Kitchen deep clean including oven and hob',
      'Bathroom deep clean and descaling',
      'All rooms dusted, wiped and vacuumed',
      'Skirting boards and door frames',
      'Interior windows and sills',
      'Cupboard interiors',
      'Floor cleaning throughout',
    ],
    suitableFor: [
      'Tenants moving out',
      'Landlords preparing for new tenants',
      'Letting agents managing turnarounds',
      'Property managers',
    ],
    process: [
      { number: '01', title: 'Booking', description: 'Choose your move-out date and property details.' },
      { number: '02', title: 'Cleaning', description: 'Professional cleaning to handover standards.' },
      { number: '03', title: 'Inspection', description: 'Every area is checked against a detailed list.' },
      { number: '04', title: 'Handover', description: 'Your property is ready for inspection.' },
    ],
    faqs: [
      {
        question: 'Will this help me get my deposit back?',
        answer: 'Our cleaning is designed to meet the standards typically expected by landlords and letting agents at the end of a tenancy.',
      },
      {
        question: 'Can you clean an empty property?',
        answer: 'Yes, we regularly clean both furnished and unfurnished properties.',
      },
    ],
    active: true,
  },
  {
    id: 'regular-cleaning',
    name: 'Regular Cleaning',
    slug: 'regular-cleaning',
    description:
      'Scheduled cleaning services to maintain a consistently fresh and comfortable environment. Available on a weekly, fortnightly or custom schedule to suit your routine.',
    shortDescription:
      'Scheduled cleaning for maintaining a consistently fresh environment.',
    icon: 'CalendarCheck',
    image: '/images/services/regular-cleaning.jpg',
    features: [
      'Consistent cleaning to your schedule',
      'Surface cleaning and dusting',
      'Kitchen and bathroom maintenance',
      'Vacuuming and mopping',
      'Bed making on request',
      'Bins emptied',
      'General tidying',
      'Flexible scheduling',
    ],
    suitableFor: [
      'Busy professionals',
      'Families',
      'Anyone who values a consistently clean home',
      'Shared households',
    ],
    process: [
      { number: '01', title: 'Schedule', description: 'Choose the frequency that suits your lifestyle.' },
      { number: '02', title: 'First Visit', description: 'Your first cleaning establishes the routine.' },
      { number: '03', title: 'Regular Service', description: 'Consistent, reliable cleaning on your schedule.' },
      { number: '04', title: 'Adjust Anytime', description: 'Change frequency or requirements when needed.' },
    ],
    faqs: [
      {
        question: 'How often can I schedule cleaning?',
        answer: 'We offer weekly, fortnightly and custom schedules. Let us know what works for you.',
      },
      {
        question: 'Can I change my cleaning day?',
        answer: 'Yes, we\'re flexible and happy to adjust to your schedule.',
      },
    ],
    active: true,
  },
  {
    id: 'one-off',
    name: 'One-Off Cleaning',
    slug: 'one-off',
    description:
      'Flexible cleaning for when you need it — no ongoing commitment. Whether it\'s after a gathering, before guests arrive, or simply when your space needs attention.',
    shortDescription:
      'Flexible cleaning when you need it.',
    icon: 'Clock',
    image: '/images/services/one-off.jpg',
    features: [
      'No commitment or contract',
      'Flexible scheduling',
      'Tailored to your needs',
      'Full home or specific rooms',
      'Surface cleaning and sanitisation',
      'Kitchen and bathroom cleaning',
      'Vacuuming and mopping',
      'Available at short notice',
    ],
    suitableFor: [
      'Post-event cleaning',
      'Before or after guests',
      'Seasonal refresh',
      'When life gets busy',
      'Trial before regular service',
    ],
    process: [
      { number: '01', title: 'Book', description: 'Tell us when and what you need.' },
      { number: '02', title: 'Clean', description: 'We take care of your space.' },
      { number: '03', title: 'Enjoy', description: 'Come home to a fresh environment.' },
    ],
    faqs: [
      {
        question: 'Do I need to commit to regular cleaning?',
        answer: 'Not at all. One-off cleaning is a standalone service with no ongoing obligation.',
      },
    ],
    active: true,
  },
  {
    id: 'commercial',
    name: 'Commercial Cleaning',
    slug: 'commercial',
    description:
      'Professional cleaning services for offices and business environments. We help maintain a clean, productive workspace that reflects well on your business.',
    shortDescription:
      'Professional cleaning for offices and business environments.',
    icon: 'Building2',
    image: '/images/services/commercial.jpg',
    features: [
      'Office cleaning and maintenance',
      'Desk and workstation cleaning',
      'Kitchen and break room cleaning',
      'Washroom cleaning and restocking',
      'Floor cleaning',
      'Bin emptying and waste management',
      'Reception and common areas',
      'Flexible scheduling around business hours',
    ],
    suitableFor: [
      'Small to medium offices',
      'Retail spaces',
      'Co-working spaces',
      'Medical and dental practices',
      'Restaurants and hospitality',
    ],
    process: [
      { number: '01', title: 'Consultation', description: 'We assess your workspace and cleaning needs.' },
      { number: '02', title: 'Schedule', description: 'A cleaning plan designed around your business.' },
      { number: '03', title: 'Service', description: 'Regular professional cleaning delivered reliably.' },
      { number: '04', title: 'Review', description: 'Ongoing feedback to maintain quality.' },
    ],
    faqs: [
      {
        question: 'Can you clean outside business hours?',
        answer: 'Yes, we can schedule cleaning for early mornings, evenings or weekends to avoid disruption.',
      },
      {
        question: 'Do you work with businesses of all sizes?',
        answer: 'We work with small offices, larger workspaces and everything in between. Contact us to discuss your needs.',
      },
    ],
    active: true,
  },
  {
    id: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    slug: 'carpet-cleaning',
    description:
      'Deep cleaning and refresh for carpets and floor coverings. Professional equipment and methods help restore the appearance and freshness of your carpets.',
    shortDescription:
      'Deep cleaning and refresh for carpets and floor coverings.',
    icon: 'Layers',
    image: '/images/services/carpet-cleaning.jpg',
    features: [
      'Professional carpet cleaning equipment',
      'Deep extraction cleaning',
      'Stain treatment',
      'Deodorising',
      'Quick drying methods',
      'Suitable for most carpet types',
      'Rug cleaning available',
      'Regular maintenance plans available',
    ],
    suitableFor: [
      'Homes with carpeted rooms',
      'Rental properties',
      'Offices with carpet flooring',
      'Stain removal',
      'Allergy-conscious households',
    ],
    process: [
      { number: '01', title: 'Inspect', description: 'Assess carpet condition and identify any specific areas.' },
      { number: '02', title: 'Vacuum', description: 'Thorough vacuuming to remove surface debris.' },
      { number: '03', title: 'Treat', description: 'Pre-treat stains and high-traffic areas.' },
      { number: '04', title: 'Extract', description: 'Deep cleaning extraction removes embedded dirt.' },
      { number: '05', title: 'Groom', description: 'Carpet fibres are groomed for even finish.' },
      { number: '06', title: 'Dry', description: 'Efficient drying to minimise downtime.' },
      { number: '07', title: 'Final Check', description: 'Quality check ensures full coverage.' },
    ],
    faqs: [
      {
        question: 'How long does carpet cleaning take to dry?',
        answer: 'Drying times vary depending on the method and conditions, but typically carpets are usable within a few hours.',
      },
      {
        question: 'Can you remove all stains?',
        answer: 'We treat all stains professionally, though results depend on the type and age of the stain.',
      },
    ],
    active: true,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getActiveServices(): Service[] {
  return services.filter((s) => s.active);
}
