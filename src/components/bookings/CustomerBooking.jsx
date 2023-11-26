import { URL_BOOKINGS } from "../../constants/url";
import { useApiAuth } from "../../hooks/api/useGetProfile";
import { formatDate } from "../../utils/formatDate";

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
    console.log(data);
    const venue = data.venue;
    const dateStart = formatDate(data.dateFrom);
    const dateEnd = formatDate(data.dateTo);
    const days = daysCount(dateStart, dateEnd);
    const price = bookingPrice(venue.price, days);

    console.log(dateStart);

    return (
      <li className="border-2 border-fantasy-blue rounded-lg p-5 w-full">
        <h3>{venue.name}</h3>
        <div className="flex">
          <img
            className="rounded-lg h-20 lg:h-24 w-20 lg:w-24 object-cover"
            src={venue.media[0]}
            alt={venue.name}
          />
          <div>
            <div>
              <h4>Your stay</h4>
              <p>
                {dateStart} - {dateEnd} ({days} days)
              </p>
            </div>
            <div>
              <h4>Price</h4>
              <p>
                ${price} (${venue.price} / night)
              </p>
            </div>
          </div>
        </div>
      </li>
    );
  }

  if (isLoading) {
    return <td>Is loading</td>;
  }
  if (isError) {
    return <td>There was an error</td>;
  }
};
