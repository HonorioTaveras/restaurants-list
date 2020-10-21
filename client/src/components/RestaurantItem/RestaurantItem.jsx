import React from 'react';

import './RestaurantItem.scss';

const RestaurantItem = ({
  restaurant: {
    name, city, state, telephone, genre,
  },
}) => (
  <tbody>
    <tr>
      <td>{name}</td>
      <td>{city}</td>
      <td>{state}</td>
      <td>{telephone}</td>
      <td>{genre}</td>
    </tr>
  </tbody>
);

export default RestaurantItem;
