/* eslint-disable react/no-array-index-key */
import React from 'react';

import uniq from 'lodash.uniq';

import './Restaurants.scss';

const Restaurants = ({ restaurantData, filterStateHandler }) => {
  const uniqStates = uniq(restaurantData.map(({ state }) => state));

  console.log('states: ', uniqStates);
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>City</th>
        <th>
          <label>State &nbsp;</label>
          <select onChange={(e) => filterStateHandler(e.target.value)}>
            {uniqStates.map((state, idx) => (
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
};

export default Restaurants;
