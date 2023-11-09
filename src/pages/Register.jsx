import { Link } from "react-router-dom";
import { RegisterForm } from "../components/RegisterForm";
import { BtnSecondary } from "../components/styled-components/Buttons";
import { BrowseVenues } from "../components/BrowseVenues";

export const Register = () => {
  return (
    <>
      <div className="bg-[url('../assets/nav-bg.svg')] bg-cover py-4 h-20">
        <h1 className="text-center text-fantasy-blue"> Register page</h1>
      </div>

      <div className="mx-5 mt-5 lg:mt-8">
        <RegisterForm />
        <div className="w-[80%] lg:w-[50%] mx-auto text-center">
          <Link to="/register">
            <BtnSecondary btnText="Register user" />
          </Link>
          <BrowseVenues />
        </div>
      </div>
    </>
  );
};
