import React from "react";
import { Side } from "./Side";
import Link from "next/link";
import Icon from "./icons/icon";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/ikepureza",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/henrique-pureza-13867b169/",
  },
  {
    name: "SecondBrain",
    url: "https://publish.obsidian.md/pureza-digital-garden/Welcome+to+my+Digital+Garden",
  },
];

export const Social = () => {
  return (
    <Side orientation="left">
      <div className="flex flex-col items-center m-0 p-0 list-none after:block after:w-1 after:h-24 after:mx-auto after:my-0 after:bg-glitch">
        {socials.map(({ url, name }, i) => (
          <li key={i}>
            <Link
              className="p-2"
              href={url}
              aria-label={name}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name={name} />
            </Link>
          </li>
        ))}
      </div>
    </Side>
  );
};
