import { useParams } from "react-router-dom";
import { NavBgGradient } from "../components/styled-components/Navbg";
import { useApiAuth } from "../hooks/api/useGetProfile";
import { URL_PROFILE } from "../constants/url";

// // import { AuthContext } from "../context/AuthContext";
// import { loadLocal } from "../utils/localStorage";

export const Profile = () => {
  let params = useParams();

  // const profileUser = loadLocal("profile");
  const { data, isLoading, isError } = useApiAuth(
    `${URL_PROFILE}/${params.name}`
  );

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
        <h1 className="mb-5">Profile</h1>
        <div>hello</div>
        <img src={data.avatar} alt={`${data.name} avatar`} />
      </div>
    </>
  );
};
