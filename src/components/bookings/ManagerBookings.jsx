import { URL_BOOKINGS } from "../../constants/url";
import { useApiAuth } from "../../hooks/api/useGetProfile";
import { formatDate } from "../../utils/formatDate";

const GetCustomer = ({ id }) => {
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
  return (
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
        {bookings.map((booking) => (
          <tr key={booking.id}>
            <GetCustomer id={booking.id} />

            <td>{formatDate(booking.dateFrom)}</td>
            <td>{formatDate(booking.dateTo)}</td>
            <td>{booking.guests}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
