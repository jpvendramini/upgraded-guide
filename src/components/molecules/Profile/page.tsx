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
      <Image
        alt="profile image"
        src="icons/profile.svg"
        width={20}
        height={20}
      />
    </button>
  );
}
