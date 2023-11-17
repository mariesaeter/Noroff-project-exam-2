import { useParams } from "react-router-dom";
import { NavBgGradient } from "../components/styled-components/Navbg";
import { useApiAuth } from "../hooks/api/useGetProfile";
import { URL_PROFILE } from "../constants/url";
import { Modal } from "../components/Modal";
import { AvatarForm } from "../components/forms/AvatarForm";
import {
  LinkPrimary,
  LinkSecondary,
} from "../components/styled-components/Buttons";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// // import { AuthContext } from "../context/AuthContext";
// import { loadLocal } from "../utils/localStorage";

const ProfileButtons = () => {
  const { isManager } = useContext(AuthContext);

  if (isManager) {
    return (
      <div>
        <LinkPrimary text="Manage venues" location="manage-venues" />
        <LinkSecondary text="Add new venue" location="create-venue" />
      </div>
    );
  }
  if (!isManager) {
    return (
      <div className="grid ">
        <LinkPrimary text="View my bookings" location="my-bookings" />
        <LinkSecondary text="Browse venues" location="../browse-venues" />
      </div>
    );
  }
};

export const Profile = () => {
  let params = useParams();

  const url = `${URL_PROFILE}/${params.name}`;
  // const profileUser = loadLocal("profile");
  const { data, isLoading, isError } = useApiAuth(url);

  console.log(data);
  if (isLoading) {
    return <div>Is loading</div>;
  }
  if (isError) {
    return <div>There was an error</div>;
  }

  return (
    <>
      <NavBgGradient />
      <div className="mx-5 my-5 md:my-10 md:mx-16 ">
        <h1 className="mb-5 text-center">My profile</h1>
        <div className="grid justify-center justify-items-center md:grid-cols-2">
          <div>
            <img
              className="w-48 h-48 lg:w-72 lg:h-72 background-cover rounded-xl mb-4"
              src={data.avatar}
              alt={`${data.name} avatar`}
            />
            <Modal modalLinkText="Change avatar">
              <h2>Change avatar</h2>
              <AvatarForm oldAvatar={data.avatar} />
            </Modal>
          </div>
          <div className="text-center lg:text-left pt-5">
            <div className="lg:flex lg:items-center lg:gap-2">
              <h4>Username:</h4>
              <p className="p-0 m-0">{data.name}</p>
            </div>
            <div className="lg:flex lg:items-center lg:gap-2 mb-5">
              <h4>E-mail:</h4>
              <p className="p-0 m-0">{data.email}</p>
            </div>
            <ProfileButtons />
          </div>
        </div>
      </div>
    </>
  );
};
