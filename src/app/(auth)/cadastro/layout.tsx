import LoginLogo from "@components/atoms/LoginLogo/page";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Rinha Backend - Cadastro",
  description: "Some description for my website",
};

export default function RootLayout({ children }: any) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full z-0">
        <Image
          alt="Login wallpaper"
          src="/images/cadastro-wallpaper.png"
          layout="fill"
          className="object-cover"
        />
        <div className="w-full h-screen flex justify-center items-center z-10 relative">
          <div className="h-[25rem] flex flex-col items-center justify-center w-2/6 bg-[#061127] opacity-90 gap-6 py-6">
            <LoginLogo size="sm" />
            {children}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
