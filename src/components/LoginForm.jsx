import { useForm } from "react-hook-form";
import { iconClass, inputClass } from "../constants";
import { BtnPrimary } from "./styled-components/Buttons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { loginUser } from "../authentication/loginUser";

const LoginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export const LoginForm = (setToken) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
  };

  return (
    <form
      id="loginForm"
      onSubmit={handleSubmit(onSubmit)}
      className="w-[80%] lg:w-[50%] mx-auto"
    >
      <div className=" block  relative text-earth-brown  mb-2.5">
        <i className={iconClass("fa-at")}></i>
        <label htmlFor="email">Email</label>
        <input type="text" {...register("email")} className={inputClass} />
        <label>{errors.email?.message}</label>
      </div>
      <div className="block  relative text-earth-brown  mb-2.5">
        <i className={iconClass("fa-key")}></i>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          {...register("password")}
          className={inputClass}
        />
        <label>{errors.password?.message}</label>
      </div>
      <div className=" ">
        <BtnPrimary btnText="Login" type="submit" />
      </div>
    </form>
  );
};
