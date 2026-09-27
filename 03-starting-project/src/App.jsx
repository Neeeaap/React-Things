// Hooks
import { useState } from "react";

// Components
import Header from "./components/Header/Header.jsx";
import UserInputFrame from "./components/InputFrame/UserInputFrame.jsx";
import Result from "./components/Result/Result.jsx";

// Other
const initialUserInput = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 5,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(initialUserInput);

  function inputHandler(newInput, identifier) {
    setUserInput((prevInput) => {
      console.debug("'" + newInput.target.value.trim() + "'");
      const updatedInput = {
        ...prevInput,
        [identifier]: Number(newInput.target.value.trim()),
      };
      return updatedInput;
    });
  }

  const isInputValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInputFrame
        input={userInput}
        onInputChange={(input, identifier) => inputHandler(input, identifier)}
      />
      {!isInputValid && (
        <p className="center">Please enter a duration of more than zero</p>
      )}
      {isInputValid && <Result input={userInput} />}
    </>
  );
}

export default App;
