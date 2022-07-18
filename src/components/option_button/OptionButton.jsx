import { useContext } from "react";
import { gameContext } from "../../context/GameContext";
import { scoreContext } from "../../context/ScoreContext";
import { play } from "../../services/Play";

import style from "./OptionButton.module.css"

const OptionButton = ({ src, value, disabled}) => {

  const {score, setScore} = useContext(scoreContext)
  const {game, setGame} = useContext(gameContext)


  const handleClick = () => {
    
    if(disabled) return

    const {winner, optionMachine} = play(value)
    
    setGame(prevState => { return {...prevState, option:value, optionMachine, playing:true, winner}})

    if(winner === "Player") setScore( (prevState) => prevState + 1)
    if(winner === "Machine") setScore( (prevState) => score ? prevState - 1 : 0 )
  

  };
  
  return (
    <button className={style.optionButton} onClick={handleClick} data-option={value===0?"Rock":value===1?"Paper":"Scissors"}>
      <img className={style.optionImg} src={src} alt={value} />
    </button>
  );
};

export default OptionButton;
