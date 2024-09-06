"use client";

import { FC, PropsWithChildren } from "react";

import { useAppSelector } from "@/hooks";
import { QuestionTheme } from "@/types";
import { cn } from "@/lib";

const QuestionWrapper: FC<PropsWithChildren> = ({ children }) => {
  const questionTheme = useAppSelector((state) => state.questionTheme.theme);
  const isGradient = questionTheme === QuestionTheme.GRADIENT;

  return (
    <div
      className={cn(
        "max-w-[22rem] mx-auto text-secondary-foreground",
        isGradient && "text-popover"
      )}
    >
      {children}
    </div>
  );
};

export default QuestionWrapper;
