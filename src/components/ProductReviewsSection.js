import React, { useState, useEffect } from "react";
import api from '../services/api';

const ProductReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const data = await api.getReviews();
      setReviews(data.slice(0, 4)); // Show only first 4 reviews
    } catch (error) {
      console.error('Error loading reviews:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-7xl mx-auto mt-14">
      <div className="text-center mb-8">
        <span className="uppercase text-pink-600 text-sm font-semibold">
          Customer Reviews
        </span>
        <h2 className="text-2xl font-bold mt-2">Product Reviews</h2>
        <p className="text-gray-500 text-sm">
          Our references are very valuable, the result of a great effort...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {loading ? (
          <div className="col-span-full text-center py-8">Loading reviews...</div>
        ) : reviews.length === 0 ? (
          <div className="col-span-full text-center py-8">No reviews found</div>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl shadow p-6">
              <div className="flex mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
                {[...Array(5 - review.rating)].map((_, i) => (
                  <span key={i} className="text-gray-300">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-4">{review.review_text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={review.image_url}
                  alt={review.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductReviewsSection;
