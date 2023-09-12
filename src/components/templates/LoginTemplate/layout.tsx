"use client";
import Image from "next/image";
import React from "react";

type Props = {
  form: React.ReactNode;
};

const LoginTemplate = ({ form }: Props) => {
  return (
    <div className="w-full">
      <Image
        alt="Login wallpaper"
        src="/images/login-wallpaper.jpg"
        layout="fill"
        className="object-cover"
      />
      <div className="flex items-center justify-center absolute h-full w-2/6 right-0 bg-[#061127] opacity-90">
        {form}
      </div>
    </div>
  );
};

export default LoginTemplate;
