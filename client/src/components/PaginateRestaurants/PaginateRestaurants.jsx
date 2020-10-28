import React from 'react';

import { Pagination } from 'react-bootstrap';

const PaginateRestaurants = ({
  restaurantsPerPage,
  totalRestaurants,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  const handlePrev = currentPage > 1 ? currentPage - 1 : 1;

  for (
    let i = 1;
    i <= Math.ceil(totalRestaurants / restaurantsPerPage);
    i += 1
  ) {
    pageNumbers.push(i);
  }

  const handleNext = currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length;

  return (
    <div>
      <Pagination className="">
        <Pagination.First onClick={() => paginate(pageNumbers[0])} />
        <Pagination.Prev onClick={() => paginate(handlePrev)} />
        {pageNumbers.map((number) => (
          <Pagination.Item key={number} onClick={() => paginate(number)}>
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => paginate(handleNext)} />
        <Pagination.Last onClick={() => paginate(pageNumbers.length)} />
      </Pagination>
    </div>
  );
};

export default PaginateRestaurants;
