import { fetchToken } from "../../utils/fetchToken";

export async function apiDelete(url, alertText) {
  try {
    const response = await fetchToken(url, {
      method: "DELETE",
    });

    if (response.ok) {
      alert(alertText);

      setTimeout(() => {
        location.reload();
      }, 200);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
