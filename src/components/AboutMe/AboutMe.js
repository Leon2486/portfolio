import React from "react";
import style from "./about.module.scss";

import myPhoto from "../../img/myPhoto.jpg";

export default function ContactMe() {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <div className={style.textContainer}>
          <h2>Hi, I'm Leon, a rookie front-end developer</h2>
          <p>
            I started my journey on front-end development this year, hope you'll
            like my works
          </p>
          <h3>email</h3>
          <p>a5882352941176470@gmail.com</p>
          <h3>github</h3>
          <p>https://github.com/Leon2486</p>
        </div>
      </div>
      <div className={style.imgBox}>
        <img src={myPhoto} alt="" />
      </div>
    </div>
  );
}
