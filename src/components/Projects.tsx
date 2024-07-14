import React from "react";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "UTime",
    desc: "Utime is a web application designed to simplify utility sharing between housemates. It offers a platform that facilitates better organization of utility schedules, users can reserve specific time slots for different areas and devices in the house. This enables house members to plan ahead and avoid unnecessary conflicts.",
    image: "/utime.png",
    githubLink: "https://github.com/IkePureza/shitimes",
    externalLink: "https://shitimes.vercel.app/",
    techStack: ["Typescript", "Nextjs", "Firebase", "TailwindCSS"],
  },
  {
    title: "Sokoban AI",
    desc: "AI of the game Sokoban using search strategies and heuristics with deadlock checking implemented in C. Uses A* search, USC algorithms and heuristic functions.",
    image: "/sokoban_6694.webp",
    githubLink: "https://github.com/IkePureza/sokoban-solver",
    techStack: ["C", "Search Algorithms", "Heuristics", "AI"],
  },
  {
    title: "E-commerce Website",
    desc: "Built a Fully Functional E-commerce website using MERN Stack. It allows clients to add products and users to add to cart, checkout and pay with paypal",
    image: "/ecommerce.png",
    githubLink: "https://github.com/IkePureza/EcommerceWebsite",
    techStack: ["Javascript", "Redux", "GraphQL", "TailwindCSS"],
    externalLink: "https://my-ecommerce-app00.herokuapp.com/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-4">
      <div className="py-16 md:py-28">
        <div className="flex items-center relative w-full">
          <p className="text-cyan-500 mb-4 mr-2">[2]</p>
          <h2 className="text-glitch text-2xl md:text-3xl">&lt;Projects&gt;</h2>
        </div>
        <div className="flex flex-col py-16 md:py-28 justify-center items-center">
          {projects &&
            projects.map((props, i) => (
              <div key={i} className="w-full max-w-4xl mb-8">
                <ProjectCard {...props}></ProjectCard>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
