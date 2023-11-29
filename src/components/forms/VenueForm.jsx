import { BtnPrimary } from "../styled-components/Buttons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Input, InputCheckbox } from "./Input";
import { radioClass, textareaClass } from "../../constants/classes";

export const VenueForm = ({ schema, btnText, useOnSubmit, values, id }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(schema), defaultValues: values });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <div>
      <form
        id={id}
        className="w-[80%]  mx-auto xl:grid xl:grid-cols-2 xl:gap-11"
        onSubmit={handleSubmit(useOnSubmit)}
      >
        <div>
          <Input
            type="string"
            name="name"
            label="Title"
            placeholder="Title here"
            register={register}
            error={errors.name?.message}
          />

          <Input
            type="string"
            name="media"
            label="Image"
            placeholder="Image url"
            register={register}
            error={errors.media?.message}
          />
          <div className="lg:grid lg:grid-cols-2 lg:gap-2">
            <Input
              type="number"
              name="price"
              label="Price / night"
              placeholder="$ price"
              register={register}
              error={errors.price?.message}
            />
            <Input
              type="number"
              name="maxGuests"
              label="Max Guests"
              placeholder="1-100"
              register={register}
              error={errors.maxGuests?.message}
            />
          </div>

          <label htmlFor="description">Description</label>
          <div className=" block  relative text-earth-brown  mb-5">
            <textarea
              className={textareaClass}
              type="string"
              name="description"
              placeholder="Describe your venue here"
              {...register("description")}
              rows="5"
            ></textarea>
          </div>
          <h2>Facilities</h2>
          <p>Select facilities that your venue offer.</p>
          <div className="lg:flex lg:justify-between">
            <InputCheckbox name="meta.wifi" register={register} label="Wifi" />
            <InputCheckbox
              name="meta.parking"
              register={register}
              label="Parking"
            />
            <InputCheckbox
              name="meta.breakfast"
              register={register}
              label="Breakfast"
            />
            <InputCheckbox name="meta.pets" register={register} label="Pets" />
          </div>
        </div>
        {/* <label htmlFor="people">Number of people</label>
          <div className=" block  relative text-earth-brown  mb-2.5">
            <input
              type="number"
              name="maxGuests"
              ref={register("maxGuests")}
              className={inputClass}
              placeholder="1-100"
            />
            <p className="text-error-dark text-sm mt-1">
              {errors.maxGuests?.message}
            </p>
          </div>

          <label htmlFor="maxGuests">Number of people</label>
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
          </div> */}
        <div>
          <h2>Location</h2>
          <p>Is your place inspired by a book or a movie?</p>
          <div className="mb-5">
            <div className="flex gap-2 mb-2.5">
              <input
                type="radio"
                id="book"
                className={radioClass}
                name="location.zip"
                value="book"
                {...register("location.zip")}
              />
              <label htmlFor="location.zip">Book</label>
            </div>
            <div className="flex gap-2 mb-2.5">
              <input
                type="radio"
                id="movie"
                value="movie"
                className={radioClass}
                name="location.zip"
                {...register("location.zip")}
              />
              <label htmlFor="location.zip">Movie</label>
              <p className="text-error-dark text-sm mt-1">
                {errors.zip?.message}
              </p>
            </div>
          </div>
          <Input
            type="string"
            name="location.address"
            label="Which book or movie is your venue in?"
            placeholder="Book or movie"
            register={register}
            error={errors.address?.message}
          />
          <Input
            type="string"
            name="location.city"
            label="City"
            placeholder="City of venue"
            register={register}
            error={errors.city?.message}
          />
          <Input
            type="string"
            name="location.country"
            label="Country"
            placeholder="Country of venue"
            register={register}
            error={errors.country?.message}
          />
          <div className="lg:grid lg:grid-cols-2 lg:gap-2">
            <Input
              type="number"
              name="location.lat"
              label="Latitude"
              placeholder="-90 - 90"
              register={register}
              error={errors.lat?.message}
            />
            <Input
              type="number"
              name="location.lng"
              label="Longitude"
              placeholder="-180 - 180"
              register={register}
              error={errors.lng?.message}
            />
          </div>{" "}
          <div className="block  relative text-earth-brown  mb-2.5 mt-5">
            <BtnPrimary btnText={btnText} type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};
