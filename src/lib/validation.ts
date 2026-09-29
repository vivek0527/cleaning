import { z } from 'zod';

// ---------- Booking Form Validation ----------
export const bookingStep1Schema = z.object({
  serviceId: z.string().min(1, 'Please select a service'),
});

export const bookingStep2Schema = z.object({
  propertyType: z.enum(['flat', 'house', 'studio', 'office', 'other'], {
    required_error: 'Please select a property type',
  }),
  bedrooms: z.number().min(0).max(20),
  bathrooms: z.number().min(0).max(20),
  propertySize: z.string().optional(),
  additionalRequirements: z.string().optional(),
  // Commercial-specific
  businessType: z.string().optional(),
  floorArea: z.string().optional(),
  numberOfRooms: z.number().optional(),
  preferredFrequency: z.string().optional(),
  // Carpet-specific
  carpetRooms: z.number().optional(),
  carpetType: z.string().optional(),
  stainInfo: z.string().optional(),
});

export const bookingStep3Schema = z.object({
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
});

export const bookingStep4Schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[0-9+\s()-]+$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  address: z.string().min(5, 'Please enter your address'),
  postcode: z
    .string()
    .min(5, 'Please enter a valid postcode')
    .regex(/^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i, 'Please enter a valid UK postcode'),
  notes: z.string().optional(),
});

export const fullBookingSchema = bookingStep1Schema
  .merge(bookingStep2Schema)
  .merge(bookingStep3Schema)
  .merge(bookingStep4Schema);

// ---------- Contact Form Validation ----------
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[0-9+\s()-]+$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().optional(),
  message: z.string().min(10, 'Please enter a message (at least 10 characters)'),
});

// ---------- Referral Form Validation ----------
export const referralFormSchema = z.object({
  referrerName: z.string().min(2, 'Please enter your name'),
  referrerEmail: z.string().email('Please enter a valid email address'),
  referrerPhone: z.string().min(10, 'Please enter a valid phone number'),
  referredName: z.string().min(2, 'Please enter your friend\'s name'),
  referredEmail: z.string().email('Please enter your friend\'s email'),
  referredPhone: z.string().optional(),
});

export type BookingStep1 = z.infer<typeof bookingStep1Schema>;
export type BookingStep2 = z.infer<typeof bookingStep2Schema>;
export type BookingStep3 = z.infer<typeof bookingStep3Schema>;
export type BookingStep4 = z.infer<typeof bookingStep4Schema>;
export type FullBooking = z.infer<typeof fullBookingSchema>;
export type ContactForm = z.infer<typeof contactFormSchema>;
export type ReferralForm = z.infer<typeof referralFormSchema>;
