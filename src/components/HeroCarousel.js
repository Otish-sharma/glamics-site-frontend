import React from "react";
import Slider from "react-slick";

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-6 rounded-2xl overflow-hidden shadow-md">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative">
          <img
            src="/banner1.jpg"
            alt="Fashion 1"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute left-10 top-1/4 text-left">
            <p className="text-pink-500 text-sm tracking-widest">
              Perfect for Summer Evenings
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Casual and Stylish for <br /> All Seasons
            </h1>
            <p className="mt-4 text-lg">
              Starting from <span className="text-red-500 font-bold">$129</span>
            </p>
            <button className="mt-6 px-6 py-3 border border-gray-800 rounded-full text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition">
              SHOP NOW →
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src="/banner2.jpg"
            alt="Fashion 2"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute left-10 top-1/4 text-left">
            <p className="text-pink-500 text-sm tracking-widest">
              Latest Trends
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Stylish & Trendy Outfits
            </h1>
            <p className="mt-4 text-lg">
              Starting from <span className="text-red-500 font-bold">$99</span>
            </p>
            <button className="mt-6 px-6 py-3 border border-gray-800 rounded-full text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition">
              SHOP NOW →
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;
