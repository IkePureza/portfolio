"use client";
import Link from "next/link";
import React from "react";
import IconLogo from "./icons/logo";
import { IconSecondBrain } from "./icons/secondBrain";
import { Button } from "./Button";
import ScrollLink from "./ScrollLink";

const Logo = (
  <div className="w-10 text-center" tabIndex={-1}>
    <Link href="/">
      <IconLogo></IconLogo>
    </Link>
  </div>
);

const navBarItems = [
  {
    name: "About",
    url: "/#about",
  },
  {
    name: "Experience",
    url: "/#experience",
  },
  {
    name: "Projects",
    url: "/#projects",
  },
  {
    name: "Contact",
    url: "#contact",
  },
];

export const NavBar = () => {
  return (
    <header className="flex justify-between items-center fixed top-0 z-[11] px-4 w-full h-24 filter-none pointer-events-auto select-auto backdrop-blur-md transition-all">
      <nav
        className="flex justify-between items-center relative w-full text-slate-300
       z-[12] counter-reset"
      >
        {Logo}
        <div className="flex items-center">
          <ol className="flex justify-between items-center p-0 m-0 list-none">
            <p className="text-cyan-500">[</p>
            {navBarItems &&
              navBarItems.map(({ url, name }, i) => (
                <li
                  className="mx-1 relative text-base counter-increment"
                  key={i}
                >
                  <ScrollLink
                    className="p-2 text-sm before:content-counter before:text-xxs before:align-text-top before:mr-2  before:text-cyan-300"
                    href={url}
                  >
                    {name} {i !== navBarItems.length - 1 && <>{","}</>}
                  </ScrollLink>
                </li>
              ))}
            <p className="text-cyan-500 mr-6">]</p>
            <Link href={"https://publish.obsidian.md/henrique/Why%3F"}>
              <IconSecondBrain></IconSecondBrain>
            </Link>

            <div className="p-3 ml-4">
              <Button href="/resume.docx"> Resume</Button>
            </div>
          </ol>
        </div>
      </nav>
    </header>
  );
};
