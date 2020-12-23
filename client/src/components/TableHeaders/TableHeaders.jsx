/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import React from 'react';

const TableHeaders = ({
  states,
  genres,
  filterStatesHandler,
  filterGenresHandler,
}) => (
  <thead>
    <tr>
      <th>Name</th>
      <th>City</th>
      <th>
        <label>State &nbsp;</label>
        <select onChange={(e) => filterStatesHandler(e.target.value)}>
          <option value="all">All States</option>
          {states.map((state, idx) => (
            <option key={`state: ${idx + 1}`} value={state}>
              {state}
            </option>
          ))}
        </select>
      </th>
      <th>Telephone</th>
      <th>
        <label>Genre &nbsp;</label>
        <select onChange={(e) => filterGenresHandler(e.target.value)}>
          <option value="all">All Genres</option>
          {genres.map((genre, idx) => (
            <option key={`genre: ${idx + 1}`} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </th>
    </tr>
  </thead>
);

export default TableHeaders;
