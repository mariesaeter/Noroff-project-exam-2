// import { useState } from "react";
import { LoginForm } from "../components/LoginForm";

export const Login = () => {
  // const [token, setToken] = useState();

  return (
    <>
      <div className="bg-[url('../assets/nav-bg.svg')] bg-cover py-4 h-20">
        <h1 className="text-center text-fantasy-blue"> Login page</h1>
      </div>

      <div className="mx-5 mt-5 lg:mt-8">
        <LoginForm />
      </div>
    </>
  );
};
