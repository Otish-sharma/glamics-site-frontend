import React from "react";

const TrendingBanner = () => {
  return (
    <div className="max-w-7xl mx-auto mt-14 rounded-3xl overflow-hidden relative">
      <div className="bg-gradient-to-r from-pink-500 to-orange-400 h-60 flex items-center justify-between px-10 text-white relative">
        {/* Text */}
        <div>
          <span className="uppercase text-sm bg-white text-pink-600 px-3 py-1 rounded-full font-medium">
            Trending Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Get 30% Discount On All Hudis!
          </h2>
          <div className="flex flex-wrap mt-3 space-x-3 text-sm opacity-90">
            <span>✓ Zara</span>
            <span>✓ Guccie</span>
            <span>✓ Publo</span>
            <span>✓ Men’s</span>
            <span>✓ Women’s</span>
          </div>
        </div>

        {/* Button */}
        <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100">
          Check Discount →
        </button>

        {/* Image (absolute positioned) */}
        <img
          src="/banner-model.png"
          alt="Discount Model"
          className="absolute right-10 bottom-0 h-60 object-contain hidden md:block"
        />
      </div>
    </div>
  );
};

export default TrendingBanner;
