import { URL_BOOKINGS, URL_VENUE } from "../../constants/url";
import { apiPost } from "../../hooks/api/useApiPost";
import { apiPut } from "../../hooks/api/useApiPut";

export const useOnSubmitCreateVenue = async (data) => {
  try {
    data.media = data.media.split(" ");

    data.location.lat = parseFloat(data.location.lat);
    data.location.lng = parseFloat(data.location.lng);

    await apiPost(data, URL_VENUE);
    alert(`Your venue ${data.name} was created successfully!`);
  } catch (error) {
    console.log(error);
  }
  // Try to get it to only navigate if the login is successful.
};

export const useOnSubmitUpdateVenue = async (data) => {
  try {
    if (Array.isArray(data.media) === false) {
      data.media = data.media.split(" ");
    }

    await apiPut(
      data,
      `${URL_VENUE}/${data.id}`,
      `Your venue ${data.name} was updated successfully!`
    );
  } catch (error) {
    console.log(error);
  }
};

export const useOnSubmitBookVenue = async (data) => {
  try {
    await apiPost(data, URL_BOOKINGS, "Your booking was created successfully!");
  } catch (error) {
    console.log(error);
  }
  // Try to get it to only navigate if the login is successful.
};
