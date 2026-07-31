import HeroBanner from '../components/HeroBanner';
import FlashRibbon from '../components/FlashRibbon';
import ShopByOccasionSection from '../components/ShopByOccasionSection';
import Testimonials from '../components/Testimonials';
import FeaturedCategoriesProducts from '../components/FeaturedCategoriesProducts';
import DealsSection from '../components/DealsSection';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <Helmet>
        <title>SL Shopee | Electronics, Furniture & Home Appliances</title>
        <meta name="description" content="Buy TVs, Mobiles, ACs, Refrigerators, Washing Machines, Furniture and Home Appliances at the best prices from SL Shopee." />
        <meta name="keywords" content="Electronics, Furniture, TV, Mobile, AC, Washing Machine, Refrigerator" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://slshopee.com/" />
        {/* Open Graph */}
        <meta property="og:title" content="SL Shopee" />
        <meta property="og:description" content="Electronics & Home Appliances" />
        <meta property="og:url" content="https://slshopee.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://slshopee.com/og-image.jpg" />
      </Helmet>
      <HeroBanner />
      <DealsSection />
      <FeaturedCategoriesProducts />
      <ShopByOccasionSection />
      <FlashRibbon />
      <Testimonials />
    </div>
  );
};

export default HomePage;
