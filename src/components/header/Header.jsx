import React from "react";
import Score from "../score/Score";

const Header = () => {
  return (
    <header>
      <h1>
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </h1>
      <Score />
    </header>
  );
};

export default Header;
