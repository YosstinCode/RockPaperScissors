import React, { useContext, useState } from "react";
import { scoreContext } from "../../context/ScoreContext";

const Score = () => {
  const {score} = useContext(scoreContext)

  return (
    <div>
      <span>Score</span>
      <span>{score}</span>
    </div>
  );
};

export default Score;
