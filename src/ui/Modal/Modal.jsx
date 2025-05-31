import { createContext, useContext, useState, cloneElement } from "react";
import { createPortal } from "react-dom";
import Dialog from "../Dialog/Dialog";

function Open({ children, id }) {
  const { openWindow } = useContext(ModalContext);
  const onClick = () => openWindow(id);
  return cloneElement(children, { onClick });
}

function Window({ children, id, title }) {
  const { currentWindow, closeWindow } = useContext(ModalContext);

  return currentWindow === id
    ? createPortal(
        <Dialog title={title} onClose={closeWindow}>
          {children}
        </Dialog>,
        document.body
      )
    : null;
}

export const ModalContext = createContext();
function Modal({ children }) {
  const [currentWindow, setCurrentWindow] = useState("");

  const openWindow = (id) => setCurrentWindow(id);
  const closeWindow = () => setCurrentWindow("");

  return (
    <ModalContext.Provider
      value={{ currentWindow, setCurrentWindow, openWindow, closeWindow }}
    >
      <div>{children}</div>
    </ModalContext.Provider>
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
