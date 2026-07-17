import HeroBanner from '../components/HeroBanner';
import FlashRibbon from '../components/FlashRibbon';
import ShopByOccasionSection from '../components/ShopByOccasionSection';
import ProfessionalServicesSection from '../components/ProfessionalServicesSection';

import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <HeroBanner />
      <FlashRibbon />
      <ShopByOccasionSection />
      <ProfessionalServicesSection />

      <Testimonials />
    </div>
  );
};

export default HomePage;
