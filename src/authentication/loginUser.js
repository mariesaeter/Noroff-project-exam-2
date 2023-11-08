import { URL_LOGIN } from "../constants/url";

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
      const json = await response.json();
      return json;
    }
  } catch (error) {
    console.log(error);
  }
}

// export function login({setToken}) {

// }
