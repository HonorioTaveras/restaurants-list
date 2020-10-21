import React, { useState } from 'react';

import uniq from 'lodash.uniq';

import RESTAURANT_DATA from '../../restaurantData';

import Restaurants from '../Restaurants/Restaurants';
import RestaurantItem from '../RestaurantItem/RestaurantItem';

import './App.scss';

const App = () => {
  const [restaurantData] = useState(RESTAURANT_DATA);
  // eslint-disable-next-line no-unused-vars
  const [stateCategories, setStateCetegories] = useState('all');
  const [states] = useState(
    uniq(restaurantData.map(({ state }) => state)),
  );
  // eslint-disable-next-line prefer-const
  let [filteredRestaurantData, setFilteredRestaurantData] = useState([]);

  const filterStateHandler = (filterState) => {
    filteredRestaurantData = [];
    restaurantData.map((restaurant) => {
      if (restaurant.state === filterState) {
        filteredRestaurantData.push(restaurant);
      }
      return filteredRestaurantData;
    });
    setStateCetegories(filterState);
    setFilteredRestaurantData(filteredRestaurantData);
  };

  return (
    <div>
      <table>
        <Restaurants states={states} filterStateHandler={filterStateHandler} />
        {filteredRestaurantData.length
          ? filteredRestaurantData
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((restaurant) => (
              <RestaurantItem key={restaurant.id} restaurant={restaurant} />
            ))
          : restaurantData
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((restaurant) => (
              <RestaurantItem key={restaurant.id} restaurant={restaurant} />
            ))}
      </table>
    </div>
  );
};

export default App;
