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
      <div className="p-4 md:p-6 card-glitch bg-blue-900 flex flex-col md:flex-row items-start border border-cyan-500">
        <Image
          src={props.image}
          alt={props.title}
          width={200}
          height={0}
          className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-4"
        />
        <div className="flex flex-col flex-grow">
          <h3 className="vhs text-2xl md:text-4xl mx-2 font-semibold tracking-tight text-white mb-2">
            {props.title}
          </h3>
          <p className="m-2 text-sm text-gray-200 mb-4">{props.desc}</p>
          <div className="flex flex-wrap justify-between items-start">
            <div className="mx-2 mb-4 md:mb-0">
              <h4 className="text-base font-semibold tracking-tight">
                Built With:
              </h4>
              <ul className="mt-2 grid grid-cols-2 gap-2 p-0 overflow-hidden list-none">
                {props.techStack.map((tech, i) => (
                  <li
                    className="text-xs md:text-sm before:content-['>'] before:text-xs before:align-middle before:mr-2 before:text-magenta"
                    key={i}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-4">
              <Link href={props.githubLink}>
                <IconGitHub size="w-6 h-6 md:w-8 md:h-8"></IconGitHub>
              </Link>
              {props.externalLink && (
                <Link href={props.externalLink}>
                  <IconExternal size="w-6 h-6 md:w-8 md:h-8"></IconExternal>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="lines"></div>
    </div>
  );
};
