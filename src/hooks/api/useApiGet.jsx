import { useEffect, useState } from "react";

export function useApiGet(url) {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getVenues() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedVenues = await fetch(url);
        const json = await fetchedVenues.json();
        setVenues(json);
        console.log(json);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getVenues(url);
  }, [url]);
  return { venues, isLoading, isError };
}
