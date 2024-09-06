import { FC } from "react";

import { IQuestion, IQuiz } from "@/types";
import { cn } from "@/lib";

import QuestionActions from "./QuestionActions";
import QuestionWrapper from "./QuestionWrapper";
import QuestionTitle from "./QuestionTitle";

interface IProps {
  question: IQuestion;
  quiz: IQuiz;
}

const Question: FC<IProps> = ({ question, quiz }) => {
  return (
    <QuestionWrapper>
      <QuestionTitle question={question} />
      {question.subtitle && (
        <h2
          className={cn(
            "text-[0.7rem] mb-8",
            question.isGradient && "text-center"
          )}
        >
          {question.subtitle}
        </h2>
      )}

      <QuestionActions question={question} quiz={quiz} />
    </QuestionWrapper>
  );
};

export default Question;
