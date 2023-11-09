import { RegisterForm } from "../components/RegisterForm";

export const Register = () => {
  return (
    <>
      <div className="bg-[url('../assets/nav-bg.svg')] bg-cover py-4 h-20">
        <h1 className="text-center text-fantasy-blue"> Register page</h1>
      </div>

      <div className="mx-5 mt-5 lg:mt-8">
        <RegisterForm />
      </div>
    </>
  );
};
