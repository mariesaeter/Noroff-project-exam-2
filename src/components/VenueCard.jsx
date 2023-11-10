import { Link } from "react-router-dom";

export const VenueCard = (props) => {
  return (
    <Link className="group " to={`/${props.id}`}>
      <div className="grid place-items-center relative w-full before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-body-black before:opacity-0 group-hover:before:opacity-40 before:rounded-lg transition-all ease-in-out duration-300">
        <p className="transition-all ease-in-out duration-300 absolute text-body-white uppercase opacity-0 group-hover:opacity-100 ">
          View venue
        </p>
        <img
          className="h-40 md:h-64 w-full object-cover rounded-lg"
          src={props.media}
          alt={props.name}
        ></img>
      </div>
      <h3 className="text-2xl mt-1.5">{props.name}</h3>
      <div className="flex justify-between">
        <p className="text-fantasy-blue">
          {props.city}, {props.country}
        </p>
        <p>{props.price}$ / night</p>
      </div>
    </Link>
  );
};
