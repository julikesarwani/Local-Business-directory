import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center border rounded-lg p-2 shadow-sm">
      <input
        type="text"
        className="flex-grow p-2 border-none outline-none"
        placeholder="Search by name, address, or location"
        value={input}
        onChange={handleInputChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
