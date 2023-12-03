import { URL_BOOKINGS } from "../../constants/url";
import { useApiAuth } from "../../hooks/api/useGetProfile";
import { formatDate } from "../../utils/formatDate";
import { BookingCard } from "./BookingCard";
import { Loader } from "../Loader";

const daysCount = (dateFrom, dateTo) => {
  const daysTimeBetween =
    new Date(dateTo).getTime() - new Date(dateFrom).getTime();
  const daysBetween = daysTimeBetween / (1000 * 3600 * 24);

  return daysBetween;
};

const bookingPrice = (price, days) => {
  const totalPrice = price * days;
  return totalPrice;
};

export const CustomerBooking = ({ id }) => {
  let url = `${URL_BOOKINGS}/${id}?_venue=true`;
  const { data, isError, isLoading } = useApiAuth(url);

  if (data.venue) {
    const venue = data.venue;
    const dateStart = formatDate(data.dateFrom);
    const dateEnd = formatDate(data.dateTo);
    const days = daysCount(dateStart, dateEnd);
    const price = bookingPrice(venue.price, days);

    return (
      <BookingCard
        name={venue.name}
        media={venue.media[0]}
        dateStart={dateStart}
        dateEnd={dateEnd}
        days={days}
        totalPrice={price}
        price={venue.price}
        id={venue.id}
      />
    );
  }

  if (isLoading) {
    return (
      <td>
        <Loader />
      </td>
    );
  }
  if (isError) {
    return <td>There was an error</td>;
  }
};
