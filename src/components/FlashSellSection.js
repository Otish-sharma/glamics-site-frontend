import React, { useState, useEffect } from "react";
import api from '../services/api';

const FlashSellSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
    const handleProductsUpdated = () => loadProducts();
    window.addEventListener('productsUpdated', handleProductsUpdated);
    return () => window.removeEventListener('productsUpdated', handleProductsUpdated);
  }, []);

  const loadProducts = async () => {
    try {
      const data = await api.getProducts();
      setProducts(data.slice(0, 5));
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-7xl mx-auto mt-14 bg-pink-100 rounded-3xl p-8 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <span className="text-sm text-pink-600 uppercase font-semibold">
            New Collection
          </span>
          <h2 className="text-2xl font-bold mt-2">Trending Flash Sell</h2>
        </div>

        {/* Countdown */}
        <div className="flex gap-4 mt-4 md:mt-0">
          {["15 Days", "23 Hours", "45 Min", "40 Sec"].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg px-4 py-2 text-center shadow">
              <p className="font-bold">{item.split(" ")[0]}</p>
              <p className="text-xs text-gray-500">{item.split(" ")[1]}</p>
            </div>
          ))}
        </div>

        <button className="mt-4 md:mt-0 bg-pink-600 text-white px-6 py-2 rounded-full font-semibold">
          View All Collection →
        </button>
      </div>

      {/* Products Row */}
      <div className="flex gap-6 overflow-x-auto mt-8 pb-4">
        {loading ? (
          <div className="text-center py-8">Loading products...</div>
        ) : products.length === 0 ? (
          <div className="text-center py-8">No products found</div>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow p-4 min-w-[200px] flex-shrink-0"
            >
              <img
                src={product.image_url}
                alt={product.name}
                className="rounded-lg mb-3 w-full h-32 object-cover"
              />
              <h3 className="font-bold">${parseFloat(product.price).toFixed(2)}</h3>
              <p className="text-pink-600 text-sm">{product.name}</p>
              <p className="text-xs text-gray-400">{product.category_name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FlashSellSection;
