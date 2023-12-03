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

// export const useApiGet = (urls) => {
//   const [venues, setVenues] = useState([]);
//   const [venue, setVenue] = useState({ location: "", meta: "", media: [] });
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   // const allData = [];

//   // const getVenues = useMemo(
//   //   () => async () => {
//   //     try {
//   //       setIsLoading(true);
//   //       setIsError(false);

//   //       // const responses = await Promise.all(
//   //       //   urls.map(async (url) => {
//   //       //     const res = await fetchToken(url);
//   //       //     return res;
//   //       //   })
//   //       // );
//   //       // console.log(responses);
//   //       urls.map(async (url) => {
//   //         const data = await fetchToken(url);

//   //         const response = await data.json();
//   //         console.log(response);

//   //         setVenue({
//   //           location: response.location,
//   //           meta: response.meta,
//   //           media: response.media,
//   //         });
//   //         // allData.push(...response);
//   //         setVenues(venues.push(response));
//   //       });
//   //     } catch (error) {
//   //       setIsError(true);
//   //     } finally {
//   //       setIsLoading(false);
//   //     }
//   //   },
//   //   [urls, venues]
//   // );

//   useEffect(() => {
//     const getVenues = async () => {
//       try {
//         setIsLoading(true);
//         setIsError(false);

//         // const responses = await Promise.all(
//         //   urls.map(async (url) => {
//         //     const res = await fetchToken(url);
//         //     return res;
//         //   })
//         // );
//         // console.log(responses);
//         urls.map(async (url) => {
//           const data = await fetchToken(url);

//           const response = await data.json();
//           console.log(response);

//           // setVenue({
//           //   location: response.location,
//           //   meta: response.meta,
//           //   media: response.media,
//           // });
//           let allData = [];
//           allData.push(...response);
//           setVenues(allData);
//         });
//       } catch (error) {
//         setIsError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     getVenues(urls);
//   }, [urls, venues]);

//   // useMemo(() => {
//   //   if (pageNumbers.length === 0) {
//   //     for (let i = 1; i <= Math.ceil(totalVenues / venuesPerPage); i++) {
//   //       pageNumbers.push(i);
//   //     }
//   //   }
//   //   return pageNumbers;
//   // }, [totalVenues, venuesPerPage]);
//   // let allData = [];
//   // useEffect(() => {
//   //   // async function getVenues() {
//   //     try {
//   //       setIsLoading(true);
//   //       setIsError(false);

//   //       urls.map(async (url) => {
//   //         const data = await fetchToken(url);

//   //         const response = await data.json();
//   //         console.log(response);

//   //         setVenue({
//   //           location: response.location,
//   //           meta: response.meta,
//   //           media: response.media,
//   //         });

//   //         // allData.push(...response);
//   //         // setVenues(allData);
//   //       });

//   //       // Promise.all(promises).then((responses) => {
//   //       //   responses.forEach((response) => {
//   //       //     console.log(response.json());
//   //       //   });
//   //       // });
//   //       // console.log(promises);

//   //       // Promise.all(promises).then((responses) => {
//   //       //   let data = [];

//   //       //   responses.forEach((response) => {
//   //       //     data = data.concat(response.data);
//   //       //   });
//   //       //   setVenues(data);
//   //       // });

//   //       // const response = await promises.json();
//   //     } catch (error) {
//   //       setIsError(true);
//   //     } finally {
//   //       setIsLoading(false);
//   //     }
//   //   }

//   return { venue, venues, isLoading, isError };
// };
