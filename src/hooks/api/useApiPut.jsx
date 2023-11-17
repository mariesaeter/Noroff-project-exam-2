import { fetchToken } from "../../utils/fetchToken";

export async function apiPut(data, url) {
  const body = JSON.stringify(data);

  try {
    const response = await fetchToken(url, {
      method: "PUT",
      body,
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
