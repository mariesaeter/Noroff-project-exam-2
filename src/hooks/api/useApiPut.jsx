import { fetchToken } from "../../utils/fetchToken";

export async function apiPut(data, url, alertText) {
  const body = JSON.stringify(data);

  try {
    const response = await fetchToken(url, {
      method: "PUT",
      body,
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
