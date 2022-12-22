import Card from "./Card";
import ReactDOM from "react-dom";
import "./modal.css";
import { useModalContext } from "../context/ModalContext";
import { IoIosClose } from "react-icons/io";

const Modal = ({ className, children }) => {
  const { showModal, closeModalHandler } = useModalContext();
  return (
    <>
      {showModal &&
        ReactDOM.createPortal(
          <>
            <section id="backdrop" onClick={closeModalHandler}></section>
            <Card className={className}>
              <div className="close" onClick={closeModalHandler}>
                <IoIosClose />
              </div>
              {children}
            </Card>
          </>,
          document.querySelector("#overlays"),
        )}
    </>
  );
};

export default Modal;
