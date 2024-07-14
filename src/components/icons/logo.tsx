import React from "react";
import Image from "next/image";

const IconLogo = () => (
  <div>
    <Image
      priority
      src="/logo_bigger.svg"
      height={50}
      width={50}
      alt="logo"
      className="max-w-none"
    />
  </div>
);

export default IconLogo;
