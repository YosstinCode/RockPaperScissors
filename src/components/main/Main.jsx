import OptionButton from "../../components/option_button/OptionButton";

import iconRock from "../../assets/images/icon-rock.svg";
import iconPaper from "../../assets/images/icon-paper.svg";
import iconScissors from "../../assets/images/icon-scissors.svg";
import { useContext, useState } from "react";

import { gameContext } from "../../context/GameContext";


const ICONS = [iconRock, iconPaper, iconScissors];

const Main = () => {

  const {game, setGame} = useContext(gameContext)

  const handleClick = ()=>{
    setGame(prevState => { return {...prevState, playing:false}})
  }

  return (
    <main>
      {  !game.playing ? (
        <>
          <OptionButton src={iconPaper} value={1} />
          <OptionButton src={iconScissors} value={2} />
          <OptionButton src={iconRock} value={0} />
        </>
      ) : (
        <>
          <OptionButton
            src={ICONS[game.option]}
            disabled={true}
          />
          <button onClick={handleClick}>play again</button>
          <OptionButton
            src={ICONS[game.optionMachine]}
            disabled={true}
          />
        </>
        )
      }
    </main>
  );
};

export default Main;
