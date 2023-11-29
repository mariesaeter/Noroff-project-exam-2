import { useEffect, useState } from "react";
import { fetchToken } from "../../utils/fetchToken";

export const useApiGet = (url) => {
  const [venues, setVenues] = useState([]);
  const [venue, setVenue] = useState({ location: "", meta: "", media: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getVenues() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedVenues = await fetchToken(url);

        const response = await fetchedVenues.json();
        setVenues(response);
        setVenue({
          location: response.location,
          meta: response.meta,
          media: response.media,
        });
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getVenues(url);
  }, [url]);

  return { venue, venues, isLoading, isError };
};
