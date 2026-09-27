import { useState, useCallback } from "react";

import Questions from "../../Questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [answers, setAnswers] = useState([]);

  const activeQuestionIndex = answers.length;

  const selectAnswerHandler = useCallback(function selectAnswerHandler(
    answerKey,
  ) {
    setAnswers((prevAnswers) => {
      return [...prevAnswers, answerKey];
    });
  }, []);

  const skipAnswerHandler = useCallback(
    () => selectAnswerHandler(null),
    [selectAnswerHandler],
  );

  const quizFinished = activeQuestionIndex === Questions.length;
  if (quizFinished) {
    return <Summary answers={answers} />;
  }

  const currentQuestion = Questions[activeQuestionIndex];
  return (
    <div id="quiz">
      <div id="question">
        <Question
          key={activeQuestionIndex}
          index={activeQuestionIndex}
          onSelectAnswer={selectAnswerHandler}
          onSkipAnswer={skipAnswerHandler}
        />
      </div>
    </div>
  );
}
