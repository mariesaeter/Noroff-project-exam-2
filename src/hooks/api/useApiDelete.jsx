import { fetchToken } from "../../utils/fetchToken";

export async function apiDelete(url) {
  try {
    const response = await fetchToken(url, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
