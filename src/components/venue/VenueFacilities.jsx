const Facility = ({ icon, name, isFacility }) => {
  if (isFacility) {
    return (
      <li className="flex items-center justify-center gap-1 bg-sky-blue-light text-fantasy-blue rounded-full py-1.5">
        <i className={`${icon} fa-solid`}></i>
        <p className="m-0">{name}</p>
      </li>
    );
  }
};

export const VenueFacilities = ({ meta }) => {
  const { wifi, parking, breakfast, pets } = meta;

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
      <Facility icon={`fa-wifi`} name="wifi" isFacility={wifi} />
      <Facility
        icon={`fa-square-parking`}
        name="parking"
        isFacility={parking}
      />
      <Facility
        icon={`fa-mug-saucer`}
        name="breakfast"
        isFacility={breakfast}
      />
      <Facility icon={`fa-paw`} name="pets" isFacility={pets} />
    </ul>
  );
};
