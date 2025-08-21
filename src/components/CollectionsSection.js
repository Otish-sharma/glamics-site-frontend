
import React from "react";

const CollectionsSection = () => {
  return (
    <div className="max-w-7xl mx-auto mt-14 bg-gray-100 rounded-3xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Women’s Collection */}
        <div className="bg-pink-500 text-white rounded-2xl p-6 flex flex-col items-start relative overflow-hidden">
          <span className="text-sm uppercase bg-white text-pink-500 px-3 py-1 rounded-full w-fit mb-3">
            Trending Products
          </span>
          <h3 className="text-2xl font-bold">Women’s Collection</h3>
          <p className="text-sm mt-1">Up to 22% off Gimbals</p>
          <a href="/" className="mt-4 inline-flex items-center font-semibold text-white">
            Collection →
          </a>
          <img
            src="https://shadesenterprises.com/wp-content/uploads/2023/01/29-400x400.jpg"
            alt="Women Collection"
            className="absolute bottom-0 right-0 w-48 h-64 object-cover -mr-16 -mb-16"
          />
        </div>

        {/* Men’s Collection */}
        <div className="bg-orange-400 text-white rounded-2xl p-6 flex flex-col items-start relative overflow-hidden">
          <span className="text-sm uppercase bg-white text-orange-500 px-3 py-1 rounded-full w-fit mb-3">
            Trending Products
          </span>
          <h3 className="text-2xl font-bold">Men’s Collection</h3>
          <p className="text-sm mt-1">Up to 22% off Gimbals</p>
          <a href="/" className="mt-4 inline-flex items-center font-semibold text-white">
            Collection →
          </a>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrVuS95nlszvU_STUuYiLkLTi6nQN4dUc9mA&s"
            alt="Men Collection"
            className="absolute bottom-0 right-0 w-48 h-64 object-cover -mr-16 -mb-16"
          />
        </div>

        {/* Kids’ Collection */}
        <div className="bg-blue-500 text-white rounded-2xl p-6 flex flex-col items-start relative overflow-hidden">
          <span className="text-sm uppercase bg-white text-blue-500 px-3 py-1 rounded-full w-fit mb-3">
            Trending Products
          </span>
          <h3 className="text-2xl font-bold">Kids’ Collection</h3>
          <p className="text-sm mt-1">Up to 22% off Gimbals</p>
          <a href="/" className="mt-4 inline-flex items-center font-semibold text-white">
            Collection →
          </a>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBi-fnJ6DvMXwB2aIYTH2FsTyCX9hW1LyK4Q&s"
            alt="Kids Collection"
            className="absolute bottom-0 right-0 w-48 h-64 object-cover -mr-16 -mb-16"
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionsSection;