import { fetchToken } from "../../utils/fetchToken";

export const apiPost = async (data, url) => {
  const body = JSON.stringify(data);

  try {
    const response = await fetchToken(url, {
      method: "POST",
      body,
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
