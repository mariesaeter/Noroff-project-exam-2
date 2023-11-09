import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { iconClass, inputClass } from "../constants";

// https://reactdatepicker.com/#example-date-range-for-one-datepicker
const CalendarIcon = () => {
  return <i className={iconClass("fa-calendar-days")}></i>;
};

export const Calendar = () => {
  // const [dateRange, setDateRange] = useState([null, null]);
  // const [startDate, endDate] = dateRange;

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <DatePicker
      wrapperClassName="w-full relative text-earth-brown h-11 mb-2.5"
      calendarClassName="bg-white border-fantasy-blue border-2"
      minDate={new Date()}
      selectsRange
      startDate={startDate}
      endDate={endDate}
      className={inputClass}
      onChange={onChange}
      icon={<CalendarIcon />}
      showIcon={true}
      placeholderText="When do you want to travel?"
    />
  );
};
