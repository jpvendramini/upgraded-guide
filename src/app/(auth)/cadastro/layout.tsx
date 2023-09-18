import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rinha Backend - Cadastro",
  description: "Some description for my website",
};

export default function RootLayout({ children }: any) {
  return (
    <div className="w-full z-0">
      <Image
        alt="Login wallpaper"
        src="/images/cadastro-wallpaper.png"
        layout="fill"
        className="object-cover"
      />
      <div className="w-full flex justify-center h-screen z-10 relative">
        <div className="flex items-center justify-center h-full w-2/6 bg-[#061127] opacity-90">
          {children}
        </div>
      </div>
    </div>
  );
}
