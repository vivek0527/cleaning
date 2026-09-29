import type { NavItem, ChecklistCategory } from '@/types';

// ---------- Navigation ----------
export const mainNavItems: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

// ---------- Company Info ----------
export const companyInfo = {
  name: 'Sunshine Cleaning Services Limited',
  shortName: 'Sunshine',
  founder: 'Pankaj Yadav',
  phone: '07542834640',
  phoneFormatted: '07542 834 640',
  phoneHref: 'tel:+4407542834640',
  address: {
    line1: '1 A Speranza Street',
    city: 'London',
    region: 'Greater London',
    postcode: 'SE18 1NX',
    full: '1 A Speranza Street, London, Greater London SE18 1NX',
  },
  serviceArea: 'London',
  tagline: 'Bring the Sunshine Home.',
  description:
    'Professional cleaning services for homes and businesses across London. Thoughtful cleaning, beautiful results and service you can rely on.',
} as const;

// ---------- How It Works ----------
export const howItWorksSteps = [
  {
    number: '01',
    title: 'Choose Your Service',
    description: 'Tell us what needs cleaning.',
  },
  {
    number: '02',
    title: 'Pick Your Time',
    description: 'Choose a convenient date and time.',
  },
  {
    number: '03',
    title: 'We Do the Cleaning',
    description: 'A professional cleaning service takes care of your space.',
  },
  {
    number: '04',
    title: 'Enjoy the Difference',
    description: 'Return to a fresher, cleaner environment.',
  },
];

// ---------- Trust Items ----------
export const trustItems = [
  { label: 'Professional Service', icon: 'Shield' },
  { label: 'Flexible Scheduling', icon: 'CalendarClock' },
  { label: 'Residential & Commercial', icon: 'Home' },
  { label: 'London Based', icon: 'MapPin' },
  { label: 'Detail-Focused Cleaning', icon: 'CheckCircle' },
];

// ---------- Cleaning Checklist ----------
export const cleaningChecklist: ChecklistCategory[] = [
  {
    name: 'Kitchen',
    items: ['Surfaces', 'Hob', 'Sink', 'Cabinet fronts', 'Appliances', 'Floors'],
  },
  {
    name: 'Bathroom',
    items: ['Toilet', 'Shower', 'Bath', 'Mirrors', 'Sink', 'Tiles', 'Floors'],
  },
  {
    name: 'Living Areas',
    items: ['Dusting', 'Furniture', 'Mirrors', 'Floors', 'Skirting boards'],
  },
  {
    name: 'Bedrooms',
    items: ['Furniture', 'Mirrors', 'Wardrobes', 'Floors'],
  },
];

// ---------- Carpet Process ----------
export const carpetProcess = [
  { number: '01', title: 'Inspect', description: 'Assess carpet condition and identify areas of concern.' },
  { number: '02', title: 'Vacuum', description: 'Thorough vacuuming removes surface debris.' },
  { number: '03', title: 'Treat', description: 'Pre-treat stains and high-traffic areas.' },
  { number: '04', title: 'Extract', description: 'Deep extraction removes embedded dirt.' },
  { number: '05', title: 'Groom', description: 'Carpet fibres groomed for an even finish.' },
  { number: '06', title: 'Dry', description: 'Efficient drying minimises downtime.' },
  { number: '07', title: 'Final Check', description: 'Quality inspection ensures full coverage.' },
];

// ---------- Sunshine Difference ----------
export const sunshineDifference = [
  {
    title: 'Fresh',
    description: 'A cleaner environment designed around everyday comfort.',
    icon: 'Wind',
  },
  {
    title: 'Detailed',
    description: 'Attention to the areas that make the biggest difference.',
    icon: 'Search',
  },
  {
    title: 'Thoughtful',
    description: 'Professional service with care for the customer\'s space.',
    icon: 'Heart',
  },
];

// ---------- Sunlight Scroll Stages ----------
export const sunlightStages = [
  { word: 'Dull', opacity: 0.3, brightness: 0.7 },
  { word: 'Fresh', opacity: 0.5, brightness: 0.8 },
  { word: 'Bright', opacity: 0.7, brightness: 0.9 },
  { word: 'Clean', opacity: 0.85, brightness: 0.95 },
  { word: 'Ready', opacity: 1, brightness: 1 },
];

// ---------- Footer Links ----------
export const footerServiceLinks = [
  { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
  { label: 'End of Tenancy', href: '/services/end-of-tenancy' },
  { label: 'Regular Cleaning', href: '/services/regular-cleaning' },
  { label: 'One-Off Cleaning', href: '/services/one-off' },
  { label: 'Commercial Cleaning', href: '/services/commercial' },
  { label: 'Carpet Cleaning', href: '/services/carpet-cleaning' },
];

export const footerCompanyLinks = [
  { label: 'About', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Referral Program', href: '/referral-program' },
  { label: 'Contact', href: '/contact' },
];

export const footerLegalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
];
