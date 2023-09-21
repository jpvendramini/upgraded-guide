"use client"
import SessionProviderWrapper from "@/components/utils/SessionProviderWraper";
import PoolContextProvider from "@contexts/PoolContext";
import Providers from "@providers/QueryClientProvider";
import "@styles/global.css";
import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: any) {
  return (
    <PoolContextProvider>
      <SessionProviderWrapper>
        <html lang="en">
          <body className={inter.className}>
            <Providers>
              {children}
            </Providers>
          </body>
        </html>
      </SessionProviderWrapper>
    </PoolContextProvider>
  );
}

const AuthFlow = () => { };
