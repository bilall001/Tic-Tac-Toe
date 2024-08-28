import { useState } from "react";
import Player from "./components/Player.jsx";
import Gameboard from "./components/Gameboard.jsx";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurn, setgameTurn] = useState([]);
  
  function handleclicksquare(rowIndex, colIndex) {
   
    setActivePlayer((isActive) => (isActive === "X" ? "O" : "X"));
    setgameTurn(prevTurn => {
      let currentPlayer = "X";

      if (prevTurn.length > 0 && prevTurn[0].player == "X") {
        currentPlayer = "O";
      }
      const newTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];

      return newTurn;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActivePlayer={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActivePlayer={activePlayer === "O"}
          />
        </ol>
        <Gameboard
          isactivesquare={handleclicksquare}
          activePlayerSymbol={activePlayer}
          turns={gameTurn}
        />
      </div>
    </main>
  );
}
export default App;
