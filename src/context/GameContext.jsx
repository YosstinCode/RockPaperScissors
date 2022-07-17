import { createContext, useState } from "react";

export const gameContext = createContext({
  option: null,
  optionMachine: null,
  playing: false,
});

export const GameProvider = ({ children }) => {
  const [game, setGame] = useState({
    option: null,
    optionMachine: null,
    playing: false,
  });

  return (
    <gameContext.Provider value={{ game, setGame }}>
      {children}
    </gameContext.Provider>
  );
};
