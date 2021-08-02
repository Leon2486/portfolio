import React from "react";
import style from "./header.module.scss";

export default function Header() {
  return (
    <header>
      <div className={style.title}>
        <span>Leon's site</span>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#puzzle">about me</a>
            <span>about me</span>
          </li>
          <li>
            <a href="#portfolio">portfolio</a>
            <span>portfolio</span>
          </li>
          <li>
            <a href="#quiz">little game</a>
            <span>talk shit</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
