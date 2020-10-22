/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import React from 'react';

import './Restaurants.scss';

const Restaurants = ({ states, genres, filterHandler }) => (
  <thead>
    <tr>
      <th>Name</th>
      <th>City</th>
      <th>
        <label>State &nbsp;</label>
        <select onChange={(e) => filterHandler(e.target.value)}>
          <option value="all">All States</option>
          {states.map((state, idx) => (
            <option key={idx} value={state}>
              {state}
            </option>
          ))}
        </select>
      </th>
      <th>Telephone</th>
      <th>
        <label>Genre &nbsp;</label>
        <select onChange={(e) => filterHandler(null, e.target.value)}>
          <option value="all">All Genres</option>
          {genres.map((genre, idx) => (
            <option key={idx} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </th>
    </tr>
  </thead>
);

export default Restaurants;
