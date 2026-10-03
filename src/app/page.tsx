import { Hero } from '@/components/hero/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { SunshineDifference } from '@/components/sections/SunshineDifference';
import { ServiceGallery } from '@/components/services/ServiceGallery';
import { CinematicPhotoBreak } from '@/components/sections/CinematicPhotoBreak';
import { BeforeAfterSlider } from '@/components/sections/BeforeAfterSlider';
import { DarkCinematicSection } from '@/components/sections/DarkCinematicSection';
import { SunlightScroll } from '@/components/sections/SunlightScroll';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { CleaningChecklist } from '@/components/sections/CleaningChecklist';
import { HomeFAQ } from '@/components/sections/HomeFAQ';
import { HomeBookingCTA } from '@/components/sections/HomeBookingCTA';
import { photography } from '@/data/photography';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <SunshineDifference />
      <ServiceGallery />
      <CinematicPhotoBreak
        imageSrc={photography.breaks.sunlitKitchen}
        alt="Sunlight pouring across spotless luxury kitchen"
        quote="Every surface restored to its cleanest, most luminous potential."
        caption="Greater London Residential & Commercial Portfolios"
      />
      <BeforeAfterSlider />
      <DarkCinematicSection />
      <SunlightScroll />
      <ProcessTimeline />
      <CleaningChecklist />
      <HomeFAQ />
      <HomeBookingCTA />
    </>
  );
}
