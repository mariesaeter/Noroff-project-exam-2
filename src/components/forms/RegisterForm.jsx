import { useForm } from "react-hook-form";
import { BtnPrimary } from "../styled-components/Buttons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { registerUser } from "../../authentication/registerUser";
import { Input, InputCheckbox } from "./Input";

const reg = new RegExp(
  /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(noroff|stud.noroff)\.no$/
);
const RegisterSchema = yup.object({
  name: yup
    .string()
    .required(
      "Name must not contain punctuation symbols except from underscore (_)"
    ),
  email: yup
    .string()
    .email("Email must end with 'stud.noroff.no' or 'noroff.no'")
    .required("Email must end with 'stud.noroff.no' or 'noroff.no'")
    .matches(reg, "Email must end with 'stud.noroff.no' or 'noroff.no'"),
  password: yup
    .string()
    .min(8, "The password must be at least 8 characters")
    .required(),
  avatar: yup.string("The avatar must be a valid url").notRequired(),
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

  const onSubmit = async (data) => {
    try {
      await registerUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      id="registerForm"
      onSubmit={handleSubmit(onSubmit)}
      className="w-[80%] lg:w-[50%] mx-auto"
    >
      <Input
        type="text"
        name="name"
        register={register}
        placeholder="Your name"
        error={errors.name?.message}
        icon="fa-user"
        label="Username"
      />
      <Input
        type="text"
        name="email"
        register={register}
        placeholder="Your email"
        error={errors.email?.message}
        icon="fa-at"
        label="Email"
      />

      <Input
        type="password"
        name="password"
        register={register}
        placeholder="Your password"
        error={errors.password?.message}
        icon="fa-key"
        label="Password"
      />

      <Input
        type="text"
        name="avatar"
        register={register}
        placeholder="Avatar url"
        error={errors.avatar?.message}
        icon="fa-image"
        label="Avatar (optional)"
      />

      <InputCheckbox
        name="venueManager"
        register={register}
        label="I am a manager and would like to add venues for rent"
      />

      <div className=" ">
        <BtnPrimary btnText="Register" type="submit" />
      </div>
    </form>
  );
};
