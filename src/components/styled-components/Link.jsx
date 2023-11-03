import { Link } from "react-router-dom";

export const StyledLink = ({ location, children }) => {
  return (
    <Link
      to={`/${location}`}
      className={`text-body-white hover:border-b-2 hover:border-earth-brown scale-x-0 transition transform ease-in-out delay-300 hover:origin-left lg:text-fantasy-blue lg:hover:text-fantasy-blue-hover lg:active:text-fantasy-blue-active m-5`}
    >
      {children}
    </Link>
  );
};

// export const styledLink = styled(Link) {
// className: 'text-fantasy-blue';
// }
