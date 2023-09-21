import Image from "next/image";
import Link from "next/link";
import React from "react";
import { contributors } from "./contributors";

const Contributors = () => {
  return (
    <div className="grid grid-cols-2 w-full font-sans gap-8">
      <Link
        href="/dashboard"
        className="fixed top-10 left-10 text-white flex gap-2 font-bold justify-center items-center"
      >
        <Image
          alt="profile image"
          src="icons/chevron-left.svg"
          width={8}
          height={8}
        />
        Voltar
      </Link>
      {contributors.map((contributor) => (
        <div className="flex gap-4 items-center grayscale hover:grayscale-0 transition-all duration-300">
          {contributor.photo && (
            <div
              className="w-[3rem] h-[3rem] rounded-full overflow-hidden relative"
              style={{
                objectFit: "cover",
              }}
            >
              <Image
                alt=""
                src={contributor.photo}
                fill
                className="object-cover"
              />
            </div>
          )}
          {!contributor.photo && (
            <div className="rounded-full bg-[#D9D9D9] w-[3rem] h-[3rem] flex items-center justify-center font-bold">
              {contributor.name.substring(0, 2)}
            </div>
          )}
          <div className="flex flex-col text-white max-w-[12rem] gap-1">
            <Link
              href={contributor.linkedin || contributor.github}
              target="_blank"
            >
              <h2 className="font-bold">{contributor.name}</h2>
            </Link>
            <p className="text-sm capitalize">{contributor.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contributors;
