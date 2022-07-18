import OptionButton from "../../components/option_button/OptionButton";

import iconRock from "../../assets/images/icon-rock.svg";
import iconPaper from "../../assets/images/icon-paper.svg";
import iconScissors from "../../assets/images/icon-scissors.svg";
import { useContext } from "react";

import { gameContext } from "../../context/GameContext";
import OptionSelected from "../option_selection/OptionSelected";

import style from "./Main.module.css";

const ICONS = [iconRock, iconPaper, iconScissors];

const Main = () => {
  const { game, setGame } = useContext(gameContext);

  const handleClick = () => {
    setGame((prevState) => {
      return { ...prevState, playing: false };
    });
  };

  return (
    <main className={style.main}>
      {!game.playing ? (
        <div className={style.optionsContainer}>
          <span className={style.triangle} />
          <OptionButton className={style.optionPaper} src={iconPaper} value={1} />
          <OptionButton className={style.optionScissors} src={iconScissors} value={2} />
          <OptionButton className={style.optionRock} src={iconRock} value={0} />
        </div>
      ) : (
        <>
          <div className={style.optionsSelected}>
            <OptionSelected
              src={ICONS[game.option]}
              disabled={true}
              value={game.option}
              text="You Picked"
            />

            <OptionSelected
              src={ICONS[game.optionMachine]}
              disabled={true}
              value={game.optionMachine}
              text="The House Picked"
            />
          </div>
          <div className={style.winnerContainer}>
            {
              <span className={style.winnerText}>
                {game.winner !== "Draw"
                  ? `Winner is ${game.winner}!`
                  : "It's Draw!"}
              </span>
            }
            <button className={style.againButton}
            onClick={handleClick}>play again</button>
          </div>
        </>
      )}
    </main>
  );
};

export default Main;
