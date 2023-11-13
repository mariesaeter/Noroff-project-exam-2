import { useForm } from "react-hook-form";
import { iconClass, inputClass } from "../../constants";
import { BtnPrimary } from "../styled-components/Buttons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { loginUser } from "../../authentication/loginUser";
import { useNavigate } from "react-router-dom";

const LoginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export const LoginForm = () => {
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

  const navigate = useNavigate();

  const useOnSubmit = async (data) => {
    try {
      const login = await loginUser(data);

      login;
      if (login === true) {
        navigate(-1);
      }
      console.log(loginUser(data));
    } catch (error) {
      console.log(error);
    }
    // Try to get it to only navigate if the login is successful.
  };

  return (
    <form
      id="loginForm"
      onSubmit={handleSubmit(useOnSubmit)}
      className="w-[80%] lg:w-[50%] mx-auto"
    >
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
      <div className=" ">
        <BtnPrimary btnText="Login" type="submit" />
      </div>
    </form>
  );
};
