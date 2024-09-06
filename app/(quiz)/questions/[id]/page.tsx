import Question from "@/components/Question";
import { fetchQuestion, fetchQuiz } from "@/lib";

export async function generateStaticParams() {
  const quiz = await fetchQuiz();
  return Object.keys(quiz.questions).map((questionId) => ({ id: questionId }));
}

const QuestionPage = async ({ params }: { params: { id: string } }) => {
  const [quiz, question] = await Promise.all([
    fetchQuiz(),
    fetchQuestion(params.id),
  ]);

  return <Question question={question} quiz={quiz} />;
};

export default QuestionPage;
