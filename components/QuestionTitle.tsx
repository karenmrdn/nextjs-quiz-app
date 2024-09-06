"use client";

import { FC } from "react";

import { useAppSelector } from "@/hooks";
import { cn, formatQuestion } from "@/lib";
import { IQuestion } from "@/types";

interface Props {
  question: IQuestion;
}

const QuestionTitle: FC<Props> = ({ question }) => {
  const storedAnswers = useAppSelector((state) => state.answers.answers);

  const questionFormatted = formatQuestion(question, storedAnswers);

  return (
    <h1
      className={cn(
        "font-bold",
        question.subtitle ? "mb-4" : "mb-6",
        question.isGradient && "text-center"
      )}
    >
      {questionFormatted.title}
    </h1>
  );
};

export default QuestionTitle;
