"use client";
import { signIn } from "next-auth/react";
import React from "react";

const LoginForm = () => {
  return (
    <div className="flex flex-col">
      LoginForm
      <button className="bg-white" onClick={() => signIn("keycloak")}>
        Sign in
      </button>
    </div>
  );
};

export default LoginForm;
