"use client";
import CadastrarButton from "@components/atoms/CadastrarButton/page";
import LoginButton from "@components/atoms/LoginButton/page";
import Image from "next/image";
import React from "react";

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center gap-12">
      <Image
        alt="rinha title"
        src={"/images/rinha-title.svg"}
        width={350}
        height={60}
      />
      <div className="flex flex-col items-center gap-20">
        <div className="max-w-[20.125rem]">
          <p className="font-sans font-bold text-white text-lg">
            Bem vindo à rinha de backend!
          </p>
          <p className="font-sans text-white text-lg">
            Faça o login abaixo para continuar ou se cadastre para poder
            participar da competição.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
