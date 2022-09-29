import { createPortal } from "react-dom";
import { Keys } from "../common/typing/enums";

// eslint-disable-next-line import/order
import type { KeyboardEventHandler } from "react";
import type { ModalProps } from "../common/typing/proptypes";

import "./styles/Modal.css";

const Modal = ({ children, styles, className, onClose }: ModalProps) => {
  const modalRoot = document.querySelector("#gallery-portal");
  if (!modalRoot) throw new Error("There isn't a tag with 'gallery-portal' id");

  const handleKeyClose: KeyboardEventHandler<HTMLSpanElement> = (event) => {
    if (event.code === Keys.escape && event.key === Keys.escape) {
      onClose();
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
