import React from "react";
import Image from "next/image";

const IconLogo = () => (
  <div>
    <Image
      priority
      src="/logo.svg"
      height={100}
      width={100}
      alt="logo"
      className="max-w-none"
    />
  </div>
);

export default IconLogo;
