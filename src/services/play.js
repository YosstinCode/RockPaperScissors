import { useContext } from "react";

export const play = (option) => {

  
  const WINNERS = ["Player", "Machine", "Draw"]
  
  const LIST_OF_DECISIONS = [
    2, 0, 1,
    1, 2, 0,
    0, 1, 2
  ];
  
  const optionMachine = Math.floor(Math.random() * 3);

  const winner = WINNERS[LIST_OF_DECISIONS[option + optionMachine * 3]]

  return {
    winner,
    optionMachine
  }

};
