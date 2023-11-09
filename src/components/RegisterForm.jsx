import { useForm } from "react-hook-form";
import { iconClass, inputClass } from "../constants";
import { BtnPrimary } from "./styled-components/Buttons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { registerUser } from "../authentication/registerUser";

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
      <div className=" block  relative text-earth-brown  mb-2.5">
        <i className={iconClass("fa-user")}></i>

        <input
          type="text"
          name="name"
          {...register("name")}
          className={inputClass}
        />
        <label>{errors.name?.message}</label>
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
        <label>{errors.email?.message}</label>
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
        <label>{errors.password?.message}</label>
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
        <label>{errors.avatar?.message}</label>
      </div>
      <label htmlFor="venueManager">
        I am a manager and would like to add venues for rent
      </label>
      <div className="  mb-2.5">
        <input
          type="checkbox"
          name="venueManager"
          {...register("venueManager")}
        />
        <label>{errors.venueManager?.message}</label>
      </div>
      <div className=" ">
        <BtnPrimary btnText="Register" type="submit" />
      </div>
    </form>
  );
};
