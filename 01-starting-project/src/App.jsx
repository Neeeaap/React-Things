// Components
import Header from "./components/Header/Header.jsx";
import GameMechanics from "./components/GameMechanic/GameMechanics.jsx";
import Factions from "./components/Factions/Factions.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <GameMechanics />
        <Factions />
      </main>
    </>
  );
}

export default App;
