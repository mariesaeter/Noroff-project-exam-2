import { iconClass, inputClass } from "../constants";
import { Calendar } from "./DatePicker";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center bg-sky-blue-dark py-8">
      <img
        src="/src/assets/holidaze-logo-big.png"
        alt="Holidaze logo"
        className="w-1/2"
      />
      <h2 className="text-fantasy-blue text-3xl">Fictional adventures</h2>
      <form className="w-full max-w-md lg:flex">
        <div className="relative text-earth-brown h-11 mb-2.5">
          <i className={iconClass("fa-solid fa-location-dot")}></i>
          <input
            type="text"
            className={inputClass}
            placeholder="Where do you want to go?"
          />
        </div>
        <Calendar />
        {/* <div className="relative text-earth-brown">
          <i className={iconClass("fa-solid fa-calendar-days")}></i>
          <input type="date" className={inputClass} placeholder="start date" />
        </div> */}
        <div className="relative text-earth-brown h-11 mb-2.5">
          <i className={iconClass("fa-solid fa-user")}></i>
          <input
            type="number"
            className={inputClass}
            placeholder="How many people?"
          />
        </div>
      </form>
    </div>
  );
};
