import { Link } from "react-router-dom";
import { RegisterForm } from "../components/forms/RegisterForm";
import { BtnSecondary } from "../components/styled-components/Buttons";
import { BrowseVenues } from "../components/venues/BrowseVenues";
import { NavBgSolid } from "../components/styled-components/Navbg";
import { PageHelmet } from "../components/PageHelmet";

export const Register = () => {
  return (
    <>
      <PageHelmet
        title="Holidaze - Register"
        content="Holidaze register page"
      />

      <NavBgSolid />
      <div className="pt-12">
        <div className="bg-[url('/assets/nav-bg.svg')] bg-cover py-4 h-30">
          <h1 className="text-center text-fantasy-blue"> Register user</h1>
        </div>

        <div className="mx-5 my-5 lg:my-8">
          <RegisterForm />
          <div className="w-[80%] lg:w-[50%] mx-auto text-center mt-5">
            <p>If you already have a user</p>
            <Link to="/login">
              <BtnSecondary btnText="Login" />
            </Link>
            <BrowseVenues />
          </div>
        </div>
      </div>
    </>
  );
};
