import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { inputClass } from "../constants";

export const Calendar = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  // const Input = forwardRef((props, ref) => {
  //   return <Input {...props} ref={ref} />;
  // });
  // Input.displayName = "input";
  // const inputRef = useRef(null);

  return (
    <DatePicker
      wrapperClassName="w-full relative"
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      // customInput={<Input inputRef={inputRef} />}
      className={inputClass}
      onChange={(update) => {
        setDateRange(update);
      }}
    />
  );
};
