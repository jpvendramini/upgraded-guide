"use client";
import React from "react";
import { signIn } from "next-auth/react";

const LoginButton = () =>
    <button
        className="bg-gradient-to-r from-[#FF3D00] to-[#00A3FF] w-[13.25rem] h-12 rounded-3xl flex items-center justify-center"
        onClick={() => signIn("keycloak")}>
            <p className="font-sans font-bold text-base text-white">Login</p>
    </button>;
export default LoginButton;
