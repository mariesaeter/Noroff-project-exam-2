import { Link } from "react-router-dom";

import { BtnCta } from "./styled-components/Buttons";
import { SearchForm } from "./forms/SearchForm";

export const Hero = () => {
  return (
    <>
      <div className="pt-12">
        <div className="flex flex-col items-center  bg-[url('/assets/hero-bg.svg')] bg-cover min-h-[30rem] py-10 ">
          <img
            src="/assets/holidaze-logo-big.png"
            alt="Holidaze logo"
            className="w-1/4"
          />
          <h2 className="text-fantasy-blue text-3xl">Fictional adventures</h2>
          <SearchForm />
          <Link to="/browse-venues" className="w-1/2 mt-16">
            <BtnCta btnText="Browse all  venues" />
          </Link>
        </div>
      </div>
    </>
  );
};
