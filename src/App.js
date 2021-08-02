import React from "react";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Quiz from "./components/Quiz/Quiz";
import AboutMe from "./components/AboutMe/AboutMe";
import PuzzleNavigation from "./components/PuzzleNavigation/PuzzleNavigation";

export default function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <PuzzleNavigation />
      <Portfolio />
      <Quiz />
    </div>
  );
}
