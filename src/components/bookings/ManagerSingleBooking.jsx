import { formatDate } from "../../utils/formatDate";
import { GetCustomer } from "./ManagerBookings";

export const ManagerSingleBooking = ({ booking, color }) => {
  return (
    <tr key={booking.id} className={color}>
      <GetCustomer id={booking.id} />

      <td>{formatDate(booking.dateFrom)}</td>
      <td>{formatDate(booking.dateTo)}</td>
      <td>{booking.guests}</td>
    </tr>
  );
};
