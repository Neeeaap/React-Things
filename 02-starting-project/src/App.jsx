// Hooks
import { useState } from "react";

// Components
import PlayerList from "./components/Player/PlayerList.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import Log from "./components/Logs/Log.jsx";
import GameOver from "./components/GameOver/GameOver.jsx";

// Other
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function getActivePlayer(turns) {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") currentPlayer = "O";

  return currentPlayer;
}

function getWinner(gameBoard, players) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstGridSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondGridSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdGridSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstGridSymbol &&
      firstGridSymbol === secondGridSymbol &&
      firstGridSymbol === thirdGridSymbol
    ) {
      winner = players[firstGridSymbol];
    }
  }

  return winner;
}

function getGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_BOARD.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { grid, player } = turn;
    const { row, column } = grid;

    gameBoard[row][column] = player;
  }

  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurn, setTurn] = useState([]);

  let activePlayer = getActivePlayer(gameTurn);
  const gameBoard = getGameBoard(gameTurn);
  const winner = getWinner(gameBoard, players);
  const draw = gameTurn.length === 9 && !winner;

  function activePlayerHandler(rowIndex, columnIndex) {
    setTurn((prevTurns) => {
      const currentPlayer = getActivePlayer(prevTurns);
      const updatedTurns = [
        { grid: { row: rowIndex, column: columnIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function rematchHandler() {
    setTurn([]);
  }

  function nameChangeHandler(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <PlayerList
          playerTurn={activePlayer}
          onNameChange={nameChangeHandler}
          initialName={PLAYERS}
        />
        {(winner || draw) && (
          <GameOver winner={winner} onRematch={rematchHandler} />
        )}
        <GameBoard onGridSelect={activePlayerHandler} board={gameBoard} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
