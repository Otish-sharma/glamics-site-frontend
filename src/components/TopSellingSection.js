import React, { useState, useEffect } from "react";
import api from '../services/api';

const TopSellingSection = () => {
  const [activeFilter, setActiveFilter] = useState("All Products");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, [activeFilter]);

  useEffect(() => {
    const handleProductsUpdated = () => {
      loadProducts();
    };
    
    window.addEventListener('productsUpdated', handleProductsUpdated);
    return () => window.removeEventListener('productsUpdated', handleProductsUpdated);
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      let params = {};
      if (activeFilter === 'Best Selling') params.filter = 'best-selling';
      if (activeFilter === 'Top Rating') params.filter = 'top-rating';
      
      const data = await api.getProducts(params);
      setProducts(data);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const filters = ["All Products", "Best Selling", "On Selling", "Top Rating"];

  return (
    <div className="max-w-7xl mx-auto mt-14 bg-gray-100 rounded-3xl p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="mb-4 md:mb-0">
          <p className="uppercase text-sm text-pink-500 tracking-widest">
            Most Selling Items
          </p>
          <h2 className="text-3xl font-bold">Top selling Categories This Week</h2>
        </div>
        <div className="flex space-x-3">
          {filters.map((f, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                activeFilter === f
                  ? "bg-pink-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {loading ? (
          <div className="col-span-full text-center py-8">Loading products...</div>
        ) : products.length === 0 ? (
          <div className="col-span-full text-center py-8">No products found</div>
        ) : (
          products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition"
            >
              <img
                src={p.image_url}
                alt={p.name}
                className="w-full h-40 object-cover rounded-xl"
              />
              <div className="mt-3">
                <p className="text-red-500 font-semibold">${parseFloat(p.price).toFixed(2)}</p>
                <h4 className="font-medium">{p.name}</h4>
                <p className="text-xs text-gray-500">{p.category_name?.toUpperCase()}</p>
                {/* Rating */}
                <div className="flex mt-2 space-x-1 text-yellow-500 text-sm">
                  {Array(Math.floor(p.rating || 5))
                    .fill()
                    .map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TopSellingSection;
