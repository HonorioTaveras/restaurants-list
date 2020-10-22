import React from 'react';

import './SearchBox.scss';

const SearchBox = ({ placeholder, handleSearchChange }) => (
  <div>
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleSearchChange}
    />
  </div>
);

export default SearchBox;
