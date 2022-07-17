import { useState } from "react";
import "./App.css";
import Home from "../pages/Home";
import Layout from "../pages/Layout/Layout";
import { RulesProvider } from "../context/RulesContext";
import { ScoreProvider } from "../context/ScoreContext";
import { GameProvider } from "../context/GameContext";

function App() {
  return (
    <GameProvider>
      <RulesProvider>
        <ScoreProvider>
          <Layout>
            <Home />
          </Layout>
        </ScoreProvider>
      </RulesProvider>
    </GameProvider>
  );
}

export default App;
