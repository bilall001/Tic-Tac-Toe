

function GameOver({winner,isRestart}) {
  return (
    <div id="game-over">
        <h2>GameOver</h2>
        { winner && <p>{winner} WON!</p>}
        { !winner && <p>Its a DRAW!</p>}
        <button onClick={isRestart}>
            Rematch
        </button>
    </div>
  )
}

export default GameOver