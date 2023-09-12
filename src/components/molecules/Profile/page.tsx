"use client";
import Image from "next/image";
import { signOut } from "next-auth/react";

export default function Profile() {
  return (
    <button type="button" onClick={() => signOut()}>
      <Image
        alt="profile image"
        src="icons/profile.svg"
        width={20}
        height={20}
      />
    </button>
  );
}
