import { LinkSecondary } from "../styled-components/Buttons";

export const BookingCard = (props) => {
  return (
    <li className="border-2 border-fantasy-blue rounded-lg p-5 w-full">
      <h3>{props.name}</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 mb-2 items-center">
        <img
          className="rounded-lg h-full object-cover"
          src={props.media}
          alt={props.name}
        />
        <div className="col-span-2 sm:col-span-3 lg:flex gap-5">
          <div>
            <h4>Your stay</h4>
            <p>
              {props.dateStart} - {props.dateEnd} ({props.days} days)
            </p>
          </div>
          <div>
            <h4>Price</h4>
            <p>
              ${props.totalPrice} (${props.price} / night)
            </p>
          </div>
        </div>
        <div className="col-span-3 sm:col-span-4 justify-self-center lg:col-span-1">
          <LinkSecondary text="View details" location={`../${props.id}`} />
        </div>
      </div>
    </li>
  );
};
