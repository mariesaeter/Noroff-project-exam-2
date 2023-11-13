import { useMemo } from "react";

let pageNumbers = [];

export const Pagination = ({ venuesPerPage, totalVenues, paginate }) => {
  const pages = useMemo(() => {
    for (let i = 1; i <= Math.ceil(totalVenues / venuesPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }, [totalVenues, venuesPerPage]);

  return (
    <ul>
      {pages.map((number) => (
        <li key={number} onClick={() => paginate(number)}>
          {number}
        </li>
      ))}
    </ul>
  );
};
