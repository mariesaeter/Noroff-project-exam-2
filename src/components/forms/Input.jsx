// import { useReducer } from "react";

import { inputClass } from "../../constants";
import { checkboxClass, iconClass } from "../../constants/classes";

{
  /* <label htmlFor="maxGuests">Number of people</label>
<div className=" block  relative text-earth-brown  mb-2.5">
  
  <input
    type="number"
    name="maxGuests"
    {...register("maxGuests")}
    className={inputClass}
    placeholder="1-100"
  />
  <p className="text-error-dark text-sm mt-1">
    {errors.maxGuests?.message}
  </p>
</div> */
}

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

// const inputReducer = (state, action) => {
//   switch (action.type) {
//     case "CHANGE":
//       return { ...state, value: action.val };
//     default:
//       return state;
//   }
// };

// export const Input = (props) => {

//     const [inputState, dispatch] = useReducer(inputReducer, {value: ''});

//     const {id, onInput} = props;
//     const {value} = inputState;
//   const element =
//     props.element === "input" ? (
//       <input
//         name={props.name}
//         type={props.type}
//         placeholder={props.placeholder}
//         value=""
//       />
//     ) : (
//       <textarea name={props.name} rows="4" value="" />
//     );
//   return (
//     <div>
//       <label htmlFor={props.id}>{props.label}</label>
//       {element}
//     </div>
//   );
// };
