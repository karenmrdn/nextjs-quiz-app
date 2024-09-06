import { fetchQuiz } from "@/lib";
import { redirect } from "next/navigation";

const Home = async () => {
  const quiz = await fetchQuiz();

  redirect(`/questions/${quiz.firstQuestionId}`);
};

export default Home;
