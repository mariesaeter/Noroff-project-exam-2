import { formatDate } from "../../utils/formatDate";

export const ManagerBookings = ({ bookings }) => {
  return (
    <table className="w-full">
      <colgroup span="3"></colgroup>
      <tr>
        <th>From</th>
        <th>To</th>
        <th>Guests</th>
      </tr>
      {bookings.map((booking) => (
        <tr key={booking.id}>
          <td>{formatDate(booking.dateFrom)}</td>
          <td>{formatDate(booking.dateTo)}</td>
          <td>{booking.guests}</td>
        </tr>
      ))}
    </table>
  );
};
