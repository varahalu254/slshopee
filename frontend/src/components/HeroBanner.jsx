import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fullUrl } from '../lib/utils';

const HeroBanner = () => {
  const navigate = useNavigate();
  const [bgImage, setBgImage] = useState('https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=2070');

  return (
    <section className="relative w-full h-[60vh] overflow-hidden">
      {/* === MOBILE / TABLET: image as full centered background === */}
      <div className="absolute inset-0 lg:hidden z-0">
        <img
          src={bgImage}
          alt="Hero Background"
          className="w-full h-full object-cover object-[75%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      {/* === DESKTOP: side-by-side layout === */}
      <div className="hidden lg:flex absolute inset-0">
        {/* Left spacer for text (handled by content below) */}
        <div className="w-[60%] bg-white" />
        {/* Right image */}
        <div className="relative w-[40%]">
          <img
            src={bgImage}
            alt="Hero Background"
            className="w-full h-full object-cover object-[center_25%]"
          />
          {/* Soft left-edge blend */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-end sm:items-center container-custom pb-4 sm:pb-4 sm:pt-4">
        <div className="lg:max-w-xl md:max-w-2xl max-w-full animate-slide-up text-left">
          {/* Badge */}
          <span className="badge-yellow mb-2 inline-block">Premium Electronics & Electricals</span>

          {/* Headline */}
          <h1 className="text-[24px] leading-[1.1] md:text-7xl font-display font-bold mb-4 text-gray-900 uppercase">
            SL SHOPEE
          </h1>

          <p className="text-base md:text-xl text-gray-600 mb-6 max-w-lg font-body leading-relaxed">
            Discover a wide range of premium electronic and electrical devices. High-quality products designed for your modern lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/shop')}
              className="btn-primary flex items-center justify-center group"
            >
              Shop Now
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button
              onClick={() => navigate('/shop')}
              className="px-8 py-4 sm:py-3 rounded-md font-medium text-sm border border-gray-400 text-gray-700 hover:bg-gray-50 transition-all shadow-sm text-center"
            >
              Explore Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
