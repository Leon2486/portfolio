import React, { useState } from "react";
import style from "./quiz.module.scss";

const questions = [
  {
    question: "Who is the president of taiwan now?",
    options: ["tsai in wen", "korea fish", "Leon", "Trump"],
    answer: 0,
  },
  {
    question: "Who is the the best candidate your company is looking for?",
    options: [
      "Elon Musk",
      "Mark Zuckerberg",
      "Leon (in case you don't know, it's me)",
      "Jeff Bezos",
    ],
    answer: 2,
  },
  {
    question: 'What does "Mc" of McDonald mean?',
    options: [
      "son of someone",
      "the host of an event",
      "the apple notebook",
      "the founder's name",
    ],
    answer: 0,
  },
  {
    question: "How many programmer do we need to screw in a light bulb?",
    options: ["1", "5", "100", "0"],
    answer: 3,
  },
  {
    question: "Is this site great?",
    options: ["fabulous", "gorgeous", "the best", "genius"],
    answer: 2,
  },
];

const explains = [
  "if you don't know the answer, shame on you.",
  "if I'm not your answer, it'll definitely be a great lost for your company.",
  "it's...what it is. you can google it yourself.",
  "because this is a hardware problem. (bad joke, I know)",
  "if your answer is another one, you're still right.",
];

export default function KnowMeWell() {
  const [start, setStart] = useState(false);
  const [quizNumber, setQuizNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplain, setShowExplain] = useState(false);
  const [clicked, setClicked] = useState(false);

  const renderExplain = () => {
    return explains.map((explain, index) => {
      return (
        <div className={style.textContainer} key={index}>
          <h3>{questions[index].question}</h3>
          <h4>{questions[index].options[questions[index].answer]}</h4>
          <p>{explain}</p>
        </div>
      );
    });
  };

  const renderContent = () => {
    if (showExplain) {
      return (
        <>
          <div className={style.explain}>{renderExplain()}</div>
          <button
            className={style.button}
            onClick={() => {
              setShowExplain(false);
              setScore(0);
              setQuizNumber(0);
            }}
          >
            try again
          </button>
        </>
      );
    } else if (quizNumber >= questions.length) {
      return (
        <>
          <h2>you scored {score}</h2>
          <button
            className={style.button}
            onClick={() => {
              setQuizNumber(0);
              setScore(0);
            }}
          >
            try again
          </button>
          <h3 onClick={() => setShowExplain(true)} className={style.seewhy}>
            see why
          </h3>
        </>
      );
    } else if (start) {
      const { question, options, answer } = questions[quizNumber];

      const renderOptions = () => {
        return options.map((option, index) => {
          return (
            <button
              className={`${style.button} ${
                clicked && index === answer && style.correct
              } ${clicked && index !== answer && style.wrong}`}
              onClick={() => {
                if (!clicked) {
                  setTimeout(() => {
                    setQuizNumber((current) => (current += 1));
                    setClicked(false);
                  }, 1000);
                  setClicked(true);
                  index === answer && setScore((current) => (current += 1));
                }
              }}
              key={index}
            >
              {option}
            </button>
          );
        });
      };

      return (
        <>
          <h2>{question}</h2>
          <div className={style.options}>{renderOptions()}</div>
        </>
      );
    } else {
      return (
        <>
          <h2>little quiz</h2>
          <p>
            maybe you felt boring to read those bullshit about myself, try to
            play some game and have fun
          </p>
          <button className={style.button} onClick={() => setStart(true)}>
            start
          </button>
        </>
      );
    }
  };

  return (
    <div className={style.container} id="quiz">
      {renderContent()}
    </div>
  );
}
