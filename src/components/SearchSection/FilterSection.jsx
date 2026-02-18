import React, { useState } from "react";
const FilterSection = ({ onCategoryChange, onRatingChange }) => { 

  const [isRatingEnabled, setIsRatingEnabled] = useState(false);

  const categories = [
    'Restaurant',
    'Retail',
    'Healthcare',
    'Entertainment',
    'Services',
    'Bakery',
    'Bank',
    'Saloon',
  ];

  const handleCategoryChange = (category) => {
    onCategoryChange(category);
    setIsRatingEnabled(!!category);
  };

  return (
    <div className="flex flex-wrap gap-4 my-4">
      <select
        className="px-4 py-2 border border-gray-300 rounded-lg"
        onChange={(e) => handleCategoryChange(e.target.value)} 
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        className="px-4 py-2 border border-gray-300 rounded-lg"
        onChange={(e) => onRatingChange(e.target.value)}
        disabled = {!isRatingEnabled}
      >
        <option value="">Rating</option>
        <option value="5">5 Stars</option>
        <option value="4">4+ Stars</option>
        <option value="3">3+ Stars</option>
      </select>
    </div>
  );
};

export default FilterSection;
