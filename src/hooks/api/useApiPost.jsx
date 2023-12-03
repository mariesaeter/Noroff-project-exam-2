import { fetchToken } from "../../utils/fetchToken";

export const apiPost = async (data, url, alertText) => {
  const body = JSON.stringify(data);

  try {
    const response = await fetchToken(url, {
      method: "POST",
      body,
    });
    if (response.ok) {
      alert(alertText);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
