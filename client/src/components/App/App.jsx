/* eslint-disable spaced-comment */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import Axios from 'axios';
import uniq from 'lodash.uniq';

import TableHeaders from '../TableHeaders/TableHeaders';
import RestaurantsList from '../RestaurantsList/RestaurantsList';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import SearchBox from '../SearchBox/SearchBox';
import PaginateRestaurants from '../PaginateRestaurants/PaginateRestaurants';

import './App.scss';

const App = () => {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantDataCopy, setRestaurantDataCopy] = useState([]);
  const [stateCategories, setStateCetegories] = useState('all');
  const [genreCategories, setGenreCategories] = useState('all');
  // eslint-disable-next-line prefer-const
  let [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurantsPerPage] = useState(10);

  /////////////////////////////////////////////////////////////
  /////////// DATA FFETCHING & LIFECYCLE MANAGEMENT //////////
  ///////////////////////////////////////////////////////////

  useEffect(() => {
    Axios.get('/restaurantData').then(
      (res) => {
        setIsLoaded(true);
        setRestaurantData(res.data);
      },
      (err) => {
        setIsLoaded(true);
        setErr(err);
      },
    );
  }, [filteredRestaurantData]);

  /////////////////////////////////////////////////////////////
  ///////////////// STATE & GENRE FILTERS ////////////////////
  ///////////////////////////////////////////////////////////

  const states = uniq(restaurantData.map(({ state }) => state));
  const filteredGenreData = [];
  restaurantData
    .slice()
    .map(({ genre }) => filteredGenreData.push(genre.split(',')));
  const genres = uniq(filteredGenreData.join(',').split(','));

  const filterHandler = (
    filterState = stateCategories,
    filterGenre = genreCategories,
  ) => {
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

  //////////////////////////////////////////////////////////////
  ///////////////// SEARCH BAR HANDLERS ///////////////////////
  ////////////////////////////////////////////////////////////

  const handleSubmit = (e) => {
    e.preventDefault();
    let currentRestaurantsList = [];
    let newRestaurantsList = [];

    if (searchField.length !== 0) {
      currentRestaurantsList = restaurantData;
      newRestaurantsList = currentRestaurantsList.filter(
        ({ name, city, genre }) => name.toLowerCase().includes(searchField.toLowerCase())
          || city.toLowerCase().includes(searchField.toLowerCase())
          || genre.toLowerCase().includes(searchField.toLowerCase()),
      );
    } else {
      newRestaurantsList = restaurantData;
    }

    setFilteredRestaurantData(newRestaurantsList);
  };

  const handleSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  //////////////////////////////////////////////////////////////
  ////////////////////// PAGINATION ///////////////////////////
  ////////////////////////////////////////////////////////////

  const indexOfLastRestaurant = currentPage * restaurantsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
  const currentRestaurants = restaurantData.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant,
  );
  const currentFilteredRestaurants = filteredRestaurantData.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleTotalRestaurants = filteredRestaurantData.length
    ? filteredRestaurantData.length
    : restaurantData.length;

  return (
    <div className="App">
      <SearchBox
        restaurantData={restaurantData}
        placeholder="Search by name, city, or genre"
        searchField={searchField}
        handleSubmit={handleSubmit}
        handleSearchChange={handleSearchChange}
      />
      <table>
        <TableHeaders
          states={states}
          stateCategories={stateCategories}
          genres={genres}
          genreCategories={genreCategories}
          filterHandler={filterHandler}
        />
        <RestaurantsList />
      </table>
      <div className="paginate-restaurants">
        <PaginateRestaurants
          restaurantsPerPage={restaurantsPerPage}
          totalRestaurants={handleTotalRestaurants}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default App;
