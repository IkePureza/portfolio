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
            My name is Henrique and I love using technology to solve problems.
            I&apos;m currently a computer and software systems student at the
            Univeristy of Melbourne and an associate engineer at Sidekicker.
          </p>

          <p className="mb-4">
            I have attained a few years of experience while studying my degree,
            which enabled me to hone my engineering skills and apply the theory
            I learned at university. I&apos;ve had the privilege of working at a
            software agency and two startups.
          </p>

          <p className="mb-4">
            Currently I&apos;m learning about Artificial Intelligence and
            it&apos;s applications. Check out my second brain where I&apos;m
            learning in public!
          </p>

          <Button href="https://publish.obsidian.md/henrique/Why%3F">
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
