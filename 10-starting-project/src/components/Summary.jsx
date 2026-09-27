import Questions from "../../Questions";

import completeIcon from "../assets/quiz-complete.png";
import SummaryField from "./SummaryField";

export default function Summary({ answers }) {
  const skippedAnswers = answers.filter((answer) => answer === null);
  const correctAnswers = answers.filter(
    (answer, index) => answer === Questions[index].answers[0],
  );

  const skippedPercentage = Math.round(
    (skippedAnswers.length / answers.length) * 100,
  );
  const correctPercentage = Math.round(
    (correctAnswers.length / answers.length) * 100,
  );
  const wrongPercentage = 100 - skippedPercentage - correctPercentage;

  return (
    <div id="summary">
      <img src={completeIcon} alt="Quiz completed" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <SummaryField label="skipped" value={`${skippedPercentage}%`} />
        <SummaryField
          label="answered correctly"
          value={`${correctPercentage}%`}
        />
        <SummaryField
          label="answered incorrectly"
          value={`${wrongPercentage}%`}
        />
      </div>
      <ol>
        {answers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === Questions[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{Questions[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
        ;
      </ol>
    </div>
  );
}
