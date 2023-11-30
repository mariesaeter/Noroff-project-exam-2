import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { iconClass, inputClass } from "../constants";
import { Controller } from "react-hook-form";

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
export const DateRange = ({ control, setValue }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <Controller
        name="dateFrom"
        control={control}
        defaultValue={startDate}
        render={() => (
          <DatePicker
            wrapperClassName="w-full relative text-earth-brown h-11 mb-2.5"
            calendarClassName="bg-white border-fantasy-blue border-2"
            minDate={new Date()}
            selectsStart
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            onChange={(date) => {
              setValue("dateFrom", date);
              setStartDate(date);
            }}
            // customInput={
            //   <Input
            //     type="string"
            //     name="dateFrom"
            //     register={register}
            //     label="date from"
            //   />
            // }

            className={inputClass}
            icon={<CalendarIcon />}
            showIcon={true}
            ariaLabelledBy="check-in-date"
            placeholderText="Date from"
          />
        )}
      />
      <Controller
        name="dateTo"
        control={control}
        defaultValue={endDate}
        render={() => (
          <DatePicker
            wrapperClassName="w-full relative text-earth-brown h-11 mb-2.5"
            calendarClassName="bg-white border-fantasy-blue border-2"
            minDate={startDate}
            selectsEnd
            selected={endDate}
            startDate={startDate}
            endDate={endDate}
            onChange={(date) => {
              setValue("dateTo", date);
              setEndDate(date);
            }}
            // customInput={
            //   <Input
            //     type="string"
            //     name="dateTo"
            //     register={register}
            //     label="date to"
            //   />
            // }
            className={inputClass}
            icon={<CalendarIcon />}
            showIcon={true}
            ariaLabelledBy="check-out-date"
            placeholderText="date to"
          />
        )}
      />
    </>
  );
};
