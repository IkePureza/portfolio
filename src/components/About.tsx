import React from "react";
import { Button } from "./Button";

export const About = () => {
  const skills = ["TypeScript", "Node.js", "React", "Terraform", "AWS"];
  return (
    <div className="max-w-4xl py-28" id="about">
      <div className="flex items-center relative w-full">
        <p className="text-cyan-500 mb-4 mr-2">[0]</p>
        <h2 className="text-glitch text-3xl ">&lt;AboutMe&gt;</h2>
      </div>
      <div className="flex">
        <div className="block bg-cyan-400 w-px ml-8"></div>
        <div className="ml-4 mt-2 flex flex-col">
          <p className="mb-4">Hey&#128075;</p>
          <p className="mb-4">
            Welcome to my portfolio! I'm Henrique, formerly a computer and
            software systems student at the University of Melbourne. Currently a
            full stack software engineer at Secure Code Warrior.
          </p>

          <p className="mb-4">
            I've been thinking a lot about AI recently and it&apos;s
            applications. Check out my second brain where I&apos;m learning in
            public!
          </p>

          <Button href="https://publish.obsidian.md/pureza-digital-garden/Welcome+to+my+Digital+Garden">
            Second Brain
          </Button>

          <p className="my-4">What I&apos;m currently working with:</p>
          <ul className="grid grid-cols-2 gap-y-3 p-0 ml-5 overflow-hidden list-none">
            {skills &&
              skills.map((skill, i) => (
                <li
                  className="relative mb-2 pl-5 before:content-['>'] before:text-xs before:align-middle before:mr-2 before:text-cyan-500"
                  key={i}
                >
                  {skill}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
