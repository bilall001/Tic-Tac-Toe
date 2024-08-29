import { useState } from "react";
import Player from "./components/Player.jsx";
import Gameboard from "./components/Gameboard.jsx";
import Log from "./components/log.jsx";
import { WINNING_COMBINATIONS } from "./components/WC.js";
import GameOver from "./components/GameOver.jsx";

const initailGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];



function deriveActivePlayer(gameTurn){
  let activePlayer = "X";

  if (gameTurn.length > 0 && gameTurn[0].player == "X") {
    activePlayer = "O";
  }
  return activePlayer;
} 

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurn, setgameTurn] = useState([]);
  const [players, setplayers] = useState({
    X: "player 1",
    O: "player 2"
});

  const activePlayer = deriveActivePlayer(gameTurn);

  let gameBoard = [...initailGameBoard.map((array) => [...array])];
  for (const turn of gameTurn){
    
    const {square, player} = turn;
    const { row, col} = square;
    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS){
    const firstsquare = gameBoard[combination[0].row][combination[0].column];
    const secondsquare = gameBoard[combination[1].row][combination[1].column];
    const thirdsquare = gameBoard[combination[2].row][combination[2].column];
  
    if(firstsquare && firstsquare === secondsquare && firstsquare === thirdsquare){
      winner = players[firstsquare];
    }
  }

  const isdraw = gameTurn.length === 9 && !winner;


  function handleclicksquare(rowIndex, colIndex) {
    // setActivePlayer((isActive) => (isActive === "X" ? "O" : "X"));
    setgameTurn(prevTurn => {
      const currentPlayer = deriveActivePlayer(prevTurn);
      const newTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];

      return newTurn;
    });
  }

  function handlerestart(){
    setgameTurn([]);
  }

  function handlenewnamechange(symbol,newName){
    setplayers(prePlayers => {
      return (
        {...prePlayers,
          [symbol]: newName
        }
      )
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActivePlayer={activePlayer === "X"}
            onchangename={handlenewnamechange}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActivePlayer={activePlayer === "O"}
            onchangename={handlenewnamechange}
          />
        </ol>
        {(winner || isdraw) && <GameOver winner={winner} isRestart={handlerestart} />}
        <Gameboard
          isactivesquare={handleclicksquare}
          // activePlayerSymbol={activePlayer}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}
export default App;
