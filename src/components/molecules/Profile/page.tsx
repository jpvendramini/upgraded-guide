"use client";
import Image from "next/image";
import { signOut } from "next-auth/react";

async function keycloakSessionLogOut() {
  try {
    await fetch(`/api/auth/logout`, { method: "GET" });
  } catch (err) {
    console.error(err);
  }
}

export default function Profile() {
  return (
    <button
      type="button"
      onClick={() => {
        keycloakSessionLogOut().then(() => signOut({ callbackUrl: "/" }));
      }}
    >
    {/* TODO: adicionar ícone de profile e opções do menu */}
      <p className="font-sans font-bold text-white text-2xl">Sair</p>
    </button>
  );
}
