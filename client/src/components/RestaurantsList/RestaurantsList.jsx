import React from 'react';

import RestaurantItem from '../RestaurantItem/RestaurantItem';

const RestaurantsList = ({
  filteredRestaurantData,
  currentFilteredRestaurants,
  currentRestaurants,
}) => (
  <>
    {filteredRestaurantData.length
      ? currentFilteredRestaurants
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))
      : currentRestaurants
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
  </>
);

export default RestaurantsList;
