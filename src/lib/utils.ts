import { clsx, type ClassValue } from 'clsx';

// Simple class merge utility (no twMerge dependency needed for this scope)
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function generateBookingReference(): string {
  const prefix = 'SCS';
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function formatPhoneForHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, '')}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
