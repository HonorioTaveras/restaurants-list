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
  const [genreCategories, setGenreCategories] = useState('all');
  const [states] = useState(uniq(restaurantData.map(({ state }) => state)));
  // const [genres] = useState(uniq(joinedFilteredGenreData));
  // eslint-disable-next-line prefer-const
  let [filteredRestaurantData, setFilteredRestaurantData] = useState([]);

  const filterStateHandler = (filterState, filterGenre) => {
    filteredRestaurantData = [];
    restaurantData.map((restaurant) => {
      if (
        restaurant.state === filterState
        || restaurant.genre.includes(filterGenre)
      ) {
        filteredRestaurantData.push(restaurant);
      }
      return filteredRestaurantData;
    });
    setStateCetegories(filterState);
    setGenreCategories(filterGenre);
    setFilteredRestaurantData(filteredRestaurantData);
  };

  const filteredGenreData = [];
  const restaurantDataCopy = restaurantData.slice();
  restaurantDataCopy.map(({ genre }) => filteredGenreData.push(genre.split(',')));
  const joinedFilteredGenreData = filteredGenreData.join(',').split(',');
  const genres = uniq(joinedFilteredGenreData);

  console.log('genresList: ', uniq(joinedFilteredGenreData));

  return (
    <div>
      <table>
        <Restaurants states={states} genres={genres} filterStateHandler={filterStateHandler} />
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
