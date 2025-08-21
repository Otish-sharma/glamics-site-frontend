

import React from "react";

const products = [
  { id: 1, name: "Orange Airsuit", price: 98, discount: "24%", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYSIZRs4nQe0H93_YJn1F1dJnKAG1uPJ3NQ&s" },
  { id: 2, name: "Orange Airsuit", price: 99, discount: "25%", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMFBw1BK1xpv63VcvWMUiIq1OU0wdT-33pnw&s" },
  { id: 3, name: "Orange Airsuit", price: 99, discount: "23%", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfbLPFjMtApJMtiKsVsv5SNotLGXbNGjGlQ&s" },
  { id: 4, name: "Orange Airsuit", price: 99, discount: "25%", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjxi-sC-BeQ86AvO6gFPTpbvkmCe83u5pk4w&s" },
  { id: 5, name: "Orange Airsuit", price: 99, discount: "23%", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJ2ARig-Xf2Gi-K5nZ4VhA9A_O5P9syKwDQ&s" },
  { id: 6, name: "Orange Airsuit", price: 99, discount: "25%", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujfrG39CPmbD7Li4L2-5BFbEMxf8vjgTQGw&s" },
];

const ShoppingSection = () => {
  return (
    <div className="max-w-7xl mx-auto mt-14 bg-pink-50 rounded-3xl p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="uppercase text-sm text-pink-500 tracking-widest">
            Summer Collection
          </p>
          <h2 className="text-3xl font-bold">Shopping Every Day</h2>
        </div>
        <button className="px-5 py-2 border border-gray-700 rounded-full text-sm font-medium hover:bg-gray-800 hover:text-white transition">
          More Collection →
        </button>
      </div>
      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Promo Banners */}
        <div className="col-span-1 flex flex-col space-y-6">
          <div className="bg-gradient-to-b from-pink-400 to-pink-600 text-white rounded-2xl p-6 flex flex-col justify-end h-full relative overflow-hidden">
            <img
              src="https://www.creaturesofhabit.in/cdn/shop/files/Ginger_XS_10291009_1.jpg?v=1703277713"
              alt="Trending Promo 1"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10">
              <h3 className="text-lg font-semibold">Trending Now Only This Weekend!</h3>
              <button className="mt-4 px-4 py-2 bg-white text-pink-600 rounded-full font-semibold hover:bg-gray-200">
                SHOP NOW →
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-b from-pink-400 to-pink-600 text-white rounded-2xl p-6 flex flex-col justify-end h-full relative overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYSIZRs4nQe0H93_YJn1F1dJnKAG1uPJ3NQ&s"
              alt="Trending Promo 2"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10">
              <h3 className="text-lg font-semibold">Trending Now Only This Weekend!</h3>
              <button className="mt-4 px-4 py-2 bg-white text-pink-600 rounded-full font-semibold hover:bg-gray-200">
                SHOP NOW →
              </button>
            </div>
          </div>
        </div>
        {/* Product Cards */}
        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition">
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-semibold">${p.price}.00</p>
                <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
                  {p.discount} Off
                </span>
              </div>
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-56 object-cover rounded-xl"
              />
              <div className="mt-4">
                <h4 className="font-medium">{p.name}</h4>
                <p className="text-sm text-pink-500 mt-1">FASHION BAG</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingSection;