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
        <title>SL Shopee | Best Electronics Store & Online Furniture Store</title>
        <meta name="description" content="Shop at SL Shopee, the best electronics store for mobile phones, smart TVs, and home appliances. Buy modern furniture and consumer electronics online." />
        <meta name="keywords" content="Electronics Store, Online Electronics Store, Electronics Shopping, Buy Electronics Online, Best Electronics Store, Electronics Deals, Consumer Electronics, Electronic Gadgets, Home Appliances, Home Appliance Store, Smart Home Appliances, Home Appliances Online, Buy Home Appliances Online, Kitchen Appliances, Kitchen Appliance Store, Buy Kitchen Appliances, Mobile Store, Mobile Phones, Buy Mobile Online, Latest Smartphones, Best Mobile Phones, 5G Smartphones, Android Phones, Apple iPhone, Samsung Mobiles, OnePlus Mobiles, Xiaomi Mobiles, Realme Mobiles, Vivo Mobiles, Oppo Mobiles, Nothing Phone, Budget Smartphones, Premium Smartphones, Mobile Phone Deals, Furniture Store, Online Furniture Store, Home Furniture, Modern Furniture, Living Room Furniture, Bedroom Furniture, Wooden Furniture, Sofa Set, L Shape Sofa, Wooden Sofa, Dining Table, Study Table, Office Chair, TV Unit, Wardrobe, Coffee Table, Shoe Rack, Bookshelf, Storage Cabinet, LED TV, Smart TV, Android TV, Google TV, OLED TV, QLED TV, 4K Smart TV, Television Store, Buy Smart TV Online, Washing Machine, Front Load Washing Machine, Top Load Washing Machine, Buy Washing Machine, Refrigerator, Double Door Refrigerator, Single Door Refrigerator, Side by Side Refrigerator, Buy Refrigerator Online, Air Conditioner, Split AC, Window AC, Inverter AC, Buy AC Online, Water Purifier, RO Water Purifier, Microwave Oven, Mixer Grinder, Air Fryer, Rice Cooker, Electric Kettle, Induction Stove, Chimney, Gas Stove, Ceiling Fan, Table Fan, Air Cooler, Smart Watch, Bluetooth Speaker, Earbuds, Headphones, Laptop Accessories, Mobile Accessories, Samsung, Apple, LG, Sony, Whirlpool, Haier, Bosch, IFB, Godrej, Panasonic, Havells, Philips, Prestige, Bajaj, Crompton, Usha, Buy iPhone Online, Buy Samsung Mobile, Buy Furniture Online, Buy Electronics Online India, Best Price Electronics, Discount Electronics, Electronics Offers, Furniture Sale, Mobile Offers, Smart TV Offers, Home Appliance Deals, Best Smart TV Under 50000, Best Mobile Under 20000, Best Refrigerator for Home, Best Washing Machine for Family, Affordable Furniture Online, Best Sofa Set for Living Room, Electronics Shop Near Me, Mobile Store Near Me, Furniture Store Near Me, Home Appliances Near Me, TV Shop Near Me, Best Electronics Shop, Trusted Electronics Store, Genuine Electronics, Online Shopping India, Electronics and Furniture Store, Electronics and Home Appliances, SL Shopee, SL Shopee Electronics, SL Shopee Mobiles, SL Shopee Furniture" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://slshopee.com/" />
        {/* Open Graph */}
        <meta property="og:title" content="SL Shopee" />
        <meta property="og:description" content="Electronics & Home Appliances" />
        <meta property="og:url" content="https://slshopee.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://slshopee.com/og-image.jpg" />
        {/* JSON-LD Schema for Google to understand the store */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "SL Shopee",
              "url": "https://slshopee.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://slshopee.com/shop?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SL Shopee",
              "url": "https://slshopee.com",
              "logo": "https://slshopee.com/assets/logo.png",
              "description": "Buy TVs, Mobiles, ACs, Refrigerators, and Home Appliances at the best prices.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9999999999",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "en"
              }
            }
          `}
        </script>
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
