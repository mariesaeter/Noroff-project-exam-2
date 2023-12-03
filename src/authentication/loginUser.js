import { URL_LOGIN } from "../constants/url";
import { saveLocal } from "../utils/localStorage";

export async function loginUser(user) {
  const body = JSON.stringify(user);

  try {
    const response = await fetch(URL_LOGIN, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body,
    });

    if (response.ok) {
      const { accessToken, ...profile } = await response.json();

      saveLocal("accessToken", accessToken);
      saveLocal("profile", profile);

      return true;
    }
  } catch (error) {
    console.log(error);

    return false;
  }
}
