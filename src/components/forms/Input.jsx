import { inputClass } from "../../constants";
import { checkboxClass, iconClass } from "../../constants/classes";

export const InputIcon = ({
  type,
  name,
  label,
  placeholder,
  error,
  register,
  icon,
}) => {
  <>
    <label htmlFor={name}>{label}</label>
    <div className=" block group relative text-earth-brown mb-2.5">
      <i className={iconClass(icon)}></i>
      <input
        type={type}
        name={name}
        {...register(name)}
        className={inputClass}
        placeholder={placeholder}
      />
      <p className="text-error-dark text-sm mt-1">{error}</p>
    </div>
  </>;
};

export const Input = ({
  type,
  name,
  label,
  placeholder,
  error,
  register,
  value,
  max,
  step,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className=" block  relative text-earth-brown  mb-2.5">
        <input
          type={type}
          name={name}
          {...register(name)}
          className={inputClass}
          placeholder={placeholder}
          value={value}
          max={max}
          step={step}
        />
        <p className="text-error-dark text-sm mt-1">{error}</p>
      </div>
    </div>
  );
};

export const InputCheckbox = ({ name, register, label }) => {
  return (
    <div className="flex gap-2 mb-2.5">
      <input
        id={name}
        type="checkbox"
        className={checkboxClass}
        name={name}
        {...register(name)}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};
