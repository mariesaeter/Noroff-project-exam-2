import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { iconClass, inputClass } from "../../constants";
import { BtnPrimary } from "../styled-components/Buttons";
import { apiPut } from "../../hooks/api/useApiPut";
import { URL_PROFILE } from "../../constants/url";
import { useParams } from "react-router-dom";

const AvatarSchema = yup.object({
  avatar: yup.string("The avatar must be a valid url").url().notRequired(),
});

export const AvatarForm = (oldAvatar) => {
  let params = useParams();

  const url = `${URL_PROFILE}/${params.name}`;
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(AvatarSchema) });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  const useOnSubmit = async (data) => {
    try {
      console.log(data);
      await apiPut(data, `${url}/media`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      id="avatarForm"
      onSubmit={handleSubmit(useOnSubmit)}
      className=" mx-auto bg-body-white w-full p-2 rounded-lg"
    >
      <label htmlFor="avatar" className="!text-left block">
        Avatar
      </label>
      <div className=" block mx-auto relative text-earth-brown h-11 mb-2.5">
        <i className={iconClass("fa-image")}></i>
        <input
          type="url"
          name="avatar"
          {...register("avatar")}
          className={inputClass}
          placeholder={oldAvatar.oldAvatar}
        />
        <p className="text-error-dark text-sm mt-1">{errors.avatar?.message}</p>
      </div>
      <BtnPrimary btnText="Save avatar" type="submit" />
    </form>
  );
};
