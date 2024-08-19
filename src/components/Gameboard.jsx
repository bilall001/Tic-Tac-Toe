import { useState } from "react";
const initailGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function Gameboard({ isactivesquare,activePlayerSymbol }) {
  const [gameBoard, setgameBoard] = useState(initailGameBoard);

  function handleSymbolchange(rowIndex, colIndex) {
    setgameBoard((previoussymbol) => {
      const updatedGameBoard = [
        ...previoussymbol.map((innerarray) => [...innerarray]),
      ];
      updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedGameBoard;
    });

    isactivesquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSymbolchange(rowIndex, colIndex)}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default Gameboard;
