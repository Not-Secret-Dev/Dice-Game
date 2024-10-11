import Gameplay from "./Components/Gameplay/Gameplay";
import StartGame from "./Components/StartGame/StartGame";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const startGame = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      {isGameStarted ? <Gameplay /> : <StartGame toggle={startGame} />}
    </>
  );
}

export default App;
