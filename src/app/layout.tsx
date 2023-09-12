"use client";
import "@styles/global.css";
import SessionProviderWrapper from "@/components/utils/SessionProviderWraper";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rinha Backend - Rank",
  description: "Some description for my website",
};

export default function RootLayout({ children }: any) {
  return (
    <SessionProviderWrapper>
      <html lang="en">
        <body className={inter.className}>
          <div>{children}</div>
        </body>
      </html>
    </SessionProviderWrapper>
  );
}

const AuthFlow = () => {};
