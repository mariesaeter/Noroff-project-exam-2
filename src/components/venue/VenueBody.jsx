export const VenueBody = ({ description, maxGuests }) => {
  return (
    <>
      <p>{description}</p>
      <p>Max number of guests: {maxGuests}</p>
    </>
  );
};
