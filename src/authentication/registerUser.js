import { URL_REGISTER } from "../constants/url";

export async function registerUser(user) {
  const body = JSON.stringify(user);

  try {
    const response = await fetch(URL_REGISTER, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body,
    });
    const json = await response.json();

    if (response.ok) {
      alert("Your user was registered successfully");
      return json;
    }
  } catch (error) {
    console.log(error);
  }
}
