import { useForm } from "react-hook-form";
import { iconClass, inputClass } from "../../constants";
import { BtnPrimary } from "../styled-components/Buttons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { registerUser } from "../../authentication/registerUser";
import { checkboxClass } from "../../constants/classes";

const RegisterSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  avatar: yup.string(),
});

export const RegisterForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data) => {
    console.log(data);
    registerUser(data);
  };

  return (
    <form
      id="registerForm"
      onSubmit={handleSubmit(onSubmit)}
      className="w-[80%] lg:w-[50%] mx-auto"
    >
      <label htmlFor="name">Username</label>
      <div className=" block group relative text-earth-brown mb-2.5">
        <i className={iconClass("fa-user")}></i>

        <input
          type="text"
          name="name"
          {...register("name")}
          className={inputClass}
          placeholder="Your name"
        />
        <p className="text-error-dark text-sm mt-1">{errors.name?.message}</p>
      </div>
      <label htmlFor="email">Email</label>
      <div className=" block  relative text-earth-brown  mb-2.5">
        <i className={iconClass("fa-at")}></i>

        <input
          type="text"
          name="email"
          {...register("email")}
          className={inputClass}
        />
        <p className="text-error-dark text-sm mt-1">{errors.email?.message}</p>
      </div>
      <label htmlFor="password">Password</label>
      <div className="block  relative text-earth-brown  mb-2.5">
        <i className={iconClass("fa-key")}></i>

        <input
          type="password"
          name="password"
          {...register("password")}
          className={inputClass}
        />
        <p className="text-error-dark text-sm mt-1">
          {errors.password?.message}
        </p>
      </div>
      <label htmlFor="avatar">Avatar</label>
      <div className=" block  relative text-earth-brown  mb-2.5">
        <i className={iconClass("fa-img")}></i>

        <input
          type="text"
          name="avatar"
          {...register("avatar")}
          className={inputClass}
        />
        <p className="text-error-dark text-sm mt-1">{errors.avatar?.message}</p>
      </div>

      <div className="flex gap-2 mb-2.5">
        <input
          id="venueManager"
          type="checkbox"
          className={checkboxClass}
          name="venueManager"
          {...register("venueManager")}
        />
        <label htmlFor="venueManager">
          I am a manager and would like to add venues for rent
        </label>
      </div>
      <div className=" ">
        <BtnPrimary btnText="Register" type="submit" />
      </div>
    </form>
  );
};
