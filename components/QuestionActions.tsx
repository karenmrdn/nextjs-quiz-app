"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";

import { addNewAnswer } from "@/redux/features/answersSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { IAnswer, IQuestion, IQuiz } from "@/types";

import { Button } from "./ui/Button";
import {
  enableDefaultTheme,
  enableGradientTheme,
} from "@/redux/features/questionThemeSlice";

interface Props {
  question: IQuestion;
  quiz: IQuiz;
}

const QuestionActions: FC<Props> = ({ question, quiz }) => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const storedAnswers = useAppSelector((state) => state.answers.answers);

  // It must be possible to simplify this logic
  const handleAnswer = (answer: IAnswer) => {
    let currAnswer = answer;
    const prevQuestionId = quiz.questions[question.id].prevQuestionId;

    if (prevQuestionId) {
      let currAnswerId = storedAnswers[prevQuestionId as string];
      currAnswer = quiz.questions[prevQuestionId].answers[currAnswerId];
    } else {
      dispatch(addNewAnswer({ questionId: question.id, answerId: answer.id }));
    }

    let path = "/thank-you";

    if (currAnswer.nextQuestionId)
      path = `/questions/${currAnswer.nextQuestionId}`;

    if (storedAnswers[prevQuestionId as string])
      path = `/questions/${currAnswer.originalNextQuestionId}`;

    router.push(path);

    if (
      (!storedAnswers[prevQuestionId as string] &&
        currAnswer.nextQuestionId &&
        quiz.questions[currAnswer.nextQuestionId].isGradient) ||
      (storedAnswers[prevQuestionId as string] &&
        currAnswer.originalNextQuestionId &&
        quiz.questions[currAnswer.originalNextQuestionId].isGradient)
    ) {
      dispatch(enableGradientTheme());
    } else {
      dispatch(enableDefaultTheme());
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {Object.values(question.answers).map((answer) => {
        const isSelected = storedAnswers[question.id] === answer.id;

        return (
          <Button
            key={answer.text}
            name="answerId"
            variant={isSelected ? "active" : "default"}
            value={answer.id}
            onClick={() => handleAnswer(answer)}
          >
            {answer.text}
          </Button>
        );
      })}
    </div>
  );
};

export default QuestionActions;
