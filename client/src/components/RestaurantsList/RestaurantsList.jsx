import React from 'react';

import RestaurantItem from '../RestaurantItem/RestaurantItem';

import './RestaurantsList.scss';

const RestaurantsList = ({
  filteredRestaurantData,
  currentFilteredRestaurants,
  currentRestaurants,
  stateCategories,
  genreCategories,
}) => (
  <>
    {filteredRestaurantData.length ? (
      currentFilteredRestaurants
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))
    ) : stateCategories === 'all' && genreCategories === 'all' ? (
      currentRestaurants
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))
    ) : (
      <tbody>
        <tr>
          <td />
          <td />
          <td>no results were found</td>
          <td />
          <td />
        </tr>
      </tbody>
    )}
  </>
);

export default RestaurantsList;
