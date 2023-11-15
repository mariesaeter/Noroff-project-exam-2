import { useEffect, useState } from "react";
import { fetchToken } from "../../utils/fetchToken";

export const useApiGet = (url) => {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getVenues() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedVenues = await fetchToken(url);

        const json = await fetchedVenues.json();
        setVenues(json);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getVenues(url);
  }, [url]);
  return { venues, isLoading, isError };
};
