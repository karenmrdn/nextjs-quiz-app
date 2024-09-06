export interface IQuiz {
  questions: { [id: string]: IQuestion };
  firstQuestionId: string;
}

export interface IQuestion {
  id: string;
  title: string;
  isTemplate?: boolean;
  subtitle?: string;
  answers: { [id: string]: IAnswer };
  isGradient?: boolean;
  prevQuestionId?: string;
  vars?: Vars;
}

export interface IAnswer {
  id: string;
  text: string;
  nextQuestionId?: string;
  originalNextQuestionId?: string;
}

export interface Vars {
  [key: string]: {
    content: string;
    questionId: string;
    answerId: string;
  };
}
