import { KeyboardEventHandler } from "react";
import { createPortal } from "react-dom";
import { Keys, ModalProps } from "../utils/types";

import "./styles/Modal.css";

const Modal = ({ children, styles, className, onClose }: ModalProps): JSX.Element => {
  const modalRoot = document.querySelector("#gallery-portal");
  if (!modalRoot) throw new Error("There isn't a tag with 'gallery-portal' id");

  const onCloseWithoutEvent = onClose as VoidFunction;

  const handleKeyClose: KeyboardEventHandler<HTMLSpanElement> = (event) => {
    if (event.code === Keys.escape && event.key === Keys.escape) {
      onCloseWithoutEvent();
    }
  };

  return createPortal(
    <div
      className={`gallery-modal${className ? ` ${className}` : ""}`}
      style={styles}
    >
      <span
        className="gallery-modal__overlay"
        onClick={onClose}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyClose}
      />
      <div className="gallery-modal__content">
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
