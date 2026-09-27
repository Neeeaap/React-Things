import Player from "./Player.jsx";

export default function PlayerList({ playerTurn, onNameChange, initialName }) {
  return (
    <ol id="players" className="highlight-player">
      <Player
        name={initialName.X}
        symbol="X"
        isActive={playerTurn === "X"}
        changeName={onNameChange}
      />
      <Player
        name={initialName.O}
        symbol="O"
        isActive={playerTurn === "O"}
        changeName={onNameChange}
      />
    </ol>
  );
}
