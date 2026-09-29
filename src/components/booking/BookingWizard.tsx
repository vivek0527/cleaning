'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  CalendarDays,
  Clock,
  User,
  MapPin,
  Sparkles,
  Key,
  CalendarCheck,
  Building2,
  Layers,
} from 'lucide-react';
import { services } from '@/data/services';
import {
  bookingStep1Schema,
  bookingStep2Schema,
  bookingStep3Schema,
  bookingStep4Schema,
} from '@/lib/validation';
import type { BookingFormData } from '@/types';
import { generateBookingReference, formatDate } from '@/lib/utils';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={20} />,
  Key: <Key size={20} />,
  CalendarCheck: <CalendarCheck size={20} />,
  Clock: <Clock size={20} />,
  Building2: <Building2 size={20} />,
  Layers: <Layers size={20} />,
};

const STEPS = [
  { label: 'Service', icon: <Sparkles size={16} /> },
  { label: 'Property', icon: <MapPin size={16} /> },
  { label: 'Date & Time', icon: <CalendarDays size={16} /> },
  { label: 'Your Details', icon: <User size={16} /> },
  { label: 'Review', icon: <Check size={16} /> },
];

const TIME_SLOTS = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00',
];

export function BookingWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [formData, setFormData] = useState<Partial<BookingFormData>>({
    serviceId: '',
    propertyType: 'flat',
    bedrooms: 1,
    bathrooms: 1,
    propertySize: '',
    additionalRequirements: '',
    date: '',
    time: '',
    fullName: '',
    phone: '',
    email: '',
    address: '',
    postcode: '',
    notes: '',
  });

  const updateFormData = useCallback((updates: Partial<BookingFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  }, []);

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, STEPS.length - 1));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate submission delay (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const ref = generateBookingReference();
    setBookingRef(ref);
    setIsConfirmed(true);
    setIsSubmitting(false);
  };

  const selectedService = services.find((s) => s.id === formData.serviceId);

  if (isConfirmed) {
    return <ConfirmationStep bookingRef={bookingRef} formData={formData} selectedService={selectedService} />;
  }

  return (
    <div style={{
      maxWidth: '720px',
      margin: '0 auto',
    }}>
      {/* Progress Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
        marginBottom: '2.5rem',
        overflowX: 'auto',
        paddingBottom: '0.5rem',
      }}>
        {STEPS.map((step, i) => (
          <div key={step.label} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <button
              onClick={() => i < currentStep && setCurrentStep(i)}
              disabled={i > currentStep}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 0.75rem',
                background: i === currentStep ? 'var(--accent-soft)' : i < currentStep ? 'var(--sage-light)' : 'transparent',
                border: 'none',
                borderRadius: 'var(--radius-full)',
                cursor: i <= currentStep ? 'pointer' : 'default',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: i === currentStep ? 700 : 500,
                color: i <= currentStep ? 'var(--foreground)' : 'var(--foreground-muted)',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              <div style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: i < currentStep ? 'var(--sage)' : i === currentStep ? 'var(--accent)' : 'var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: i <= currentStep ? 'white' : 'var(--foreground-muted)',
                flexShrink: 0,
              }}>
                {i < currentStep ? <Check size={12} strokeWidth={3} /> : <span style={{ fontSize: '0.6875rem', fontWeight: 700 }}>{i + 1}</span>}
              </div>
              <span className="hide-mobile">{step.label}</span>
            </button>
            {i < STEPS.length - 1 && (
              <div style={{
                flex: 1,
                height: 2,
                background: i < currentStep ? 'var(--sage)' : 'var(--border)',
                margin: '0 0.25rem',
                minWidth: '8px',
              }} />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {currentStep === 0 && (
            <Step1Service
              formData={formData}
              updateFormData={updateFormData}
              onNext={nextStep}
            />
          )}
          {currentStep === 1 && (
            <Step2Property
              formData={formData}
              updateFormData={updateFormData}
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}
          {currentStep === 2 && (
            <Step3DateTime
              formData={formData}
              updateFormData={updateFormData}
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}
          {currentStep === 3 && (
            <Step4Customer
              formData={formData}
              updateFormData={updateFormData}
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}
          {currentStep === 4 && (
            <Step5Review
              formData={formData}
              selectedService={selectedService}
              onPrev={prevStep}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ============================================================
// Step 1: Service Selection
// ============================================================
function Step1Service({
  formData,
  updateFormData,
  onNext,
}: {
  formData: Partial<BookingFormData>;
  updateFormData: (u: Partial<BookingFormData>) => void;
  onNext: () => void;
}) {
  const isValid = !!formData.serviceId;

  return (
    <div>
      <h3 style={{ marginBottom: '0.5rem' }}>Choose your service</h3>
      <p style={{ marginBottom: '2rem', fontSize: '0.9375rem' }}>Select the type of cleaning you need.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => updateFormData({ serviceId: service.id })}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 1.25rem',
              background: formData.serviceId === service.id ? 'var(--accent-soft)' : 'var(--card)',
              border: formData.serviceId === service.id ? '2px solid var(--accent)' : '1.5px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              fontWeight: formData.serviceId === service.id ? 700 : 500,
              color: 'var(--foreground)',
              textAlign: 'left',
              transition: 'all 0.2s',
            }}
          >
            <div style={{ color: 'var(--accent-hover)' }}>
              {iconMap[service.icon]}
            </div>
            {service.name}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={() => isValid && onNext()}
          disabled={!isValid}
          className="btn btn-primary"
          style={{ opacity: isValid ? 1 : 0.5 }}
        >
          Continue
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// ============================================================
// Step 2: Property Details
// ============================================================
function Step2Property({
  formData,
  updateFormData,
  onNext,
  onPrev,
}: {
  formData: Partial<BookingFormData>;
  updateFormData: (u: Partial<BookingFormData>) => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const isCommercial = formData.serviceId === 'commercial';
  const isCarpet = formData.serviceId === 'carpet-cleaning';

  return (
    <div>
      <h3 style={{ marginBottom: '0.5rem' }}>Property details</h3>
      <p style={{ marginBottom: '2rem', fontSize: '0.9375rem' }}>Tell us about your property.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
        <div>
          <label className="label">Property type</label>
          <select
            className="input"
            value={formData.propertyType}
            onChange={(e) => updateFormData({ propertyType: e.target.value as BookingFormData['propertyType'] })}
          >
            <option value="flat">Flat / Apartment</option>
            <option value="house">House</option>
            <option value="studio">Studio</option>
            <option value="office">Office</option>
            <option value="other">Other</option>
          </select>
        </div>

        {!isCommercial && !isCarpet && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label className="label">Bedrooms</label>
              <select className="input" value={formData.bedrooms} onChange={(e) => updateFormData({ bedrooms: Number(e.target.value) })}>
                {[...Array(11)].map((_, i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">Bathrooms</label>
              <select className="input" value={formData.bathrooms} onChange={(e) => updateFormData({ bathrooms: Number(e.target.value) })}>
                {[...Array(8)].map((_, i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {isCommercial && (
          <>
            <div>
              <label className="label">Business type</label>
              <input className="input" placeholder="e.g. Office, Retail, Restaurant" value={formData.businessType || ''} onChange={(e) => updateFormData({ businessType: e.target.value })} />
            </div>
            <div>
              <label className="label">Approximate floor area</label>
              <input className="input" placeholder="e.g. 500 sq ft" value={formData.floorArea || ''} onChange={(e) => updateFormData({ floorArea: e.target.value })} />
            </div>
            <div>
              <label className="label">Number of rooms</label>
              <select className="input" value={formData.numberOfRooms || 1} onChange={(e) => updateFormData({ numberOfRooms: Number(e.target.value) })}>
                {[...Array(20)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">Preferred frequency</label>
              <select className="input" value={formData.preferredFrequency || ''} onChange={(e) => updateFormData({ preferredFrequency: e.target.value })}>
                <option value="">Select frequency</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="fortnightly">Fortnightly</option>
                <option value="monthly">Monthly</option>
                <option value="one-off">One-off</option>
              </select>
            </div>
          </>
        )}

        {isCarpet && (
          <>
            <div>
              <label className="label">Number of rooms with carpet</label>
              <select className="input" value={formData.carpetRooms || 1} onChange={(e) => updateFormData({ carpetRooms: Number(e.target.value) })}>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">Carpet type (if known)</label>
              <input className="input" placeholder="e.g. Wool, Synthetic, Mixed" value={formData.carpetType || ''} onChange={(e) => updateFormData({ carpetType: e.target.value })} />
            </div>
            <div>
              <label className="label">Stain information</label>
              <textarea className="input" placeholder="Describe any specific stains or areas of concern" value={formData.stainInfo || ''} onChange={(e) => updateFormData({ stainInfo: e.target.value })} />
            </div>
          </>
        )}

        <div>
          <label className="label">Additional requirements</label>
          <textarea className="input" placeholder="Any specific areas or requirements..." value={formData.additionalRequirements || ''} onChange={(e) => updateFormData({ additionalRequirements: e.target.value })} />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={onPrev} className="btn btn-secondary">
          <ArrowLeft size={16} /> Back
        </button>
        <button onClick={onNext} className="btn btn-primary">
          Continue <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// ============================================================
// Step 3: Date & Time
// ============================================================
function Step3DateTime({
  formData,
  updateFormData,
  onNext,
  onPrev,
}: {
  formData: Partial<BookingFormData>;
  updateFormData: (u: Partial<BookingFormData>) => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1; // Mon=0
  const monthName = new Date(currentYear, currentMonth).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });

  const isDateSelectable = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    return date >= today;
  };

  const handleDateSelect = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    updateFormData({ date: date.toISOString().split('T')[0] });
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const isValid = !!formData.date && !!formData.time;

  return (
    <div>
      <h3 style={{ marginBottom: '0.5rem' }}>Pick your date & time</h3>
      <p style={{ marginBottom: '2rem', fontSize: '0.9375rem' }}>Choose when you&apos;d like us to clean.</p>

      {/* Calendar */}
      <div style={{
        background: 'var(--card)',
        border: '1px solid var(--card-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        marginBottom: '1.5rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <button onClick={prevMonth} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--foreground-muted)' }}>
            ←
          </button>
          <span style={{ fontWeight: 700, fontSize: '1rem' }}>{monthName}</span>
          <button onClick={nextMonth} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--foreground-muted)' }}>
            →
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.25rem', textAlign: 'center' }}>
          {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => (
            <div key={d} style={{ padding: '0.5rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--foreground-muted)', textTransform: 'uppercase' }}>
              {d}
            </div>
          ))}
          {/* Empty cells for offset */}
          {[...Array(adjustedFirstDay)].map((_, i) => <div key={`e-${i}`} />)}
          {[...Array(daysInMonth)].map((_, i) => {
            const day = i + 1;
            const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const selectable = isDateSelectable(day);
            const isSelected = formData.date === dateStr;
            const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();

            return (
              <button
                key={day}
                onClick={() => selectable && handleDateSelect(day)}
                disabled={!selectable}
                style={{
                  padding: '0.5rem',
                  borderRadius: 'var(--radius)',
                  border: 'none',
                  cursor: selectable ? 'pointer' : 'default',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: isSelected || isToday ? 700 : 400,
                  background: isSelected ? 'var(--accent)' : 'transparent',
                  color: isSelected ? 'var(--accent-foreground)' : selectable ? 'var(--foreground)' : 'var(--border)',
                  transition: 'all 0.15s',
                  outline: isToday && !isSelected ? '2px solid var(--accent-light)' : 'none',
                }}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slots */}
      <div>
        <label className="label" style={{ marginBottom: '0.75rem' }}>Available times</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {TIME_SLOTS.map((time) => (
            <button
              key={time}
              onClick={() => updateFormData({ time })}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: formData.time === time ? '2px solid var(--accent)' : '1.5px solid var(--border)',
                background: formData.time === time ? 'var(--accent-soft)' : 'var(--card)',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: formData.time === time ? 700 : 500,
                color: 'var(--foreground)',
                transition: 'all 0.15s',
              }}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={onPrev} className="btn btn-secondary">
          <ArrowLeft size={16} /> Back
        </button>
        <button onClick={() => isValid && onNext()} disabled={!isValid} className="btn btn-primary" style={{ opacity: isValid ? 1 : 0.5 }}>
          Continue <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// ============================================================
// Step 4: Customer Details
// ============================================================
function Step4Customer({
  formData,
  updateFormData,
  onNext,
  onPrev,
}: {
  formData: Partial<BookingFormData>;
  updateFormData: (u: Partial<BookingFormData>) => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bookingStep4Schema),
    defaultValues: {
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      postcode: formData.postcode,
      notes: formData.notes,
    },
  });

  const onSubmit = (data: Record<string, unknown>) => {
    updateFormData(data as Partial<BookingFormData>);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 style={{ marginBottom: '0.5rem' }}>Your details</h3>
      <p style={{ marginBottom: '2rem', fontSize: '0.9375rem' }}>How can we reach you?</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
        <div>
          <label className="label">Full Name *</label>
          <input className={`input ${errors.fullName ? 'input-error' : ''}`} placeholder="Your full name" {...register('fullName')} />
          {errors.fullName && <p className="error-text">{errors.fullName.message}</p>}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label className="label">Phone *</label>
            <input className={`input ${errors.phone ? 'input-error' : ''}`} placeholder="07xxx xxx xxx" type="tel" {...register('phone')} />
            {errors.phone && <p className="error-text">{errors.phone.message}</p>}
          </div>
          <div>
            <label className="label">Email *</label>
            <input className={`input ${errors.email ? 'input-error' : ''}`} placeholder="you@email.com" type="email" {...register('email')} />
            {errors.email && <p className="error-text">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label className="label">Address *</label>
          <input className={`input ${errors.address ? 'input-error' : ''}`} placeholder="Your property address" {...register('address')} />
          {errors.address && <p className="error-text">{errors.address.message}</p>}
        </div>

        <div style={{ maxWidth: '200px' }}>
          <label className="label">Postcode *</label>
          <input className={`input ${errors.postcode ? 'input-error' : ''}`} placeholder="SE18 1NX" {...register('postcode')} />
          {errors.postcode && <p className="error-text">{errors.postcode.message}</p>}
        </div>

        <div>
          <label className="label">Additional Notes</label>
          <textarea className="input" placeholder="Any additional information..." {...register('notes')} />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button type="button" onClick={onPrev} className="btn btn-secondary">
          <ArrowLeft size={16} /> Back
        </button>
        <button type="submit" className="btn btn-primary">
          Review Booking <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
}

// ============================================================
// Step 5: Review
// ============================================================
function Step5Review({
  formData,
  selectedService,
  onPrev,
  onSubmit,
  isSubmitting,
}: {
  formData: Partial<BookingFormData>;
  selectedService: typeof services[0] | undefined;
  onPrev: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}) {
  const formattedDate = formData.date ? formatDate(new Date(formData.date + 'T00:00:00')) : '';

  const reviewItems = [
    { label: 'Service', value: selectedService?.name || '' },
    { label: 'Property Type', value: formData.propertyType },
    ...(formData.serviceId !== 'commercial' && formData.serviceId !== 'carpet-cleaning'
      ? [
          { label: 'Bedrooms', value: String(formData.bedrooms) },
          { label: 'Bathrooms', value: String(formData.bathrooms) },
        ]
      : []),
    { label: 'Date', value: formattedDate },
    { label: 'Time', value: formData.time },
    { label: 'Name', value: formData.fullName },
    { label: 'Phone', value: formData.phone },
    { label: 'Email', value: formData.email },
    { label: 'Address', value: formData.address },
    { label: 'Postcode', value: formData.postcode },
  ];

  return (
    <div>
      <h3 style={{ marginBottom: '0.5rem' }}>Review your booking</h3>
      <p style={{ marginBottom: '2rem', fontSize: '0.9375rem' }}>Please check everything looks correct.</p>

      <div style={{
        background: 'var(--card)',
        border: '1px solid var(--card-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        marginBottom: '2rem',
      }}>
        {reviewItems.filter((item) => item.value).map((item, i) => (
          <div
            key={item.label}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.75rem 0',
              borderBottom: i < reviewItems.length - 1 ? '1px solid var(--border-light)' : 'none',
            }}
          >
            <span style={{ fontSize: '0.9375rem', color: 'var(--foreground-muted)' }}>{item.label}</span>
            <span style={{ fontSize: '0.9375rem', fontWeight: 600 }}>{item.value}</span>
          </div>
        ))}

        {(formData.additionalRequirements || formData.notes) && (
          <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)' }}>
            <span style={{ fontSize: '0.875rem', color: 'var(--foreground-muted)' }}>Notes</span>
            <p style={{ fontSize: '0.9375rem', marginTop: '0.25rem' }}>
              {formData.additionalRequirements || formData.notes}
            </p>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={onPrev} className="btn btn-secondary" disabled={isSubmitting}>
          <ArrowLeft size={16} /> Back
        </button>
        <button onClick={onSubmit} className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
          {!isSubmitting && <Check size={16} />}
        </button>
      </div>
    </div>
  );
}

// ============================================================
// Confirmation
// ============================================================
function ConfirmationStep({
  bookingRef,
  formData,
  selectedService,
}: {
  bookingRef: string;
  formData: Partial<BookingFormData>;
  selectedService: typeof services[0] | undefined;
}) {
  const formattedDate = formData.date ? formatDate(new Date(formData.date + 'T00:00:00')) : '';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ textAlign: 'center', padding: '2rem 0' }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
        style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: 'var(--sage-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
        }}
      >
        <Check size={36} style={{ color: 'var(--sage)' }} strokeWidth={3} />
      </motion.div>

      <h2 style={{ marginBottom: '0.75rem' }}>You&apos;re all set.</h2>
      <p style={{ fontSize: '1.0625rem', marginBottom: '0.5rem' }}>
        Your booking request has been received.
      </p>
      <p style={{
        fontWeight: 700,
        fontSize: '0.875rem',
        color: 'var(--foreground-muted)',
        letterSpacing: '0.05em',
        marginBottom: '2rem',
      }}>
        Reference: {bookingRef}
      </p>

      <div style={{
        background: 'var(--card)',
        border: '1px solid var(--card-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        textAlign: 'left',
        maxWidth: '400px',
        margin: '0 auto 2rem',
      }}>
        <p style={{ fontWeight: 700, marginBottom: '0.75rem', fontSize: '1rem', color: 'var(--foreground)' }}>Booking Summary</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--foreground-muted)', fontSize: '0.9375rem' }}>Service</span>
            <span style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{selectedService?.name}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--foreground-muted)', fontSize: '0.9375rem' }}>Date</span>
            <span style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{formattedDate}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--foreground-muted)', fontSize: '0.9375rem' }}>Time</span>
            <span style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{formData.time}</span>
          </div>
        </div>
      </div>

      <p style={{ fontSize: '0.875rem', color: 'var(--foreground-muted)', maxWidth: '400px', margin: '0 auto' }}>
        We&apos;ll be in touch to confirm your booking. If you have any questions, call us on 07542 834 640.
      </p>
    </motion.div>
  );
}
