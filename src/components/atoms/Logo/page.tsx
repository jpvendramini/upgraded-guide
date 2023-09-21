import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="https://muralis.com.br/" target="_blank">
      <Image alt="profile image" src="logos/logo.svg" width={100} height={40} />
    </Link>
  );
};

export default Logo;
