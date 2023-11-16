export const VenueLocation = ({ location }) => {
  const { city, country } = location;
  return (
    <>
      <h2>Location</h2>
      <div>Map</div>
      <div>
        {city}, {country}
      </div>
    </>
  );
};
