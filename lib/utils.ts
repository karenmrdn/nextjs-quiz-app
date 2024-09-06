import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { IQuestion } from "@/types";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatQuestion = (
  question: IQuestion,
  storedAnswers: { [questionId: string]: string }
) => {
  if (question.isTemplate) {
    // Replace dynamic parameters in the title only if the condition is met
    question.title = question.title.replace(/{(.*?)}/g, (match, varName) => {
      const varData = question.vars ? question.vars[varName] : null;
      if (varData) {
        const { questionId, answerId, content } = varData;
        if (storedAnswers[questionId] === answerId) {
          return content || "";
        }
      }
      return ""; // Replace with an empty string if the condition is not met
    });
  }
  return question;
};
