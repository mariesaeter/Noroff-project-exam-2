import { DateRange } from "../DatePicker";
import { BtnPrimary } from "../styled-components/Buttons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Input } from "./Input";
import { useParams } from "react-router-dom";

export const BookingForm = ({ schema, useOnSubmit }) => {
  const {
    reset,
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(schema) });

  let params = useParams();

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <div>
      <form
        id="bookingForm"
        onSubmit={handleSubmit(useOnSubmit)}
        className="bg-sky-blue-light w-full lg:px-4 py-5 lg:gap-2.5 rounded-lg"
      >
        <h2>Book your stay</h2>
        <div className=" w-[80%] lg:w-full block mx-auto">
          <DateRange control={control} setValue={setValue} />
        </div>
        <Input
          type="hidden"
          name="venueId"
          value={params.id}
          register={register}
        />
        <Input
          type="number"
          name="guests"
          label="Number of guests"
          placeholder="0-100"
          register={register}
          error={errors.guests?.message}
        />

        <div className="w-[80%] lg:w-full block mx-auto">
          <BtnPrimary btnText="Book" type="submit" />
        </div>
      </form>
    </div>
  );
};
