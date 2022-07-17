import { useContext } from "react";
import { gameContext } from "../../context/GameContext";
import { scoreContext } from "../../context/ScoreContext";
import { play } from "../../services/Play";

const OptionButton = ({ src, value, disabled}) => {

  const {score, setScore} = useContext(scoreContext)
  const {game, setGame} = useContext(gameContext)


  const handleClick = () => {
    
    if(disabled) return

    const {winner, optionMachine} = play(value)
    
    setGame(prevState => { return {...prevState, option:value, optionMachine, playing:true}})

    if(winner === "Player") setScore( (prevState) => prevState + 1)
    if(winner === "Machine") setScore( (prevState) => score ? prevState - 1 : 0 )
  

  };
  
  return (
    <button onClick={handleClick}>
      <img src={src} alt={value} />
    </button>
  );
};

export default OptionButton;
