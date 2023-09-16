"use client";
import LoginLogo from "@components/atoms/LoginLogo/page";
import Image from "next/image";
import React from "react";

type Props = {
  form: React.ReactNode;
};

const LoginTemplate = ({ form }: Props) => {
  return (
    <div className="w-full z-0">
      <Image
        alt="Login wallpaper"
        src="/images/login-wallpaper.jpg"
        layout="fill"
        className="object-cover"
      />
      <div className="absolute z-10 top-12 left-12">
        <LoginLogo />
      </div>
      <div className="flex items-center justify-center absolute h-full w-2/6 right-0 bg-[#061127] opacity-90">
        {form}
      </div>
    </div>
  );
};

export default LoginTemplate;
