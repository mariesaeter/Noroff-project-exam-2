import { Link } from "react-router-dom";
import { RegisterForm } from "../components/forms/RegisterForm";
import { BtnSecondary } from "../components/styled-components/Buttons";
import { BrowseVenues } from "../components/venues/BrowseVenues";
import { NavBgSolid } from "../components/styled-components/Navbg";

export const Register = () => {
  return (
    <>
      <NavBgSolid />
      <div className="bg-[url('../assets/nav-bg.svg')] bg-cover py-4 h-20">
        <h1 className="text-center text-fantasy-blue"> Register page</h1>
      </div>

      <div className="mx-5 mt-5 lg:-8">
        <RegisterForm />
        <div className="w-[80%] lg:w-[50%] mx-auto text-center mt-5">
          <p>If you already have a user</p>
          <Link to="/login">
            <BtnSecondary btnText="Login" />
          </Link>
          <BrowseVenues />
        </div>
      </div>
    </>
  );
};
