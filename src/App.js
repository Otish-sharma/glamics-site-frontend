import { useState } from 'react';
import Navbar from './components/navbar';
import HeroCarousel from "./components/HeroCarousel";
import CategoryGrid from "./components/CategoryGrid";
import ShoppingSection from './components/ShoppingSection';
import TopSellingSection from './components/TopSellingSection';
import TrendingBanner from './components/TrendingBanner';
import CollectionsSection from './components/CollectionsSection';
import NewsletterSection from './components/NewsletterSection';
import ProductReviewsSection from './components/ProductReviewsSection';
import FlashSellSection from './components/FlashSellSection';
import BlogSection from './components/BlogSection';
import ImageGrid from './components/ImageGrid';
import Footer from './components/Footer';
import VideoCarousel from './components/VideoCarousel';
import AdminDashboard from './components/AdminDashboard';
import CategoryProducts from './components/CategoryProducts';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentView('category');
  };

  const handleBackToHome = () => {
    setSelectedCategory(null);
    setCurrentView('home');
  };

  if (currentView === 'admin') {
    return (
      <div className="App">
        <div className="bg-gray-100 p-4">
          <button
            onClick={handleBackToHome}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
          >
            ← Back to Home
          </button>
        </div>
        <AdminDashboard />
      </div>
    );
  }

  if (currentView === 'category') {
    return (
      <div className="App">
        <Navbar />
        <CategoryProducts 
          selectedCategory={selectedCategory} 
          onBack={handleBackToHome}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setCurrentView('admin')}
          className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
        >
          Admin
        </button>
      </div>
      <HeroCarousel />
      <CategoryGrid onCategorySelect={handleCategorySelect} />
      <ShoppingSection />
      <TrendingBanner />
      <TopSellingSection />
      <VideoCarousel />
      <CollectionsSection />
      <FlashSellSection />
      <ProductReviewsSection />
      <NewsletterSection />
      <BlogSection />
      <ImageGrid />
      <Footer />
    </div>
  );
}

export default App;
