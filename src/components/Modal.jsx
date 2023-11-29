import { useState } from "react";
import { BtnSecondary } from "./styled-components/Buttons";
import { linkClass } from "../constants/classes";

export const Modal = ({ modalLinkText, id, children }) => {
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
          className="bg-[#fff] w-5/6 h-4/6 absolute m-auto top-0 left-0  right-0 bottom-0 rounded-lg flex flex-col justify-between p-5"
        >
          <button
            className="flex items-center self-end gap-1"
            onClick={() => toggleModal()}
          >
            <small>Close</small>
            <i className="fa-solid fa-close text-fantasy-blue text-xl"></i>
          </button>

          {children}
          <div>
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
