import React from 'react'
const initailBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
function Gameboard() {
  return (
    <ol id='game-board'>
        {initailBoard.map((row,rowindex)=> <li key={rowindex}>
            <ol>{initailBoard.map((col,colindex)=><li><button></button></li>)}</ol>
            </li>)}
    </ol>
  )
}

export default Gameboard