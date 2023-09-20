import Image from "next/image";
import React from "react";

type Props = {
  size?: "sm" | "lg";
};

const LoginLogo: React.FC<Props> = ({ size }) => {
  const logoSizes = {
    lg: { width: 242, height: 90 },
    sm: { width: 100, height: 30 },
  };
  return (
    <Image
      alt="profile image"
      src={"icons/logo-login.svg"}
      width={logoSizes[size || "lg"].width}
      height={logoSizes[size || "lg"].height}
    />
  );
};

export default LoginLogo;
