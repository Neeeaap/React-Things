import { useState } from "react";

export default function Player({ name, symbol, isActive, changeName }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function editHandler() {
    setIsEditing(() => !isEditing);
    if (isEditing) changeName(symbol, playerName);
  }

  function nameChangeHandler(change) {
    setPlayerName(change.target.value);
  }

  let playerField = <span className="player-name">{playerName}</span>;
  if (isEditing)
    playerField = (
      <input
        type="text"
        required
        value={playerName}
        onChange={nameChangeHandler}
      />
    );

  return (
    <li className={isActive ? "active" : "inactive"}>
      <span className="player">
        {playerField}
        <span className="player-symbol">{symbol}</span>
        <button onClick={editHandler}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
