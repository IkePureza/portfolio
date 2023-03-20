import React from "react";
import IconGitHub from "./icons/github";
import Link from "next/link";
import IconExternal from "./icons/external";
import Image from "next/image";

export interface ProjectCardProps {
  image: string;
  title: string;
  desc: string;
  techStack: string[];
  githubLink: string;
  externalLink?: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div>
      <div className="p-6 card-glitch bg-blue-900 flex items-start border border-cyan-500">
        <Image
          src={props.image}
          alt="utime"
          width={200}
          height={0}
          className="w-full rounded-lg mr-4"
        />
        <div className="flex flex-col">
          <h3 className="vhs text-4xl mx-2 font-semibold tracking-tight text-white">
            {props.title}
          </h3>
          <p className="m-2 text-sm text-gray-200">{props.desc}</p>
        </div>
        <div className="mx-2">
          <h4 className="text-base font-semibold tracking-tight">
            Built With:
          </h4>
          <ul className="mt-4 grid p-0 overflow-hidden list-none">
            {props.techStack.map((tech, i) => (
              <li
                className="text-sm mb-2 before:content-['>'] before:text-xs before:align-middle before:mr-2 before:text-magenta"
                key={i}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-4 ">
          <Link href={props.githubLink} className="mb-5">
            <IconGitHub size="w-8 h-8"></IconGitHub>
          </Link>
          {props.externalLink && (
            <Link href={props.externalLink ?? ""} className="my-5">
              <IconExternal size="w-8 h-8"></IconExternal>
            </Link>
          )}
        </div>
      </div>
      <div className="lines"></div>
    </div>
  );
};
