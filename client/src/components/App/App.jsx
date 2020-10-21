import React, { useState, useEffect } from 'react';

import RESTAURANT_DATA from '../../restaurantData';

import Restaurants from '../Restaurants/Restaurants';
import RestaurantItem from '../RestaurantItem/RestaurantItem';

import './App.scss';

const App = () => {
  const [restaurantData, setRestaurantData] = useState(RESTAURANT_DATA);
  const [filter, setFilter] = useState('all');

  // useEffect(() => {
  //   fetch('http://localhost:3001/').then((res) => res.json());
  // }, []);

  const filterStateHandler = (filterState) => {
    const filteredRestaurantData = [];
    restaurantData.map((restaurant) => {
      if (restaurant.state === filterState) {
        filteredRestaurantData.push(restaurant);
      }
      return filteredRestaurantData;
    });
    setFilter(filterState);
    setRestaurantData(filteredRestaurantData);
  };

  return (
    <div>
      <table>
        <Restaurants
          restaurantData={restaurantData}
          filterStateHandler={filterStateHandler}
        />
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
