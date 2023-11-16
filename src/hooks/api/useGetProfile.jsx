import { useEffect, useState } from "react";
import { fetchToken } from "../../utils/fetchToken";

export const useGetProfile = async (url) => {
  const [userProfile, setUserProfile] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function getProfile() {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetchToken(url);
        const json = await response.json();
        setUserProfile(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getProfile(url);
  }, [url]);

  console.log(userProfile);
  return { userProfile, isLoading, isError };
};
