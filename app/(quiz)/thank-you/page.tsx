"use client";

import { useAppSelector } from "@/hooks";

const ThankYouPage = () => {
  const answers = useAppSelector((state) => state.answers.answers);

  return (
    <div className="flex flex-col justify-center align-center text-center">
      <h1 className="mb-3">Thank you for your time!</h1>
      <h2 className="mb-2">Here are your answers. Good luck figuring it out</h2>
      <div>
        {Object.entries(answers).map(([questionId, answerId]) => (
          <p key={questionId}>
            {questionId}: {answerId}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ThankYouPage;
