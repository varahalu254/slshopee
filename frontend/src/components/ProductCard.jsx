import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const getImageSrc = (url, apiUrl) => {
  if (!url) return;
  return url.startsWith('http') ? url : `${apiUrl}${url}`;
};

const ProductCard = ({ product, showWishlist = false, isShopPage = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart, cart } = useCart();
  const apiUrl = import.meta.env.VITE_API_URL;
  const productId = product.id || product._id;
  const isInCart = cart.some(item => (item.id || item._id) === productId);

  const mainImage = (() => {
    if (product.images && product.images.length > 0) return product.images[0].url || product.images[0];
    return product.image_url || product.image || null;
  })();

  const handleCardClick = () => navigate(`/product/${productId}`);

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated()) {
      navigate('/login', { state: { from: { pathname: `/product/${productId}`, search: location.search } } });
      return;
    }
    toggleWishlist(product);
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated()) {
      navigate('/login', { state: { from: { pathname: `/product/${productId}`, search: location.search } } });
      return;
    }
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInCart) return;
    if (!isAuthenticated()) {
      navigate('/login', { state: { from: { pathname: `/product/${productId}`, search: location.search } } });
      return;
    }
    addToCart({ ...product, image: getImageSrc(mainImage, apiUrl), quantity: 1 });
  };

  const rating = product.rating || 5;
  const reviewCount = useMemo(() => product.reviews_count || Math.floor(Math.random() * 50) + 10, [product.reviews_count]);

  return (
    <div
      onClick={handleCardClick}
      className={`group bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-purple-100 cursor-pointer ${isShopPage
          ? 'lg:rounded-2xl p-4 lg:p-4 lg:hover:shadow-2xl lg:hover:shadow-purple-100 flex flex-row lg:flex-col gap-4 lg:gap-0 w-full'
          : 'rounded-2xl p-4 flex flex-col gap-0'
        }`}
    >
      {/* Image Container */}
      <div className={`relative rounded-xl overflow-hidden flex items-center justify-center ${isShopPage
          ? 'w-[110px] min-w-[110px] sm:w-[130px] sm:min-w-[130px] shrink-0 lg:w-full aspect-[3/4] lg:aspect-square lg:mb-5 bg-transparent lg:bg-gray-50'
          : 'w-full aspect-square mb-5 bg-gray-50'
        }`}>
        <img
          src={getImageSrc(mainImage, apiUrl)}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=400&fit=crop';
          }}
        />

        {/* Badges */}
        <div className={`absolute flex flex-col w-full flex-wrap pr-2 border-box ${isShopPage ? 'top-2 left-2 gap-1' : 'top-3 left-3 gap-2'}`}>
          {product.is_trending && (
            <span className={`bg-[#F7D060] text-gray-900 font-bold rounded-full uppercase tracking-wider shadow-sm max-w-fit ${isShopPage ? 'text-[9px] lg:text-[10px] px-2 py-0.5' : 'text-[10px] px-3 py-1'}`}>
              Trending
            </span>
          )}
          {product.is_handmade && (
            <span className={`bg-[#FCE4EC] text-[#9D4E8D] font-bold rounded-full uppercase tracking-wider shadow-sm max-w-fit ${isShopPage ? 'text-[9px] lg:text-[10px] px-2 py-0.5' : 'text-[10px] px-3 py-1'}`}>
              Handmade
            </span>
          )}
          {!product.is_trending && !product.is_handmade && product.discount > 0 && (
            <span className={`${isShopPage ? 'hidden lg:inline-block' : 'inline-block'} bg-[var(--color-primary)] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm max-w-fit`}>
              {product.discount}% Off
            </span>
          )}
        </div>

        {/* Wishlist Button - Desktop or Normal */}
        {showWishlist && (
          <button
            onClick={handleWishlist}
            className={`${isShopPage ? 'hidden lg:block' : 'block'} absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-sm hover:bg-white transition-all duration-300 group/wishlist`}
          >
            <Heart
              className={`w-4 h-4 transition-all duration-300 ${isInWishlist(product.id) ? 'fill-[var(--color-primary)] text-[var(--color-primary)] scale-110' : 'text-gray-400 group-hover/wishlist:text-[var(--color-primary)]'}`}
            />
          </button>
        )}
      </div>

      {/* Mobile/Tablet Content (Shop Page Only) */}
      {isShopPage && (
        <div className="flex lg:hidden flex-col w-full relative pt-0.5">
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-sans text-[15px] font-medium leading-tight text-gray-800 line-clamp-2 pr-6">
              {product.name}
            </h3>
            {showWishlist && (
              <button onClick={handleWishlist} className="absolute top-0 right-0 p-1">
                <Heart className={`w-[18px] h-[18px] transition-all duration-300 ${isInWishlist(product.id) ? 'fill-[var(--color-primary)] text-[var(--color-primary)]' : 'text-gray-300'}`} />
              </button>
            )}
          </div>
          <div className="flex items-center gap-1.5 mt-1.5 mb-2">
            <div className="flex items-center bg-green-700 text-white px-1 py-[1px] rounded-[3px] text-[10px] font-bold">
              <span className="mr-[2px]">{rating}</span><Star className="w-2.5 h-2.5 fill-white" />
            </div>
            <span className="text-[11px] text-gray-500 font-medium">({reviewCount.toLocaleString()})</span>
            <div className="flex items-center">
              <span className="bg-blue-600 text-white text-[9px] font-bold px-1 rounded-sm italic pr-1.5">f</span>
              <span className="text-gray-600 font-bold text-[9px] italic ml-[-2px]">Assured</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-1 mt-0.5 flex-wrap">
            {product.discount > 0 ? (
              <span className="text-green-600 font-bold text-[13px] tracking-tight">↓{product.discount}%</span>
            ) : (product.regular_price && product.regular_price > product.price) ? (
              <span className="text-green-600 font-bold text-[13px] tracking-tight">↓{Math.round(((product.regular_price - product.price) / product.regular_price) * 100)}%</span>
            ) : null}
            {product.regular_price && product.regular_price > product.price && (
              <span className="text-gray-500 line-through text-[13px]">₹{Number(product.regular_price).toLocaleString('en-IN')}</span>
            )}
            <span className="text-black font-bold text-[18px] leading-none ml-1">₹{Number(product.price).toLocaleString('en-IN')}</span>
          </div>
          <div className="flex items-center gap-1 mb-1 mt-0.5">
            <span className="italic text-[12px] font-extrabold text-[#2874f0] tracking-tighter">wow!</span>
            <span className="text-[#2874f0] font-bold text-[13px]">₹{Math.floor(Number(product.price) * 0.95).toLocaleString('en-IN')}</span>
            <span className="text-gray-500 text-[11px] font-medium">with Bank offer</span>
          </div>
          <div className="flex flex-col gap-0.5 mt-2 mb-2">
            <span className="text-[#ff6161] text-[11px] font-bold tracking-wide">Only few left</span>
            <span className="text-gray-500 text-[11px]">1 year warranty{product.brand ? ` by ${product.brand}` : ''}</span>
          </div>
          <div className="mt-auto pt-2">
            <span className="text-[#2874f0] font-semibold text-[13px]">View All Variants</span>
          </div>
        </div>
      )}

      {/* Desktop / Default Normal Content */}
      <div className={`${isShopPage ? 'hidden lg:block' : 'block'} px-1`}>
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-[var(--color-primary)] transition-colors line-clamp-1">
            {product.name}
          </h3>
          <div className="flex flex-col items-end">
            {product.regular_price && product.regular_price > product.price && (
              <span className="font-sans text-[10px] text-gray-400 line-through whitespace-nowrap mb-0.5 leading-none">
                ₹{product.regular_price}
              </span>
            )}
            <span className="font-sans font-bold text-base text-[var(--color-primary)] whitespace-nowrap leading-none">
              ₹{product.price}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 mb-6">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < rating ? 'fill-[#F7D060] text-[#F7D060]' : 'text-gray-200'}`} />
            ))}
          </div>
          <span className="text-[10px] text-gray-400 font-body font-medium">({reviewCount})</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={handleBuyNow} className="flex-1 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-xl font-body font-bold text-[13px] flex items-center justify-center transition-all shadow-md active:scale-95 px-2">
            Buy now
          </button>
          <button onClick={handleAddToCart} disabled={isInCart} className={`flex-1 py-3 text-white rounded-xl font-body font-bold text-[13px] flex items-center justify-center gap-1.5 transition-all shadow-md px-2 ${isInCart ? 'bg-green-600 cursor-not-allowed opacity-90' : 'bg-[#36454F] hover:bg-gray-800 active:scale-95'}`}>
            <ShoppingCart className="w-3.5 h-3.5" />
            {isInCart ? 'Added' : 'Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
