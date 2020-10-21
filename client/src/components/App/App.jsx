import React, { useState } from 'react';

import RESTAURANT_DATA from '../../restaurantData';

import Restaurants from '../Restaurants/Restaurants';
import RestaurantItem from '../RestaurantItem/RestaurantItem';

import './App.scss';

const App = () => {
  const [restaurantData] = useState(RESTAURANT_DATA);

  return (
    <div>
      <table>
        <Restaurants restaurantData={restaurantData} />
        {restaurantData
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((restaurant) => (
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          ))}
      </table>
    </div>
  );
};

export default App;
