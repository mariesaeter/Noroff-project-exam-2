import { removeLocal } from "../utils/localStorage";

export const handleLogOut = () => {
  removeLocal("accessToken");
  removeLocal("profile");

  setTimeout(() => {
    window.location.href = "../login";
  }, 250);
};
