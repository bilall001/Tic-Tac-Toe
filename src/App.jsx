import { useState } from "react"
import Player from "./components/Player.jsx"
import Gameboard from "./components/Gameboard.jsx"
function App() {
  const [activePlayer,setActivePlayer] = useState('X');

  function handleclicksquare(){
    setActivePlayer((isActive) => isActive === 'X' ? 'O': 'X');
  }
  return (
    <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActivePlayer={activePlayer === 'X'} />
        <Player initialName="Player 2" symbol="O" isActivePlayer={activePlayer === 'O'}  />
      </ol>
      <Gameboard  isactivesquare={handleclicksquare} activePlayerSymbol={activePlayer}/>
    </div>
    </main>
  )
}
export default App