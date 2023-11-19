import { URL_VENUE } from "../../constants/url";
import { fetchToken } from "../../utils/fetchToken";

export const apiPost = async (data) => {
  const body = JSON.stringify(data);

  try {
    const response = await fetchToken(URL_VENUE, {
      method: "POST",
      body,
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
