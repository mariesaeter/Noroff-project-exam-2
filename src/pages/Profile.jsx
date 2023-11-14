import { NavBgGradient } from "../components/styled-components/Navbg";
import { useGetProfile } from "../hooks/api/useGetProfile";
// import { AuthContext } from "../context/AuthContext";
import { loadLocal } from "../utils/localStorage";

export const Profile = () => {
  const profileUser = loadLocal("profile");
  const { userProfile, isLoading, isError } = useGetProfile(profileUser.name);

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
        <h1 className="mb-5">Profile</h1>
        <img src={userProfile.avatar} alt={`${userProfile.name} avatar`} />
      </div>
    </>
  );
};
