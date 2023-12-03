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
import { PageHelmet } from "../components/PageHelmet";
import { PageWrapper } from "../components/PageWrapper";
import { Loader } from "../components/Loader";

const ProfileButtons = () => {
  const { isManager } = useContext(AuthContext);

  if (isManager) {
    return (
      <div className="grid text-center">
        <LinkPrimary text="Manage venues" location="manage-venues" />
        <LinkSecondary text="Add new venue" location="create-venue" />
      </div>
    );
  }
  if (!isManager) {
    return (
      <div className="grid text-center">
        <LinkPrimary text="View my bookings" location="my-bookings" />
        <LinkSecondary text="Browse venues" location="../browse-venues" />
      </div>
    );
  }
};

export const Profile = () => {
  let params = useParams();

  const url = `${URL_PROFILE}/${params.name}`;
  const { data, isLoading, isError } = useApiAuth(url);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>There was an error</div>;
  }

  return (
    <>
      <PageHelmet
        title={`Holidaze - ${params.name}`}
        content="Your profile page at Holidaze"
      />

      <NavBgGradient />
      <PageWrapper>
        <h1 className="mb-5 text-center">My profile</h1>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start lg:gap-5">
          <div className="text-center">
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
      </PageWrapper>
    </>
  );
};
