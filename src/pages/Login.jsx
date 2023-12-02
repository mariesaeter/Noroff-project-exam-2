// import { useState } from "react";
import { Link } from "react-router-dom";
import { BrowseVenues } from "../components/venues/BrowseVenues";
import { LoginForm } from "../components/forms/LoginForm";
import { BtnSecondary } from "../components/styled-components/Buttons";
import { NavBgSolid } from "../components/styled-components/Navbg";
import { PageHelmet } from "../components/PageHelmet";

export const Login = () => {
  // const [token, setToken] = useState();

  return (
    <>
      <PageHelmet title="Holidaze - Login" content="Holidaze login page" />

      <NavBgSolid />
      <div className="pt-12">
        <div className="bg-[url('/assets/nav-bg.svg')] bg-cover py-4 h-30">
          <h1 className="text-center text-fantasy-blue"> Login</h1>
        </div>

        <div className="mx-5 my-5 lg:my-8">
          <LoginForm />
          <div className="w-[80%] lg:w-[50%] mx-auto mt-5 text-center">
            <p>If you dont have a user</p>
            <Link to="/register">
              <BtnSecondary btnText="Register user" />
            </Link>
          </div>
          <BrowseVenues />
        </div>
      </div>
    </>
  );
};
