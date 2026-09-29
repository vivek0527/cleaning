import { Hero } from '@/components/hero/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { SunshineDifference } from '@/components/sections/SunshineDifference';
import { ServiceGallery } from '@/components/services/ServiceGallery';
import { BeforeAfterSlider } from '@/components/sections/BeforeAfterSlider';
import { SunlightScroll } from '@/components/sections/SunlightScroll';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { CleaningChecklist } from '@/components/sections/CleaningChecklist';
import { HomeFAQ } from '@/components/sections/HomeFAQ';
import { HomeBookingCTA } from '@/components/sections/HomeBookingCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <SunshineDifference />
      <ServiceGallery />
      <BeforeAfterSlider />
      <SunlightScroll />
      <ProcessTimeline />
      <CleaningChecklist />
      <HomeFAQ />
      <HomeBookingCTA />
    </>
  );
}
