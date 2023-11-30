import { iconClass, inputClass } from "../constants";
import { Calendar } from "./DatePicker";
import { BtnPrimary } from "./styled-components/Buttons";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center  py-8  bg-[url('/assets/hero-bg2.svg')] bg-cover min-h-[30rem] ">
        <img
          src="/assets/holidaze-logo-big.png"
          alt="Holidaze logo"
          className="w-1/4"
        />
        <h2 className="text-fantasy-blue text-3xl">Fictional adventures</h2>
        <form className=" w-full  lg:px-14 lg:grid lg:grid-cols-4 lg:gap-2.5  ">
          <div className="w-[80%] lg:w-full block mx-auto relative text-earth-brown h-11 mb-2.5">
            <i className={iconClass("fa-location-dot")}></i>
            <input
              type="text"
              className={inputClass}
              placeholder="Where do you want to go?"
            />
          </div>
          <div className=" w-[80%] lg:w-full block mx-auto">
            <Calendar />
          </div>
          <div className=" w-[80%] lg:w-full block mx-auto relative text-earth-brown h-11 mb-2.5">
            <i className={iconClass("fa-user")}></i>
            <input
              type="number"
              className={inputClass}
              placeholder="How many people?"
            />
          </div>
          <div className="w-[80%] lg:w-full block mx-auto">
            <BtnPrimary btnText="Search" type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};
