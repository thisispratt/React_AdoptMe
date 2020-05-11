import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }
  const modalRoot = document.getElementById("modal");

  useEffect(() => {
    modalRoot.appendChild(elRef.current);

    //the return statement in the useEffect function runs when the component unmounts.(i.e. it does the cleaning process.)
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return ReactDOM.createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
