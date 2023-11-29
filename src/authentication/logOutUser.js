import { removeLocal } from "../utils/localStorage";

export const handleLogOut = () => {
  removeLocal("accessToken");
  removeLocal("profile");
};
