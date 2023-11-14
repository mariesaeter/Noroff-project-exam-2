import { useEffect, useState } from "react";
import { URL_PROFILE } from "../../constants/url";
import { fetchToken } from "../../utils/fetchToken";

export const useGetProfile = async (name) => {
  const [userProfile, setUserProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function getProfile() {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetchToken(`${URL_PROFILE}/${name}`);
        const json = await response.json();
        setUserProfile(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getProfile(name);
  }, [name]);

  return { userProfile, isLoading, isError };
};
