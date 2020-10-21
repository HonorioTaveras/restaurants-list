import React from 'react';

import uniq from 'lodash.uniq';

import './Restaurants.scss';

const Restaurants = ({ restaurantData }) => {
  const uniqStates = uniq(restaurantData.map(({ state }) => state));

  console.log('states: ', uniqStates);
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>City</th>
        <th>
          <label>State &nbsp;</label>
          <select>
            {
              uniqStates.map((state) => (
                <option value={state}>{state}</option>
              ))
            }
          </select>
        </th>
        <th>Telephone</th>
        <th>Genre &nbsp;</th>
      </tr>
    </thead>
  );
};

export default Restaurants;

