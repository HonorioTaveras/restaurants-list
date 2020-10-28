import React from 'react';

const RestaurantsList = () => (
  <div>
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
  </div>
);

export default RestaurantsList;
