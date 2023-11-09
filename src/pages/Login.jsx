// import { useState } from "react";
import { Link } from "react-router-dom";
import { BrowseVenues } from "../components/BrowseVenues";
import { LoginForm } from "../components/LoginForm";
import { BtnSecondary } from "../components/styled-components/Buttons";

export const Login = () => {
  // const [token, setToken] = useState();

  return (
    <>
      <div className="bg-[url('../assets/nav-bg.svg')] bg-cover py-4 h-20">
        <h1 className="text-center text-fantasy-blue"> Login page</h1>
      </div>

      <div className="mx-5 mt-5 lg:mt-8 text-center">
        <LoginForm />
        <div className="w-[80%] lg:w-[50%] mx-auto">
          <p>If you dont have a user</p>
          <Link to="/register">
            <BtnSecondary btnText="Register user" />
          </Link>
        </div>
        <BrowseVenues />
      </div>
    </>
  );
};
