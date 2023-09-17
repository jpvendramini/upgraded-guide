import Image from "next/image";
import React from "react";

const LoginLogo = () => {
    return (
        <Image
            alt="profile image"
            src={"icons/logo-login.svg"}
            width={242}
            height={90} />
    );
};

export default LoginLogo;
