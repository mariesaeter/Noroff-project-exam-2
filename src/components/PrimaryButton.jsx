export const WideButton = ({ classes, btnText, type, onClick }) => {
  return (
    <button
      type={`${type}`}
      className={`w-full h-10 tracking-wider rounded-lg transition ease-in-out duration-500 ${classes} `}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export const BtnPrimary = ({ btnText, type, onClick }) => {
  return (
    <WideButton
      classes="bg-fantasy-blue hover:bg-fantasy-blue-hover text-body-white"
      btnText={btnText}
      type={type}
      onClick={onClick}
    />
  );
};

export const BtnCta = ({ btnText, type, onClick }) => {
  return (
    <WideButton
      classes="bg-sky-blue-dark hover:bg-sky-blue-light text-fantasy-blue"
      btnText={btnText}
      type={type}
      onClick={onClick}
    />
  );
};

export const BtnSecondary = ({ btnText, type, onClick }) => {
  return (
    <WideButton
      classes="text-earth-brown-dark border-earth-brown hover:border-earth-brown-dark border-2"
      btnText={btnText}
      type={type}
      onClick={onClick}
    />
  );
};
