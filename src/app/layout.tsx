"use client";
import SessionProviderWrapper from "@/components/utils/SessionProviderWraper";
import Providers from "@providers/QueryClientProvider";
import "@styles/global.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: any) {
  return (
    <SessionProviderWrapper>
      <html lang="en">
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </SessionProviderWrapper>
  );
}

const AuthFlow = () => { };
