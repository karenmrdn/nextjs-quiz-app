"use client";

import { ChevronLeft } from "lucide-react";

import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks";
import { QuestionTheme } from "@/types";

const BackButton = () => {
  const router = useRouter();

  const questionTheme = useAppSelector((state) => state.questionTheme.theme);
  const isGradient = questionTheme === QuestionTheme.GRADIENT;

  return (
    <Button variant="ghost" size="icon" onClick={() => router.back()}>
      <ChevronLeft size={32} color={isGradient ? "white" : "black"} />
    </Button>
  );
};

export default BackButton;
