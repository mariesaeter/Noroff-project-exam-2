export const formatDate = (date) => {
  const options = {
    day: "numeric",
    month: "numeric",
    year: "2-digit",
  };

  let formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    new Date(date)
  );

  return formattedDate;
};
