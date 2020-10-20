import React from 'react';

import './RestaurantItem.scss';

const RestaurantItem = ({
  restaurant: {
    name, city, state, telephone, genre,
  },
}) => (
  <div className="restaurant-item">
    <span className="name">{name}</span>
    <span className="city">{city}</span>
    <span className="state">{state}</span>
    <span className="telephone">{telephone}</span>
    <span className="genre">{genre}</span>
  </div>
);

export default RestaurantItem;
