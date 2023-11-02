import { Link } from "react-router-dom";
import { Nav } from "./Nav";
// import { useContext } from "react";
// import NavContext from "../context/NavContext";

export function Header() {
  // const { navStatus } = useContext(NavContext)
  return (
    <header>
      <Link to="/">
        <img src="/src/assets/holidaze-logo.png" alt="Holidaze logo" />
      </Link>
      <Nav />
    </header>
  );
}
