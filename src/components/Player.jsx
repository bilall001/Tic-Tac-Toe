import { useState } from "react";

function Player({ name, symbol }) {
  const [isEditing, setisEditing] = useState(false);

  function handleEditClick() {
    setisEditing((editing) => !editing);
  }
  let PlayerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    PlayerName = <input type="text" required value={name} />;
  }
  return (
    <li>
      <span className="player">
        {PlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
