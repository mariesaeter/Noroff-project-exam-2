import { useState } from "react";
import { BtnSecondary } from "./styled-components/Buttons";
import { linkClass } from "../constants/classes";

export const Modal = ({ modalLinkText, id, title, children }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  console.log(showModal);

  return (
    <>
      <button className={linkClass} onClick={() => toggleModal()}>
        {modalLinkText}
      </button>
      {showModal && (
        <div
          key={id}
          className="bg-[#fff] w-5/6 h-4/6 absolute m-auto top-0 left-0  right-0 bottom-0 rounded-lg flex flex-col  p-5 z-50"
        >
          <div className="flex justify-between">
            <h2>{title}</h2>
            <button
              className="flex items-center self-end gap-1 p-1 mb-3"
              onClick={() => toggleModal()}
            >
              <small>Close</small>
              <i className="fa-solid fa-close text-fantasy-blue text-xl"></i>
            </button>
          </div>
          <div className="max-h-full overflow-x-hidden w-full">{children}</div>
          <div className="mt-3">
            <BtnSecondary btnText="Close" onClick={() => toggleModal()} />
            {/* <BtnPrimary btnText="Save" type="submit" /> */}
          </div>
        </div>
      )}
    </>
  );
  // const [showModal, setShowModal] = useState(false);

  // function toggleModal() {
  //     setShowModal(!showModal);
  // }
  // return (
  //     <>
  //     {showModal ? (
  //         <div>
  //             <button onClick={toggleModal}>Close</button>
  //         </div>
  //     ): null }
  //     </>
  // )
};
