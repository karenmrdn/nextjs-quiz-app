import { IQuestion, IQuiz } from "@/types";
import quiz from "@/static/quiz.json";

export const fetchQuiz = async (): Promise<IQuiz> => quiz;

export const fetchQuestion = async (id: string): Promise<IQuestion> =>
  (quiz as IQuiz).questions[id];
