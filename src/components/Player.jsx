import { useState } from "react";

function Player({ initialName, symbol,isActivePlayer , onchangename}) {
  const [isEditing, setisEditing] = useState(false);
  const [playerName, setplayerName] = useState(initialName);

  function handleEditClick() {
    setisEditing((editing) => !editing);

    if(isEditing){
      onchangename(symbol,playerName)
    }
  }
  function handleNameChange(event) {
    setplayerName(event.target.value);
  }

  let FullPlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    FullPlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleNameChange}
      />
    ); /*two-way-binding*/
  }
  return (
    <li className={isActivePlayer ? "active" : undefined}>
      <span className="player">
        {FullPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
