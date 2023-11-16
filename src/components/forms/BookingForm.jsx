import { iconClass, inputClass } from "../../constants";
import { Calendar } from "../DatePicker";
import { BtnPrimary } from "../styled-components/Buttons";

export const BookingForm = () => {
  return (
    <div>
      <form className="bg-sky-blue-light w-full lg:px-4 py-5 lg:gap-2.5 rounded-lg">
        <h2>Book your stay</h2>
        <div className=" w-[80%] lg:w-full block mx-auto">
          <Calendar />
        </div>
        <div className=" w-[80%] lg:w-full block mx-auto">
          <Calendar />
        </div>
        <label htmlFor="people">Number of people</label>
        <div className=" w-[80%] lg:w-full block mx-auto relative text-earth-brown h-11 mb-2.5">
          <i className={iconClass("fa-user")}></i>
          <input
            type="number"
            name="people"
            className={inputClass}
            placeholder="How many people?"
          />
        </div>
        <div className="w-[80%] lg:w-full block mx-auto">
          <BtnPrimary btnText="Book" type="submit" />
        </div>
      </form>
    </div>
  );
};
