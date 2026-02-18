import React from 'react';
import { useParams, Link } from 'react-router-dom';  
import BusinessDetail from './BusinessDetail';  
import businesses from './BusinessData';  

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

export default BusinessDetailWrapper;
