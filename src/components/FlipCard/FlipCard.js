import React from "react";
import style from "./flipcard.module.scss";

export default function FlipCard({ title, content, img, width, url, show }) {
  return (
    <div className={style.card} style={{ width }}>
      <div className={`${style.content} ${show ? style.show : ""}`}>
        <img src={img} alt="" />

        <div className={style.veil}></div>

        <p className={style.words}>{content}</p>
      </div>
      <div className={style.description}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
    </div>
  );
}
