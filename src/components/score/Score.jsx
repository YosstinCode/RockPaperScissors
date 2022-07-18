import { useContext } from "react";
import { scoreContext } from "../../context/ScoreContext";
import style from "./Score.module.css"

const Score = () => {
  const {score} = useContext(scoreContext)

  return (
    <div className={style.score}>
      <span className={style.scoreText}>Score</span>
      <span className={style.scoreCount}>{score}</span>
    </div>
  );
};

export default Score;
