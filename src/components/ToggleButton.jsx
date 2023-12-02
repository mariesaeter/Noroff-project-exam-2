import { useState } from "react";

export const ToggleButton = ({
  children,
  classes,
  btnTextClose,
  btnTextOpen,
}) => {
  const [toggle, setToggle] = useState(false);
  const toggleContent = () => setToggle(!toggle);

  const closeButton = (
    <button className={classes} onClick={() => toggleContent()}>
      {btnTextClose}
    </button>
  );

  const openButton = (
    <button className={classes} onClick={() => toggleContent()}>
      {btnTextOpen}
    </button>
  );

  return (
    <>
      {toggle ? closeButton : openButton}
      {toggle && (
        <div className="absolute w-full  bg-body-white z-40 left-0 px-2 py-1.5">
          {children}
        </div>
      )}
    </>
  );
};
