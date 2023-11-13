import { useMemo } from "react";

let pageNumbers = [];

export const Pagination = ({
  venuesPerPage,
  totalVenues,
  paginate,
  previousPage,
  nextPage,
  currentPage,
}) => {
  const pages = useMemo(() => {
    if (pageNumbers.length === 0) {
      for (let i = 1; i <= Math.ceil(totalVenues / venuesPerPage); i++) {
        pageNumbers.push(i);
      }
    }
    return pageNumbers;
  }, [totalVenues, venuesPerPage]);

  return (
    <ul className="flex justify-center mt-5 gap-3">
      <li onClick={previousPage}>
        <i className="fa-solid fa-circle-arrow-left"></i>
      </li>
      {pages.map((number) => (
        <li
          className={
            "hover:cursor-pointer h-9 w-9 rounded-full text-center pt-1.5 " +
            (number === currentPage
              ? "text-body-white bg-fantasy-blue"
              : "bg-earth-brown-light")
          }
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </li>
      ))}
      <li onClick={nextPage}>
        <i className="fa-solid fa-circle-arrow-right"></i>
      </li>
    </ul>
  );
};
