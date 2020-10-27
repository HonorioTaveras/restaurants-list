import React from 'react';

const Pagination = ({ restaurantsPerPAge, totalRestaurants }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRestaurants / restaurantsPerPAge); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div>
      hue
    </div>
  );
};

export default Pagination;
