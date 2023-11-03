import { Link } from "react-router-dom";
import { Nav } from "./Nav";
// import { useContext } from "react";
// import NavContext from "../context/NavContext";

export function Header() {
  // const { navStatus } = useContext(NavContext)
  return (
    <header className="flex justify-between">
      <Link to="/">
        <img
          src="/src/assets/holidaze-logo.png"
          alt="Holidaze logo"
          className="w-20"
        />
      </Link>
      <Nav />
    </header>
  );
}
