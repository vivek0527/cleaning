// ============================================================
// Sunshine Cleaning Services — Core Type Definitions
// ============================================================

// ---------- Service ----------
export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  image: string;
  features: string[];
  suitableFor: string[];
  process: ProcessStep[];
  faqs: FAQ[];
  active: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

// ---------- FAQ ----------
export interface FAQ {
  question: string;
  answer: string;
}

// ---------- Booking ----------
export type BookingStatus =
  | 'pending'
  | 'confirmed'
  | 'assigned'
  | 'in_progress'
  | 'completed'
  | 'cancelled';

export type PropertyType = 'flat' | 'house' | 'studio' | 'office' | 'other';

export interface BookingFormData {
  // Step 1 — Service
  serviceId: string;

  // Step 2 — Property
  propertyType: PropertyType;
  bedrooms: number;
  bathrooms: number;
  propertySize: string;
  additionalRequirements: string;

  // Step 2b — Commercial-specific
  businessType?: string;
  floorArea?: string;
  numberOfRooms?: number;
  preferredFrequency?: string;

  // Step 2c — Carpet-specific
  carpetRooms?: number;
  carpetType?: string;
  stainInfo?: string;

  // Step 3 — Date & Time
  date: string;
  time: string;

  // Step 4 — Customer
  fullName: string;
  phone: string;
  email: string;
  address: string;
  postcode: string;
  notes: string;
}

export interface Booking {
  id: string;
  reference: string;
  customerId: string;
  serviceId: string;
  propertyType: PropertyType;
  bedrooms: number;
  bathrooms: number;
  propertySize: string;
  date: string;
  time: string;
  notes: string;
  status: BookingStatus;
  createdAt: string;
  updatedAt: string;
}

// ---------- Customer ----------
export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  postcode: string;
  createdAt: string;
  updatedAt: string;
}

// ---------- Referral ----------
export type ReferralStatus = 'pending' | 'completed' | 'expired';

export interface Referral {
  id: string;
  referrerName: string;
  referrerEmail: string;
  referredName: string;
  referredEmail: string;
  bookingId?: string;
  reward: string;
  status: ReferralStatus;
  createdAt: string;
}

// ---------- Testimonial ----------
export interface Testimonial {
  id: string;
  customerName: string;
  rating: number;
  review: string;
  service: string;
  date: string;
  approved: boolean;
}

// ---------- Contact Form ----------
export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

// ---------- Checklist ----------
export interface ChecklistCategory {
  name: string;
  items: string[];
}

// ---------- Navigation ----------
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
