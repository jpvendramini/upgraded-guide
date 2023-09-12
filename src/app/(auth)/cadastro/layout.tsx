import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rinha Backend - Cadastro",
  description: "Some description for my website",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-4/5 p-3 h-screen bg-black">{children}</div>
      </body>
    </html>
  );
}
