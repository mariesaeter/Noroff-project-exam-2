import { Link } from "react-router-dom";
import { Nav } from "./Nav";
// import { useContext } from "react";
// import NavContext from "../context/NavContext";

export function Header() {
  // const { navStatus } = useContext(NavContext)
  return (
    <header className="flex justify-between lg:grid lg:grid-cols-[100px_minmax(0px,_1fr)] lg:place-items-center bg-sky-blue-dark px-5 py-3 md:px-8 ">
      <Link to="/">
        <img
          src="/src/assets/holidaze-logo.png"
          alt="Holidaze logo"
          className="w-20"
        />
      </Link>
      <Nav className="" />
    </header>
  );
}
