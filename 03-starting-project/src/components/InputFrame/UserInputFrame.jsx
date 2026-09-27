import Input from "./Input.jsx";

export default function UserInputFrame({ onInputChange, input }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          inputLabel="Initial Investment"
          initialValue={input.initialInvestment}
          onInput={(inputChange) =>
            onInputChange(inputChange, "initialInvestment")
          }
        />
        <Input
          inputLabel="Annual Investment"
          initialValue={input.annualInvestment}
          onInput={(inputChange) =>
            onInputChange(inputChange, "annualInvestment")
          }
        />
      </div>
      <div className="input-group">
        <Input
          inputLabel="Expected Return"
          initialValue={input.expectedReturn}
          onInput={(inputChange) =>
            onInputChange(inputChange, "expectedReturn")
          }
        />
        <Input
          inputLabel="Duration"
          initialValue={input.duration}
          onInput={(inputChange) => onInputChange(inputChange, "duration")}
        />
      </div>
    </section>
  );
}
