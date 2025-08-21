import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import api from '../services/api';

const CategoryGrid = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCategories();
    
    // Listen for category updates from admin dashboard
    const handleCategoriesUpdate = () => {
      loadCategories();
    };
    
    window.addEventListener('categoriesUpdated', handleCategoriesUpdate);
    
    return () => {
      window.removeEventListener('categoriesUpdated', handleCategoriesUpdate);
    };
  }, []);

  const loadCategories = async () => {
    try {
      const data = await api.getCategories();
      setCategories(data);
    } catch (error) {
      console.error('Error loading categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (categoryName) => {
    if (onCategorySelect) {
      onCategorySelect(categoryName);
    }
  };
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto mt-10 text-center">
        Loading categories...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((cat) => (
        <div
          key={cat.id}
          onClick={() => handleCategoryClick(cat.name)}
          className="flex items-center justify-between bg-pink-50 rounded-xl p-3 hover:shadow-md transition cursor-pointer hover:bg-pink-100"
        >
          <div className="flex items-center space-x-3">
            <img
              src={cat.image_url?.startsWith('/uploads/') 
                ? `http://localhost:5000${cat.image_url}` 
                : cat.image_url || '/placeholder.svg'
              }
              alt={cat.name}
              className="w-12 h-12 rounded-full object-cover"
              onError={(e) => {
                e.target.src = '/placeholder.svg';
              }}
            />
            <span className="font-medium">{cat.name}</span>
          </div>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-pink-500 text-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
