import React from 'react';

import './Restaurants.scss';

const Restaurants = () => (
  <div className="restaurants-page">
    <div className="restaurants-header">
      <div className="header-block">
        <span>Name</span>
      </div>
      <div className="header-block">
        <span>City</span>
      </div>
      <div className="header-block">
        <span>State</span>
      </div>
      <div className="header-block">
        <span>Phone Number</span>
      </div>
      <div className="header-block">
        <span>Genres</span>
      </div>
    </div>
  </div>
);

export default Restaurants;
