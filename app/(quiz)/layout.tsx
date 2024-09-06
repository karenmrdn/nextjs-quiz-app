"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import logoBlack from "@/assets/logo-black.png";
import logoWhite from "@/assets/logo-white.png";
import BackButton from "@/components/BackButton";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { QuestionTheme } from "@/types";
import { cn } from "@/lib";
import { enableDefaultTheme } from "@/redux/features/questionThemeSlice";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const questionTheme = useAppSelector((state) => state.questionTheme.theme);
  const isGradient = questionTheme === QuestionTheme.GRADIENT;

  const handleLogoClick = () => {
    dispatch(enableDefaultTheme());
    router.push("/");
  };

  return (
    <div
      className={cn(
        "min-h-screen",
        isGradient ? "bg-main-gradient" : "bg-background"
      )}
    >
      <header className="flex relative px-3 py-2 mb-3">
        <BackButton />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src={isGradient ? logoWhite : logoBlack}
            alt="Quiz app"
            width={24}
            height={24}
            onClick={handleLogoClick}
            className="hover:cursor-pointer"
          />
        </div>
      </header>

      <main className="px-3">{children}</main>
    </div>
  );
}
