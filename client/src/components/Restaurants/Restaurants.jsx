import React, { useState } from 'react';

import RestaurantItem from '../RestaurantItem/RestaurantItem';

import RESTAURANT_DATA from './restaurantData';

import './Restaurants.scss';

const Restaurants = () => {
  const [restaurantData] = useState(RESTAURANT_DATA);

  return (
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
      {restaurantData.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default Restaurants;
