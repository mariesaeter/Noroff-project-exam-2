import { loadLocal } from "./localStorage";

export const fetchToken = async (url, options) => {
  const accessToken = loadLocal("accessToken");
  return fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
