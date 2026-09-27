import { GAME_MECHANICS } from "./GameMechanics";
import GameMechanic from "./GameMechanic.jsx";

export default function GameMechanics() {
  return (
    <section id="game-mechanics">
      <h2>GAME MECHANICS</h2>
      <ul>
        {GAME_MECHANICS.map((mechanic) => (
          <GameMechanic key={mechanic.id} {...mechanic} />
        ))}
      </ul>
    </section>
  );
}
