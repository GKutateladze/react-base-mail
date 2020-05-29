import React, { useEffect, useState } from 'react';
import "./Modal.scss";
import { createPortal } from "react-dom";

interface IProps {
  onClose: () => void;
  children: React.ReactNode | React.ReactNode[];
}

/** Контейнер для модалки */
const modalRoot: HTMLElement | null = document.getElementById('modal');

const Modal: React.FC<IProps> = ({onClose, children}) => {
  /** Создаем контейнер для модалки */
  const [div] = useState(document.createElement('DIV'));

  /** При маунте добавляем модалку. При дестрое - удаялем. */
  useEffect(() => {
    modalRoot && modalRoot.appendChild(div);
    document.body.style.overflow = 'hidden';
    return () => {
      modalRoot && modalRoot.removeChild(div);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const modal =
    <div className='modal' onClick={onClose}>
      <div className="modal__body" onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>;

  return createPortal(modal, div);
};

export default Modal;