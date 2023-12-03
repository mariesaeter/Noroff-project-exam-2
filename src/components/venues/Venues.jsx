// import { Link } from "react-router-dom";
import { useState } from "react";
import { URL_VENUES, URL_VENUES2 } from "../../constants/url";
import { useApiGet } from "../../hooks/api/useApiGet";
import { VenueCard } from "./VenueCard";
import { Pagination } from "./Pagination";
import { useApiAuth } from "../../hooks/api/useGetProfile";
import { Loader } from "../Loader";

// https://hygraph.com/blog/react-pagination

export const Venues = () => {
  // const [pageCount, setPageCount] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const venuesPerPage = 10;

  // const itemsPerPage = 10;
  // const startIndex = currentPage * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const urls = [URL_VENUES, URL_VENUES2];

  const { venues, isLoading, isError } = useApiGet(URL_VENUES);
  const { data } = useApiAuth(URL_VENUES2);

  const newArr = venues.concat(data);
  console.log(newArr);

  console.log(venues);

  const filteredVenues = newArr.filter(
    (x) => x.location.zip === "book" || x.location.zip === "movie"
  );

  const endIndex = currentPage * venuesPerPage;
  const startIndex = endIndex - venuesPerPage;
  const currentVenues = filteredVenues.slice(startIndex, endIndex);

  let paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(filteredVenues.length / venuesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // useEffect(() => {
  //   setTotalPages(venues.length / itemsPerPage);
  // }, [venues.length, itemsPerPage]);

  // const subSet = venues.slice(startIndex, endIndex);

  // console.log(subSet);
  // setTotalPages(venues.length / itemsPerPage);

  // console.log(totalPages);

  // const handlePageChange = (selectedPage) => {
  //   setCurrentPage(selectedPage.selected);
  // };

  // setTotalPages(Math.ceil(venues.length / itemsPerPage));
  // console.log(totalPages);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>There was an error</div>;
  }

  return (
    <>
      <div>
        <div className="grid gap-5 md:grid-cols-2 lg:gap-12 xl:grid-cols-3">
          {currentVenues.map((venue) => (
            // console.log(venue.name);
            <VenueCard
              id={venue.id}
              name={venue.name}
              media={venue.media[0]}
              city={venue.location.city}
              country={venue.location.country}
              price={venue.price}
              key={venue.id}
            />
          ))}
        </div>

        <Pagination
          venuesPerPage={venuesPerPage}
          totalVenues={filteredVenues.length}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};
