import { useState } from 'react';
import { Routes, Route, useParams, Link } from 'react-router-dom'; 
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchSection/SearchBar';
import FilterSection from './components/SearchSection/FilterSection';
import Footer from './components/Footer/Footer';
import BusinessCard from './components/Businesses/BusinessCard.jsx';
import BusinessDetail from './components/Businesses/BusinessDetail.jsx';
import businesses from './components/Businesses/BusinessData.jsx';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);

  const filterBusinesses = (query, category, rating) => {
    const filtered = businesses.filter((business) => {
      const matchesSearch =
        business.name.toLowerCase().includes(query.toLowerCase()) ||
        business.address.toLowerCase().includes(query.toLowerCase()) ||
        business.location.toLowerCase().includes(query.toLowerCase()) ||
        business.category.toLowerCase().includes(query.toLowerCase());
      const matchesCategory =
        category === '' || business.category.toLowerCase() === category.toLowerCase();
      const matchesRating =
        rating === '' || parseFloat(business.rating) >= parseFloat(rating);
      return matchesSearch && matchesCategory && matchesRating;
    });
    setFilteredBusinesses(filtered);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterBusinesses(query, selectedCategory, selectedRating);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterBusinesses(searchQuery, category, selectedRating);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
    filterBusinesses(searchQuery, selectedCategory, rating);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route
            path="/"
            element={
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Find Local Businesses Near You
                </h2>
                <SearchBar onSearch={handleSearch} />
                <FilterSection
                  onCategoryChange={handleCategoryChange}
                  onRatingChange={handleRatingChange}
                />
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredBusinesses.length > 0 ? (
                    filteredBusinesses.map((business) => (
                      <BusinessCard key={business.id} business={business} />
                    ))
                  ) : (
                    <p className="text-center text-gray-500">
                      {/* No businesses found in this area. */}
                    </p>
                  )}
                </div>
              </div>
            }
          />
          
          <Route path="/business/:id" element={<BusinessDetailWrapper />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};


const BusinessDetailWrapper = () => {
  const { id } = useParams(); 
  const business = businesses.find((b) => b.id === parseInt(id)); 

  if (!business) {
    return (
      <div className="text-center text-gray-500">
        <h1>No business found.</h1>
        <Link to="/" className="text-blue-500 underline">
          Go back to search
        </Link>
      </div>
    );
  }

  return <BusinessDetail business={business} />; 
};

export default App;
