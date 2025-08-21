import React, { useState, useEffect } from 'react';
import api from '../services/api';

const CategoryProducts = ({ selectedCategory, onBack }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedCategory) {
      loadCategoryProducts();
    }
  }, [selectedCategory]);

  const loadCategoryProducts = async () => {
    try {
      setLoading(true);
      const data = await api.getProducts({ category: selectedCategory });
      setProducts(data);
    } catch (error) {
      console.error('Error loading category products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!selectedCategory) return null;

  return (
    <div className="max-w-7xl mx-auto mt-14 bg-gray-100 rounded-3xl p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <button
            onClick={onBack}
            className="text-pink-600 hover:text-pink-800 mb-2 flex items-center"
          >
            ← Back to Categories
          </button>
          <h2 className="text-3xl font-bold">{selectedCategory} Collection</h2>
          <p className="text-gray-600">Discover our {selectedCategory.toLowerCase()} products</p>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading {selectedCategory.toLowerCase()} products...</div>
      ) : products.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No products found in {selectedCategory} category</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition"
            >
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl mb-3"
              />
              <div>
                <p className="text-red-500 font-semibold text-lg">
                  ${parseFloat(product.price).toFixed(2)}
                </p>
                <h4 className="font-medium text-gray-800">{product.name}</h4>
                <p className="text-xs text-gray-500 uppercase">{product.category_name}</p>
                <div className="flex mt-2 space-x-1 text-yellow-500 text-sm">
                  {Array(Math.floor(product.rating || 5))
                    .fill()
                    .map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                </div>
                {product.description && (
                  <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                    {product.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;