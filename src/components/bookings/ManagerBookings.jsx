import { URL_BOOKINGS } from "../../constants/url";
import { useApiAuth } from "../../hooks/api/useGetProfile";

import { ManagerSingleBooking } from "./ManagerSingleBooking";

export const GetCustomer = ({ id }) => {
  let url = `${URL_BOOKINGS}/${id}?_customer=true`;
  const { data, isError, isLoading } = useApiAuth(url);

  console.log(data);

  if (data.customer) {
    const name = data.customer.name;

    return <td>{name}</td>;
  }

  if (isLoading) {
    return <td>Is loading</td>;
  }
  if (isError) {
    return <td>There was an error</td>;
  }
};

export const ManagerBookings = ({ bookings }) => {
  const currentBookings = bookings.filter(
    (booking) =>
      Date.parse(booking.dateFrom) <= new Date() &&
      new Date() <= Date.parse(booking.dateTo)
  );

  const futureBookings = bookings.filter(
    (booking) => Date.parse(booking.dateFrom) > new Date()
  );

  const pastBookings = bookings.filter(
    (booking) => Date.parse(booking.dateTo) < new Date()
  );

  return (
    <div>
      <table className="w-full">
        <colgroup span="3"></colgroup>
        <thead>
          <tr>
            <th>User</th>
            <th>From</th>
            <th>To</th>
            <th>Guests</th>
          </tr>
        </thead>
        <tbody>
          {currentBookings.map((booking) => (
            <ManagerSingleBooking
              key={booking.id}
              booking={booking}
              color="text-fantasy-blue"
            />
          ))}
          {futureBookings.map((booking) => (
            <ManagerSingleBooking
              key={booking.id}
              booking={booking}
              color="text-body-black"
            />
          ))}
          {pastBookings.map((booking) => (
            <ManagerSingleBooking
              key={booking.id}
              booking={booking}
              color="text-earth-brown-light"
            />
          ))}
        </tbody>
      </table>
      <div className="grid grid-cols-3 p-5">
        <small className="text-fantasy-blue">Current bookings</small>
        <small className="text-body-black">Future bookings</small>
        <small className="text-earth-brown-light">Past bookings</small>
      </div>
    </div>
  );
};
