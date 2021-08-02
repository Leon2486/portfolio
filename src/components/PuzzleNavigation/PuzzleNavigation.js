import React, { useState } from "react";

import style from "./puzzle.module.scss";

import coding from "../../img/coding.jpg";
import personal from "../../img/personal.jpg";
import experience from "../../img/experience.jpg";
import language from "../../img/language.jpg";

import Modal from "../Modal/Modal";

const myInfo = {
  personalLife: {
    title:
      "book, video game and dancing (hard to see these habits on one person, I know)",
    content:
      "Book and Video games are my way to explore different world's and cultures. With its variety on genre and theme, it's always a joyful journey to go trhough every design in these fabulous creations. And dance is my way to express those input ( also a way for losing weight ). Exercise helped me to release pressure and inspire new thoughts.",
    img: personal,
  },
  codingLife: {
    title: "I love coding (sounds not true, but really)",
    content:
      "I started learning coding after my first job, which was an copy writer for advertisement. I love create things, which lead me to started my learning on the goal of being and front-end developer.",
    img: coding,
  },
  workingExperience: {
    title: "Create things",
    content:
      "I used to work in advertising business, writing copies for real estate. Advertising, in my opinion, shared some similarity with web development, which is also a way to promote client's product. Therefore, I would like to share my knowledge accumulated in advertising with my team and create a great site for our client",
    img: experience,
  },
  languageLearning: {
    title: "As a triligual",
    content:
      "I could speak fluent English, Japanese and, of course, Chinese. Language is not just a way to communicate with people, but a window to access new knowledges. On my way of learning coding, it did help me a lot on researching and problem solving.",
    img: language,
  },
};

export default function PuzzleNavigation() {
  const [modalOpen, setModalOpen] = useState(false);
  const [genre, setGenre] = useState("personalLife");

  const { title, content, img } = myInfo[genre];

  return (
    <div className={style.container} id="puzzle">
      <div className={style.puzzle} onClick={() => setModalOpen(true)}>
        <div className={style.coding} onClick={() => setGenre("codingLife")}>
          <img src={coding} alt="" />
          <div className="">coding</div>
        </div>
        <div
          className={style.personal}
          onClick={() => setGenre("personalLife")}
        >
          <img src={personal} alt="" />
          <div className="">personal life</div>
        </div>
        <div
          className={style.experience}
          onClick={() => setGenre("workingExperience")}
        >
          <img src={experience} alt="" />
          <div className="">experince</div>
        </div>
        <div
          className={style.language}
          onClick={() => setGenre("languageLearning")}
        >
          <img src={language} alt="" />
          <div className="">language</div>
        </div>
      </div>
      <div className={style.intro}>
        <h2>check it out and know me more (if you want)</h2>
      </div>
      <Modal
        open={modalOpen}
        setOpen={setModalOpen}
        img={img}
        title={title}
        content={content}
      />
    </div>
  );
}
