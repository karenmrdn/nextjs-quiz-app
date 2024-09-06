import { Open_Sans } from "next/font/google";

import { cn } from "@/lib";

import StoreProvider from "../redux/StoreProvider";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased min-h-screen", openSans.className)}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
