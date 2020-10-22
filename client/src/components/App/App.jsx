/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import Axios from 'axios';
import uniq from 'lodash.uniq';

import Restaurants from '../Restaurants/Restaurants';
import RestaurantItem from '../RestaurantItem/RestaurantItem';

import './App.scss';

const App = () => {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [restaurantData, setRestaurantData] = useState([]);
  const [stateCategories, setStateCetegories] = useState('all');
  const [genreCategories, setGenreCategories] = useState('all');
  // eslint-disable-next-line prefer-const
  let [filteredRestaurantData, setFilteredRestaurantData] = useState([]);

  const states = uniq(restaurantData.map(({ state }) => state));
  const filteredGenreData = [];
  restaurantData
    .slice()
    .map(({ genre }) => filteredGenreData.push(genre.split(',')));
  const genres = uniq(filteredGenreData.join(',').split(','));

  useEffect(() => {
    Axios.get('/restaurantData')
      .then((res) => {
        setIsLoaded(true);
        setRestaurantData(res.data);
      },
      (err) => {
        setIsLoaded(true);
        setErr(err);
      });
  }, []);

  const filterHandler = (filterState, filterGenre) => {
    filteredRestaurantData = [];
    restaurantData.map((restaurant) => {
      if (
        restaurant.state.includes(filterState)
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

  return (
    <div>
      <table>
        <Restaurants states={states} genres={genres} filterHandler={filterHandler} />
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
