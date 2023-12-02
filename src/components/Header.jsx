import { Link } from "react-router-dom";
import { Nav } from "./Nav";
// import { useContext } from "react";
// import NavContext from "../context/NavContext";

export function Header() {
  // const { navStatus } = useContext(NavContext)
  return (
    <>
      <header className="fixed top-0 z-30 px-5 py-3 md:px-8  w-full">
        <div className="flex justify-between lg:place-items-center lg:grid lg:grid-cols-[100px_minmax(0px,_1fr)] ">
          <Link to="/" className="z-20">
            <img
              src="/assets/holidaze-logo.png"
              alt="Holidaze logo"
              className="w-20 "
            />
          </Link>
          <Nav className="w-full" />
        </div>
      </header>
    </>
  );
}
