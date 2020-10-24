import React from 'react';

import CustomButton from '../CustomButton/CustomButton';

import './SearchBox.scss';

const SearchBox = ({ placeholder, handleSearchChange, handleSubmit }) => (
  <div>
    <div className="input-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          className="search"
          type="search"
          placeholder={placeholder}
          onChange={handleSearchChange}
        />
        <CustomButton type="submit">Search</CustomButton>
      </form>
    </div>
  </div>
);

export default SearchBox;
