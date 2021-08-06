import React, { useRef, useEffect, useState } from "react";
import FlipCard from "../FlipCard/FlipCard";
import style from "./portfolio.module.scss";

import Natour from "../../img/Natour.JPG";
import Trillo from "../../img/trillo.JPG";
import Nexter from "../../img/Nexter.JPG";
import BOKO from "../../img/BOKO.JPG";
import Animate from "../../img/Ani-mate.JPG";

const aboutMeInfo = [
  {
    content:
      "A brochure page for tour company with lots of different CSS tricks in this project, hope you like it.",
    url: "https://leon2486.github.io/Natour/",
  },
  {
    content:
      "A brochure page for hotel booking site, which use flex box on most of the layout.",
    url: "https://leon2486.github.io/trillo/",
  },
  {
    content:
      "A brochure page for real estate sales site, which use grid system for on of the layout.",
    url: "https://leon2486.github.io/Nexter/",
  },
  {
    content:
      "this project is inspired by rakuten kobo ebook online shop. Most of the function and templates of this project followed its design. Using react, redux, react-router and google auth to build the site",
    url: "https://determined-brown-d1a91d.netlify.app/",
  },
  {
    content:
      "A forum page for animate lover to share their thoughts. Using material UI, firebase, react and redux to build",
    url: "https://agitated-ride-94376e.netlify.app/",
  },
];

export default function AboutMe() {
  const workRef = useRef();
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowCard(true);
        }
      });
    };
    const cardObserver = new IntersectionObserver(callback, options);

    cardObserver.observe(workRef.current);
  }, []);

  return (
    <div className={style.portfolio} id="portfolio">
      <h2>My Portfolio</h2>
      <h3>PROJECT OF ONLINE COURSES</h3>
      <div className={style.works} ref={workRef}>
        <FlipCard
          title="Natour"
          content={aboutMeInfo[0].content}
          img={Natour}
          url={aboutMeInfo[0].url}
          show={showCard}
        />
        <FlipCard
          title="Trillo"
          content={aboutMeInfo[1].content}
          img={Trillo}
          url={aboutMeInfo[1].url}
          show={showCard}
        />
        <FlipCard
          title="Nexter"
          content={aboutMeInfo[2].content}
          img={Nexter}
          url={aboutMeInfo[2].url}
          show={showCard}
        />
      </div>
      <h3> PROJECT OF MY OWN </h3>
      <div className={style.myworks}>
        <FlipCard
          title="BOKO"
          content={aboutMeInfo[3].content}
          img={BOKO}
          url={aboutMeInfo[3].url}
          show={showCard}
        />
        <FlipCard
          title="Ani-mate"
          content={aboutMeInfo[4].content}
          img={Animate}
          url={aboutMeInfo[4].url}
          show={showCard}
        />
      </div>
    </div>
  );
}
