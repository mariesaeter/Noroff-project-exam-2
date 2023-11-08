import { iconClass, inputClass } from "../constants";

export const LoginForm = () => {
  return (
    <form>
      <div className="w-[80%] lg:w-[50%] block mx-auto relative text-earth-brown h-11 mb-2.5">
        <i className={iconClass("fa-at")}></i>
        <input
          type="text"
          className={inputClass}
          placeholder="Where do you want to go?"
        />
      </div>
    </form>
  );
};
