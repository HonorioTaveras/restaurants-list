/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import React from 'react';

import './Restaurants.scss';

const Restaurants = ({ states, filterStateHandler }) => (
  <thead>
    <tr>
      <th>Name</th>
      <th>City</th>
      <th>
        <label>State &nbsp;</label>
        <select onChange={(e) => filterStateHandler(e.target.value)}>
          <option value="all">All States</option>
          {states.map((state, idx) => (
            <option key={idx} value={state}>
              {state}
            </option>
          ))}
        </select>
      </th>
      <th>Telephone</th>
      <th>Genre &nbsp;</th>
    </tr>
  </thead>
);

export default Restaurants;
