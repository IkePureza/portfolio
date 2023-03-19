import React from "react";
import { Side } from "./Side";
import Link from "next/link";

export const Email = () => {
  return (
    <Side orientation="right">
      <div className="flex flex-col items-center relative after:block after:w-1 after:h-24 after:mx-auto after:my-0 after:bg-glitch">
        <Link
          className="mx-5 my-auto p-3 text-xs [writing-mode:vertical-rl]"
          href={"mailto:henriquepureza13@gmail.com"}
        >
          henriquepureza13@gmail.com
        </Link>
      </div>
    </Side>
  );
};
