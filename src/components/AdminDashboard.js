import React, { useState, useEffect } from 'react';
import api from '../services/api';
// import CollectionManager from './CollectionManager';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image_url: '',
    category_id: '',
    description: ''
  });
  const [categoryForm, setCategoryForm] = useState({ name: '', image_url: '' });
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [imageOption, setImageOption] = useState('url');
  const [imageFile, setImageFile] = useState(null);
  const [productImageOption, setProductImageOption] = useState('url');
  const [productImageFile, setProductImageFile] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [productsData, categoriesData] = await Promise.all([
        api.getProducts(),
        api.getCategories()
      ]);
      setProducts(productsData);
      setCategories(categoriesData);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (productImageOption === 'upload' && productImageFile) {
        const formDataObj = new FormData();
        formDataObj.append('name', formData.name);
        formDataObj.append('price', formData.price);
        formDataObj.append('category_id', formData.category_id);
        formDataObj.append('description', formData.description);
        formDataObj.append('image', productImageFile);
        
        const url = editingProduct ? `/api/admin/products/${editingProduct.id}` : '/api/admin/products';
        const method = editingProduct ? 'PUT' : 'POST';
        await fetch(`${process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000'}${url}`, { method, body: formDataObj });
      } else {
        const formDataObj = new FormData();
        formDataObj.append('name', formData.name);
        formDataObj.append('price', formData.price);
        formDataObj.append('category_id', formData.category_id);
        formDataObj.append('description', formData.description);
        if (formData.image_url) {
          formDataObj.append('image_url', formData.image_url);
        }
        
        const url = editingProduct ? `/api/admin/products/${editingProduct.id}` : '/api/admin/products';
        const method = editingProduct ? 'PUT' : 'POST';
        await fetch(`${process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000'}${url}`, { method, body: formDataObj });
      }
      setShowForm(false);
      setEditingProduct(null);
      setFormData({ name: '', price: '', image_url: '', category_id: '', description: '' });
      setProductImageFile(null);
      setProductImageOption('url');
      await loadData();
      // Trigger a custom event to refresh other components
      window.dispatchEvent(new CustomEvent('productsUpdated'));
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Error saving product. Please try again.');
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      image_url: product.image_url,
      category_id: product.category_id,
      description: product.description || ''
    });
    // Set image option based on existing image URL
    if (product.image_url?.startsWith('/uploads/')) {
      setProductImageOption('upload');
    } else {
      setProductImageOption('url');
    }
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await api.admin.deleteProduct(id);
        await loadData();
        // Trigger a custom event to refresh other components
        window.dispatchEvent(new CustomEvent('productsUpdated'));
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Error deleting product. Please try again.');
      }
    }
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      if (imageOption === 'upload' && imageFile) {
        const formData = new FormData();
        formData.append('name', categoryForm.name);
        formData.append('image', imageFile);
        const url = editingCategory ? `/api/admin/categories/${editingCategory.id}` : '/api/admin/categories';
        const method = editingCategory ? 'PUT' : 'POST';
        await fetch(`${process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000'}${url}`, { method, body: formData });
      } else {
        // Handle image URL case
        const formData = new FormData();
        formData.append('name', categoryForm.name);
        if (categoryForm.image_url) {
          formData.append('image_url', categoryForm.image_url);
        }
        const url = editingCategory ? `/api/admin/categories/${editingCategory.id}` : '/api/admin/categories';
        const method = editingCategory ? 'PUT' : 'POST';
        await fetch(`${process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000'}${url}`, { method, body: formData });
      }
      setShowCategoryForm(false);
      setEditingCategory(null);
      setCategoryForm({ name: '', image_url: '' });
      setImageFile(null);
      setImageOption('url');
      await loadData();
      // Trigger a custom event to refresh other components
      window.dispatchEvent(new CustomEvent('categoriesUpdated'));
    } catch (error) {
      console.error('Error saving category:', error);
      alert('Error saving category. Please try again.');
    }
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setCategoryForm({
      name: category.name,
      image_url: category.image_url || ''
    });
    // Set image option based on existing image URL
    if (category.image_url?.startsWith('/uploads/')) {
      setImageOption('upload');
    } else {
      setImageOption('url');
    }
    setShowCategoryForm(true);
  };

  const handleDeleteCategory = async (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        await api.admin.deleteCategory(id);
        await loadData();
        // Trigger a custom event to refresh other components
        window.dispatchEvent(new CustomEvent('categoriesUpdated'));
      } catch (error) {
        console.error('Error deleting category:', error);
        alert('Error deleting category. Please try again.');
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 rounded ${activeTab === 'products' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`px-4 py-2 rounded ${activeTab === 'categories' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Categories
          </button>
          <button
            onClick={() => setActiveTab('collections')}
            className={`px-4 py-2 rounded ${activeTab === 'collections' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Summer Collection
          </button>
          {activeTab === 'products' && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Add Product
            </button>
          )}
          {activeTab === 'categories' && (
            <button
              onClick={() => setShowCategoryForm(true)}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Add Category
            </button>
          )}
        </div>
      </div>

      {showCategoryForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              {editingCategory ? 'Edit Category' : 'Add Category'}
            </h2>
            <form onSubmit={handleCategorySubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Category Name</label>
                <input
                  type="text"
                  value={categoryForm.name}
                  onChange={(e) => setCategoryForm({...categoryForm, name: e.target.value})}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Image Option</label>
                <select
                  value={imageOption}
                  onChange={(e) => setImageOption(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="url">Image URL</option>
                  <option value="upload">Upload Image</option>
                </select>
              </div>
              {imageOption === 'url' ? (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Image URL</label>
                  <input
                    type="url"
                    value={categoryForm.image_url}
                    onChange={(e) => setCategoryForm({...categoryForm, image_url: e.target.value})}
                    className="w-full border rounded px-3 py-2"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              ) : (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Upload Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0])}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              )}
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  {editingCategory ? 'Update' : 'Add'} Category
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowCategoryForm(false);
                    setEditingCategory(null);
                    setCategoryForm({ name: '', image_url: '' });
                    setImageFile(null);
                    setImageOption('url');
                  }}
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              {editingProduct ? 'Edit Product' : 'Add Product'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Price</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Image Option</label>
                <select
                  value={productImageOption}
                  onChange={(e) => setProductImageOption(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="url">Image URL</option>
                  <option value="upload">Upload Image</option>
                </select>
              </div>
              {productImageOption === 'url' ? (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Image URL</label>
                  <input
                    type="url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                    className="w-full border rounded px-3 py-2"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              ) : (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Upload Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setProductImageFile(e.target.files[0])}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              )}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={formData.category_id}
                  onChange={(e) => setFormData({...formData, category_id: e.target.value})}
                  className="w-full border rounded px-3 py-2"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full border rounded px-3 py-2"
                  rows="3"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  {editingProduct ? 'Update' : 'Add'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingProduct(null);
                    setFormData({ name: '', price: '', image_url: '', category_id: '', description: '' });
                    setProductImageFile(null);
                    setProductImageOption('url');
                  }}
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {activeTab === 'categories' ? (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {categories.map((category) => (
                <tr key={category.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img 
                      src={category.image_url?.startsWith('/uploads/') 
                        ? `${process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000'}${category.image_url}` 
                        : category.image_url || '/placeholder.svg'
                      } 
                      alt={category.name} 
                      className="h-12 w-12 object-cover rounded"
                      onError={(e) => {
                        e.target.src = '/placeholder.svg';
                      }}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {category.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEditCategory(category)}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(category.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : activeTab === 'collections' ? (
        {/* <CollectionManager /> */}
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img 
                      src={product.image_url?.startsWith('/uploads/') 
                        ? `${process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000'}${product.image_url}` 
                        : product.image_url || '/placeholder.svg'
                      } 
                      alt={product.name} 
                      className="h-12 w-12 object-cover rounded"
                      onError={(e) => {
                        e.target.src = '/placeholder.svg';
                      }}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.category_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEdit(product)}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;