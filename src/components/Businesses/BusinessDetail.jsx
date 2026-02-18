import React from 'react';
import PropTypes from 'prop-types';

const BusinessDetail = ({ business }) => {
  if (!business) return <div className="text-center text-gray-500">No business selected.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={business.image}
          alt={business.name}
          className="w-full h-64 object-contain"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{business.name}</h2>
          <p className="text-gray-700 mb-4">{business.description}</p>
          <p className="text-sm text-gray-500 font-bold mb-4">Rating: {business.rating} ⭐</p>
          <p className="text-sm text-gray-500 font-bold mb-4">Phone: {business.phone}</p>
          <p className="text-sm text-gray-500 font-bold mb-4">Category: {business.category}</p>
          <p className="text-sm text-gray-500 font-bold mb-4">Address: {business.address}</p>
        </div>
      </div>
    </div>
  );
};

BusinessDetail.propTypes = {
  business: PropTypes.object,
};

export default BusinessDetail;
