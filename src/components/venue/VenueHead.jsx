export const VenueHead = ({ name, media, price }) => {
  return (
    <>
      <div className="h-56 sm:h-72 md:h-96 relative">
        <img
          className="w-full object-cover rounded-lg h-56 sm:h-72 md:h-96"
          src={media}
          alt={name}
        />
        <div className="absolute block  bottom-0 mx-auto text-center w-full bg-earth-brown-light rounded-b-lg">
          <p className=" m-0 p-1">Price/night: ${price}</p>
        </div>
      </div>
    </>
  );
};
