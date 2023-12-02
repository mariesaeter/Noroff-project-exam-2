import { useEffect, useState } from "react";
import { fetchToken } from "../../utils/fetchToken";

const createDateArray = (bookings) => {
  const bookingsDate = bookings.map((booking) => {
    const bookingDates = [];
    const dateFrom = new Date(booking.dateFrom);
    const dateTo = new Date(booking.dateTo);
    for (
      let date = dateFrom;
      date <= dateTo;
      date.setDate(date.getDate() + 1)
    ) {
      bookingDates.push(new Date(date));
    }
    return { ...booking, dateRange: bookingDates };
  });
  return bookingsDate;
};

export const useApiGet = (url) => {
  const [venues, setVenues] = useState([]);
  const [venue, setVenue] = useState({
    location: "",
    meta: "",
    media: [],
    bookings: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getVenues() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedVenues = await fetchToken(url);

        const response = await fetchedVenues.json();
        setVenues(response);

        // const bookings = createDateArray(response.bookings);
        // console.log(bookings);

        setVenue({
          location: response.location,
          meta: response.meta,
          media: response.media,
          bookings: createDateArray(response.bookings),
        });
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getVenues(url);
  }, [url]);

  return { venue, venues, isLoading, isError };
};
