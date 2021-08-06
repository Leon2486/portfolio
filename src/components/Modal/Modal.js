import React from "react";
import ReactDOM from "react-dom";

import style from "./modal.module.scss";

export default function Modal(props) {
  const { open, setOpen } = props;
  const { img, title, content } = props;
  const renderModal = () => {
    if (!open) return null;

    return (
      <div
        className={style.container}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(false);
        }}
      >
        <div className={style.modal} onClick={(e) => e.stopPropagation()}>
          <span className={style.exit} onClick={() => setOpen(false)}>
            X
          </span>
          <div className={style.imageBox}>
            <img src={img} alt="" />
          </div>
          <div className={style.content}>
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(renderModal(), document.querySelector("#modal"));
}
