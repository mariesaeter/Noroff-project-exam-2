import { useParams } from "react-router-dom";
import { NavBgGradient } from "../components/styled-components/Navbg";
import { useApiAuth } from "../hooks/api/useGetProfile";
import { URL_PROFILE } from "../constants/url";
import { Modal } from "../components/Modal";
import { AvatarForm } from "../components/forms/AvatarForm";

// // import { AuthContext } from "../context/AuthContext";
// import { loadLocal } from "../utils/localStorage";

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
      <div className="mx-5 my-5 md:my-10 md:mx-16">
        <h1 className="mb-5">My profile</h1>
        <div>hello</div>
        <img src={data.avatar} alt={`${data.name} avatar`} />
        <Modal modalLinkText="Change avatar">
          <h2>Change avatar</h2>
          <AvatarForm oldAvatar={data.avatar} />
        </Modal>
      </div>
    </>
  );
};
