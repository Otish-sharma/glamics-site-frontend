const API_BASE_URL = 'http://localhost:5000/api';

// Generic API call function
const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// API functions
export const api = {
  // Categories
  getCategories: () => apiCall('/categories'),

  // Products
  getProducts: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiCall(`/products${queryString ? `?${queryString}` : ''}`);
  },

  getProduct: (id) => apiCall(`/products/${id}`),

  // Reviews
  getReviews: () => apiCall('/reviews'),

  addReview: (reviewData) => apiCall('/reviews', {
    method: 'POST',
    body: JSON.stringify(reviewData),
  }),

  // Newsletter
  subscribeNewsletter: (email) => apiCall('/newsletter', {
    method: 'POST',
    body: JSON.stringify({ email }),
  }),

  // Admin functions
  admin: {
    // Products
    addProduct: (productData) => apiCall('/admin/products', {
      method: 'POST',
      body: JSON.stringify(productData),
    }),

    updateProduct: (id, productData) => apiCall(`/admin/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(productData),
    }),

    deleteProduct: (id) => apiCall(`/admin/products/${id}`, {
      method: 'DELETE',
    }),

    // Categories
    addCategory: (categoryData) => apiCall('/admin/categories', {
      method: 'POST',
      body: JSON.stringify(categoryData),
    }),

    updateCategory: (id, categoryData) => apiCall(`/admin/categories/${id}`, {
      method: 'PUT',
      body: JSON.stringify(categoryData),
    }),

    deleteCategory: (id) => apiCall(`/admin/categories/${id}`, {
      method: 'DELETE',
    }),
  },
};

export default api;